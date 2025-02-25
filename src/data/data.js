import {
  JavascriptOriginal,
  PythonOriginal,
  Html5Original,
  Css3Original,
  ExpressOriginal,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
  BootstrapPlain,
  NodejsOriginal,
  MongodbPlain,
  PostmanPlain,
  CPlain,
  DjangoPlain,
  MysqlOriginalWordmark,
  PostgresqlOriginal,
  PhotoshopOriginal,
  FigmaOriginal,
  BlenderOriginal,
} from "devicons-react";

// Constants
const githubLink = "https://github.com/RNTejas";

// Profile Description
export const profileDescription = [
  "Hi, my name is RN Tejas. As a Front-End Developer, I specialize in crafting visually stunning and intuitive user experiences that help businesses achieve their goals. With expertise in JavaScript, React and Redux, I'm passionate about bringing ideas to life and creating seamless digital experiences that leave a lasting impression.",
];

// Work Experience Template
export const workExperienceTemplate = [
  {
    key: 1,
    company: "404 Solutions.Inc",
    description: [
      "Developing and maintaining web applications using Javascript, Python, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Employed Python and Flask for efficient DBMS and API development"
    ],
    duration: "Feb 2022 - Dec 2022",
    designation: "Web Developer",
    type: "work",
  },
];

// GitHub Repositories
export const githubRepos = [
  {
    name: "The Wild Oasis - Hotel Management",
    techUsed: ["React", "Supabase", "Styled Components", "React Query", "HOC"],
    description: "The 'Wild Oasis Hotel Management App' is a staff-centric application designed to simplify guest check-in, booking management, and related tasks for hotel staff, providing a user-friendly interface to efficiently handle guest arrivals, reservations, and other hotel management functions.",
    githubLink: "https://github.com/RNTejas/wild-oasis",
    liveURL: "https://rntejas.me",
    featured: true
  },
  {
    name: "Forkify - 1,000,000 Recipes",
    techUsed: ["JavaScript", "HTML", "CSS", "API", "Netlify"],
    description: "A comprehensive recipe app with over a million delicious recipes to choose from. Easily search and filter by ingredients, dietary restrictions, and meal type to find the perfect recipe for any occasion.",
    githubLink: "https://github.com/RNTejas/forkify",
    liveURL: "https://rntejas.me",
    featured: true
  },
  {
    name: "Netflix Clone",
    techUsed: ["React", "API", "react-youtube", "TMDB", "MovieTrailer"],
    description: "Stay up to date with the latest and greatest in entertainment with our Netflix clone, featuring the most popular and trending shows, and trailers for all the newest movies and series.",
    githubLink: "https://github.com/RNTejas/netflix-clone",
    liveURL: "https://rntejas.me",
    featured: true
  },
  {
    name: "WebWave Solutions",
    techUsed: ["React", "3D", "Animation", "API", "JavaScript", "TailwindCSS"],
    description: "3D AI-driven Agency landing page for web development solutions",
    githubLink: "https://github.com/RNTejas/webwave-solutions",
    liveURL: "https://rntejas.me",
    featured: false
  },
  {
    name: "Crwn Clothing e-commerce",
    techUsed: ["React", "Firebase", "Redux", "API", "Typescript", "Stripe"],
    description: "Full-Stack e-commerce clothing app that accepts order with stripe payments",
    githubLink: "https://github.com/RNTejas/crwn-clothing",
    liveURL: "https://rntejas.me",
    featured: false
  },
  {
    name: "Omnifood - Never cook again",
    techUsed: ["HTML", "CSS", "UI-Principles", "Responsive Design"],
    description: "A food delivery app that uses machine learning to create personalized meal plans based on dietary preferences, allergies, and nutritional goals.",
    githubLink: "https://github.com/RNTejas/omnifood",
    liveURL: "https://rntejas.me",
    featured: false
  }
];

// Education Experience
export const educationExperience = [
  {
    key: 1,
    institution: "Python For Everybody Specialization",
    graduation: "2023",
    degree: "University of Michigan & Coursera",
    type: "certification",
  },
  {
    key: 2,
    institution: "#100DaysOfCode Python Pro Bootcamp",
    graduation: "2023",
    degree: "Udemy & London App Brewery",
    type: "certification",
  },
  {
    key: 3,
    institution: "Javascript: All-in-One Development Suite",
    graduation: "2023",
    degree: "Simplilearn",
    type: "certification",
  },
  {
    key: 4,
    institution: "The Complete JavaScript Course 2022",
    graduation: "2022",
    degree: "Jonas Schmedtmann & Udemy",
    type: "certification",
  },
  {
    key: 5,
    institution: "Introduction to Internet Of Things(IoT)",
    graduation: "2023",
    degree: "Stanford University (SCPD)",
    type: "certification",
  },
  {
    key: 6,
    institution: "The Ultimate React Course (React, Redux) 2023",
    graduation: "2023",
    degree: "Jonas Schmedtmann & Udemy",
    type: "certification",
  },
];

const iconSize = 15;
const iconClass = "mx-auto";

export const skills = [
  {
    key: "html",
    name: "HTML",
    icon: <Html5Original size={iconSize} className={iconClass} />,
  },
  {
    key: "css",
    name: "CSS",
    icon: <Css3Original size={iconSize} className={iconClass} />,
  },
  {
    key: "javascript",
    name: "JavaScript (ES6+)",
    icon: <JavascriptOriginal size={iconSize} className={iconClass} />,
  },
  {
    key: "react",
    name: "React",
    icon: <ReactOriginal size={iconSize} className={iconClass} />,
  },
  {
    key: "redux",
    name: "Redux",
    icon: <ReactOriginal size={iconSize} className={iconClass} />,
  },
  {
    key: "tailwind",
    name: "Tailwind CSS",
    icon: <TailwindcssOriginal size={iconSize} className={iconClass} />,
  },
  {
    key: "styled",
    name: "Styled Components",
    icon: <Css3Original size={iconSize} className={iconClass} />,
  },
  {
    key: "supabase",
    name: "Supabase",
    icon: <PostgresqlOriginal size={iconSize} className={iconClass} />,
  },
  {
    key: "firebase",
    name: "Firebase",
    icon: <MongodbPlain size={iconSize} className={iconClass} />,
  }
];

const appsData = [
  {
    id: 1,
    name: "Google Chrome",
    icon: "/images/apps/chrome.png",
    action: "browser",
    size: "w-18 h-18",
  },
  {
    id: 2,
    name: "About Me",
    icon: "/images/apps/folder.png",
    action: "explorer",
    size: "w-18 h-18",
  },
  {
    id: 3,
    name: "Recycle Bin",
    icon: "/images/apps/recyclebin.png",
    action: "recycle",
    size: "w-14 h-14",
  },
  {
    id: 4,
    name: "Microsoft Edge",
    icon: "/images/apps/edge.png",
    action: "browser",
    size: "w-11 h-11",
  },
  {
    id: 5,
    name: "Calculator",
    icon: "/images/apps/calculator.png",
    action: "calculator",
    size: "w-11 h-11",
  },
  {
    id: 6,
    name: "VS Code",
    icon: "https://laaouatni.github.io/w11CSS/images/vs-code.ico",
    action: "vscode",
    size: "w-8 h-8",
  },
  {
    id: 7,
    name: "Emoji TicTacToe",
    icon: "https://raw.githubusercontent.com/MishanPoudel/Emoji-TicTacToe/main/public/favicon.ico",
    action: "app",
    subAction: "emoji",
    size: "w-10 h-10",
  },
  {
    id: 8,
    name: "Spotify",
    icon: "https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png",
    action: "app",
    subAction: "spotify",
    size: "w-10 h-10",
  },
];

// Export default data
export default appsData;

// Social Media Links
export const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/rntejas/",
  github: githubLink,
};
