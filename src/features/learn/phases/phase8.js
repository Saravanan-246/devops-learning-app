const phase8 = {
  title: "Phase 8 - Networking for DevOps",

  sections: [
    {
      heading: "Introduction to Networking",
      content:
        "Networking connects systems and services so they can communicate over the internet or within private networks. It is essential for deploying and managing applications.",
      example:
        "When a user accesses a website, the request travels through networks to reach the server hosting the application."
    },

    {
      heading: "IP Address and DNS",
      content:
        "An IP address identifies a device on a network. DNS (Domain Name System) converts domain names into IP addresses.",
      example:
        "When you type google.com, DNS resolves it to an IP address so your browser can connect to the server."
    },

    {
      heading: "Ports and Protocols",
      content:
        "Ports are communication endpoints, and protocols define how data is transmitted. Common protocols include HTTP and HTTPS.",
      example:
        "Port 80 is used for HTTP and port 443 is used for HTTPS."
    },

    {
      heading: "HTTP vs HTTPS",
      content:
        "HTTP is used for transferring data, while HTTPS is a secure version that encrypts data using SSL/TLS.",
      example:
        "Websites with HTTPS protect user data such as login credentials."
    },

    {
      heading: "Reverse Proxy (Nginx)",
      content:
        "A reverse proxy forwards client requests to backend servers. Nginx is commonly used to handle traffic and improve performance.",
      example:
        "Nginx receives requests from users and forwards them to a Node.js or React application running on a server."
    },

    {
      heading: "Load Balancing",
      content:
        "Load balancing distributes traffic across multiple servers to ensure high availability and performance.",
      example:
        "If one server fails, traffic is redirected to another server to keep the application running."
    },

    {
      heading: "Firewall Basics",
      content:
        "Firewalls control incoming and outgoing traffic based on rules, improving system security.",
      example:
        "A firewall can block unwanted traffic and allow only specific ports like 80 and 443."
    },

    {
      heading: "Why Networking is Important in DevOps",
      content:
        "Networking is essential for deploying applications, configuring servers, and troubleshooting connectivity issues.",
      example:
        "Understanding networking helps in debugging issues like server not reachable or API failures."
    }
  ]
};

export default phase8;