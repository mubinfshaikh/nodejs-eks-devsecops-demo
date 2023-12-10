resource "aws_instance" "web" {
  ami                    = var.imageid
  instance_type          = var.instanceType
  key_name               = var.key_name
  vpc_security_group_ids = [aws_security_group.Jenkins-sg.id]
  #user_data              = templatefile("./install.sh", {})

  tags = {
    Name = "${var.instanceName}"
  }

  root_block_device {
    volume_size = 30
  }

  provisioner "remote-exec" {
    inline = [
      "sudo apt update -y"
    ]
  }  
    connection {
      host        = aws_instance.web.public_ip
      type        = "ssh"
      user        = "ubuntu"
      private_key = file(var.keyPath)
      timeout     = "60s"
    }
	
   provisioner "local-exec" {
    command = "echo ${aws_instance.web.public_ip} > inventory"
  }

  provisioner "local-exec" {
    command = "ansible-playbook main.yml -e 'keyPath=${var.keyPath}'"
  }
 }

resource "aws_security_group" "Jenkins-sg" {
  name        = "Jenkins-sg"
  description = "Allow TLS inbound traffic"

  ingress = [
    for port in [22, 80, 443, 8080, 9000, 3000] : {
      description      = "inbound rules"
      from_port        = port
      to_port          = port
      protocol         = "tcp"
      cidr_blocks      = ["0.0.0.0/0"]
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      security_groups  = []
      self             = false
    }
  ]

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "jenkins-sg"
  }
}
