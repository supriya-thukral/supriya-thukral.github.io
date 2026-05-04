export const NAV_ITEMS = {
  HOME: "Home",
  EXPERIENCE: "Experience",
  PROJECTS: "Projects",
  SKILLS: "Skills",
  EDUCATION: "Education",
  CONTACT: "Contact",
} as const;

export const NAV_SECTION_IDS = [
  "home",
  "experience",
  "projects",
  "skills",
  "contact",
] as const;

export const HERO_CONTENT = {
  TITLE: "Product-minded software developer building tools for real workflows.",
  SUBTITLE:
    "I’m Supriya, a full-stack software developer and small business owner. I build workflow tools across SaaS, public safety, and creative business operations, with a focus on turning messy, real-world processes into clear product experiences.",
  CALLOUTS: [
    "0-to-1 product builder",
    "Small business operator",
    "Full-stack execution",
  ],
  PRIMARY_CTA: "View Experience",
  SECONDARY_CTA: "Contact Me",
} as const;

export const ABOUT_CONTENT = {
  TITLE: "How I Build",
  PARAGRAPHS: [
    "My path into product has been hands-on. At Rubicon, I built workflow tools for public safety teams working in complex, high-pressure environments. Through Burlington Photo Booth and my previous wedding photography business, I learned what it feels like to run a small business, sell online, explain an offer clearly, manage customers, and deal with messy operations behind the scenes.",
    "I’m now building Parva, a pre-launch CRM for creative service businesses, to bring those experiences together. The product is shaped by real workflow pain: scattered client details, manual follow-ups, disconnected files, and communication spread across too many tools.",
  ],
} as const;

export interface ExperienceItem {
  title: string;
  subtitle: string;
  description: string;
  bullets?: string[];
  tags?: string[];
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    title: "Founder & Product Engineer, Parva",
    subtitle:
      "Pre-launch CRM for creative service businesses | March 2025 – Present",
    description:
      "Building a pre-launch CRM for creative service businesses to centralize client communication, project tracking, and file delivery. I own product direction, MVP scoping, architecture, and implementation.",
    bullets: [
      "Identified recurring workflow gaps in creative service businesses, including scattered client communication, project details, files, and follow-ups.",
      "Defined core product workflows for contacts, projects, client intake, threaded messaging, and asset delivery.",
      "Built the full-stack application using Next.js, React, Node.js, Python, PostgreSQL, and AWS.",
      "Used Cursor and AI-assisted workflows to prototype faster while keeping product judgment, constraints, and tradeoffs human-led.",
    ],
    tags: [
      "Product thinking",
      "Workflow design",
      "AWS",
      "AI-assisted building",
    ],
  },
  {
    title: "Full-Stack Software Developer (Lead Frontend), Rubicon",
    subtitle: "Public safety workflow tools | Sep 2023 – Jan 2025",
    description:
      "Built public safety workflow tools used by law enforcement teams to improve report intake, officer workflows, search, mapping, and information management.",
    bullets: [
      "Helped take rubiMESSAGE from problem to shipped product, giving non-emergency calltakers a faster way to send citizens the correct online report link by SMS.",
      "Led development of citizen- and officer-facing reporting workflows, including SMS flow, report assignment, and camera registry tools.",
      "Redesigned search and filtering workflows with Google-style search, view toggles, and contextual drawers.",
      "Improved mapping and address workflows with multi-address support, dynamic pin loading, and Google Maps autocomplete.",
      "Reduced app load time from 120 seconds to under 5 seconds through background loading, asset optimization, and endpoint improvements.",
    ],
    tags: ["Workflow design", "React", "TypeScript", "Public safety"],
  },
  {
    title: "Co-Founder & Small Business Owner, Burlington Photo Booth",
    subtitle: "Premium event photo booth business | June 2023 – Present",
    description:
      "Operate a premium photo booth business serving weddings, corporate events, galas, schools, and private celebrations across Southern Ontario.",
    bullets: [
      "Manage client intake, proposals, contracts, timelines, event logistics, vendor communication, and gallery delivery.",
      "Built and refined service packages, add-ons, preferred venue perks, and client communication workflows to improve booking clarity and operational consistency.",
      "Added clearer package information and built a package-fit tool to help clients understand active booth hours, paused time, customization, and total cost.",
      "Translated firsthand business operations into Parva product decisions around client management, project workflows, communication history, and file delivery.",
    ],
    tags: ["Small business", "Customer empathy", "Workflow design"],
  },
  {
    title: "Full-Stack Software Developer, Forma.ai",
    subtitle: "Sales compensation platform | May 2022 – Aug 2023",
    description:
      "Built internal platform tools that helped customer-facing teams configure compensation dashboards faster and with less engineering dependency.",
    bullets: [
      "Built Django models, REST APIs, and PostgreSQL schema updates to support configurable dashboard workflows and improve data integrity.",
      "Reduced dashboard creation time from 6 months to 2 months by building standardized templates and self-service configuration tooling.",
      "Collaborated with engineers, customer-facing teams, and product stakeholders during sprint planning, code reviews, and architecture discussions.",
    ],
  },
  {
    title: "Director of Sponsorship, DeltaHacks",
    subtitle: "McMaster annual hackathon",
    description:
      "Led sponsorship strategy for McMaster’s annual hackathon, securing over $20,000 in sponsorships and coordinating partnerships with tech companies during a fully remote event.",
  },
];

export const SKILLS_GROUPS = [
  {
    title: "Product & Builder Skills",
    skills: [
      "Product management",
      "MVP scoping",
      "Workflow design",
      "Problem discovery",
      "Prototyping",
      "Technical tradeoffs",
      "Customer and user empathy",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "ShadCN",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "Node.js",
      "Python",
      "Django",
      "SQL",
      "PostgreSQL",
      "Rust",
    ],
  },
  {
    title: "Tools",
    skills: [
      "AWS",
      "Git",
      "GitHub Actions",
      "Cursor",
      "Jest",
      "OpenAPI",
    ],
  },
] as const;

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  whatItShows?: string;
}

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    title: "Parva",
    description:
      "A pre-launch CRM for creative service businesses that centralizes client intake, project communication, and file delivery. Built from firsthand experience running a service business and seeing how quickly client details, notes, follow-ups, and files become scattered.",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
      "AWS",
    ],
    whatItShows: "What it shows: 0-to-1 product building from workflow pain.",
  },
  {
    title: "rubiMESSAGE",
    description:
      "An SMS workflow tool for public safety teams that helps non-emergency calltakers send citizens the correct online report link while clearing phone lines faster. I helped shape the workflow, build the frontend experience, connect backend APIs, and think through the product feedback loop.",
    tags: [
      "React",
      "TypeScript",
      "Rust APIs",
      "Public Safety",
      "Workflow Design",
    ],
    whatItShows: "What it shows: shipping in high-stakes operational contexts.",
  },
  {
    title: "Photo Booth Package-Fit Tool",
    description:
      "A decision-support tool that helps event clients input event details and understand which package structure makes sense based on active booth hours, paused time, customization, and total cost. Built to reduce buyer uncertainty and make the sales process clearer.",
    tags: ["Client Intake", "Commerce", "Workflow Design", "Small Business"],
    whatItShows:
      "What it shows: translating real buyer questions into clearer product decisions.",
  },
];

export const EDUCATION_CONTENT = {
  SCHOOL: "McMaster University",
  DEGREE: "Bachelor of Science",
  COURSES: [
    "Data Structures and Algorithms",
    "Databases",
    "Software Development Practice",
    "Design Sprint Methodologies",
  ],
} as const;

export const CONTACT_CONTENT = {
  TITLE: "Want to connect?",
  BODY: "I’m interested in product, software, AI-assisted building, and tools that make real business workflows clearer.",
  EMAIL: "hello@supriyathukral.com",
  FOOTER_CREDIT: "Built by Supriya Thukral",
} as const;
