const phase10 = {
  title: "Phase 10 - Docker Advanced",

  sections: [
    {
      heading: "Multi-Stage Docker Builds",
      content:
        "Multi-stage builds allow you to create smaller and optimized Docker images by separating build and runtime environments.",
      example:
        "Use one stage to build a React app and another stage to serve it using Nginx, reducing image size."
    },

    {
      heading: "Docker Compose",
      content:
        "Docker Compose is used to define and manage multi-container applications using a single YAML file.",
      example:
        "You can run a frontend, backend, and database together using docker-compose up."
    },

    {
      heading: "Container Networking",
      content:
        "Docker provides networking capabilities that allow containers to communicate with each other securely.",
      example:
        "A backend container can communicate with a database container using service names defined in Docker Compose."
    },

    {
      heading: "Volumes and Data Persistence",
      content:
        "Volumes are used to store data outside containers so that it persists even when containers are removed.",
      example:
        "Database data is stored in volumes to prevent data loss when containers restart."
    },

    {
      heading: "Docker Image Optimization",
      content:
        "Optimizing Docker images reduces size and improves performance by removing unnecessary files and layers.",
      example:
        "Using alpine base images helps create lightweight containers."
    },

    {
      heading: "Environment Variables in Docker",
      content:
        "Environment variables allow you to configure applications inside containers without hardcoding values.",
      example:
        "Passing database credentials using environment variables instead of writing them in code."
    },

    {
      heading: "Docker Logs and Debugging",
      content:
        "Docker provides commands to view logs and debug container issues effectively.",
      example:
        "Use docker logs <container_id> to check application output and errors."
    },

    {
      heading: "Why Advanced Docker is Important",
      content:
        "Advanced Docker knowledge helps in building scalable, efficient, and production-ready applications.",
      example:
        "Most modern applications are deployed using optimized Docker containers in production environments."
    }
  ]
};

export default phase10;