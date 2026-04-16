const phase5 = {
  title: "Phase 5 - Infrastructure as Code and Cloud",

  sections: [
    {
      heading: "Introduction to Infrastructure as Code (IaC)",
      content:
        "Infrastructure as Code is the practice of managing and provisioning infrastructure using code instead of manual processes. It allows you to define servers, networks, and resources in a structured and automated way.",
      example:
        "Instead of manually creating a server in AWS, you write a configuration file that creates it automatically."
    },

    {
      heading: "Why Infrastructure as Code is Important",
      content:
        "IaC improves consistency, reduces manual errors, and allows infrastructure to be version-controlled and reused.",
      example:
        "You can recreate the same environment multiple times using the same configuration file."
    },

    {
      heading: "Introduction to Terraform",
      content:
        "Terraform is an open-source tool used to define and provision infrastructure using configuration files. It works with multiple cloud providers.",
      example:
        "You can use Terraform to create virtual machines, networks, and storage in AWS using code."
    },

    {
      heading: "Terraform Workflow",
      content:
        "The Terraform workflow includes writing configuration files, initializing the project, planning changes, and applying them to create infrastructure.",
      example:
        "terraform init → terraform plan → terraform apply"
    },

    {
      heading: "AWS CloudFormation",
      content:
        "AWS CloudFormation is a service that allows you to define AWS infrastructure using templates. It is specific to AWS and helps automate resource creation.",
      example:
        "You can define an EC2 instance, security groups, and storage in a CloudFormation template."
    },

    {
      heading: "Terraform vs CloudFormation",
      content:
        "Terraform is cloud-agnostic and works across multiple providers, while CloudFormation is specific to AWS. Terraform is widely used for flexibility.",
      example:
        "Terraform can manage AWS, Azure, and Google Cloud, while CloudFormation works only with AWS."
    },

    {
      heading: "Infrastructure Automation in DevOps",
      content:
        "IaC integrates with CI/CD pipelines to automatically create and manage infrastructure during deployment.",
      example:
        "When a new version of an application is deployed, the required infrastructure can also be created automatically."
    }
  ]
};

export default phase5;