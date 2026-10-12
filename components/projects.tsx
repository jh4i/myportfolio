"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import Image from "next/image";
import { ArrowUpRight, Diamond } from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "Web Development", "Backend Systems", "AI & Automation", "Database Management", "UI/UX Design"];

export function Projects() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(232,180,184,0.06),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
            }}
            className="grid xl:grid-cols-[1.2fr_0.8fr] gap-8 xl:gap-10 items-end mb-12 sm:mb-14"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-blush/50" />
                <span className="eyebrow text-blush">Featured Projects</span>
              </div>
              <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl xl:text-[4.4rem] leading-[1.02] tracking-tight mb-6">
                Ideas into code.
                <br />
                <span className="italic font-serif text-blush">Built</span> to matter.
              </h2>
              <p className="text-cream/55 text-[15.5px] leading-[1.85] max-w-xl">
                A selection of software projects showcasing my skills in development, database management, and intelligent solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 xl:justify-end">
              {categories.map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={cn(
                      "relative px-3 sm:px-5 py-2.5 rounded-full text-[10px] sm:text-[11.5px] leading-tight font-sans font-bold uppercase tracking-[0.12em] sm:tracking-luxe transition-all duration-500",
                      isActive
                        ? "bg-cream text-wine-900 shadow-[0_10px_40px_-10px_rgba(232,180,184,0.5)]"
                        : "border border-cream/10 text-cream/55 hover:text-cream hover:border-blush/30 bg-wine-800/30"
                    )}
                  >
                    {cat}
                    {isActive && (
                      <motion.span
                        layoutId="proj-pill"
                        className="absolute inset-0 rounded-full pointer-events-none"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => {
                const featured = project.featured;
                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.7,
                      delay: idx * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={cn(
                      "group relative rounded-[1.75rem] overflow-hidden hairline",
                      featured ? "md:col-span-2" : ""
                    )}
                  >
                    <div
                      className={cn(
                        "relative grid gap-0",
                        featured ? "lg:grid-cols-[1.2fr_0.8fr] lg:min-h-[520px]" : "grid-rows-[auto_1fr]"
                      )}
                    >
                      <div
                        className={cn(
                          "relative overflow-hidden",
                          featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[520px]" : "aspect-[16/11]"
                        )}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes={featured ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
                          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-wine-900/85 via-wine-900/30 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_100%,rgba(232,180,184,0.12),transparent_55%)]" />

                        <div className="absolute top-5 left-5 flex items-center gap-2.5">
                          {featured && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blush/90 text-wine-900 text-[10px] font-bold uppercase tracking-luxe shadow-[0_0_20px_-2px_rgba(232,180,184,0.5)]">
                              <Diamond className="w-3 h-3" strokeWidth={2.5} />
                              Featured
                            </span>
                          )}
                          <span className="px-3 py-1.5 rounded-full bg-wine-900/60 backdrop-blur-sm border border-blush/20 text-[10px] font-sans font-bold uppercase tracking-luxe text-blush">
                            {project.year}
                          </span>
                        </div>

                        <div className="absolute bottom-5 left-5 right-5 lg:hidden">
                          <MiniMeta project={project} />
                        </div>
                      </div>

                      <div className={cn(
                        "relative flex flex-col bg-gradient-to-br from-wine-900 via-wine-800/80 to-chocolate-900",
                        featured ? "p-6 sm:p-8 lg:p-14" : "p-6 sm:p-7"
                      )}>
                        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-blush/30 to-transparent" />
                        <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none mix-blend-overlay" />

                        <div className="relative flex-1 flex flex-col">
                          <div className="hidden lg:block mb-8">
                            <MiniMeta project={project} />
                          </div>

                          <div className="flex items-start justify-between gap-4 sm:gap-6 mb-5">
                            <h3 className="serif-display text-cream tracking-tight leading-[1.02] text-3xl sm:text-4xl lg:text-5xl">
                              {project.title}
                              <span className="block text-blush italic font-serif text-2xl font-light mt-2">
                                — {project.subtitle}
                              </span>
                            </h3>
                          </div>

                          <p className="text-sm text-cream/60 leading-[1.9] max-w-xl mb-7">
                            {project.description}
                          </p>

                          <div className="h-px w-full bg-gradient-to-r from-transparent via-blush/20 to-transparent mb-7" />

                          <div className="mt-auto flex flex-wrap items-end justify-between gap-6">
                            <div>
                              <div className="eyebrow text-blush/80 mb-2.5">Core Competencies</div>
                              <div className="flex flex-wrap gap-1.5">
                                {project.tags.map((t) => (
                                  <span
                                    key={t}
                                    className="px-3 py-1.5 rounded-full border border-blush/15 bg-blush/[0.04] text-[11px] font-sans font-semibold uppercase tracking-luxe text-cream/75"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                              <div className="eyebrow text-blush/70 mt-5">
                                Engagement · {project.role}
                              </div>
                            </div>

                            <a
                              href= "https://mail.google.com/mail/u/0/?hl=en&hl=en#inbox"
                              className="group/btn inline-flex items-center gap-2.5 pl-6 pr-3 py-3 rounded-full text-[11.5px] font-sans font-bold uppercase tracking-luxe transition-all bg-cream/95 text-wine-900 hover:bg-blush shadow-[0_15px_40px_-12px_rgba(232,180,184,0.45)]"
                            >
                              Read Case Study
                              <span className="w-8 h-8 rounded-full bg-wine-900 text-cream flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                                <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MiniMeta({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="flex items-center gap-3 text-cream/70">
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-wine-900/50 backdrop-blur-sm border border-cream/10 text-[10.5px] font-sans font-bold uppercase tracking-luxe text-blush">
        {project.category}
      </span>
    </div>
  );
}
