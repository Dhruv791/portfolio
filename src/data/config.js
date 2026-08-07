// src/data/config.js
// Note: paths below assume your assets live at `src/assets/...`
// Example: src/assets/projects/multimodal.jpg, src/assets/projects/Profile.jpg, src/assets/certificates/tensorflow.png

export const CONFIG = {
  personal: {
    name: "Dhruv Tyagi",
    tagline: "Full-Stack Developer | B.Tech CSE Graduate | Open to Work",

    // Use Vite-resolved URLs for assets inside src/assets
    profileImage: new URL('../assets/projects/Dhruv.jpeg', import.meta.url).href,

    homeBio: "B.Tech CSE graduate building full-stack and AI-driven applications — from crop advisory systems to AI interview coaches — using React, Node.js, and FastAPI",

    bio:
            "I'm a B.Tech Computer Science graduate who builds full-stack and AI-driven applications end to end — from backend architecture to the user-facing interface. My recent work spans an AI-powered agricultural advisory platform, a full-stack AI interview coach, and a smart blood bank management system, using React, Node.js, FastAPI, and MongoDB.",


    goal:
            "To secure a full-time role as a Full-Stack Developer where I can apply my skills to build scalable, impactful software solutions while continuing to grow as an engineer.",


    resumeLink:
       "https://drive.google.com/file/d/1RerNYHc9Lw-rt-e9kCB9KQ_OcWBCxk_G/view?usp=drive_link",
  },

 social: {
    github: "https://github.com/Dhruv791",
    email: "gunnutyagi049@gmail.com",
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
      title: "Mitti Mantra - AI-Powered Agricultural Decision Support System",
      description:
               "AI-powered agricultural platform with crop recommendation, disease detection, and irrigation scheduling. Built with React, Vite, and FastAPI, featuring a secure, multilingual UI.",
      image: new URL('../assets/projects/AI-crop.png', import.meta.url).href,
      github: "https://github.com/Dhruv791/Mitti-Mantra",
      demo: "",
      tags: ["React", "Vite", "FastAPI", "AI/ML"],
    },
    
{
  id: 2,
  title: "AI Interview Coach",
  description:
    "Full-stack AI-powered interview preparation platform that analyzes resumes, provides ATS feedback, generates mock interview questions, and tracks user performance using Google Gemini AI.",
  image: new URL('../assets/projects/AI-Interview.png', import.meta.url).href,
  github: "https://github.com/Dhruv791/AI-Interview-Coach",
  demo: "https://ai-interview-coach-dhruvvv.vercel.app/",
  tags: ["React", "FastAPI", "PostgreSQL", "Gemini AI"],
},
   {
      id: 3,
      title: "Smart Blood Bank Registration Portal",
      description:
      "Smart blood bank system to manage donors, inventory, and requests. Built with Node.js, Express, and MongoDB, with a Gemini AI assistant for alerts and guidance.",
      image: new URL('../assets/projects/SmartBBMS.png', import.meta.url).href,
      github: "https://github.com/Dhruv791/SmartBBMS",
      demo: "",
      tags: ["React", "Node.js", "MongoDB", "Gemini AI"],
    },

  ],

  skills: {
    frontend: [
      "React",
      "Angular",
      "HTML5",
      "CSS3",
      "JavaScript (ES6)"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Java",
      "Python",
      "PHP"
    ],
    aiml: [
      "Prompt Engineering",
      "Google Gemini API",
      "OpenAI API",
      "AI Integration",
      "XGBoost"
    ],
    database: [
      "MongoDB",
      "PostgreSQL",
      "SQL",
    ],
    tools: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel"
    ],
    concepts: [
      "Data Structures & Algorithms",
      "REST APIs",
      "JWT Authentication",
      "Problem Solving"
    ]
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
