"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
  ArrowRight,
  PhoneCall,
  Clock,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    if (!formElement.reportValidity()) return;

    setStatus("loading");
    try {
      const response = await fetch(formElement.action, {
        method: "POST",
        body: new FormData(formElement),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
      formElement.reset();
      window.setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  const contactCards = [
    {
      icon: Mail,
      eyebrow: "Correspondance",
      title: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      hint: "Replies within 24 hours",
    },
    {
      icon: MapPin,
      eyebrow: "Location",
      title: "Based In",
      value: personalInfo.location,
      href: "https://maps.app.goo.gl/43VKhwwe9q6YSgid7",
      hint: "Open to collaboration and meaningful software projects",
    },
    {
      icon: PhoneCall,
      eyebrow: "Connect",
      title: "Professional Network",
      value: "LinkedIn Profile",
      href:  "https://www.linkedin.com/in/johaina-banalan-277866325/",
      hint: "Explore my work and development journey",
    },
    {
      icon: Clock,
      eyebrow: "Open to Opportunities",
      title: "Availability",
      value: "Junior Developer Roles · Freelance Projects · Collaboration",
      href: "#",
      hint: "Building practical software solutions and growing as a developer."
    },
  ];

  return (
    <section id="contact" className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_0%,rgba(232,180,184,0.08),transparent_70%)]" />
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(ellipse_80%_80%_at_100%_100%,rgba(200,125,135,0.08),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-blush/50" />
              <span className="eyebrow text-blush">Contact</span>
              <span className="h-px w-10 bg-blush/50" />
            </div>
            <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl xl:text-[4.6rem] leading-[1.02] tracking-tight mb-6">
              Lets
              <span className="italic font-serif text-blush"> build</span>
              <br />
              something meaningful.
            </h2>
            <p className="text-cream/55 text-[15.5px] leading-[1.85] max-w-2xl mx-auto">
              Whether it’s a project, an opportunity, or simply a conversation.
            </p>
          </motion.div>

          <div className="grid min-w-0 xl:grid-cols-[0.95fr_1.05fr] gap-8 sm:gap-10 xl:gap-16 items-start">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.1 } },
              }}
              className="min-w-0 space-y-5"
            >
              {contactCards.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.a
                    key={c.title}
                    href={c.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.6 }}
                    whileHover={{ y: -3 }}
                    className="group relative block min-w-0 p-5 sm:p-7 rounded-[1.5rem] bg-wine-800/30 border border-blush/[0.08] hairline overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,180,184,0.07),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blush/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative flex items-start gap-4 sm:gap-5">
                      <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-gradient-to-br from-blush/90 to-blush-deep flex items-center justify-center shadow-[0_0_35px_-4px_rgba(232,180,184,0.45)]">
                        <Icon className="w-6 h-6 text-wine-900" strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-3 mb-1">
                          <div className="eyebrow text-blush/85">{c.eyebrow}</div>
                          <ArrowRight className="w-4 h-4 text-blush/40 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                        </div>
                        <div className="text-cream/45 text-[11.5px] font-sans uppercase tracking-luxe mb-1">
                          {c.title}
                        </div>
                        <div className="font-serif text-lg sm:text-xl text-cream tracking-tight break-words">
                          {c.value}
                        </div>
                        <div className="mt-2 text-[12.5px] text-cream/45">{c.hint}</div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.form
              action="https://formspree.io/f/xgaoljlg"
              method="POST"
              variants={{
                hidden: { opacity: 0, x: 30 },
                show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              onSubmit={handleSubmit}
              className="relative min-w-0 p-5 sm:p-8 xl:p-10 2xl:p-12 rounded-[2rem] overflow-hidden bg-gradient-to-br from-wine-900 via-wine-800/80 to-chocolate-900 hairline"
            >
              <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none mix-blend-overlay" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,180,184,0.07),transparent_60%)]" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blush/35 to-transparent" />
              <div className="absolute -top-14 -right-14 w-64 h-64 rounded-full bg-blush/10 blur-3xl pointer-events-none" />

              <div className="relative min-w-0">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-blush shadow-[0_0_10px_1.5px_rgba(232,180,184,0.6)]" />
                  <div className="eyebrow text-blush/90">
                   Let’s Connect
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <Field
                    label="Your Name"
                    id="name"
                    type="text"
                    placeholder="Johaina Banalan"
                    value={form.name}
                    name="name"
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <Field
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    name="email"
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                </div>
                <div className="mb-5">
                  <Field
                    label="Phone Number (Optional)"
                    id="phone"
                    type="tel"
                    placeholder="+country code and number"
                    value={form.phone}
                    name="phone"
                    onChange={(v) => setForm({ ...form, phone: v })}
                  />
                </div>
                <div className="mb-5">
                  <Field
                    label="Subject"
                    id="subject"
                    type="text"
                    placeholder="Software Development · Project Collaboration"
                    value={form.subject}
                    name="subject"
                    onChange={(v) => setForm({ ...form, subject: v })}
                  />
                </div>
                <div className="mb-7">
                  <LabelText htmlFor="message">
                    Your Letter <span className="text-blush">*</span>
                  </LabelText>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell me about your project, technical requirements, or collaboration idea. Share the details, goals, and vision you'd like to bring to life."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-blush/15 bg-wine-900/50 text-cream placeholder:text-cream/30 focus:bg-wine-900/80 focus:border-blush/45 focus:ring-2 focus:ring-blush/15 outline-none transition-all resize-none font-sans text-[14.5px] leading-[1.8]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="group relative w-full inline-flex items-center justify-center gap-3 pl-7 pr-3 py-4 rounded-full text-[12px] font-sans font-bold uppercase tracking-luxe transition-all bg-cream text-wine-900 hover:bg-blush shadow-[0_20px_60px_-15px_rgba(232,180,184,0.55)] disabled:cursor-not-allowed disabled:opacity-90"
                >
                  {status === "idle" && (
                    <>
                      Send Correspondance
                      <span className="w-10 h-10 rounded-full bg-wine-900 text-cream flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                        <Send className="w-4.5 h-4.5" strokeWidth={2.1} />
                      </span>
                    </>
                  )}
                  {status === "loading" && (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Preparing Post…
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle className="w-5 h-5" strokeWidth={2.3} />
                      Sent — Thank you very much!
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <Send className="w-5 h-5" />
                      Sending failed — Please try again
                    </>
                  )}
                </button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 text-center font-serif italic text-blush/95 text-sm"
                  >
                    Your letter has been sealed in wax. I shall reply within the day.
                  </motion.p>
                )}
                {status === "error" && (
                  <p role="alert" className="mt-5 text-center text-sm text-blush">
                    Your letter could not be sent. Please try again in a moment.
                  </p>
                )}

                <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-blush/15 to-transparent" />
                <p className="mt-6 text-center text-[11px] uppercase tracking-editorial text-cream/35">
                  All correspondence handled with the strictest discretion.
                </p>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LabelText({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block pl-1 mb-2.5 text-[11px] font-sans font-bold uppercase tracking-luxe text-cream/60"
    >
      {children}
    </label>
  );
}

function Field({
  label,
  id,
  type,
  placeholder,
  value,
  name,
  onChange,
  required,
}: {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  value: string;
  name: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="min-w-0">
      <LabelText htmlFor={id}>
        {label} {required && <span className="text-blush">*</span>}
      </LabelText>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-w-0 px-4 sm:px-5 py-4 rounded-2xl border border-blush/15 bg-wine-900/50 text-cream placeholder:text-cream/30 focus:bg-wine-900/80 focus:border-blush/45 focus:ring-2 focus:ring-blush/15 outline-none transition-all font-sans text-[14.5px]"
      />
    </div>
  );
}
