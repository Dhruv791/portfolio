// src/data/config.js
// Note: paths below assume your assets live at `src/assets/...`
// Example: src/assets/projects/multimodal.jpg, src/assets/projects/Profile.jpg, src/assets/certificates/tensorflow.png

export const CONFIG = {
  personal: {
    name: "Dhruv Tyagi",
    tagline: "Full-Stack Developer | Problem Solver | B.Tech CSE Student",

    // Use Vite-resolved URLs for assets inside src/assets
    profileImage: new URL('../assets/projects/Profile.jpg', import.meta.url).href,

    bio:
            "B.Tech (CSE) student building web apps and data-driven projects. Experienced with frontend frameworks (Angular, React), backend (Node.js, PHP), and strong in Data Structures & Algorithms. I enjoy turning problems into clean, maintainable solutions and shipping useful projects.",


    goal:
            "To gain hands-on experience through internships and projects in full-stack development and software engineering, while improving algorithmic and system design skills.",


    resumeLink:
       "https://drive.google.com/file/d/1Q1pRZykFWkh3ilSe3K2rj5-ZVzAInHFG/view?usp=drive_link",
  },

 social: {
    github: "https://github.com/Dhruv791",
    email: "gunnutyagi49@gmail.com",
    linkedin: "https://tinyurl.com/4fhnynbv",
    twitter: "",
    instagram: "",
    portfolio: "",
  },

  education: {
    degree: "Bachelor of Technology - Computer Science & Engineering",
    university: "Lovely Professional University",
    year: "2022 - 2026",
  },

  projects: [
    {
      id: 1,
      title: "Beach Room Booking Application",
      description:
        "Interactive frontend app to filter and display beach resort rooms based on user needs; responsive design and plans for auth/booking integration.",
      image: new URL('../assets/projects/beach.png', import.meta.url).href,
      github: "https://github.com/Dhruv791/Beach-Resort/tree/master",
      demo: "",
      tags: ["Frontend", "HTML", "CSS", "JavaScript"],
    },

   {
      id: 2,
      title: "Blood Bank Registration Portal",
      description:
        "Portal to manage blood bank operations, donor data and exchange registrations. Backend implemented in PHP with MySQL for data storage.",
      image: new URL('../assets/projects/blood.png', import.meta.url).href,
      github: "https://github.com/Dhruv791/Blood-Bank",
      demo: "",
      tags: ["PHP", "MySQL", "Backend"],
    },

      {
      id: 3,
      title: "Movie Recommender",
      description:
        "Full-stack web app offering personalized movie suggestions using browsing history. Built with Node.js backend and modular frontend.",
      image: new URL('../assets/projects/movie.jpg', import.meta.url).href,
      github: "",
      demo: "",
      tags: ["Node.js", "Full-Stack", "Recommendations"],
    },

     {
      id: 4,
      title: "Tomato — Food Ordering Website",
      description:
        "Full-stack food ordering app with secure login/logout, online payment integration, and MongoDB-backed data storage.",
      image: new URL('../assets/projects/tomato.png', import.meta.url).href,
      github: "https://github.com/Dhruv791/Food_ordering_website",
      demo: "",
      tags: ["Full-Stack", "MongoDB", "Authentication"],
    },
  ],

  // Keep original groups but also add the keys your Skills.jsx expects.
  skills: {
    // original groups
    programming: ["Java", "C++", "SQL", "JavaScript"],

    ml_frameworks: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "XGBoost",
      "OpenCV",
    ],

    genai: [
      "HuggingFace Transformers",
      "LangChain",
      "Prompt Engineering",
      "RAG Pipelines",
      "Vector Databases (FAISS, ChromaDB)",
      "LLM Fine-tuning",
      "Multi-Agent Systems",
    ],

    data_science: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SciPy",
      "EDA",
      "Feature Engineering",
    ],

    mlops: [
      "Docker",
      "FastAPI",
      "Streamlit",
      "HuggingFace Deployment",
      "Git & GitHub",
      "Linux / Bash",
      "Model Serving",
    ],

    cs_core: [
      "Data Structures & Algorithms",
      "OOP",
      "Operating Systems",
      "REST APIs",
      "Software Engineering Principles",
    ],

    // keys expected by Skills.jsx — map/merge from above groups
    languages: ["Python", "C++", "SQL", "Java"],

    frameworks: [
      // include common JS/ML frameworks and genai libs to show up in the "Frameworks & Libraries" card
      ...[
      
      ].filter(Boolean), // keep safe if you don't have these
      ...[
         "Angular",
        "React",
        "Node.js",
        "Express",
      ],
      // include GenAI libs too (optional)
      ...[
        
      ],
    ],

    tools: [
      ...[
        "Git",
        "GitHub",
        "Ubuntu",
        "MongoDB",
        "PostgreSQL",
      ],
    ],

    concepts: [
      ...[
        "Data Structures & Algorithms",
        "OOP",
        "Operating Systems",
        "REST APIs",
        "Prompt Engineering",
      ],
    ],
  },

  certificates: [
    {
      id: 1,
      title: "Server Side JavaScript with Node.js",
      issuer: "Coursera",
      date: "2024",
      image: new URL('../assets/certificates/JS.jpg', import.meta.url).href,
      link: "https://drive.google.com/file/d/1fSecQa4Vh9xk8LNm2fdM0Mr5jLGkuYRZ/view?usp=drive_link",
    },
    {
      id: 2,
      title: "Intoduction to Generative AI",
      issuer: "Coursera",
      date: "2025",
      image: new URL('../assets/certificates/GEN.jpg', import.meta.url).href,
      link: "https://drive.google.com/file/d/17miOnVEGEuivR4Ss4VCOnUyrvAQKoTtc/view?usp=drive_link",
    },
    {
      id: 3,
      title: "Data Structure And Aglorithm",
      issuer: "IamNeo",
      date: "2023",
      image: new URL('../assets/certificates/DSA.jpg', import.meta.url).href,
      link: "https://drive.google.com/file/d/1vnO9tdYB0PVyrFaKuV9Qv8E3LYE0QM2o/view?usp=drive_link",
    },
  ],

  emailjs: {
    serviceId: "service_xar85lo",
    templateId: "template_8xtq7zp",
    publicKey: "ECMUQHGxuFH3Ox_Fk",
  },
};

export default CONFIG;
