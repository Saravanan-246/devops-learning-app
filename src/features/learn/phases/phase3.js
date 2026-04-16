const phase3 = {
  title: "Phase 3 - CI/CD and Deployment Automation",

  sections: [
    {
      heading: "Introduction to CI/CD",
      content:
        "CI/CD stands for Continuous Integration and Continuous Deployment. It is a core DevOps practice that automates the process of building, testing, and deploying applications.",
      example:
        "When a developer pushes code to a repository, the system automatically builds and tests it, and then deploys it if everything is successful."
    },

    {
      heading: "Continuous Integration (CI)",
      content:
        "Continuous Integration is the practice of automatically integrating code changes into a shared repository. Each change is verified by automated builds and tests.",
      example:
        "Whenever code is pushed to GitHub, a pipeline runs tests to ensure the code works correctly."
    },

    {
      heading: "Continuous Deployment (CD)",
      content:
        "Continuous Deployment automatically releases the application to production after successful testing. It removes the need for manual deployment steps.",
      example:
        "After passing all tests, the application is automatically deployed to a live server."
    },

    {
      heading: "CI/CD Pipeline",
      content:
        "A CI/CD pipeline is a sequence of automated steps that includes build, test, and deployment stages. It ensures consistent and reliable delivery of software.",
      example:
        "Pipeline flow: Code push → Build → Test → Deploy."
    },

    {
      heading: "Build and Test Automation",
      content:
        "Automation ensures that code is compiled and tested without manual effort. This helps detect bugs early and maintain code quality.",
      example:
        "Unit tests run automatically whenever new code is added to the repository."
    },

    {
      heading: "Deployment Automation",
      content:
        "Deployment automation means releasing applications to servers without manual intervention. It reduces human error and speeds up delivery.",
      example:
        "A pipeline automatically deploys a web application to a cloud server after tests pass."
    },

    {
      heading: "Common CI/CD Tools",
      content:
        "Popular CI/CD tools include GitHub Actions, Jenkins, GitLab CI, and CircleCI. These tools help create and manage pipelines.",
      example:
        "GitHub Actions can be configured to run tests and deploy code whenever changes are pushed."
    },

    {
      heading: "Benefits of CI/CD",
      content:
        "CI/CD improves development speed, ensures better code quality, reduces deployment risks, and enables faster feedback.",
      example:
        "Teams can release updates frequently and fix issues quickly without affecting users."
    }
  ]
};

export default phase3;