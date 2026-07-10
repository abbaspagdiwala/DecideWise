const decisionFlows = {
  career: {
    title: "Career",
    description: "Plan your next career move with AI guidance.",
    icon: "Briefcase",
    color: "indigo",
    available: true,

    questions: [
      {
        id: "current_role",
        label: "What is your current role?",
        type: "select",
        options: [
          "Student",
          "Employee",
          "Freelancer",
          "Founder"
        ]
      },

      {
        id: "target_role",
        label: "What role do you want to achieve?",
        type: "text"
      },

      {
        id: "experience",
        label: "Years of experience",
        type: "number"
      },

      {
        id: "skills",
        label: "Current skills",
        type: "textarea"
      },

      {
        id: "study_hours",
        label: "Hours available per day",
        type: "number"
      },

      {
        id: "goal",
        label: "What is your biggest career goal?",
        type: "textarea"
      }
    ]
  },

  finance: {
    title: "Finance",
    description: "Make better financial decisions.",
    icon: "IndianRupee",
    color: "emerald",
    available: true,

    questions: [
      {
        id: "income",
        label: "Monthly income",
        type: "number"
      },

      {
        id: "expenses",
        label: "Monthly expenses",
        type: "number"
      },

      {
        id: "savings",
        label: "Current savings",
        type: "number"
      },

      {
        id: "goal",
        label: "Financial goal",
        type: "textarea"
      },

      {
        id: "risk",
        label: "Risk tolerance",
        type: "select",
        options: [
          "Low",
          "Medium",
          "High"
        ]
      }
    ]
  },

  startup: {
    title: "Startup",
    description: "Validate your startup idea.",
    icon: "Rocket",
    color: "orange",
    available: true,

    questions: [
      {
        id: "idea",
        label: "Describe your startup idea",
        type: "textarea"
      },

      {
        id: "problem",
        label: "What problem are you solving?",
        type: "textarea"
      },

      {
        id: "audience",
        label: "Target audience",
        type: "text"
      },

      {
        id: "stage",
        label: "Current stage",
        type: "select",
        options: [
          "Idea",
          "Prototype",
          "MVP",
          "Launched"
        ]
      },

      {
        id: "budget",
        label: "Current budget",
        type: "number"
      }
    ]
  },

  education: {
    title: "Education",
    description: "Plan your learning journey.",
    icon: "GraduationCap",
    color: "blue",
    available: false
  },

  relationships: {
    title: "Relationships",
    description: "Navigate personal decisions.",
    icon: "Heart",
    color: "pink",
    available: false
  },

  health: {
    title: "Health",
    description: "Build healthier habits.",
    icon: "HeartPulse",
    color: "red",
    available: false
  },

  travel: {
    title: "Travel",
    description: "Plan smarter trips.",
    icon: "Plane",
    color: "cyan",
    available: false
  }
};

export default decisionFlows;