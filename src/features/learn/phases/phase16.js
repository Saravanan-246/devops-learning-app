const phase16 = {
  title: "Phase 16 - Real DevOps Project",

  sections: [
    {
      heading: "Project Overview",
      content:
        "In this phase, you will implement a complete DevOps workflow by building, automating, and deploying a real application.",
      example:
        "You will take a React or full-stack app and deploy it using DevOps practices."
    },

    {
      heading: "Step 1: Version Control Setup",
      content:
        "Push your application code to a GitHub repository and manage changes using Git.",
      example:
        "Create a repository and push your project using git push."
    },

    {
      heading: "Step 2: CI Pipeline Setup",
      content:
        "Set up a CI pipeline using GitHub Actions to automatically build and test your application.",
      example:
        "On every push, run npm install and npm run build automatically."
    },

    {
      heading: "Step 3: Dockerize the Application",
      content:
        "Create a Dockerfile to containerize your application for consistent deployment.",
      example:
        "Build a Docker image and run it using docker build and docker run."
    },

    {
      heading: "Step 4: Multi-Container Setup",
      content:
        "Use Docker Compose to manage multiple services like frontend, backend, and database.",
      example:
        "Run all services together using docker-compose up."
    },

    {
      heading: "Step 5: Deploy to Cloud (AWS)",
      content:
        "Deploy your application on AWS EC2 and configure it to run continuously.",
      example:
        "Launch EC2, install Docker, and run your containerized app."
    },

    {
      heading: "Step 6: Configure Reverse Proxy",
      content:
        "Use Nginx as a reverse proxy to route traffic to your application.",
      example:
        "Nginx listens on port 80 and forwards requests to your app running on another port."
    },

    {
      heading: "Step 7: Continuous Deployment",
      content:
        "Extend your CI pipeline to automatically deploy the application after successful builds.",
      example:
        "Push code → pipeline builds → app redeployed automatically."
    },

    {
      heading: "Step 8: Monitoring Setup",
      content:
        "Monitor application performance and logs using tools like Prometheus and Grafana.",
      example:
        "Track CPU usage, memory, and application health in dashboards."
    },

    {
      heading: "Step 9: Security Implementation",
      content:
        "Apply security practices such as environment variables, restricted access, and secure configurations.",
      example:
        "Store secrets securely and restrict access using IAM roles."
    },

    {
      heading: "Final Outcome",
      content:
        "You will have a fully automated DevOps pipeline from code commit to production deployment.",
      example:
        "Push code → CI/CD → Docker → Cloud → Monitoring → Live Application."
    }
  ]
};

export default phase16;