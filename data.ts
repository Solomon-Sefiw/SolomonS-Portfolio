
import { Project, Experience, SkillCategory, Award } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Court Case Management System',
    description: 'An ERP-based digital workflow for courts including E-Filing and Transcription.',
    longDescription: 'Developed a comprehensive system for judicial efficiency, featuring Electronic Filing, Human Capital Management, and secure digital workflows. Certified by the Waghimra Administration Zone High Court.',
    techStack: ['ASP.NET Core', 'SQL Server', 'React', 'TypeScript'],
    role: 'Lead Full-Stack Developer',
    achievements: ['Automated court documentation', 'Digitized over 10,000 case files', 'Reduced processing time by 40%'],
    image: 'https://picsum.photos/seed/court/800/600',
    category: 'Judiciary'
  },
  {
    id: '2',
    title: 'Shareholder Management System',
    description: 'Secure enterprise system for managing bank shareholder data and dividends.',
    techStack: ['C#', 'ASP.NET Web API', 'Oracle', 'MUI'],
    role: 'Full-Stack Developer',
    achievements: ['Optimized dividend calculations', 'Implemented multi-layer security'],
    image: 'https://picsum.photos/seed/bank1/800/600',
    category: 'Banking'
  },
  {
    id: '3',
    title: 'Inter-Bank Reconciliation Tool',
    description: 'High-precision tool for reconciling daily banking transactions between institutions.',
    techStack: ['C#', 'Entity Framework', 'SQL Server', 'React'],
    role: 'Senior Developer',
    achievements: ['Integrated with 5+ national banks', 'Automated discrepancy detection'],
    image: 'https://picsum.photos/seed/bank2/800/600',
    category: 'Banking'
  },
  {
    id: '4',
    title: 'Court Transcription System',
    description: 'Automates conversion of audio/video proceedings into searchable text.',
    techStack: ['Python', 'ASP.NET Core', 'WebSockets', 'React'],
    role: 'Lead Architect',
    achievements: ['Real-time transcription', 'Cross-referenced evidence logging'],
    image: 'https://picsum.photos/seed/audio/800/600',
    category: 'Judiciary'
  }
];

export const experience: Experience[] = [
  {
    id: 'exp1',
    role: 'Full-Stack Developer',
    company: 'Berhan Bank SC',
    period: '2022 - Present',
    description: [
      'Developed and enhanced 27+ production-ready banking systems.',
      'Specialized in security-critical and high-availability environments.',
      'Integrated LDAP and social logins for enterprise applications.',
      'Built robust APIs using ASP.NET Core and Oracle DB.'
    ]
  },
  {
    id: 'exp2',
    role: 'Software Developer (Contract)',
    company: 'Waghimra Administration Zone High Court',
    period: '2023 - 2024',
    description: [
      'Engineered ERP-based Court Case Management Systems.',
      'Implemented Digital Letter Management and Transcription tools.',
      'Received official certification for digital transformation excellence.'
    ]
  },
  {
    id: 'exp3',
    role: 'Service Desk Specialist',
    company: 'Berhan Bank SC',
    period: '2022 (3 Months)',
    description: [
      'Provided critical IT support and system maintenance.',
      'Ensured high uptime for core banking services.'
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'fa-code',
    skills: [
      { name: 'React / Vite', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Material UI / Tailwind', level: 95 },
      { name: 'Redux Toolkit', level: 85 }
    ]
  },
  {
    title: 'Backend',
    icon: 'fa-server',
    skills: [
      { name: 'ASP.NET Core Web API', level: 95 },
      { name: 'C# / Entity Framework', level: 92 },
      { name: 'Node.js', level: 80 },
      { name: 'LDAP / OAuth2', level: 88 }
    ]
  },
  {
    title: 'Database & Mobile',
    icon: 'fa-database',
    skills: [
      { name: 'SQL Server / Oracle', level: 90 },
      { name: 'Flutter / Capacitor', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'PWA Development', level: 88 }
    ]
  }
];

export const awards: Award[] = [
  { title: 'Digital Transformation Excellence', issuer: 'Waghimra Zone High Court', year: '2024' },
  { title: 'Secure Software Development Certificate', issuer: 'Berhan Bank', year: '2023' },
  { title: 'Programming Fundamentals', issuer: 'Udacity', year: '2022' }
];
