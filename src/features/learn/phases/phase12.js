const phase12 = {
  title: "Phase 12 - Cloud (AWS Deep)",

  sections: [
    {
      heading: "Introduction to Cloud Computing",
      content:
        "Cloud computing provides on-demand access to servers, storage, and services over the internet. It removes the need for physical infrastructure.",
      example:
        "Instead of buying servers, you can launch virtual machines in AWS within minutes."
    },

    {
      heading: "AWS EC2 (Virtual Servers)",
      content:
        "EC2 allows you to create and manage virtual servers where applications can be deployed and run.",
      example:
        "You can deploy a Node.js or React application on an EC2 instance and make it accessible online."
    },

    {
      heading: "Amazon S3 (Storage Service)",
      content:
        "S3 is a scalable object storage service used to store files, backups, and static websites.",
      example:
        "React build files can be hosted on S3 to serve a static website."
    },

    {
      heading: "IAM (Identity and Access Management)",
      content:
        "IAM controls access to AWS resources using users, roles, and permissions.",
      example:
        "You can create a role that allows EC2 to access S3 securely without exposing credentials."
    },

    {
      heading: "VPC (Virtual Private Cloud)",
      content:
        "VPC is a private network in AWS where you can launch resources securely with full control over networking.",
      example:
        "You can create public and private subnets to separate frontend and backend services."
    },

    {
      heading: "Security Groups and Firewalls",
      content:
        "Security groups act as firewalls to control incoming and outgoing traffic to AWS resources.",
      example:
        "Allow only port 22 for SSH and port 80/443 for web traffic."
    },

    {
      heading: "Deployment Flow in AWS",
      content:
        "Applications are deployed by launching servers, configuring environments, and exposing them to the internet.",
      example:
        "Push code → connect to EC2 → install dependencies → run application → expose via public IP."
    },

    {
      heading: "Why Cloud is Important in DevOps",
      content:
        "Cloud platforms like AWS enable scalable, flexible, and cost-effective infrastructure for modern applications.",
      example:
        "DevOps engineers use AWS to deploy, manage, and scale applications globally."
    }
  ]
};

export default phase12;