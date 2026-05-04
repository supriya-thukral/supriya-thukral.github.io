export const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

/** Burlington Photo Booth — public site and social */
export const BURLINGTON_PHOTO_BOOTH_URL = "https://burlingtonphotobooth.com/" as const;
export const BURLINGTON_PHOTO_BOOTH_INSTAGRAM_URL =
  "https://www.instagram.com/burlingtonphotobooth/" as const;

export const heroContent = {
  title: "Product-minded software developer building tools for real workflows.",
  subtitle:
    "I’m Supriya, a full-stack software developer and small business owner building workflow tools across SaaS, public safety, and creative business operations. I focus on turning messy, real-world processes into clear product experiences.",
  chips: [
    "0-to-1 product builder",
    "Small business operator",
    "Full-stack execution",
    "AI-assisted building",
  ],
};

export const aboutParagraphs = [
  "My path into product has been hands-on. At Rubicon, I built workflow tools for public safety teams working in complex, high-pressure environments. Through Burlington Photo Booth and my previous wedding photography business, I learned what it feels like to run a small business, sell online, explain an offer clearly, manage customers, and deal with messy operations behind the scenes.",
  "I’m now building Parva, a pre-launch CRM for creative service businesses, to bring those experiences together. The product is shaped by real workflow pain: scattered client details, manual follow-ups, disconnected files, and communication spread across too many tools.",
];

export const experienceItems = [
  {
    label: "0-to-1 Product",
    title: "Founder & Product Engineer, Parva",
    subtitle:
      "Pre-launch CRM for creative service businesses | March 2025 – Present",
    description:
      "Building a pre-launch CRM for creative service businesses to centralize client communication, project tracking, and file delivery. Owning product direction, MVP scoping, architecture, and implementation.",
    bullets: [
      "Identified recurring workflow gaps in creative service businesses, including scattered client communication, project details, files, and follow-ups.",
      "Defined core product workflows for contacts, projects, client intake, threaded messaging, and asset delivery.",
      "Built the full-stack application using Next.js, React, Node.js, Python, PostgreSQL, and AWS.",
      "Used Cursor and AI-assisted workflows to prototype faster while keeping product judgment, constraints, and tradeoffs human-led.",
    ],
    tags: ["Product thinking", "Workflow design", "AWS", "AI-assisted building"],
    productLens:
      "Turning firsthand service-business pain into a focused MVP, while choosing what to build now versus later.",
    currentFocus: "Client intake, project communication, and file delivery workflows.",
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
    label: "Small Business Operations",
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
    productLens:
      "Learned that buyer friction often comes from uncertainty, not just price.",
    relatedLinks: [
      { label: "Website", href: BURLINGTON_PHOTO_BOOTH_URL },
      { label: "Instagram", href: BURLINGTON_PHOTO_BOOTH_INSTAGRAM_URL },
    ],
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
    label: "Earlier Leadership",
    title: "Director of Sponsorship, DeltaHacks",
    subtitle: "McMaster annual hackathon",
    description:
      "Led sponsorship operations for McMaster’s annual hackathon during a fully remote event.",
    bullets: [
      "Secured $20,000+ in sponsorships.",
      "Built repeatable outreach and partner communication workflows.",
      "Led a distributed student team.",
    ],
    tags: ["Operations", "Partnerships", "Leadership"],
    productLens: "Built repeatable systems under constraints with limited resources.",
    /** Visually lighter card at end of Experience */
    isCompact: true,
  },
] as const;

export const projects = [
  {
    label: "Product in progress",
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
