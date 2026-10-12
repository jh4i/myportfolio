"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-wine-900/40" />
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blush/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blush/20 to-transparent" />

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
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-blush/50" />
              <span className="eyebrow text-blush">Core Competencies</span>
            </div>
            <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl xl:text-[4.4rem] leading-[1.02] tracking-tight">
              Skills &amp;
              <br />
              <span className="italic font-serif text-blush">Technologies</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.article
                  key={cat.category}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="group relative rounded-[1.5rem] bg-wine-gradient border border-blush/[0.09] hairline p-6 sm:p-8 xl:p-9 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,180,184,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blush/90 to-blush-deep flex items-center justify-center shadow-[0_0_30px_-6px_rgba(232,180,184,0.4)]">
                        <Icon className="w-5.5 h-5.5 text-wine-900" strokeWidth={2} />
                      </div>
                      <div>
                        <div className="font-serif text-[11px] uppercase tracking-luxe text-blush/80 mb-1">
                          {cat.number}
                        </div>
                        <h3 className="font-serif text-2xl text-cream leading-tight tracking-tight">
                          {cat.category}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="relative space-y-4">
                    {cat.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[13.5px] font-medium text-cream/85 tracking-tight">
                            {skill.name}
                          </span>
                          <span className="font-serif text-xs text-blush/80 tabular-nums">
                            {skill.level}
                          </span>
                        </div>
                        <div className="h-[3px] rounded-full bg-cream/[0.06] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{
                              delay: 0.4 + idx * 0.08,
                              duration: 1.2,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-blush-deep via-blush to-cream/80 shimmer"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
