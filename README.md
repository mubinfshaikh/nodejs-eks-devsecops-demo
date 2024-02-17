# Cartoon-App


Use "terraform init" command to initialize terraform modules and providers   
To check everything is working properly use terraform plan with passing below variables

terraform plan -var "aws_access_key=add_aws_access_key_here" -var "aws_secret_key=add_aws_secret_key_here" -var "aws_region=ap-south-1" -var "keyPath=.keys/add_private_key_here"

terraform apply -var "aws_access_key=add_aws_access_key_here" -var "aws_secret_key=add_aws_secret_key_here" -var "aws_region=ap-south-1"  -var "keyPath=.keys/add_private_key_here"

terraform destroy -var "aws_access_key=add_aws_access_key_here" -var "aws_secret_key=add_aws_secret_key_here" -var "aws_region=ap-south-1" -var "keyPath=.keys/add_private_key_here"
