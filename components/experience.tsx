"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarDays } from "lucide-react";

type ExperienceEntry = {
  category: string;
  organization: string;
  title: string;
  period: string;
  description?: string;
};

const experience: ExperienceEntry[] = [
  {
    category: "Education",
    organization: "Quezon City University",
    title: "Bachelor of Science in Information Technology",
    period: "2023 — Present",
    description:
      "Currently pursuing a degree in Information Technology with a focus on software and web development. Knowledgeable in basic web development with an interest in creating responsive, user-friendly, and visually engaging websites. Experienced in project coordination, UI/UX design, system flow diagramming, documentation, and quality assurance testing. Developing skills in programming and database management.",
  },
  {
    category: "Seminar & Training",
    organization: "Information System Student Office Council",
    title: "Artificial Intelligence in Education: How Students Can Use AI Responsibly",
    period: "April 2026",
    description:
      "Learned responsible and ethical use of AI in education and exploring AI tools for learning and academic tasks.",
  },
  {
    category: "Seminar & Training",
    organization: "Department of Information and Communications Technology",
    title: "Understanding MVC Architecture: Building Dynamic Web Applications the Right Way",
    period: "July 2025",
    description:
      "Learned the fundamentals of MVC architecture and understood its application in structured web development.",
  },
  {
    category: "On-the-Job Training",
    organization: "San Roque retails supermarket",
    title: "On-the-Job Training",
    period: "Sept 2026 — Feb 2027",
  },
];

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-wine-gradient">
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blush/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(200,125,135,0.08),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
            }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-blush/50" />
              <span className="eyebrow text-blush">Professional Journey</span>
              <span className="h-px w-10 bg-blush/50" />
            </div>
            <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl xl:text-[4.4rem] leading-[1.02] tracking-tight mb-5">
              Education &amp;
              <br />
              <span className="italic font-serif text-blush">Certifications.</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 xl:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-blush/30 to-transparent xl:-translate-x-1/2" />

            <div className="space-y-14">
              {experience.map((entry, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={`${entry.organization}-${entry.title}`}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className={`relative flex items-start ${
                      isLeft ? "xl:flex-row" : "xl:flex-row-reverse"
                    }`}
                  >
                    <div className={`hidden xl:block w-1/2 ${isLeft ? "pr-16" : "pl-16"}`}>
                      <ExperienceCard entry={entry} align={isLeft ? "right" : "left"} />
                    </div>

                    <div className="absolute left-6 xl:left-1/2 xl:-translate-x-1/2 top-0 mt-4 z-10">
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={inView ? { scale: 1, rotate: 0 } : {}}
                        transition={{
                          delay: 0.25 + idx * 0.1,
                          type: "spring",
                          stiffness: 200,
                          damping: 18,
                        }}
                        className="relative"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blush via-blush-deep to-wine-600 flex items-center justify-center shadow-[0_0_30px_-2px_rgba(232,180,184,0.5)] ring-4 ring-wine-900">
                          <span className="font-serif text-wine-900 text-[13px] font-bold leading-none">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    <div className="xl:hidden ml-16 sm:ml-20 flex-1 min-w-0">
                      <ExperienceCard entry={entry} align="left" />
                    </div>
                    <div className="hidden xl:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({
  entry,
  align,
}: {
  entry: ExperienceEntry;
  align: "left" | "right";
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative min-w-0 p-5 sm:p-7 rounded-[1.5rem] bg-gradient-to-br from-wine-800/60 via-wine-900/50 to-chocolate-800/40 border border-blush/[0.09] hairline overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,180,184,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blush/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div
        className={`flex flex-wrap items-center gap-3 mb-4 ${
          align === "right" ? "xl:justify-end" : ""
        }`}
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blush/[0.08] border border-blush/15 text-[10.5px] font-sans font-bold uppercase tracking-luxe text-blush">
          <CalendarDays className="w-3 h-3" strokeWidth={2.2} />
          {entry.period}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[10.5px] text-cream/50">
          {entry.category}
        </span>
      </div>

      <div className={align === "right" ? "xl:text-right" : ""}>
        <h3 className="serif-display text-cream text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight mb-1 break-words">
          {entry.title}
        </h3>
        <div className="font-serif italic text-blush text-base sm:text-lg mb-4 break-words">
          — {entry.organization}
        </div>
      </div>

      {entry.description && (
        <p className="text-sm text-cream/55 leading-[1.85]">
          {entry.description}
        </p>
      )}
    </motion.div>
  );
}
