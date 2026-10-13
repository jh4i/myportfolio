import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Diamond } from "lucide-react";
import { projects } from "@/lib/data";
import { CaseStudyTransition } from "@/components/case-study-transition";

const pastMeSections = {
  tagline: "Your past, preserved. Your future, understood.",
  overview:
    "PastMe is a personal journaling concept designed to help people document life experiences, organize memories, and revisit personal growth over time. It explores how a digital diary can become a more organized and reflective personal archive.",
  problem:
    "Personal experiences can become scattered across notes, photographs, and separate journaling applications. Without a structured way to revisit them, it can be difficult to recognize recurring themes, remember important moments, or reflect on personal growth.",
  solution: [
    { title: "Journal", description: "Record everyday experiences." },
    { title: "Preserve", description: "Organize entries and memories." },
    { title: "Revisit", description: "Return to meaningful moments." },
    { title: "Reflect", description: "Explore personal growth." },
  ],
  features: [
    {
      title: "Personal diary",
      description:
        "A private space for writing, editing, and organizing journal entries.",
    },
    {
      title: "Memory timeline",
      description:
        "A chronological view for revisiting entries and meaningful moments.",
    },
    {
      title: "AI-assisted reflection",
      description:
        "An exploration of ways to search and reflect on personal journal content.",
    },
  ],
  stack: [
    {
      name: "Frontend",
      description:
        "React and TypeScript for the interface and application interactions.",
    },
    {
      name: "Backend",
      description: "Node.js for application logic and API communication.",
    },
    {
      name: "Database",
      description: "MySQL for persistent application data and relationships.",
    },
  ],
};

type CaseStudyPageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: String(project.id) }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const project = projects.find((item) => String(item.id) === params.id);

  return {
    title: project
      ? `${project.title} Case Study | Johaina Banalan`
      : "Project Case Study | Johaina Banalan",
    description: project?.description,
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = projects.find((item) => String(item.id) === params.id);

  if (!project) {
    notFound();
  }

  const isPastMe = project.id === 1;

  return (
    <CaseStudyTransition>
      <main className="relative min-h-screen overflow-hidden bg-wine-gradient text-cream">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(232,180,184,0.1),transparent_70%)]" />

      <div className="relative">
        <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6 sm:py-8 lg:px-10">
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-blush/15 bg-wine-900/40 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-cream/70 transition-colors hover:border-blush/40 hover:text-cream"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sm:hidden">Projects</span>
            <span className="hidden sm:inline">Back to selected projects</span>
          </Link>

          <Link
            href="/"
            aria-label="Johaina Banalan home"
            className="flex items-center gap-2 font-serif text-lg font-semibold tracking-wide"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blush via-blush-deep to-wine-600 text-wine-900 shadow-[0_0_24px_-6px_rgba(232,180,184,0.55)]">
              <Diamond className="h-4 w-4" />
            </span>
            JB<span className="text-blush">.</span>
          </Link>
        </header>

        <article className="mx-auto max-w-7xl px-6 pb-16 pt-2 sm:pb-24 sm:pt-4 lg:px-10 lg:pt-6">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow mb-5 text-blush/75">
              JB / Selected Projects
            </p>
            <p className="eyebrow mb-5 text-blush">
              Case Study N° {String(project.id).padStart(3, "0")}
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-cream/55 sm:text-xs">
              <span>{isPastMe ? "Personal project · Web application" : project.role}</span>
              <span className="h-1 w-1 rounded-full bg-blush/60" />
              <span>{isPastMe ? "Concept · In development" : "Project profile"}</span>
            </div>

            <h1 className="serif-display max-w-4xl break-words text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-4xl font-serif text-2xl italic leading-tight text-blush sm:text-3xl md:text-4xl">
              {isPastMe
                ? pastMeSections.tagline
                : project.subtitle.replace(`${project.title} — `, "")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-cream/55">
              <span>Johaina Banalan · Selected work</span>
              <span className="hidden h-1 w-1 rounded-full bg-blush/50 sm:block" />
              <span>{project.year}</span>
            </div>

            <figure className="relative mt-10 overflow-hidden rounded-[1.5rem] border border-blush/15 bg-wine-900/50 shadow-[0_30px_100px_-45px_rgba(0,0,0,0.8)] sm:mt-14 sm:rounded-[2rem]">
              <div className="relative aspect-[4/3] sm:aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={`${project.title} project artwork`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-900/80 via-wine-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                  <span className="eyebrow text-cream/80">
                    {isPastMe ? "A personal archive for reflection" : project.role}
                  </span>
                </div>
              </div>
              <figcaption className="border-t border-blush/10 px-5 py-3 text-xs leading-relaxed text-cream/45 sm:px-8">
                {isPastMe
                  ? "Portfolio visual direction — replace with product screenshots as the system develops."
                  : `${project.title} — project visual from the portfolio.`}
              </figcaption>
            </figure>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
              <MetaCard label="Role" value={project.role} />
              <MetaCard
                label={isPastMe ? "Status" : "Project"}
                value={isPastMe ? "Concept · In development" : project.title}
              />
              <div className="rounded-2xl border border-blush/10 bg-wine-900/45 p-5 sm:col-span-2 lg:col-span-1">
                <p className="eyebrow mb-3 text-blush/70">Technologies & focus</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blush/15 bg-blush/[0.05] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-cream/75"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {isPastMe ? (
            <div className="mx-auto mt-20 grid max-w-5xl gap-14 sm:mt-28 sm:gap-20">
              <CaseSection number="01" title="Project overview">
                <h3 className="serif-display mb-5 text-3xl text-cream sm:text-4xl">
                  A space for memories that matter.
                </h3>
                <p className="max-w-3xl text-sm leading-8 text-cream/65 sm:text-base">
                  {pastMeSections.overview}
                </p>
              </CaseSection>

              <CaseSection number="02" title="The problem">
                <h3 className="serif-display mb-5 max-w-3xl text-3xl leading-tight text-cream sm:text-4xl">
                  Memories are easy to record, but difficult to revisit
                  meaningfully.
                </h3>
                <p className="max-w-3xl text-sm leading-8 text-cream/65 sm:text-base">
                  {pastMeSections.problem}
                </p>
                <p className="mt-6 border-l border-blush/40 pl-4 text-sm italic leading-7 text-blush/80">
                  Design focus: memory organization, personal reflection, and
                  long-term usability.
                </p>
              </CaseSection>

              <CaseSection number="03" title="The proposed solution">
                <h3 className="serif-display mb-8 max-w-3xl text-3xl leading-tight text-cream sm:text-4xl">
                  From daily entries to meaningful reflection.
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {pastMeSections.solution.map((step, index) => (
                    <div
                      key={step.title}
                      className="rounded-2xl border border-blush/10 bg-gradient-to-br from-wine-800/70 to-chocolate-900/60 p-5 sm:p-6"
                    >
                      <span className="eyebrow text-blush/60">
                        0{index + 1}
                      </span>
                      <h4 className="mt-5 font-serif text-2xl text-cream">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-cream/55">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CaseSection>

              <CaseSection number="04" title="Selected features">
                <p className="mb-8 max-w-3xl text-sm leading-7 text-cream/55 sm:text-base">
                  These are representative product ideas, not a claim that each
                  feature is already implemented.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  {pastMeSections.features.map((feature, index) => (
                    <div
                      key={feature.title}
                      className="group rounded-2xl border border-blush/10 bg-wine-900/45 p-6 transition-colors hover:border-blush/25 sm:p-7"
                    >
                      <span className="eyebrow text-blush/60">
                        Concept feature · 0{index + 1}
                      </span>
                      <h4 className="mt-5 font-serif text-2xl text-cream">
                        {feature.title}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-cream/55">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CaseSection>

              <CaseSection number="05" title="Technical direction">
                <h3 className="serif-display mb-5 text-3xl text-cream sm:text-4xl">
                  Technology stack
                </h3>
                <p className="mb-8 max-w-3xl text-sm leading-7 text-cream/55 sm:text-base">
                  Current technology direction based on the project scope.
                  Describe only components that have actually been built as
                  implementation progresses.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  {pastMeSections.stack.map((item, index) => (
                    <div
                      key={item.name}
                      className="rounded-2xl border border-blush/10 bg-gradient-to-br from-wine-800/60 to-chocolate-900/50 p-6"
                    >
                      <span className="eyebrow text-blush/60">
                        0{index + 1} / {item.name}
                      </span>
                      <p className="mt-4 text-sm leading-7 text-cream/65">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CaseSection>

              <CaseSection number="06" title="Engineering considerations">
                <h3 className="serif-display mb-5 max-w-3xl text-3xl leading-tight text-cream sm:text-4xl">
                  Privacy belongs in the design from the beginning.
                </h3>
                <p className="max-w-3xl text-sm leading-8 text-cream/65 sm:text-base">
                  Journal content can be deeply personal. Authentication,
                  access control, secure configuration, and careful handling of
                  personal data are important considerations as the system is
                  developed. AI-assisted reflection should also be designed
                  responsibly and never presented as a substitute for the
                  writer&apos;s own judgment.
                </p>
                <p className="mt-6 border-l border-blush/40 pl-4 text-sm italic leading-7 text-blush/80">
                  These are design considerations, not claims that security
                  controls have already been implemented or tested.
                </p>
              </CaseSection>

              <CaseSection number="07" title="Challenges & learnings">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-blush/10 bg-wine-900/45 p-6">
                    <p className="eyebrow text-blush/70">Challenge</p>
                    <h3 className="mt-4 font-serif text-2xl text-cream">
                      Protecting personal memories
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-cream/60">
                      Journal entries can contain sensitive information, so
                      privacy needs to be considered throughout the design and
                      development of the application.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-blush/10 bg-wine-900/45 p-6">
                    <p className="eyebrow text-blush/70">Learning</p>
                    <h3 className="mt-4 font-serif text-2xl text-cream">
                      Security is part of the design.
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-cream/60">
                      Authentication, access control, and careful data
                      handling should be addressed as the product takes shape,
                      then verified in the implementation.
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-xs leading-6 text-cream/40">
                  These are project considerations; no security controls are
                  claimed as complete or tested here.
                </p>
              </CaseSection>
            </div>
          ) : (
            <div className="mx-auto mt-20 grid max-w-5xl gap-14 sm:mt-28 sm:gap-20">
              <CaseSection number="01" title="Project overview">
                <h3 className="serif-display mb-5 max-w-3xl text-3xl leading-tight text-cream sm:text-4xl">
                  {project.title}
                </h3>
                <p className="max-w-3xl text-sm leading-8 text-cream/65 sm:text-base">
                  {project.description}
                </p>
              </CaseSection>
              <CaseSection number="02" title="Project focus">
                <p className="mb-7 max-w-3xl text-sm leading-7 text-cream/55 sm:text-base">
                  Current areas of focus listed for this project:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blush/15 bg-blush/[0.05] px-4 py-2 text-xs font-semibold text-cream/75"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </CaseSection>
            </div>
          )}

          <div className="mx-auto mt-20 max-w-5xl border-t border-blush/15 pt-8 sm:mt-28 sm:pt-10">
            <CaseSection number="08" title="Closing note">
              <h2 className="serif-display mb-4 max-w-3xl text-3xl leading-tight text-cream sm:text-4xl">
                Thoughtful software starts with thoughtful questions.
              </h2>
              <p className="max-w-3xl text-sm leading-7 text-cream/60 sm:text-base">
                {isPastMe
                  ? "PastMe is a concept in development. As the system takes shape, this case study can grow with verified implementation details, real interface screenshots, and lessons learned."
                  : `This project profile reflects the information currently available. Add verified design decisions, implementation details, and real project screenshots as ${project.title} develops.`}
              </p>
            </CaseSection>
          </div>

          <footer className="mx-auto mt-12 flex max-w-5xl flex-col gap-5 border-t border-blush/10 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/#projects"
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-cream px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-wine-900 transition-colors hover:bg-blush"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to selected projects
            </Link>
            <Link
              href="/#contact"
              className="ml-4 inline-flex min-h-12 items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-cream/60 transition-colors hover:text-blush"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <p className="text-[10px] uppercase tracking-[0.14em] text-cream/35 sm:text-right">
              © {new Date().getFullYear()} Johaina Banalan · Selected projects
            </p>
          </footer>
        </article>
      </div>
      </main>
    </CaseStudyTransition>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-2xl border border-blush/10 bg-wine-900/45 p-5">
      <p className="eyebrow mb-3 text-blush/70">{label}</p>
      <p className="break-words text-sm leading-6 text-cream/80">{value}</p>
    </div>
  );
}

function CaseSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-5 border-t border-blush/15 pt-7 sm:grid-cols-[180px_1fr] sm:gap-10 sm:pt-9">
      <div>
        <p className="eyebrow text-blush">/{number}</p>
        <h2 className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-cream/45">
          {title}
        </h2>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
