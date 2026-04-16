const phase7 = {
  title: "Phase 7 - Linux Deep Dive",

  sections: [
    {
      heading: "Introduction to Linux in DevOps",
      content:
        "Linux is the most widely used operating system in servers and cloud environments. DevOps engineers use Linux to manage systems, deploy applications, and automate tasks.",
      example:
        "Most cloud servers like AWS EC2 run on Linux distributions such as Ubuntu or Amazon Linux."
    },

    {
      heading: "Linux File System",
      content:
        "Linux uses a hierarchical file system starting from the root directory. All files and directories are organized under this structure.",
      example:
        "Important directories include /home (user files), /var (logs), and /etc (configuration files)."
    },

    {
      heading: "File Permissions",
      content:
        "Linux controls access using read, write, and execute permissions. These permissions are applied to the owner, group, and others.",
      example:
        "Using chmod 755 script.sh gives execution permission to users."
    },

    {
      heading: "Process Management",
      content:
        "Processes are running programs in Linux. You can monitor and control them using commands like ps, top, and kill.",
      example:
        "Use ps aux to view running processes and kill <id> to stop a process."
    },

    {
      heading: "Log Management",
      content:
        "Logs store important system and application information. DevOps engineers use logs to debug issues and monitor system behavior.",
      example:
        "Logs are stored in /var/log and can be viewed using commands like cat, tail, or less."
    },

    {
      heading: "Package Management",
      content:
        "Package managers are used to install, update, and remove software in Linux systems.",
      example:
        "Use apt install nginx in Ubuntu or yum install nginx in Amazon Linux."
    },

    {
      heading: "Shell Scripting",
      content:
        "Shell scripting allows automation of tasks using scripts written in bash or shell language.",
      example:
        "A script can automate deployment steps like pulling code, building, and restarting services."
    },

    {
      heading: "Why Linux is Important in DevOps",
      content:
        "Linux provides flexibility, stability, and control, making it essential for managing servers and automating workflows in DevOps.",
      example:
        "Most DevOps tools and cloud environments are built to run on Linux systems."
    }
  ]
};

export default phase7;