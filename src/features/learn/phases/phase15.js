const phase15 = {
  title: "Phase 15 - DevSecOps (Advanced Security)",

  sections: [
    {
      heading: "Introduction to DevSecOps",
      content:
        "DevSecOps integrates security into every stage of the DevOps lifecycle, ensuring applications are secure from development to deployment.",
      example:
        "Instead of adding security at the end, it is built into CI/CD pipelines."
    },

    {
      heading: "Secrets Management",
      content:
        "Secrets such as API keys, passwords, and tokens must be stored securely and not exposed in code.",
      example:
        "Using environment variables or secret managers instead of hardcoding credentials."
    },

    {
      heading: "Vulnerability Scanning",
      content:
        "Scanning tools are used to detect vulnerabilities in code, dependencies, and container images.",
      example:
        "Scanning Docker images to find outdated or insecure packages."
    },

    {
      heading: "Secure CI/CD Pipelines",
      content:
        "CI/CD pipelines should include security checks such as code scanning and dependency validation.",
      example:
        "Adding security testing steps before deploying applications."
    },

    {
      heading: "Access Control and IAM",
      content:
        "Proper access control ensures that only authorized users and services can access resources.",
      example:
        "Using IAM roles to limit permissions instead of giving full access."
    },

    {
      heading: "Container Security",
      content:
        "Containers must be secured by using minimal images, scanning for vulnerabilities, and restricting access.",
      example:
        "Using lightweight base images like Alpine and scanning them regularly."
    },

    {
      heading: "Network Security",
      content:
        "Network security protects systems by controlling traffic and preventing unauthorized access.",
      example:
        "Using firewalls and security groups to restrict access to specific ports."
    },

    {
      heading: "Best Practices in DevSecOps",
      content:
        "Following best practices ensures secure and reliable systems in production environments.",
      example:
        "Regular updates, least privilege access, and continuous monitoring."
    },

    {
      heading: "Why DevSecOps is Important",
      content:
        "Security is critical in modern applications to protect data, systems, and users from threats.",
      example:
        "Companies integrate DevSecOps to prevent breaches and ensure compliance."
    }
  ]
};

export default phase15;