
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  role: string;
  achievements: string[];
  link?: string;
  github?: string;
  image: string;
  category: 'Banking' | 'Judiciary' | 'Enterprise' | 'Web' | 'Mobile';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
  icon: string;
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
}
