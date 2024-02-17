# Cartoon-App
Project Description:

This GitHub project showcases a comprehensive DevOps pipeline for deploying a Node.js application on Kubernetes using a variety of powerful tools. The project leverages Terraform for provisioning an EKS cluster, ensuring a scalable and reliable infrastructure. Ansible is utilized to automate the installation of essential packages such as Helm, Jenkins, Trivy, and kubectl, streamlining the setup process.

The pipeline is orchestrated by Jenkins, which is configured through a Jenkinsfile. This file includes integration with SonarQube for code scanning and Trivy for vulnerability scanning, enabling early detection of security issues in the Node.js application. The pipeline also includes Docker integration, allowing the Node.js app to be containerized using a Dockerfile and pushed to DockerHub. Additionally, the pipeline can be customized to store the Docker image in other artifact managers like ECR or JFrog.

To ensure a smooth deployment process, the project utilizes Kubernetes for container orchestration. The deployment is managed by Argo CD, which provides a declarative and GitOps approach to managing Kubernetes applications. This ensures that the application is deployed consistently and reliably across different environments.

By showcasing the integration of these powerful tools, this project provides a comprehensive example of a modern DevOps pipeline for deploying a Node.js application on Kubernetes. It demonstrates best practices for infrastructure provisioning, code scanning, vulnerability scanning, containerization, and deployment management. This project serves as a valuable resource for developers and DevOps engineers looking to implement similar pipelines in their own projects.

---------------------------------------------------------------------------------------------------------------------

Use "terraform init" command to initialize terraform modules and providers   
To check everything is working properly use terraform plan with passing below variables

terraform plan -var "aws_access_key=add_aws_access_key_here" -var "aws_secret_key=add_aws_secret_key_here" -var "aws_region=ap-south-1" -var "keyPath=.keys/add_private_key_here"

terraform apply -var "aws_access_key=add_aws_access_key_here" -var "aws_secret_key=add_aws_secret_key_here" -var "aws_region=ap-south-1"  -var "keyPath=.keys/add_private_key_here"

terraform destroy -var "aws_access_key=add_aws_access_key_here" -var "aws_secret_key=add_aws_secret_key_here" -var "aws_region=ap-south-1" -var "keyPath=.keys/add_private_key_here"
