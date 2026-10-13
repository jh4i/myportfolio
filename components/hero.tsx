"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Quote, Award } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

export function Hero() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen min-h-[100svh] flex items-center pt-24 sm:pt-28 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-wine-gradient"
    >
      <div className="absolute inset-0 bg-noise opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[70%] bg-[radial-gradient(ellipse_60%_80%_at_70%_-10%,rgba(200,125,135,0.18),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 w-[45%] h-[60%] bg-[radial-gradient(ellipse_80%_60%_at_0%_100%,rgba(232,180,184,0.12),transparent_70%)]" />
      <div className="absolute inset-x-5 sm:inset-x-10 lg:inset-x-24 top-24 sm:top-28 bottom-16 sm:bottom-24 border border-cream/[0.04] rounded-[2rem] sm:rounded-[3rem] pointer-events-none" />

      <div className="absolute left-10 top-32 w-40 h-40 rounded-full bg-blush/5 blur-3xl animate-float-slow" />
      <div className="absolute right-16 bottom-40 w-56 h-56 rounded-full bg-wine-600/40 blur-3xl animate-float" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid xl:grid-cols-[1.15fr_0.85fr] gap-10 sm:gap-14 xl:gap-24 items-center">
          <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-8">
              <span className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full border border-blush/25 bg-blush/[0.07] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                </span>
                <span className="text-[11px] font-sans font-semibold uppercase tracking-editorial text-blush">
                  BSIT Student · Class of 2027
                </span>
              </span>
              <span className="inline-flex items-center gap-2 text-[12px] font-sans tracking-luxe uppercase text-cream/55">
                <MapPin className="w-3.5 h-3.5 text-blush/80" strokeWidth={1.75} />
                {personalInfo.location}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="serif-display text-cream text-[14vw] sm:text-7xl md:text-[6.5rem] lg:text-[7rem] xl:text-[8rem] leading-[0.92] tracking-tight"
            >
              Developing
              <br />
              with&nbsp;
              <span className="italic font-serif text-blush relative inline-block">
                purpose
                <svg className="absolute -bottom-3 left-0 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none" fill="none">
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 1.6, ease: "easeOut" }}
                    d="M2,7 C80,2 160,9 298,4"
                    stroke="url(#gr)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gr" x1="0" x2="1">
                      <stop offset="0%" stopColor="#E8B4B8" stopOpacity="0" />
                      <stop offset="50%" stopColor="#E8B4B8" />
                      <stop offset="100%" stopColor="#C87D87" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="text-cream/85">&amp; precision.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-10 max-w-xl ml-1">
              <div className="flex gap-4">
                <div className="mt-1.5 shrink-0">
                  <div className="w-px h-full min-h-[72px] bg-gradient-to-b from-blush/60 to-transparent" />
                </div>
                <p className="font-serif italic text-lg xl:text-xl leading-relaxed text-cream/70">
                  {personalInfo.tagline}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-3 pl-6 pr-3 py-3.5 rounded-full text-[12px] font-sans font-bold uppercase tracking-luxe transition-all bg-cream text-wine-900 hover:bg-blush shadow-[0_20px_60px_-18px_rgba(232,180,184,0.45)]"
              >
                View Projects
                <span className="w-9 h-9 rounded-full bg-wine-900 text-cream flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-3 pl-6 pr-6 py-3.5 rounded-full text-[12px] font-sans font-bold uppercase tracking-luxe transition-all border border-cream/15 text-cream/85 hover:text-cream hover:border-blush/40 hover:bg-cream/5"
              >
                Begin a Project
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 sm:mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
              {personalInfo.stats.map((s) => (
                <div key={s.label} className="relative">
                  <div className="absolute -left-4 top-0 h-10 w-px bg-gradient-to-b from-blush/30 to-transparent hidden sm:block" />
                  <div className="font-serif text-2xl sm:text-3xl xl:text-4xl text-cream tracking-tight">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.12em] sm:tracking-luxe text-cream/45 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm justify-self-center xl:mx-0 xl:max-w-md xl:justify-self-start"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blush/15 via-blush-deep/10 to-wine-600/20 blur-2xl" />
            <div className="hidden sm:block absolute -right-1 sm:-right-6 -top-8 z-20 w-28 h-28">
              <CircularText text="Developing with Purpose &amp; Precision.  —  " />
            </div>

            <div className="relative">
              <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-blush/40 via-blush-deep/20 to-transparent" />
              <div className="relative overflow-hidden rounded-[2rem] bg-wine-900 aspect-[4/5] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">
                <Image
                  src={personalInfo.portrait}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 1024px) 75vw, 480px"
                  className="object-cover opacity-95"
                  style={{ objectPosition: "center center" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-900 via-wine-900/20 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_5%,rgba(232,180,184,0.12),transparent_90%)]" />

                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blush shadow-[0_0_12px_2px_rgba(232,180,184,0.5)]" />
                </div>

                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="glass-luxe rounded-2xl px-5 py-4 flex items-center justify-between gap-4 border-blush/10">
                    <div>
                      <div className="text-[10px] uppercase tracking-editorial text-blush/85">
                        In Residence
                      </div>
                      <div className="font-serif text-cream text-lg leading-tight mt-0.5">
                        {personalInfo.name}
                      </div>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border border-wine-900/60 bg-gradient-to-br from-wine-600 to-wine-800 flex items-center justify-center">
                        <Award className="w-3.5 h-3.5 text-blush" />
                      </div>
                      <div className="w-8 h-8 rounded-full border border-wine-900/60 bg-gradient-to-br from-blush-deep to-wine-700 flex items-center justify-center">
                        <Quote className="w-3.5 h-3.5 text-cream" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-10 -left-8 z-20 hidden md:block"
            >
              <div className="glass-luxe rounded-2xl px-5 py-4 flex items-center gap-4 border-blush/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-blush/90 to-blush-deep flex items-center justify-center shadow-[0_0_30px_-4px_rgba(232,180,184,0.4)]">
                  <span className="font-serif text-2xl font-bold text-wine-900 leading-none">
                    05
                  </span>
                </div>
                <div>
                  <div className="eyebrow text-blush/85">Years</div>
                  <div className="font-serif text-cream text-sm">Years of Learning</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -top-4 -left-6 z-10 hidden lg:block"
            >
              <PeonyDecor />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-16 sm:mt-20 lg:mt-24 flex items-center justify-between max-w-5xl mx-auto gap-5 sm:gap-10"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blush/25 to-transparent" />
          <div className="flex items-center gap-3">
            <span className="eyebrow text-blush/70">Scroll</span>
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-12 rounded-full border border-blush/30 relative flex items-start justify-center pt-2"
            >
              <span className="w-1 h-2 rounded-full bg-blush" />
            </motion.span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blush/25 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

function CircularText({ text }: { text: string }) {
  const chars = text.split("");
  const circumference = 2 * Math.PI * 44;
  const charWidth = circumference / chars.length;
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full text-blush/90 circular-text">
      <defs>
        <path id="circ" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
      </defs>
      <text fontSize="9.5" fill="currentColor" fontFamily="var(--font-sans)" letterSpacing="1.4">
        <textPath href="#circ">{text}</textPath>
      </text>
      <circle cx="60" cy="60" r="14" fill="none" stroke="currentColor" strokeOpacity="0.4" />
      <circle cx="60" cy="60" r="5" fill="currentColor" fillOpacity="0.7" />
    </svg>
  );
}

function PeonyDecor() {
  return (
    <svg width="90" height="90" viewBox="0 0 100 100" fill="none" className="animate-float-slow">
      <g opacity="0.85">
        <path d="M50 20 C30 25 18 42 25 60 C20 78 40 88 50 85 C60 88 82 78 76 60 C84 42 70 25 50 20 Z" fill="url(#peony)" />
        <path d="M50 32 C40 34 34 44 37 55 C35 66 45 72 50 70 C55 72 66 66 64 55 C67 44 60 34 50 32 Z" fill="#5E1520" fillOpacity="0.6" />
        <path d="M50 42 C46 43 43 48 44 54 C44 60 48 64 50 63 C52 64 57 60 57 54 C58 48 54 43 50 42 Z" fill="#4A1017" fillOpacity="0.8" />
      </g>
      <defs>
        <radialGradient id="peony" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E8B4B8" stopOpacity="0.6" />
          <stop offset="55%" stopColor="#C87D87" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4A1017" stopOpacity="0.1" />
        </radialGradient>
      </defs>
    </svg>
  );
}
