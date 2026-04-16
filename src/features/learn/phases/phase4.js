const phase4 = {
  title: "Phase 4 - Containerization and Orchestration",

  sections: [
    {
      heading: "Introduction to Containerization",
      content:
        "Containerization is a method of packaging an application along with its dependencies so it can run consistently across different environments.",
      example:
        "An application that works on a developer's laptop will run the same way on a server using containers."
    },

    {
      heading: "What is Docker",
      content:
        "Docker is a platform used to create, manage, and run containers. It helps developers package applications and their environments into a single unit.",
      example:
        "A Node.js application can be packaged into a Docker container and deployed anywhere without installation issues."
    },

    {
      heading: "Docker Image and Container",
      content:
        "A Docker image is a blueprint of the application, and a container is a running instance of that image.",
      example:
        "You build an image using a Dockerfile, and then run it as a container."
    },

    {
      heading: "Dockerfile",
      content:
        "A Dockerfile is a script that contains instructions to build a Docker image. It defines the base image, dependencies, and commands required to run the application.",
      example:
        "A Dockerfile can install Node.js, copy project files, and start the application using a command."
    },

    {
      heading: "Benefits of Docker",
      content:
        "Docker ensures consistency across environments, reduces setup time, and simplifies deployment.",
      example:
        "Teams can avoid the common issue of 'it works on my machine' because containers run the same everywhere."
    },

    {
      heading: "Introduction to Kubernetes",
      content:
        "Kubernetes is a container orchestration platform used to manage, scale, and deploy containerized applications automatically.",
      example:
        "If an application has multiple containers, Kubernetes manages them and ensures they are running correctly."
    },

    {
      heading: "Key Kubernetes Components",
      content:
        "Important components include Pods, Services, and Deployments. Pods run containers, Services expose them, and Deployments manage scaling and updates.",
      example:
        "A Deployment ensures that a specific number of application instances are always running."
    },

    {
      heading: "Scaling and Load Management",
      content:
        "Kubernetes automatically scales applications based on demand and distributes traffic using load balancing.",
      example:
        "If user traffic increases, Kubernetes can create more instances of the application automatically."
    },

    {
      heading: "Container Deployment in Cloud",
      content:
        "Containerized applications can be deployed using cloud services such as AWS ECS or Kubernetes clusters.",
      example:
        "An application can be deployed using AWS ECS to manage containers without handling servers manually."
    }
  ]
};

export default phase4;