const phase9 = {
  title: "Phase 9 - CI/CD Hands-on",

  sections: [
    {
      heading: "Introduction to CI/CD Implementation",
      content:
        "CI/CD is not just a concept but a practical workflow where code is automatically built, tested, and deployed using pipelines.",
      example:
        "When code is pushed to GitHub, a pipeline runs tests and deploys the application automatically."
    },

    {
      heading: "GitHub Actions",
      content:
        "GitHub Actions is a CI/CD tool that allows you to automate workflows directly inside your GitHub repository using YAML files.",
      example:
        "A workflow file in .github/workflows can run tests and build your project on every push."
    },

    {
      heading: "Workflow File (YAML)",
      content:
        "CI/CD pipelines are defined using YAML files. These files specify triggers, jobs, and steps for automation.",
      example:
        "A workflow can define steps like install dependencies, run tests, and build the project."
    },

    {
      heading: "Build and Test Automation",
      content:
        "Automation ensures that every code change is built and tested without manual effort, improving code quality.",
      example:
        "Running npm install and npm run build automatically in the pipeline."
    },

    {
      heading: "Deployment Automation",
      content:
        "Deployment automation releases applications to servers or cloud environments without manual intervention.",
      example:
        "After successful tests, the application is deployed automatically to a hosting platform."
    },

    {
      heading: "Environment Variables and Secrets",
      content:
        "Sensitive data like API keys and credentials are stored securely using environment variables and secrets in CI/CD tools.",
      example:
        "GitHub Secrets can store tokens and passwords securely for use in workflows."
    },

    {
      heading: "Jenkins Overview",
      content:
        "Jenkins is a popular open-source CI/CD tool used to build and automate pipelines in enterprise environments.",
      example:
        "Jenkins pipelines can automate build, test, and deployment steps similar to GitHub Actions."
    },

    {
      heading: "Why CI/CD Hands-on is Important",
      content:
        "Understanding real CI/CD implementation is critical for DevOps roles, as automation is a key responsibility.",
      example:
        "Companies expect engineers to set up pipelines that automatically deploy applications."
    }
  ]
};

export default phase9;