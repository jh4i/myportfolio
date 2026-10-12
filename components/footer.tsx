"use client";

import { personalInfo, navLinks } from "@/lib/data";
import { Diamond, Instagram, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blush/10">
      <div className="absolute inset-0 bg-wine-gradient opacity-90" />
      <div className="absolute inset-0 bg-noise opacity-60 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blush/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blush/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 sm:mb-16 items-start">
          <div className="min-w-0 lg:col-span-5">
            <a href="#home" className="flex items-center gap-3.5 mb-7">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blush via-blush-deep to-wine-600 flex items-center justify-center shadow-[0_0_35px_-4px_rgba(232,180,184,0.45)] ring-1 ring-cream/10">
                <Diamond className="w-4.5 h-4.5 text-wine-900" strokeWidth={2.3} />
              </div>
              <div className="leading-tight">
                <div className="font-serif text-2xl font-semibold tracking-wide text-cream">
                  {personalInfo.firstName}
                  <span className="text-blush">.</span>
                </div>
                <div className="eyebrow text-blush/80 mt-1"> 102026 · Philippines</div>
              </div>
            </a>

            <p className="font-serif italic text-cream/55 leading-[1.9] text-[15.5px] max-w-md mb-8">
              &ldquo;Building thoughtful solutions through clean code, purposeful design, and a passion for solving real-world problems. From intuitive interfaces to reliable backend systems, I turn ideas into functional digital experiences using modern web technologies.&rdquo;
            </p>

            <div className="flex items-center gap-3">
              {personalInfo.socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="group relative p-3 rounded-full border border-blush/15 bg-wine-800/40 text-cream/60 hover:text-cream hover:border-blush/40 hover:-translate-y-0.5 transition-all"
                  >
                    <Icon className="w-4.5 h-4.5" strokeWidth={2} />
                    <div className="absolute inset-0 rounded-full bg-blush/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="min-w-0 lg:col-span-3">
            <FooterHeading>Navigation</FooterHeading>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                ...navLinks,
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2.5 text-[13.5px] text-cream/55 hover:text-blush transition-colors"
                  >
                    <span className="w-0 group-hover:w-5 h-px bg-blush/60 transition-all duration-300" />
                    <span className="font-medium tracking-wide">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-4">
            <FooterHeading>Information</FooterHeading>
            <ul className="space-y-5 text-[13.5px] text-cream/55">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 w-1 h-1 rounded-full bg-blush/70 shrink-0" />
                <span>
                  <span className="block font-serif text-cream text-base mb-0.5">
                    {personalInfo.location}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 w-1 h-1 rounded-full bg-blush/70 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blush transition-colors">
                  <span className="block font-serif text-cream text-base mb-0.5">Correspondance</span>
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 w-1 h-1 rounded-full bg-blush/70 shrink-0" />
                <span>
                  <span className="block font-serif text-cream text-base mb-0.5">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/johaina-banalan-277866325/" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">
                    Explore my work and development journey
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-blush/20 to-transparent" />

        <div className="mt-8 grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          <p className="text-[11.5px] uppercase tracking-luxe text-cream/35 lg:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-3 font-serif italic text-cream/45 text-sm text-center">
            <span className="w-5 h-px bg-blush/30" />
           Developed  &amp; forged in Quezon City
            <span className="w-5 h-px bg-blush/30" />
          </div>
          <p className="text-[11.5px] uppercase tracking-luxe text-cream/35 lg:text-right flex items-center justify-center lg:justify-end gap-2 flex-wrap">
            Crafted with rigour · Next.js · TypeScript · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="eyebrow text-blush/85 mb-6 relative inline-flex items-center gap-3">
      <span className="h-px w-6 bg-blush/40" />
      {children}
    </h4>
  );
}
