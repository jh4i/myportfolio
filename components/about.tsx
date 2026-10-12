"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import {
  Layers,
  Workflow,
  Code2,
  Handshake,
} from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Software Craftsmanship",
    body:
      "Clean code, intuitive interfaces, and maintainable architecture for meaningful digital experiences.",
  },
  {
    icon: Code2,
    title: "Technical Precision",
    body:
      "Reliable backend systems, database integrity, and type-safe development using modern technologies.",
  },
  {
    icon: Workflow,
    title: "Continuous Evolution",
    body:
      "Continuous learning, hands-on experimentation, and improvement through problem-solving.",
  },
  {
    icon: Handshake,
    title: "Purposeful Collaboration",
    body:
      "Clear communication, shared responsibility, and teamwork to create practical solutions.",
  },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(232,180,184,0.06),transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 xl:gap-24 items-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blush/15 via-blush-deep/10 to-wine-600/15 blur-2xl opacity-70" />

                <div className="relative grid grid-cols-[1fr_auto] gap-4 items-end">
                  <div className="relative overflow-hidden rounded-[1.75rem] aspect-[3/4] bg-wine-800/50 hairline">
                    <Image
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      fill
                      sizes="(max-width: 1024px) 60vw, 420px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wine-900/70 via-wine-900/10 to-transparent" />
                    <div className="absolute top-5 left-5 eyebrow text-blush/90">
                      — Plate N° 01
                    </div>
                  </div>
                  <div className="w-16 hidden sm:block">
                    <div className="h-px w-full bg-gradient-to-r from-blush/40 to-transparent mb-4" />
                    <div className="h-px w-full bg-gradient-to-r from-blush/40 to-transparent mt-4" />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-8 right-2 sm:-right-6 lg:-right-12 z-20"
                >
                  <div className="relative px-5 sm:px-8 py-5 sm:py-6 rounded-2xl bg-cream text-wine-900 shadow-[0_30px_70px_-20px_rgba(232,180,184,0.5)] border border-blush/30 max-w-xs">
                    <div className="eyebrow text-wine-700 mb-1.5">
                      Philosophy
                    </div>
                    <p className="font-serif italic text-lg leading-snug">
                      &ldquo;Every problem is an opportunity to build something meaningful.&rdquo;
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-wine-800 flex items-center justify-center">
                        <span className="font-serif text-sm text-blush italic">
                          JB
                        </span>
                      </div>
                      <div>
                        <div className="font-serif font-semibold text-sm">
                          {personalInfo.name}
                        </div>
                        <div className="text-[10px] uppercase tracking-luxe text-wine-700/70">
                          Aspiring Software Developer
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-blush/50" />
                  <span className="eyebrow text-blush">About me</span>
                </div>
                <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl xl:text-[4.2rem] leading-[1.02] tracking-tight mb-8">
                  A practice rooted in
                  <br />
                  <span className="italic font-serif text-blush">heritage,</span>{" "}
                  finished like
                  <br />
                  <span className="italic font-serif text-cream/85">haute couture.</span>
                </h2>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
                }}
                className="space-y-5 text-cream/60 text-[15.5px] leading-[1.85] max-w-2xl"
              >
                {personalInfo.bio.split(". ").map((sentence, i, arr) => (
                  <p key={i}>
                    {sentence}
                    {i < arr.length - 1 && "."}
                  </p>
                ))}
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
                }}
                className="divider-line my-10"
              />

              <motion.div
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {pillars.map((p) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={p.title}
                      variants={{
                        hidden: { opacity: 0, y: 18 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6, ease: "easeOut" },
                        },
                      }}
                      whileHover={{ y: -3 }}
                      className="group relative p-6 rounded-2xl bg-wine-800/30 border border-blush/[0.08] hover:border-blush/30 transition-all overflow-hidden"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blush/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blush/90 to-blush-deep flex items-center justify-center shadow-[0_0_30px_-6px_rgba(232,180,184,0.4)] mb-5">
                        <Icon className="w-5 h-5 text-wine-900" strokeWidth={2} />
                      </div>
                      <h3 className="font-serif text-cream text-xl mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm text-cream/55 leading-relaxed">
                        {p.body}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
