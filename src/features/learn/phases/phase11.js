const phase11 = {
  title: "Phase 11 - Kubernetes Advanced",

  sections: [
    {
      heading: "Introduction to Kubernetes Architecture",
      content:
        "Kubernetes is a container orchestration platform that manages deployment, scaling, and operation of containerized applications.",
      example:
        "It automatically manages containers across multiple servers without manual intervention."
    },

    {
      heading: "Pods and Deployments",
      content:
        "A Pod is the smallest unit in Kubernetes that runs containers. Deployments manage multiple pods and ensure desired state.",
      example:
        "If a pod crashes, Kubernetes automatically recreates it using the deployment configuration."
    },

    {
      heading: "Services and Networking",
      content:
        "Services expose pods to internal or external traffic and enable communication between components.",
      example:
        "A backend service allows frontend applications to communicate with APIs running inside pods."
    },

    {
      heading: "Ingress Controller",
      content:
        "Ingress manages external access to services, usually via HTTP/HTTPS, and routes traffic based on rules.",
      example:
        "Users accessing a domain are routed to the correct service using ingress rules."
    },

    {
      heading: "Scaling and Auto-Healing",
      content:
        "Kubernetes automatically scales applications based on load and replaces failed containers to maintain availability.",
      example:
        "If traffic increases, Kubernetes creates more pods automatically."
    },

    {
      heading: "Configuration Management",
      content:
        "ConfigMaps and Secrets are used to manage configuration and sensitive data in Kubernetes.",
      example:
        "Database credentials are stored securely using Kubernetes Secrets."
    },

    {
      heading: "Kubernetes YAML Files",
      content:
        "Resources in Kubernetes are defined using YAML configuration files, which describe desired state.",
      example:
        "A deployment YAML file defines the number of replicas, container image, and ports."
    },

    {
      heading: "Debugging and Logs",
      content:
        "Kubernetes provides tools to inspect logs and debug issues in running containers.",
      example:
        "Use kubectl logs and kubectl describe to troubleshoot application issues."
    },

    {
      heading: "Why Kubernetes is Important",
      content:
        "Kubernetes is widely used in production environments to manage large-scale applications efficiently.",
      example:
        "Companies use Kubernetes to run microservices with high availability and scalability."
    }
  ]
};

export default phase11;