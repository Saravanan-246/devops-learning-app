const phase13 = {
  title: "Phase 13 - Infrastructure as Code (Advanced Terraform)",

  sections: [
    {
      heading: "Introduction to Advanced IaC",
      content:
        "Infrastructure as Code allows you to define and manage infrastructure using code. Advanced IaC focuses on scalability, reusability, and automation.",
      example:
        "Instead of manually creating servers, you write code to provision them automatically."
    },

    {
      heading: "Terraform Modules",
      content:
        "Modules allow you to reuse and organize Terraform code into reusable components.",
      example:
        "You can create a module for EC2 and reuse it across multiple projects."
    },

    {
      heading: "State Management",
      content:
        "Terraform maintains a state file that tracks infrastructure resources. Proper state management is critical for consistency.",
      example:
        "Using remote state (like S3) allows teams to collaborate safely."
    },

    {
      heading: "Remote Backend",
      content:
        "Remote backends store Terraform state in a centralized location such as AWS S3.",
      example:
        "Storing state in S3 prevents conflicts when multiple developers work on infrastructure."
    },

    {
      heading: "Variables and Outputs",
      content:
        "Variables make Terraform configurations dynamic, while outputs expose important values after deployment.",
      example:
        "Passing instance type as a variable instead of hardcoding it."
    },

    {
      heading: "Provisioning Infrastructure",
      content:
        "Terraform can provision cloud resources such as EC2, S3, VPC, and more using declarative configuration.",
      example:
        "terraform apply creates infrastructure automatically based on your configuration."
    },

    {
      heading: "Terraform Workflow",
      content:
        "Terraform follows a workflow: init → plan → apply → destroy.",
      example:
        "terraform plan shows what changes will happen before applying them."
    },

    {
      heading: "Why Advanced Terraform is Important",
      content:
        "Advanced Terraform skills help manage infrastructure efficiently, reduce manual work, and improve consistency.",
      example:
        "Companies use Terraform to automate cloud infrastructure setup across environments."
    }
  ]
};

export default phase13;