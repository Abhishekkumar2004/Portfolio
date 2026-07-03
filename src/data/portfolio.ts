import { Project, Experience, Skill, Certification, Stat } from '../types';
import E_Com_Home from '../assets/images/E_Com_Home.png';
import E_Com_Men from '../assets/images/E_Com_Men.png';
import E_Com_Women from '../assets/images/E_Com_Women.png';
import E_Com_Kids from '../assets/images/E_Com_Kids.png';
import E_com_Login from '../assets/images/E_com_Login.png';
import Weather_home from '../assets/images/Weather_home.png';
import weather_output from '../assets/images/weather_output.png';
import To_Do_Home from '../assets/images/To_Do_Home.png';
import T0_Do_TaskList from '../assets/images/T0_Do_TaskList.png';
import To_DO_Filter from '../assets/images/To_DO_Filter.png';
import LandingPage_home from '../assets/images/LandingPage_home.png';
import LandingPage_home1 from '../assets/images/LandingPage_home1.png';
import LandingPage_1 from '../assets/images/LandingPage_1.png';
import LandingPage_2 from '../assets/images/LandingPage_2.png';
import LandingPage_3 from '../assets/images/LandingPage_3.png';
import LandingPage_4 from '../assets/images/LandingPage_4.png';

export const PERSONAL_INFO = {
  name: 'Abhishek Kumar',
  title: 'Senior Frontend Engineer & UI Designer',
  tagline: 'Crafting immersive, high-performance web experiences at the intersection of premium design and solid engineering.',
  aboutBrief: 'I am a creative frontend engineer with 2+ years of experience specializing in building highly animated, fluid, and modern interactive web interfaces. I focus on bridging the gap between design and development, ensuring every pixel is perfectly aligned and every transition feels organic.',
  aboutStory: 'My journey began at the crossroads of visual design and computer science. I realized that a website is more than just a document—it is an interactive medium, a digital sculpture. Over the years, I have collaborated with early-stage startups and global agencies to build custom design systems, immersive interactive products, and robust high-traffic web applications.\n\nI believe in "architectural honesty"—writing clean, semantic, and highly performant code, while never compromising on fluid layouts, delicate micro-animations, and impeccable typographic hierarchy.',
  philosophy: 'Frontend engineering is not just about making things look beautiful—it is about performance, usability, and accessibility. A premium interface must load in milliseconds, respond instantly to touch, and be completely accessible to everyone.',
  resumeUrl: 'https://www.overleaf.com/project/69c39cd453d5ba45884608cf',
  githubUrl: 'https://github.com/Abhishekkumar2004',
  linkedinUrl: 'https://www.linkedin.com/in/abhishek-kumar-75775a252/',
  email: 'abhisehkkumar1221a@gmail.com'
};

export const STATS: Stat[] = [
  { id: 'exp', value: 2, suffix: '+', label: 'Years of Experience' },
  { id: 'projects', value: 6, suffix: '', label: 'Completed Projects' },
  { id: 'tech', value: 16, suffix: '+', label: 'Technologies Mastered' },
  { id: 'satisfaction', value: 90, suffix: '%', label: 'Success & Retention' }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React 19 / Next.js', icon: 'Cpu', category: 'frontend', proficiency: 95 },
  { name: 'TypeScript', icon: 'Shield', category: 'frontend', proficiency: 92 },
  { name: 'Tailwind CSS v4', icon: 'Wind', category: 'frontend', proficiency: 96 },
  { name: 'JavaScript ES6+', icon: 'Code2', category: 'frontend', proficiency: 94 },
  { name: 'Redux Toolkit', icon: 'Boxes', category: 'frontend', proficiency: 85 },
  { name: 'React Query (TanStack)', icon: 'CloudDownload', category: 'frontend', proficiency: 88 },
  { name: 'Framer Motion', icon: 'Sparkles', category: 'frontend', proficiency: 90 },
  { name: 'GSAP / ScrollTrigger', icon: 'Zap', category: 'frontend', proficiency: 92 },
  { name: 'HTML5 & CSS3', icon: 'Layers', category: 'frontend', proficiency: 95 },

  // Backend Basics
  { name: 'Node.js', icon: 'Terminal', category: 'backend', proficiency: 80 },
  { name: 'Express', icon: 'Server', category: 'backend', proficiency: 82 },
  { name: 'REST APIs & GraphQL', icon: 'Globe', category: 'backend', proficiency: 88 },
  { name: 'NoSQL / MongoDB', icon: 'Database', category: 'backend', proficiency: 75 },

  // Tools
  { name: 'Git & GitHub Workflows', icon: 'GitBranch', category: 'tools', proficiency: 90 },
  { name: 'Figma to Code', icon: 'Figma', category: 'tools', proficiency: 94 },
  { name: 'Vite / ESBuild', icon: 'Flame', category: 'tools', proficiency: 85 },
  { name: 'VS Code', icon: 'Laptop', category: 'tools', proficiency: 95 },
  { name: 'Webpack / Package Bundlers', icon: 'Box', category: 'tools', proficiency: 78 },
  { name: 'Lighthouse & Performance Tuning', icon: 'Gauge', category: 'tools', proficiency: 92 }
];

export const PROJECTS: Project[] = [
  {
    id: 'E-commerce Web Application',
    title: 'E-commerce Web Application',
    subtitle: 'Real-time Shopping Experience',
    description: 'A high-performance e-commerce platform designed for seamless shopping experiences, featuring real-time inventory updates, dynamic product filtering, and interactive user interfaces.',
    longDescription: 'This e-commerce web application is built to provide users with a smooth and engaging shopping experience. It incorporates real-time inventory management, allowing customers to see product availability instantly. The platform features dynamic filtering options, enabling users to quickly find products based on categories, price ranges, and other attributes. The user interface is designed with a focus on interactivity and responsiveness, ensuring that the application performs well across various devices and screen sizes.',
    techStack: ['HTML', 'ReactJS', 'JavaScript', 'Tailwind CSS' ],
    features: [
      'Real-time Inventory: Instant stock level updates integrated seamlessly with WebSockets.',
      'Smart Filtering: Advanced dynamic product filtering and multi-criteria sorting capabilities.',
      'Responsive Design: Fully optimized layouts ensuring a premium experience on both mobile and desktop screens.',
      'Interactive Galleries: Engaging product showcases built with smooth animations and fluid transitions.'
    ],
    challenges: 'Rendering complex product listings with high-resolution images and interactive elements led to performance bottlenecks, especially on lower-end devices.',
    solutions: 'Implemented lazy loading for images and components, optimized state management with React Context, and utilized memoization techniques to reduce unnecessary re-renders.',
    lessonsLearned: 'Performance optimization is crucial for e-commerce platforms. Understanding the trade-offs between rich interactivity and load times helped in making informed decisions about which features to prioritize and how to implement them efficiently.',
    githubUrl: 'https://github.com/Abhishekkumar2004/E-commerceWebApp',
    liveUrl: 'https://apnastorex.vercel.app/',
    image: E_Com_Home,
    gallery: [
      E_Com_Home,
      E_Com_Men,
      E_Com_Women,
      E_Com_Kids,
      E_com_Login
    ]
  },
  {
    id: 'Weather-App',
    title: 'Weather-App',
    subtitle: 'Real-Time Weather Forecasting',
    description: 'A sleek and responsive weather application that provides real-time weather updates, forecasts, and interactive visualizations for locations worldwide.',
    longDescription: 'This weather application is designed to deliver clean, accurate, and instant meteorological data to users across the globe. By integrating live data streams, the app gives users a quick look at current conditions alongside deeply detailed predictive data.The user interface prioritizes clean data visualization, transforming raw API metrics into easily digestible charts and interactive maps that adapt seamlessly to any device size.',
    techStack: ['ReactJS', 'JavaScript', 'CSS', 'OpenWeatherMap API'],
    features: [
      'Dynamic UI Changes: Real-time weather updates accompanied by dynamic background shifts that mirror the current outdoor conditions.',
      'Interactive Maps: Built-in weather mapping with smooth zoom and pan capabilities for global tracking.',
      'Deep-Dive Forecasts: Highly detailed hourly and weekly breakdowns displaying temperature trends, humidity levels, and wind speeds.',
      'Location Awareness: Seamless geolocating features to instantly serve local weather right upon loading.'
    ],
    challenges: 'Handling frequent API requests, managing asynchronous data states cleanly, and preventing UI flickering or stale data when users quickly switch between multiple global cities.',
    solutions: 'Implemented loading states and skeleton screens to maintain a smooth user experience during asynchronous API fetches.Optimized data fetching by implementing local caching strategies to reduce redundant API calls for recently searched locations.Handled edge cases like API rate limits and invalid city queries gracefully with user-friendly error boundaries and notifications.',
    lessonsLearned: 'Building this application highlighted the critical importance of graceful error handling and asynchronous state management when relying heavily on third-party APIs. It also provided deep insights into utilizing browser geolocation APIs effectively while respecting user privacy constraints.',
    githubUrl: 'https://github.com/Abhishekkumar2004/WeatherApp',
    liveUrl: 'https://weather-app-gamma-gules-66.vercel.app/',
    image: Weather_home,
    gallery: [
      Weather_home,
      weather_output
    ]
  },
  {
    id: "To-Do List",
    title: "To-Do Task Management App",
    subtitle: "Effortless Daily Task Management",
    description: "A lightweight, efficient, and highly responsive web application designed to help users organize, track, and complete their daily tasks seamlessly.",
    longDescription: "This application delivers a distraction-free environment for task management. Built purely with vanilla web technologies, it focuses on quick execution and high performance. Users can instantly add tasks, categorize items, track completion status, and persist their data across sessions. The layout is optimized to look elegant and operate smoothly on everything from small mobile screens to large desktop monitors.",
    techStack: ["HTML5", "JavaScript (ES6+)", "CSS3"],
    features: [
      "Persistent Data: Integrates with local storage to save user tasks natively, preventing data loss on page refreshes.",
      "Dynamic Task Tracking: Features interactive checkboxes and visual cues to seamlessly filter between active, completed, and pending tasks.",
      "Fluid Animations: Implements smooth transitions and micro-interactions for adding, completing, and deleting items.",
      "Intuitive UI: A clean, minimal UI design focusing entirely on task readability and accessible user actions."
    ],
    challenges: "Ensuring user data persists without requiring a database backend, while managing dynamic Document Object Model (DOM) updates cleanly without a heavy frontend framework like React.",
    solutions: "Utilized the browser's Local Storage API to stringify and parse JSON data structures seamlessly on load and save actions. Structured the application logic using clean vanilla JavaScript DOM manipulation patterns and event delegation to optimize event listeners and keep the runtime lightweight. Built conditional styling classes in CSS to handle empty states gracefully when no tasks are present.",
    lessonsLearned: "Developing this project deepened my understanding of core JavaScript principles, specifically DOM tree traversal and state synchronization with web storage. It proved that lightweight, framework-free approaches are often superior for utility-driven tools where minimal load times and zero dependencies are preferred.",
    githubUrl: "https://github.com/Abhishekkumar2004/TODO_LIST",
    liveUrl: "https://todo-list-ecru-iota-61.vercel.app/",
    image: To_Do_Home,
    gallery: [
      To_Do_Home,
      T0_Do_TaskList,
      To_DO_Filter
    ]
  },
  {
    id: "Christmas-Landing-Page",
    title: "Christmas Celebration Landing Page",
    subtitle: "Immersive Festive Web Experience",
    description: "A visually stunning, highly interactive landing page designed to celebrate the holiday season with fluid animations, custom audio integration, and a fully responsive festive UI.",
    longDescription: "This project delivers an engaging, festive digital experience built to capture the holiday spirit. It features highly responsive layouts decorated with modern CSS effects, interactive components, and beautifully timed transitions. The landing page incorporates micro-interactions and smooth scroll mechanics, ensuring that holiday greetings, countdowns, and event details perform flawlessly across both desktop and mobile screens.",
  techStack: ["HTML5", "CSS3", "JavaScript (ES6+)"],
  features: [
    "Interactive Elements: Implements custom JavaScript countdown clocks and toggleable holiday background music for an immersive experience.",
    "Festive Animations: Utilizes advanced CSS keyframes and canvas-based particle effects to simulate realistic falling snow without degrading performance.",
    "Fluid Layouts: Designed with a mobile-first approach using Flexbox and CSS Grid to ensure pixel-perfect presentation on all viewport sizes.",
    "Polished Typography & Theming: Features carefully curated festive color palettes, micro-interactions on call-to-action buttons, and smooth hover transitions."
  ],
  challenges: "Creating a rich visual experience with overlapping animations and particle effects (like falling snow) can easily cause layout shifts or performance lag on lower-end mobile devices.",
  solutions: "Optimized animation performance by utilizing hardware-accelerated CSS properties (`transform` and `opacity`) instead of modifying layout properties. Streamlined the JavaScript particle loop using `requestAnimationFrame` to ensure a steady 60 FPS, and optimized image assets to drastically minimize initial load times.",
  lessonsLearned: "Building this landing page emphasized the power of pure CSS for complex animations. I learned how to balance heavy visual storytelling with clean web performance, proving that you don't always need heavy frameworks to deliver a delightful and dynamic user experience.",
  githubUrl: "https://github.com/Abhishekkumar2004/Landing_Page",
  liveUrl: "https://octanet-may-lemon.vercel.app/",
  image: LandingPage_home,
  gallery: [
    LandingPage_home,
    LandingPage_home1,
    LandingPage_1,
    LandingPage_2,
    LandingPage_3,
    LandingPage_4
  ]
}
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    company: 'Unified Mentor Pvt Ltd',
    role: 'Frontend Development Intern (Online)',
    duration: '15 Aug 2025 - 15 Jan 2026',
    description: 'Completed a 6-month frontend development internship, building responsive web applications and modern user interfaces using HTML, CSS, JavaScript, React.js, and Bootstrap.',
    points: [
      'Developed responsive and mobile-friendly web pages using HTML5, CSS3, JavaScript, and React.js.',
      'Collaborated on frontend projects, implementing reusable UI components and improving user experience.',
      'Optimized website performance and ensured cross-browser compatibility following modern web development practices.'
    ]
  },
  {
    id: 'exp2',
    company: 'Codec Technology Pvt Ltd',
    role: 'Frontend Development Intern (Online)',
    duration: '15 Aug 2025 - 15 Sep 2025',
    description: 'Successfully completed a one-month online frontend development internship by developing responsive websites and interactive user interfaces.',
    points: [
      'Built responsive web pages using HTML, CSS, JavaScript, and Bootstrap.',
      'Implemented interactive UI components and improved website responsiveness.',
      'Completed assigned frontend development tasks while following clean coding standards.'
    ]
  },
  {
    id: 'exp3',
    company: 'OctaNet Pvt Ltd',
    role: 'Frontend Development Intern (Online)',
    duration: '1 May 2024 - 1 Jun 2024',
    description: 'Completed a one-month online internship focused on frontend development, responsive web design, and modern UI implementation.',
    points: [
      'Developed a responsive landing page and a To-Do List application.',
      'Applied HTML, CSS, JavaScript, and Bootstrap to create interactive web interfaces.',
      'Enhanced website usability through responsive layouts and clean, maintainable code.'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert1",
    title: "HTML Essential Training (2020)",
    issuer: "LinkedIn Learning",
    instructor: "Jen Simmons",
    date: "September 24, 2024",
    link: "https://www.linkedin.com/learning/certificates/25dc8872a610203285b866eeae05b26c7530467be1a91531618fae5f6d91a57a"
  },
  {
    id: "cert2",
    title: "CSS Essential Training (2023)",
    issuer: "LinkedIn Learning",
    instructor: "Christina Truong",
    date: "September 21, 2024",
    link: "https://www.linkedin.com/learning/certificates/5589878d6a04acca773692fd048d250866242935dd38d064e5c2f29be817b4b9"
  },
  {
    id: "cert3",
    title: "JavaScript Essential Training",
    issuer: "LinkedIn Learning",
    instructor: "Morten Rand-Hendriksen",
    date: "September 23, 2024",
    link: "https://www.linkedin.com/learning/certificates/8b747a526bbecdeaae96cbe5bb3181ed18a181a65931ea2d3ae9ef6e56fb6a69"
  },
  {
    id: "cert4",
    title: "Git Essential Training (2023)",
    issuer: "LinkedIn Learning",
    instructor: "Barbara Forbes",
    date: "September 28, 2024",
    link: "https://www.linkedin.com/learning/certificates/ac6cf8d47fad6ccab42a50afd3faa51664afea539128bfffc1a1a7686664c104"
  },
  {
    id: "cert5",
    title: "Search Techniques for Web Developers",
    issuer: "LinkedIn Learning",
    instructor: "Morten Rand-Hendriksen",
    date: "September 25, 2024",
    link: "https://www.linkedin.com/learning/certificates/98d05e62e9799d2871e575c951a9b6ca6186fdcabd91e4f919c7b32b0af6f3b4"
  }
];
