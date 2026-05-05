import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  aboutParagraphs,
  BURLINGTON_PHOTO_BOOTH_INSTAGRAM_URL,
  BURLINGTON_PHOTO_BOOTH_URL,
  experienceItems,
  heroContent,
  navItems,
  projects,
  socialLinks,
  skillGroups,
} from "@/lib/site-content";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";

const experienceLogoMap = {
  "Full-Stack Software Developer (Lead Frontend), Rubicon": "/images/Rubicon.png",
  "Full-Stack Software Developer, Forma.ai": "/images/FormaLogo.png",
  "Director of Sponsorship, DeltaHacks": "/images/Deltahacks.png",
} as const;

export default function Home() {
  return (
    <>
      <SiteHeader navItems={navItems} socialLinks={socialLinks} />
      <main className="mx-auto w-full max-w-[1180px] px-4 pb-16 pt-8 sm:px-6 md:pt-10">
        <section id="home" className="mb-14 scroll-mt-28 md:mb-24">
          <Card>
            <CardContent className="grid gap-6 p-5 pt-5 md:grid-cols-[minmax(0,1fr)_300px] md:items-center md:gap-7 md:p-6 lg:gap-8 lg:p-7">
              <div className="order-2 max-w-[680px] md:order-1">
                <h1 className="mb-4 max-w-[17ch] text-[clamp(2.5rem,5vw,4.1rem)] font-[650] leading-[1.02] tracking-[-0.04em] text-(--color-text)">
                  {heroContent.title}
                </h1>
                <p className="prose-copy mb-6">{heroContent.subtitle}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {heroContent.chips.map((chip) => (
                    <Badge key={chip}>{chip}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="#experience">View Experience</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#projects">Selected Projects</a>
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <Card className="h-full border-(--color-border) bg-white shadow-none hover:translate-y-0 hover:border-(--color-border) hover:shadow-none">
                  <CardContent className="space-y-4 p-5 pt-5">
                    <div className="flex items-center gap-3 border-b border-(--color-border) pb-3">
                      <div className="h-16 w-16 overflow-hidden rounded-full border border-(--color-border) bg-white">
                        <Image
                          src="/images/SupriyaThukral.jpg"
                          alt="Portrait of Supriya Thukral, product-minded software developer"
                          className="h-full w-full object-cover"
                          width={64}
                          height={64}
                          priority
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-(--color-text)">
                          Builder Snapshot
                        </p>
                        <p className="text-sm text-(--color-text-muted)">
                          Workflow tools & operator insight
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-(--color-accent)">
                          Currently building
                        </p>
                        <p className="font-semibold text-(--color-text)">Parva</p>
                        <p className="text-(--color-text-secondary)">
                          Pre-launch CRM for creative service businesses
                        </p>
                      </div>
                      <div>
                        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-(--color-accent)">
                          Operator insight
                        </p>
                        <p className="font-semibold text-(--color-text)">
                          Burlington Photo Booth
                        </p>
                        <p className="text-(--color-text-secondary)">
                          Client intake, packages, timelines, and gallery delivery
                        </p>
                        <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                          <a
                            href={BURLINGTON_PHOTO_BOOTH_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center text-sm font-medium text-(--color-accent) underline underline-offset-2 hover:text-(--color-primary) focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
                            title="Burlington Photo Booth website (opens in new tab)"
                          >
                            burlingtonphotobooth.com
                          </a>
                          <a
                            href={BURLINGTON_PHOTO_BOOTH_INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center text-sm font-medium text-(--color-accent) underline underline-offset-2 hover:text-(--color-primary) focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
                            title="Burlington Photo Booth on Instagram (opens in new tab)"
                          >
                            Instagram
                          </a>
                        </p>
                      </div>
                      <div>
                        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-(--color-accent)">
                          Product focus
                        </p>
                        <p className="font-semibold text-(--color-text)">Workflow clarity</p>
                        <p className="text-(--color-text-secondary)">
                          Turning messy operations into usable tools
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-14 scroll-mt-28 md:mb-24" id="about">
          <p className="section-label mb-3">About</p>
          <h2 className="mb-5 text-[clamp(2rem,3vw,3.2rem)] leading-none">How I Build</h2>
          <Card>
            <CardContent className="space-y-6 p-7 pt-7 lg:p-10">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="prose-copy">
                  {paragraph}
                </p>
              ))}
              <div className="grid gap-3 pt-1 md:grid-cols-3">
                {[
                  {
                    title: "Observe workflow pain",
                    description: "Learn where the real friction is.",
                  },
                  {
                    title: "Scope the first useful version",
                    description: "Decide what matters now versus later.",
                  },
                  {
                    title: "Build, test, and refine",
                    description: "Prototype quickly with product judgment.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-(--color-border) bg-(--color-bg-soft) p-4"
                  >
                    <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-(--color-accent)">
                      {item.title === "Observe workflow pain"
                        ? "01"
                        : item.title === "Scope the first useful version"
                          ? "02"
                          : "03"}
                    </p>
                    <p className="mb-1 text-sm font-semibold text-(--color-text)">{item.title}</p>
                    <p className="text-sm text-(--color-text-secondary)">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="experience" className="mb-14 scroll-mt-28 md:mb-24">
          <p className="section-label mb-3">Experience</p>
          <h2 className="mb-5 text-[clamp(2rem,3vw,3.2rem)] leading-none">What I&apos;ve Built</h2>
          <div className="space-y-5">
            {experienceItems.map((item) => (
              <Card
                key={item.title}
                className={
                  "isCompact" in item && item.isCompact
                    ? "bg-(--color-surface) shadow-none"
                    : "bg-(--color-surface)"
                }
              >
                <CardHeader
                  className={
                    "isCompact" in item && item.isCompact
                      ? "pb-2 px-4 pt-4 sm:px-6 sm:pt-6"
                      : "pb-2 px-5 pt-5 sm:px-8 sm:pt-8"
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-(--color-border) bg-white px-2.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-(--color-accent)">
                        <span className="h-1.5 w-1.5 rounded-full bg-(--color-highlight)" />
                        {item.label}
                      </p>
                      <CardTitle
                        className={
                          "isCompact" in item && item.isCompact
                            ? "text-[1.05rem] font-semibold text-(--color-text) sm:text-[1.12rem]"
                            : "text-[1.26rem] font-bold text-(--color-text) sm:text-[1.38rem]"
                        }
                      >
                        {item.title}
                      </CardTitle>
                      <CardDescription className="mt-1 text-[0.9rem] font-medium text-(--color-text-muted)">
                        {item.subtitle}
                      </CardDescription>
                      {"relatedLinks" in item &&
                      item.relatedLinks &&
                      item.relatedLinks.length > 0 ? (
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                          {item.relatedLinks.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-11 items-center text-sm font-medium text-(--color-accent) underline underline-offset-2 hover:text-(--color-primary) focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
                              title={`${link.label} (opens in new tab)`}
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    {item.title in experienceLogoMap ? (
                      <div className="hidden shrink-0 overflow-hidden rounded-lg border border-(--color-border) bg-white p-1 sm:block">
                        <Image
                          src={experienceLogoMap[item.title as keyof typeof experienceLogoMap]}
                          alt={`${item.title.split(",")[1]?.trim() ?? item.title} logo`}
                          width={52}
                          height={52}
                          className="h-11 w-11 object-contain"
                        />
                      </div>
                    ) : null}
                  </div>
                </CardHeader>
                <CardContent
                  className={
                    "isCompact" in item && item.isCompact
                      ? "space-y-3 px-4 pb-4 pt-0 sm:px-6 sm:pb-6"
                      : "space-y-4 px-5 pb-5 pt-0 sm:px-8 sm:pb-8"
                  }
                >
                  <p className="max-w-[760px] text-[1rem] leading-[1.6] text-(--color-text-secondary)">
                    {item.description}
                  </p>
                  <ul className="list-disc space-y-2 pl-[1.1rem] text-[0.98rem] leading-[1.55] text-(--color-text-secondary) marker:text-(--color-text-muted)">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {"currentFocus" in item && item.currentFocus ? (
                    <p className="text-sm leading-6 text-(--color-text-secondary)">
                      <span className="font-semibold text-(--color-text)">Current focus:</span>{" "}
                      {item.currentFocus}
                    </p>
                  ) : null}
                  <div className="rounded-xl border border-(--color-border) bg-(--color-bg-soft) px-3.5 py-3 text-[0.92rem] text-(--color-text)">
                    <span className="font-semibold">Product lens:</span>{" "}
                    <span className="text-(--color-text-secondary)">{item.productLens}</span>
                  </div>
                  {"tags" in item && item.tags ? (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="border-(--color-border) bg-(--color-bg-soft) px-2.5 py-1 text-[0.8rem] text-(--color-text-secondary)"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-14 scroll-mt-28 md:mb-24">
          <p className="section-label mb-3">Projects</p>
          <h2 className="mb-5 text-[clamp(2rem,3vw,3.2rem)] leading-none">
            Selected Projects
          </h2>
          <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="flex h-full flex-col">
                <CardHeader className="pb-3">
                  <p className="mb-1 inline-flex items-center gap-1.5 text-[0.77rem] font-semibold uppercase tracking-[0.08em] text-(--color-accent)">
                    <span className="h-1.5 w-1.5 rounded-full bg-(--color-highlight)" />
                    {project.label}
                  </p>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-sm leading-6 text-(--color-text-secondary)">
                    <span className="font-semibold text-(--color-text)">
                      Product problem:
                    </span>{" "}
                    {project.problem}
                  </p>
                  <p className="text-sm leading-6 text-(--color-text-secondary)">
                    <span className="font-semibold text-(--color-text)">Built:</span>{" "}
                    {project.built}
                  </p>
                  <p className="text-sm leading-6 text-(--color-text-secondary)">
                    <span className="font-semibold text-(--color-text)">
                      Decision/tradeoff:
                    </span>{" "}
                    {project.decisionTradeoff}
                  </p>
                  {"constraint" in project && project.constraint ? (
                    <p className="text-sm leading-6 text-(--color-text-secondary)">
                      <span className="font-semibold text-(--color-text)">Constraint:</span>{" "}
                      {project.constraint}
                    </p>
                  ) : null}
                  {"whatThisShows" in project && project.whatThisShows ? (
                    <p className="text-sm leading-6 text-(--color-text-secondary)">
                      <span className="font-semibold text-(--color-text)">What this shows:</span>{" "}
                      {project.whatThisShows}
                    </p>
                  ) : null}
                  {"relatedLinks" in project &&
                  project.relatedLinks &&
                  project.relatedLinks.length > 0 ? (
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {project.relatedLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center text-sm font-medium text-(--color-accent) underline underline-offset-2 hover:text-(--color-primary) focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
                          title={`${link.label} (opens in new tab)`}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-auto flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-14 scroll-mt-28 md:mb-20">
          <p className="section-label mb-3">Skills</p>
          <h2 className="mb-5 text-[clamp(2rem,3vw,3.2rem)] leading-none">Capabilities</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <Card key={group.title} className="h-full shadow-none">
                <CardHeader className="pb-3">
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="education" className="mb-14 scroll-mt-28 md:mb-20">
          <p className="section-label mb-3">Education</p>
          <h2 className="mb-5 text-[clamp(2rem,3vw,3.2rem)] leading-none">Education</h2>
          <Card>
            <CardContent className="space-y-3 p-7 pt-7 lg:p-10">
              <p className="text-lg font-semibold text-(--color-text)">
                McMaster University
              </p>
              <p className="text-sm font-medium text-(--color-text-secondary)">
                Bachelor of Science
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Databases",
                  "Software Development Practice",
                  "Design Sprint Methodologies",
                ].map((course) => (
                  <Badge key={course}>{course}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="scroll-mt-28">
          <p className="section-label mb-3">Contact</p>
          <h2 className="mb-5 text-[clamp(2rem,3vw,3.2rem)] leading-none">Want to connect?</h2>
          <Card>
            <CardContent className="space-y-4 p-7 pt-7 lg:p-10">
              <p className="prose-copy">
                Interested in product, AI-assisted building, and tools that make real
                business workflows clearer.
              </p>
              <Button variant="outline" asChild className="w-fit">
                <a href="mailto:hello@supriyathukral.com">hello@supriyathukral.com</a>
              </Button>
              <p className="pt-2 text-sm text-(--color-text-muted)">Built by Supriya Thukral</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
