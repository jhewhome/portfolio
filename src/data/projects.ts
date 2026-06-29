export type ProjectTag = 'Graduate Research' | 'Freelance' | 'Teaching' | 'Industry' | 'Analytics';

export const projectTagIcons: Record<ProjectTag, string> = {
  'Graduate Research': 'research',
  Freelance: 'freelance',
  Teaching: 'teaching',
  Industry: 'industry',
  Analytics: 'analytics',
};

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
    title: 'AHOP — Healthcare Information System',
    summary:
      'A graduate research HIS built on Snipe-IT (Laravel 11) — patient records, OPD queue, lab, billing, supplies, and clinical analytics. Live on GCP.',
    description:
      'AHOP is a healthcare information system built as a customization of the open-source Snipe-IT asset management platform (Laravel 11). It extends Snipe-IT with integrated clinical workflows: patient registration and EMR-lite records; Outpatient Department (OPD) visits and queue management; appointment scheduling and reception check-in; laboratory orders and results; billing and payment tracking; medical equipment and supplies management via the Snipe-IT assets module; and a clinical dashboard with analytics and operational reports. The system is deployed on Google Cloud Platform for demonstration and supports local development on XAMPP (Windows). Source code is version-controlled on GitHub.',
    tags: ['Graduate Research'],
    stack: ['Laravel 11', 'PHP', 'MySQL', 'Snipe-IT', 'GCP', 'HTML', 'CSS', 'JavaScript'],
    href: 'https://ahop.jhewhome.xyz',
    github: 'https://github.com/jhewhome/ahop-snipe-it',
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
      'Client websites, custom PHP apps, WordPress administration, and SEO — delivered across multiple niches and industries.',
    description:
      'Years of hands-on freelance and BPO work building and maintaining client websites, internal tools, and ongoing web engagements. Projects span landing pages, corporate sites, custom PHP/MySQL applications, and WordPress sites across various niches — including theme customization, plugin setup, content updates, and day-to-day site administration. Also provided SEO support: on-page optimization, technical fixes, metadata, and performance improvements to help niche sites rank and convert better. Client names available on request.',
    tags: ['Freelance', 'Industry'],
    stack: ['PHP', 'MySQL', 'WordPress', 'SEO', 'HTML', 'CSS', 'JavaScript', 'Web administration'],
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
