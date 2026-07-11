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
        options: ["Student", "Employee", "Freelancer", "Founder"],
      },
      {
        id: "target_role",
        label: "What role do you want to achieve?",
        type: "text",
      },
      {
        id: "experience",
        label: "Years of experience",
        type: "number",
      },
      {
        id: "skills",
        label: "Current skills",
        type: "textarea",
      },
      {
        id: "study_hours",
        label: "Hours available per day",
        type: "number",
      },
      {
        id: "goal",
        label: "What is your biggest career goal?",
        type: "textarea",
      },
    ],
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
        type: "number",
      },
      {
        id: "expenses",
        label: "Monthly expenses",
        type: "number",
      },
      {
        id: "savings",
        label: "Current savings",
        type: "number",
      },
      {
        id: "debt",
        label: "Current debt (if any)",
        type: "number",
      },
      {
        id: "goal",
        label: "Financial goal",
        type: "textarea",
      },
      {
        id: "risk",
        label: "Risk tolerance",
        type: "select",
        options: ["Low", "Medium", "High"],
      },
    ],
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
        type: "textarea",
      },
      {
        id: "problem",
        label: "What problem are you solving?",
        type: "textarea",
      },
      {
        id: "audience",
        label: "Target audience",
        type: "text",
      },
      {
        id: "competition",
        label: "Who are your competitors?",
        type: "textarea",
      },
      {
        id: "stage",
        label: "Current stage",
        type: "select",
        options: ["Idea", "Prototype", "MVP", "Launched"],
      },
      {
        id: "budget",
        label: "Current budget",
        type: "number",
      },
    ],
  },

  education: {
    title: "Education",
    description: "Plan your learning journey.",
    icon: "GraduationCap",
    color: "blue",
    available: false,

    questions: [
      {
        id: "current_level",
        label: "Current education level",
        type: "select",
        options: [
          "School",
          "Diploma",
          "Undergraduate",
          "Postgraduate",
        ],
      },
      {
        id: "field",
        label: "Field of study",
        type: "text",
      },
      {
        id: "interest",
        label: "What subjects interest you most?",
        type: "textarea",
      },
      {
        id: "goal",
        label: "Educational goal",
        type: "textarea",
      },
      {
        id: "study_time",
        label: "Study hours per day",
        type: "number",
      },
    ],
  },

  relationships: {
    title: "Relationships",
    description: "Navigate personal decisions.",
    icon: "Heart",
    color: "pink",
    available: false,

    questions: [
      {
        id: "relationship_type",
        label: "Relationship type",
        type: "select",
        options: [
          "Family",
          "Friendship",
          "Romantic",
          "Professional",
        ],
      },
      {
        id: "challenge",
        label: "Describe your current challenge",
        type: "textarea",
      },
      {
        id: "goal",
        label: "What outcome are you hoping for?",
        type: "textarea",
      },
      {
        id: "communication",
        label: "How would you rate communication?",
        type: "select",
        options: ["Poor", "Average", "Good", "Excellent"],
      },
      {
        id: "priority",
        label: "Why is this decision important?",
        type: "textarea",
      },
    ],
  },

  health: {
    title: "Health",
    description: "Build healthier habits.",
    icon: "HeartPulse",
    color: "red",
    available: false,

    questions: [
      {
        id: "goal",
        label: "Primary health goal",
        type: "textarea",
      },
      {
        id: "exercise",
        label: "Exercise days per week",
        type: "number",
      },
      {
        id: "sleep",
        label: "Average sleep (hours)",
        type: "number",
      },
      {
        id: "diet",
        label: "Describe your current diet",
        type: "textarea",
      },
      {
        id: "challenge",
        label: "Biggest health challenge",
        type: "textarea",
      },
    ],
  },

  travel: {
    title: "Travel",
    description: "Plan smarter trips.",
    icon: "Plane",
    color: "cyan",
    available: false,

    questions: [
      {
        id: "destination",
        label: "Destination",
        type: "text",
      },
      {
        id: "budget",
        label: "Travel budget",
        type: "number",
      },
      {
        id: "duration",
        label: "Trip duration (days)",
        type: "number",
      },
      {
        id: "purpose",
        label: "Purpose of travel",
        type: "select",
        options: [
          "Vacation",
          "Business",
          "Education",
          "Adventure",
        ],
      },
      {
        id: "preferences",
        label: "Travel preferences",
        type: "textarea",
      },
    ],
  },
};

export default decisionFlows;