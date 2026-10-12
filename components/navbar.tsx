"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Diamond, Sparkles } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { navLinks, personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-wine-900/75 backdrop-blur-2xl border-b border-blush/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blush via-blush-deep to-wine-600 flex items-center justify-center shadow-[0_0_30px_-4px_rgba(232,180,184,0.35)] ring-1 ring-cream/10">
                <Diamond className="w-4 h-4 text-wine-900" strokeWidth={2.25} />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-serif text-xl font-semibold tracking-wide text-cream">
                {personalInfo.firstName}
                <span className="text-blush">.</span>
                <span className="text-blush-deep italic font-light ml-0.5">
                </span>
              </div>
               <div className="eyebrow text-blush/80">Portfolio — Est. 102026</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    "relative px-2 xl:px-3 py-2.5 text-[10px] xl:text-[11px] font-sans font-medium tracking-[0.12em] uppercase transition-colors",
                    isActive
                      ? "text-blush"
                      : "text-cream/65 hover:text-cream"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute left-1/2 -bottom-0.5 h-[2px] w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-blush/0 via-blush to-blush/0"
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative p-2.5 rounded-full border border-cream/10 hover:border-blush/30 bg-wine-800/40 transition-all group"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.25 }}
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-blush" strokeWidth={2} />
                  ) : (
                    <Moon className="w-4 h-4 text-wine-700" strokeWidth={2} />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="hidden xl:inline-flex items-center gap-2.5 pl-5 pr-3 py-2.5 rounded-full text-[12px] font-sans font-semibold uppercase tracking-luxe transition-all group bg-cream/95 text-wine-900 hover:bg-blush hover:text-wine-900 shadow-[0_8px_30px_-8px_rgba(232,180,184,0.3)]"
            >
              Lets Connect
              <span className="w-7 h-7 rounded-full bg-wine-800 text-cream flex items-center justify-center group-hover:bg-wine-900 transition-colors">
                <ArrowRightSvg />
              </span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-full border border-cream/10 bg-wine-800/40 text-cream"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="m"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-8 pt-2 space-y-1 border-t border-blush/10 mt-2">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.06, ease: "easeOut" }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={cn(
                        "block px-5 py-4 rounded-xl text-sm uppercase tracking-luxe font-semibold transition-colors",
                        isActive
                          ? "bg-blush/10 text-blush"
                          : "text-cream/70 hover:bg-cream/5 hover:text-cream"
                      )}
                    >
                      — {link.name}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

function ArrowRightSvg() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
