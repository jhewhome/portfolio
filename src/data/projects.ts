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
  status: 'Live' | 'In Progress' | 'Completed' | 'Prototype';
}

export const projects: Project[] = [
  {
    slug: 'ahop',
    title: 'AHOP — Graduate Research Project',
    summary:
      'Graduate school web system at ahop.jhewhome.xyz — full-stack design, database architecture, and user-centered workflows.',
    description:
      'AHOP is my current graduate school project: a complete web-based system deployed at ahop.jhewhome.xyz. It covers requirements analysis, database design, PHP application architecture, and practical user workflows. Kept on a dedicated subdomain so academic work stays organized alongside my personal portfolio.',
    tags: ['Graduate Research'],
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    href: 'https://ahop.jhewhome.xyz',
    featured: true,
    status: 'Live',
  },
  {
    slug: 'glycemic-dss',
    title: 'Diabetic Glycemic Clinical Decision Support System',
    summary:
      'MSIT thesis-support prototype — Python analytics and decision-support logic for glycemic monitoring, trends, and risk insights.',
    description:
      'A separate project from AHOP, focused on a glycemic clinical decision support system (CDSS). The first prototype was built in Python on Google Colab for exploratory analysis, visualization, and DSS rule prototyping. Ongoing development continues in the GitHub repository, with the goal of structured health data capture, analytics, and decision-support outputs — using privacy-safe demo data and clear non-medical disclaimers.',
    tags: ['Graduate Research', 'Analytics'],
    stack: ['Python', 'Pandas', 'Google Colab', 'Data visualization', 'Clinical decision support'],
    github: 'https://github.com/jhewhome/glycemic-cdss',
    featured: true,
    status: 'Prototype',
  },
  {
    slug: 'barangay-integrated-system',
    title: 'Barangay Integrated System (BIS + BHC)',
    summary:
      'Unified barangay operations for Balong Bato — resident records (BIS) integrated with health center workflows (BHC): queues, registry, and reporting.',
    description:
      'A capstone-style integration project combining Gawad BIS (ASP.NET Core / MongoDB) and Barangay Health Center System (PHP / MySQL) for Barangay Balong Bato, San Juan City. Features include SSO, resident-to-patient handoff, staff sync, and medicine inventory integration. Demonstrated locally; full source and documentation are on GitHub.',
    tags: ['Freelance', 'Industry'],
    stack: ['PHP', 'MySQL', '.NET 8', 'MongoDB', 'C#', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/jhewhome/barangay-integrated-system',
    featured: true,
    status: 'Completed',
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
    featured: false,
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
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
