variable "imageid" {
  default = "ami-0287a05f0ef0e9d9a"
}

variable "instanceName" {
  default = "Jenkins-sonarqube-trivy"
}

variable "instanceType" {
  default = "t2.large"
}

variable "keyPath" {
   default = ".keys/mubin.pem"
}

variable "key_name" {
  default = "mubin"
}

