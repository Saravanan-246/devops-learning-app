const phase2 = {
  title: "Phase 2 - Version Control with Git",

  sections: [
    {
      heading: "Introduction to Version Control",
      content:
        "Version control is a system that helps track changes in code over time. It allows multiple developers to work on the same project without conflicts and keeps a history of all changes.",
      example:
        "If a bug is introduced, you can go back to a previous working version of the code."
    },

    {
      heading: "Types of Version Control Systems",
      content:
        "There are two main types: Centralized Version Control Systems (CVCS) and Distributed Version Control Systems (DVCS). Git is a distributed version control system.",
      example:
        "In Git, every developer has a full copy of the repository, so work can continue even without internet access."
    },

    {
      heading: "Introduction to Git",
      content:
        "Git is a popular distributed version control tool used to manage source code. It tracks changes, supports collaboration, and allows branching and merging.",
      example:
        "Developers use Git to manage code changes and collaborate through platforms like GitHub."
    },

    {
      heading: "Basic Git Workflow",
      content:
        "The basic Git workflow includes initializing a repository, adding files, committing changes, and pushing to a remote repository.",
      example:
        "git init → git add . → git commit -m 'message' → git push"
    },

    {
      heading: "Branching in Git",
      content:
        "Branches allow developers to work on features independently without affecting the main codebase.",
      example:
        "You can create a feature branch, make changes, and merge it into the main branch after testing."
    },

    {
      heading: "Merging and Merge Strategies",
      content:
        "Merging combines changes from different branches. Common strategies include fast-forward merge and three-way merge.",
      example:
        "After completing a feature, you merge the feature branch into the main branch."
    },

    {
      heading: "Handling Merge Conflicts",
      content:
        "Merge conflicts occur when two changes affect the same part of a file. Developers must manually resolve these conflicts.",
      example:
        "Git highlights the conflicting lines, and you choose the correct version before committing."
    },

    {
      heading: "Working with Remote Repositories",
      content:
        "Remote repositories like GitHub allow teams to collaborate by pushing and pulling code changes.",
      example:
        "git push uploads your changes, and git pull fetches updates from the remote repository."
    },

    {
      heading: "Choosing a Version Control System",
      content:
        "Git is widely used due to its flexibility, speed, and distributed nature. It is the standard tool in most DevOps workflows.",
      example:
        "Most companies use Git with platforms like GitHub, GitLab, or Bitbucket."
    }
  ]
};

export default phase2;