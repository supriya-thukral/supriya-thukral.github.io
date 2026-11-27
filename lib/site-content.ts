import { SOCIAL_PROFILE_LABELS, SOCIAL_PROFILE_URLS } from "@/lib/constants";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const socialLinks = [
  {
    id: "linkedin",
    label: SOCIAL_PROFILE_LABELS.LINKEDIN,
    href: SOCIAL_PROFILE_URLS.LINKEDIN,
  },
  {
    id: "github",
    label: SOCIAL_PROFILE_LABELS.GITHUB,
    href: SOCIAL_PROFILE_URLS.GITHUB,
  },
] as const;

/** Burlington Photo Booth — public site and social */
export const BURLINGTON_PHOTO_BOOTH_URL = "https://burlingtonphotobooth.com/" as const;
export const BURLINGTON_PHOTO_BOOTH_INSTAGRAM_URL =
  "https://www.instagram.com/burlingtonphotobooth/" as const;

export const heroContent = {
  title: "Building products, businesses and meaningful experiences.",
  subtitle:
    "I’m Supriya, a software developer, entrepreneur and creative professional with experience in technology, communications and business operations. I enjoy solving real-world problems, whether through software, digital experiences or bringing people together.",
  chips: [
    "0-to-1 product builder",
    "Small business operator",
    "Events & communications",
    "Full-stack & AI development",
  ],
};

export const aboutParagraphs = [
  "My path into product has been hands-on. At Rubicon, I built workflow tools for public safety teams working in complex, high-pressure environments. Through Burlington Photo Booth and my previous wedding photography business, I learned what it feels like to run a small business, sell online, explain an offer clearly, manage customers, and deal with messy operations behind the scenes.",
  "Before working in software, I coordinated research events and communications at Spark, McMaster University, and led sponsorship outreach for DeltaHacks. I later brought my service-business experience into Parva, a CRM project for creative businesses. Across these roles, I have enjoyed building practical systems, communicating clearly and working with people.",
];

export const experienceItems = [
  {
    label: "Small Business Operations",
    title: "Co-Founder & Small Business Owner, Burlington Photo Booth",
    subtitle: "Premium event photo booth business | June 2023 – Present",
    description:
      "Operate a premium photo booth business serving weddings, corporate events, galas, schools, and private celebrations across Southern Ontario.",
    bullets: [
      "Supported 75+ corporate, community and private events in 2026 through November, coordinating timelines, staffing, equipment, venue logistics and gallery delivery.",
      "Manage client and vendor communications, proposals, contracts and approvals through HoneyBook.",
      "Create branded graphics, event photography, short-form videos and social content; manage website content, local SEO and digital marketing.",
      "Supported events for organizations including Halton Healthcare, Emterra, Appleby College and Ramudden.",
      "Built and refined service packages, add-ons, preferred venue perks, and client communication workflows to improve booking clarity and operational consistency.",
      "Added clearer package information and built a package-fit tool to help clients understand active booth hours, paused time, customization, and total cost.",
      "Translated firsthand business operations into Parva product decisions around client management, project workflows, communication history, and file delivery.",
    ],
    tags: ["Small business", "Customer empathy", "Workflow design"],
    productLens:
      "Learned that buyer friction often comes from uncertainty, not just price.",
    relatedLinks: [
      { label: "Website", href: BURLINGTON_PHOTO_BOOTH_URL },
      { label: "Instagram", href: BURLINGTON_PHOTO_BOOTH_INSTAGRAM_URL },
    ],
  },
  {
    label: "0-to-1 Product",
    title: "Founder & Product Engineer, Parva",
    subtitle:
      "CRM project for creative service businesses | 2025 – 2026",
    description:
      "Developed a CRM prototype for creative service businesses to centralize client communication, project tracking and file delivery. Led product direction, MVP scoping, architecture and implementation.",
    bullets: [
      "Identified recurring workflow gaps in creative service businesses, including scattered client communication, project details, files, and follow-ups.",
      "Defined core product workflows for contacts, projects, client intake, threaded messaging, and asset delivery.",
      "Built the full-stack application using Next.js, React, Node.js, Python, PostgreSQL, and AWS.",
      "Used Cursor and AI-assisted workflows to prototype faster while keeping product judgment, constraints, and tradeoffs human-led.",
    ],
    tags: ["Product thinking", "Workflow design", "AWS", "AI-assisted building"],
    productLens:
      "Turning firsthand service-business pain into a focused MVP, while choosing what to build now versus later.",
    projectFocus: "Client intake, project communication, and file delivery workflows.",
  },
  {
    label: "Shipped Workflow Tool",
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
      "Represented Rubicon at IACP, demoing public safety tools and hearing firsthand how agencies evaluate reporting workflows and operational friction.",
    ],
    tags: ["Workflow design", "React", "TypeScript", "Public safety"],
    productLens:
      "Designed for a live-call environment where speed, clarity, and low cognitive load mattered.",
  },
  {
    label: "Internal Platform Tools",
    title: "Full-Stack Software Developer, Forma.ai",
    subtitle: "Sales compensation platform | May 2022 – Aug 2023",
    description:
      "Built internal platform tools that helped customer-facing teams configure compensation dashboards faster and with less engineering dependency.",
    bullets: [
      "Built Django models, REST APIs, and PostgreSQL schema updates to support configurable dashboard workflows and improve data integrity.",
      "Reduced dashboard creation time from 6 months to 2 months by building standardized templates and self-service configuration tooling.",
      "Collaborated with engineers, customer-facing teams, and product stakeholders during sprint planning, code reviews, and architecture discussions.",
    ],
    tags: ["Platform tools", "Internal enablement", "Django", "PostgreSQL"],
    productLens:
      "Built internal tools that reduced dependency on engineering and helped teams move faster.",
  },
  {
    label: "Events & Communications",
    title: "Events and Communications Assistant, Spark — McMaster University",
    subtitle: "Faculty of Social Sciences | Sep 2020 – Sep 2021",
    description:
      "Supported research communications, community outreach and event programming during the centre’s transition from CRESS to Spark.",
    bullets: [
      "Produced biweekly newsletters in Mailchimp, maintained website and social media content, and created promotional graphics and video content.",
      "Coordinated speaker outreach, event scheduling, registration and virtual event logistics; supported a workshop series that reached 560 attendees during the 2020–2021 reporting year.",
      "Contributed to the annual report, documented event workflows and trained incoming staff on communications processes.",
    ],
    tags: ["Mailchimp", "Canva", "Event coordination", "Digital communications"],
    productLens: "Used clear communications and repeatable workflows to make research events easier to discover and deliver.",
  },
  {
    label: "Creative Entrepreneurship",
    title: "Owner & Lead Photographer, Chasing Moments",
    subtitle: "Wedding photography business | Dec 2015 – Dec 2023",
    description: "Built and operated a wedding photography business serving couples and families across Ontario.",
    bullets: [
      "Managed inquiries, bookings, contracts, event timelines, photography and gallery delivery.",
      "Built an online presence across the website, Instagram and Facebook; used CRM and social media tools to support marketing and client communication.",
      "Expanded services to include videography and refined packages based on client needs.",
    ],
    tags: ["Photography", "Lightroom", "Visual storytelling", "Digital marketing"],
    productLens: "Learned how client experience, clear expectations and visual storytelling build trust.",
  },
  {
    label: "Earlier Leadership",
    title: "VP of Sponsorship, DeltaHacks",
    subtitle: "McMaster annual hackathon | Jun 2021 – May 2022",
    description:
      "Led sponsorship operations for McMaster’s annual hackathon during a fully remote event.",
    bullets: [
      "Secured $20,000+ in sponsorships.",
      "Built repeatable outreach and partner communication workflows.",
      "Led a distributed student team.",
      "Additional community leadership: President, McMaster Observatory Outreach at Night; VP of Knowledge Translation Committee, COPE McMaster.",
    ],
    tags: ["Operations", "Partnerships", "Leadership"],
    productLens: "Built repeatable systems under constraints with limited resources.",
    /** Visually lighter card at end of Experience */
    isCompact: true,
  },
] as const;

export const projects = [
  {
    label: "Research communications",
    title: "Spark — Research Events & Outreach",
    problem: "Researchers and community members needed accessible ways to discover events and engage with social research.",
    built: "Newsletter campaigns, digital content, promotional graphics and repeatable speaker and event coordination workflows.",
    decisionTradeoff: "Combined clear communication with practical event processes; the centre’s workshop series reached 560 attendees during the 2020–2021 reporting year.",
    tags: ["Communications", "Mailchimp", "Events", "Community outreach"],
  },
  {
    label: "Business operations",
    title: "Burlington Photo Booth",
    problem: "Event clients need reliable coordination, a clear booking process and a polished guest experience.",
    built: "Client workflows, branded event experiences, digital marketing and venue relationships supporting 75+ events in 2026 through November.",
    decisionTradeoff: "Standardized the operational process while preserving personalized creative details for each event.",
    tags: ["Events", "Entrepreneurship", "CRM", "Digital marketing"],
    relatedLinks: [{ label: "Website", href: BURLINGTON_PHOTO_BOOTH_URL }, { label: "Instagram", href: BURLINGTON_PHOTO_BOOTH_INSTAGRAM_URL }],
  },
  {
    label: "Previous CRM project",
    title: "Parva",
    problem:
      "Creative service businesses often manage client details, messages, files, and follow-ups across too many places.",
    built:
      "Pre-launch CRM workflows for client intake, projects, communication, and file delivery.",
    decisionTradeoff:
      "Focused the MVP on the core client/project workflow before adding broader CRM complexity.",
    tags: ["Product thinking", "Client intake", "Workflow design", "Full-stack"],
  },
  {
    label: "Shipped workflow tool",
    title: "rubiMESSAGE",
    problem:
      "Non-emergency calltakers needed to clear phone lines while routing citizens to the correct report.",
    built:
      "SMS workflow for sending the right online report link during a live call.",
    constraint:
      "The workflow had to be fast enough for a calltaker to use while still on the phone, and clear enough for a citizen to act on without extra explanation.",
    decisionTradeoff:
      "Kept the workflow fast and simple so it could work in a high-volume calltaker environment.",
    tags: ["Workflow design", "Public safety", "React", "TypeScript"],
  },
  {
    label: "Commerce friction",
    title: "Photo Booth Package-Fit Tool",
    problem:
      "Event clients were unsure which package, active hours, paused time, and customization options they needed.",
    built:
      "Decision-support tool that helps clients understand package fit and estimated cost.",
    decisionTradeoff:
      "Made package logic more transparent without overwhelming clients with every operational detail.",
    tags: ["Commerce", "Customer empathy", "Small business", "Client intake"],
    relatedLinks: [
      { label: "Live site", href: BURLINGTON_PHOTO_BOOTH_URL },
      { label: "Instagram", href: BURLINGTON_PHOTO_BOOTH_INSTAGRAM_URL },
    ],
  },
  {
    label: "AI-assisted workflow",
    title: "Automated PDF Processing",
    problem:
      "Crime analysts received PDFs from other agencies and had to manually extract, summarize, organize, and circulate information.",
    built:
      "An end-to-end PDF upload workflow that extracted text and images, generated structured descriptions and tags, and surfaced results for analyst review and editing.",
    decisionTradeoff:
      "Kept humans in the loop so analysts could verify and refine generated outputs instead of blindly trusting automation.",
    whatThisShows:
      "AI-assisted workflow design, operational efficiency, and judgment around human-in-the-loop review.",
    tags: ["AI-assisted workflow", "Human-in-the-loop", "Operational tools", "Public safety"],
  },
] as const;

export const skillGroups = [
  {
    title: "Marketing & Communications",
    skills: ["Mailchimp", "Canva", "Adobe Lightroom", "WordPress", "SEO", "Newsletter production", "Social media", "Photography & video"],
  },
  {
    title: "Events & Business Operations",
    skills: ["Event logistics", "HoneyBook CRM", "Vendor relations", "Sponsorship outreach", "Stakeholder engagement", "Client experience"],
  },
  {
    title: "Product Judgment",
    skills: [
      "Product management",
      "MVP scoping",
      "Workflow design",
      "Problem discovery",
      "Prototyping",
      "Customer empathy",
    ],
  },
  {
    title: "Technical Execution",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "API design"],
  },
  {
    title: "AI / Tools",
    skills: ["Cursor", "AI-assisted prototyping", "AWS", "GitHub Actions", "OpenAPI"],
  },
] as const;
