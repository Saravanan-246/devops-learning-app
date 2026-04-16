const phase6 = {
  title: "Phase 6 - Monitoring, Security, and Best Practices",

  sections: [
    {
      heading: "Introduction to Monitoring and Logging",
      content:
        "Monitoring and logging help track the performance and health of applications and infrastructure. Monitoring focuses on real-time metrics, while logging records system events.",
      example:
        "Monitoring shows CPU usage and response time, while logs show error messages and system activity."
    },

    {
      heading: "Prometheus and Grafana",
      content:
        "Prometheus is a monitoring tool used to collect metrics, and Grafana is used to visualize those metrics through dashboards.",
      example:
        "Prometheus collects server data, and Grafana displays it in charts for analysis."
    },

    {
      heading: "Centralized Logging",
      content:
        "Centralized logging collects logs from multiple systems into a single location for easier analysis and troubleshooting.",
      example:
        "Logs from multiple servers are stored in one system, making it easier to find errors."
    },

    {
      heading: "Introduction to DevSecOps",
      content:
        "DevSecOps integrates security into the DevOps process. Security checks are automated and applied at every stage of development.",
      example:
        "Code is scanned for vulnerabilities during the CI/CD pipeline before deployment."
    },

    {
      heading: "Security Best Practices",
      content:
        "Security practices include access control, secret management, vulnerability scanning, and secure configurations.",
      example:
        "Using environment variables to store sensitive data instead of hardcoding them in the application."
    },

    {
      heading: "DevOps Best Practices",
      content:
        "Best practices include automation, continuous testing, infrastructure as code, monitoring, and collaboration between teams.",
      example:
        "Using CI/CD pipelines and automated tests ensures reliable and fast software delivery."
    },

    {
      heading: "Communication Tools in DevOps",
      content:
        "Tools like Slack and Microsoft Teams help teams communicate and collaborate effectively during development and deployment.",
      example:
        "Teams receive alerts and updates about deployments and system issues through messaging tools."
    },

    {
      heading: "DevOps Projects and Real-World Implementation",
      content:
        "Building real-world projects helps in understanding DevOps concepts practically. Projects include CI/CD pipelines, container deployment, and cloud automation.",
      example:
        "A project where code is pushed to GitHub, automatically tested, containerized using Docker, and deployed to a cloud platform."
    }
  ]
};

export default phase6;