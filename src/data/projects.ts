export type ProjectTag = 'Graduate Research' | 'Freelance' | 'Teaching' | 'Industry' | 'Analytics';

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: ProjectTag[];
  stack: string[];
  href?: string;
  github?: string;
  featured: boolean;
  status: 'Live' | 'In Progress' | 'Completed';
}

export const projects: Project[] = [
  {
    slug: 'ahop',
    title: 'AHOP — Graduate Research Project',
    summary:
      'Master\'s research system hosted at ahop.jhewhome.xyz — a hands-on capstone demonstrating full-stack design and implementation.',
    description:
      'AHOP is my MSIT graduate research project, built as a complete web-based system. It reflects my approach to requirements analysis, database design, PHP application architecture, and user-centered workflows. The live deployment runs on a dedicated subdomain to keep academic work organized alongside my personal portfolio.',
    tags: ['Graduate Research'],
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    href: 'https://ahop.jhewhome.xyz',
    featured: true,
    status: 'Live',
  },
  {
    slug: 'bhc-system',
    title: 'Barangay Health Center System',
    summary:
      'A clinic operations web app for patient registration, queue management, clinical records, and reporting.',
    description:
      'Full-stack health center management system with role-based access for staff, doctors, and coordinators. Includes patient registry, queue tickets, consultations, medicine dispensing, appointments, and operational reports.',
    tags: ['Teaching', 'Freelance'],
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    featured: true,
    status: 'In Progress',
  },
  {
    slug: 'freelance-web-projects',
    title: 'BPO & Freelance Web Projects',
    summary:
      'Delivered web-based solutions across multiple domains — from landing pages to custom PHP applications.',
    description:
      'Years of hands-on freelance and BPO work building client websites, internal tools, and maintenance engagements. Projects span e-commerce layouts, corporate sites, and custom CRUD applications. Client names available on request.',
    tags: ['Freelance', 'Industry'],
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'WordPress'],
    featured: true,
    status: 'Completed',
  },
  {
    slug: 'ui-ux-industry',
    title: 'Senior Front-End UI/UX Work',
    summary:
      'Product-level interface development for a Korean technology company — design systems, components, and polished UX.',
    description:
      'As Senior Front-End UI/UX Developer, I translated designs into production-ready interfaces, collaborated with cross-functional teams, and maintained high standards for usability and visual consistency. Specific product details available in private discussions.',
    tags: ['Industry'],
    stack: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Component patterns'],
    featured: false,
    status: 'Completed',
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics & Research',
    summary:
      'MSIT coursework and research exploring data-driven insights — dashboards, analysis, and academic writing.',
    description:
      'As part of my MSIT specialization in data analytics, I am developing skills in exploratory analysis, visualization, and research methodology to complement my software engineering background. New portfolio pieces will be added as coursework completes.',
    tags: ['Analytics', 'Graduate Research'],
    stack: ['SQL', 'Python', 'Data visualization', 'Research methods'],
    featured: false,
    status: 'In Progress',
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
