export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  challenges: string;
  solutions: string;
  lessonsLearned: string;
  githubUrl: string;
  liveUrl: string;
  image: string;
  gallery: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  points: string[];
}

export interface Skill {
  name: string;
  icon: string; // Lucide icon name or emoji
  category: 'frontend' | 'backend' | 'tools';
  proficiency: number; // Percentage level (e.g., 95)
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}
