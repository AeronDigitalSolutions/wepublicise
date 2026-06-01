"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Brand Strategy",
    tag: "THE BLUEPRINT",
    list: ["Category Positioning", "Core Messaging Architecture", "Brand Architecture & Naming", "Consumer Psychology Research"],
    visualId: "strategy",
  },
  {
    title: "Branding & Design",
    tag: "VISUAL MONOGRAM",
    list: ["Monogram & Identity Design", "Luxury Packaging Systems", "Editorial Visual Guidelines", "Creative Art Direction"],
    visualId: "branding",
  },
  {
    title: "Website Experiences",
    tag: "IMMERSIBLE ENGINE",
    list: ["Premium Luxury Portals", "High-conversion SaaS Platforms", "Immersive E-Commerce Hubs", "Interactive Design Systems"],
    visualId: "web",
  },
  {
    title: "Growth Marketing",
    tag: "COMPOUND PIPELINE",
    list: ["Search Dominance (SEO)", "Sleek Conversion Funnels", "High-ROAS Creator Ads", "LTV Conversion Optimization"],
    visualId: "growth",
  },
  {
    title: "Content & Social",
    tag: "ATTENTION CURRENCY",
    list: ["Premium Video Production", "Founder Authority Content", "Creator Micro-campaigns", "UGC Ecosystems"],
    visualId: "content",
  },
  {
    title: "AI & Automation",
    tag: "INTELLIGENT LOOPS",
    list: ["CRM Custom Architectures", "Automated Pipeline Routings", "Autonomous Sales Funnels", "AI Processing Workflows"],
    visualId: "ai",
  },
];

export function ServicesExperience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".service-panel");
    const ctx = gsap.context(() => {
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          pinType: "transform",
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-[#050505] relative overflow-hidden">
      {/* Top narrative intro */}
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-lavender font-bold">
          OUR ABILITIES
        </span>
        <h2 className="headline-display text-4xl md:text-6xl mt-4 text-white leading-tight">
          Everything Needed To Scale.
        </h2>
        <p className="mt-4 text-muted max-w-lg">
          One cohesive partner. One sharp growth vision. Infinite potential outcomes.
        </p>
      </div>

      {/* Panels container */}
      <div className="relative">
        {services.map((service, i) => (
          <article
            key={service.title}
            className="service-panel relative min-h-screen border-t border-white/5 bg-[#050505] px-6 py-20 md:px-10 flex items-center"
          >
            {/* Ambient backlighting matching each panel */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

            <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-2">
              {/* Left Column: Details */}
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-lavender font-bold">
                  0{i + 1} / {service.tag}
                </span>
                <h3 className="headline-display text-3xl md:text-5xl text-white font-extralight leading-none">
                  {service.title}
                </h3>
                <ul className="space-y-4 text-muted/90 text-base md:text-lg">
                  {service.list.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1 w-1 rounded-full bg-lavender" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: High-fidelity visual mockups */}
              <div className="glass-panel rounded-3xl p-8 min-h-[380px] flex flex-col justify-between overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />

                {/* 1. BRAND STRATEGY VISUAL */}
                {service.visualId === "strategy" && (
                  <div className="flex-grow flex flex-col justify-center items-center h-full relative space-y-4 py-8">
                    <span className="headline-display text-7xl font-extralight text-white/5 tracking-[0.2em] animate-pulse">
                      WP
                    </span>
                    <div className="flex gap-4">
                      <span className="font-serif italic text-3xl text-lavender">Purity</span>
                      <span className="font-serif italic text-3xl text-white/40">×</span>
                      <span className="headline-display text-3xl text-white">Dominance</span>
                    </div>
                    <p className="text-[9px] uppercase tracking-widest text-muted text-center max-w-xs">
                      SHAPING THE PREMIUM EMOTIONAL CATEGORY
                    </p>
                  </div>
                )}

                {/* 2. BRANDING & DESIGN VISUAL */}
                {service.visualId === "branding" && (
                  <div className="flex-grow flex items-center justify-center h-full py-6 relative">
                    <div className="relative w-64 h-48">
                      {/* Stacked luxury moodboard grids */}
                      <div className="absolute left-0 top-4 w-40 h-32 rounded-xl border border-white/10 bg-white/[0.02] shadow-glow transform -rotate-6 transition group-hover:rotate-0 duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />
                        <div className="p-4 text-[10px] text-white/40 font-serif">CLASSICAL SENSE</div>
                      </div>
                      <div className="absolute right-0 bottom-4 w-44 h-32 rounded-xl border border-lavender/30 bg-[#0b0b0b] shadow-glow transform rotate-6 transition group-hover:rotate-0 duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                        <div className="p-4 flex flex-col justify-between h-full">
                          <span className="text-[9px] uppercase tracking-widest text-lavender">DIOR RESETS</span>
                          <span className="text-white text-xs font-serif font-light">ESTHETICS 2026</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. WEBSITE EXPERIENCES VISUAL */}
                {service.visualId === "web" && (
                  <div className="flex-grow flex items-center justify-center h-full py-4">
                    <div className="w-full rounded-xl border border-white/10 bg-[#0b0b0b]/60 shadow-glow overflow-hidden">
                      {/* Browser header */}
                      <div className="flex items-center gap-1.5 bg-white/5 px-4 py-2 border-b border-white/5">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        <span className="text-[8px] text-muted/65 ml-2">wepublicise.com</span>
                      </div>
                      {/* Inner screen content */}
                      <div className="p-4 space-y-3">
                        <div className="h-2 w-1/3 rounded bg-lavender/30 animate-pulse" />
                        <div className="h-8 rounded bg-white/5 border border-white/5 flex items-center justify-between px-3">
                          <span className="h-1.5 w-12 rounded bg-white/10" />
                          <span className="h-4 w-10 rounded-full bg-lavender/20 border border-lavender/40" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. GROWTH MARKETING VISUAL */}
                {service.visualId === "growth" && (
                  <div className="flex-grow flex flex-col justify-center h-full py-4">
                    {/* Animated growth lines */}
                    <div className="relative h-28 w-full border-b border-white/5 border-l border-white/5">
                      <svg className="w-full h-full stroke-lavender stroke-2 fill-none overflow-visible" viewBox="0 0 100 40">
                        <motion.path
                          d="M0,40 C15,35 30,15 45,28 C60,40 75,5 100,2"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <circle cx="100" cy="2" r="3" fill="#ffffff" className="animate-ping" />
                      </svg>
                    </div>
                    <div className="flex justify-between mt-4">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-muted">ORGANIC SEARCH</span>
                        <p className="headline-display text-white text-base mt-1">+270%</p>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-muted font-bold">ROAS MULTIPLIER</span>
                        <p className="headline-display text-lavender text-base mt-1">4.8X</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. CONTENT & SOCIAL VISUAL */}
                {service.visualId === "content" && (
                  <div className="flex-grow flex items-center justify-center h-full py-4 relative">
                    <div className="relative flex gap-4 w-full justify-center">
                      {/* Drifting Reels grids */}
                      <div className="w-24 h-40 rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex flex-col justify-between p-3 shrink-0 transform -translate-y-2 hover:translate-y-0 transition duration-300">
                        <span className="rounded bg-white/10 text-[7px] text-white px-1.5 py-0.5 w-max">REELS</span>
                        <span className="text-[8px] text-white font-medium">⚡ 1.2M VIEWS</span>
                      </div>
                      <div className="w-24 h-40 rounded-2xl border border-lavender/30 bg-[#0b0b0b] overflow-hidden flex flex-col justify-between p-3 shrink-0 transform translate-y-2 hover:translate-y-0 transition duration-300">
                        <span className="rounded bg-lavender/20 text-[7px] text-lavender px-1.5 py-0.5 w-max">YOUTUBE</span>
                        <span className="text-[8px] text-white font-medium">📈 +12K SHARES</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. AI & AUTOMATION VISUAL */}
                {service.visualId === "ai" && (
                  <div className="flex-grow flex items-center justify-center h-full py-4 relative">
                    {/* Node connector map */}
                    <svg className="absolute inset-0 w-full h-full stroke-lavender/25 stroke-[1px] fill-none overflow-visible" viewBox="0 0 100 100">
                      <line x1="20" y1="50" x2="50" y2="20" />
                      <line x1="20" y1="50" x2="50" y2="50" />
                      <line x1="20" y1="50" x2="50" y2="80" />
                      <line x1="50" y1="20" x2="80" y2="50" />
                      <line x1="50" y1="50" x2="80" y2="50" />
                      <line x1="50" y1="80" x2="80" y2="50" />
                      <circle cx="20" cy="50" r="3" fill="#b7a8ff" />
                      <circle cx="50" cy="20" r="3" fill="#ffffff" />
                      <circle cx="50" cy="50" r="3" fill="#b7a8ff" />
                      <circle cx="50" cy="80" r="3" fill="#ffffff" />
                      <circle cx="80" cy="50" r="3" fill="#b7a8ff" className="animate-pulse" />
                    </svg>
                    <span className="text-[9px] uppercase tracking-widest text-white/50 z-10 bg-[#050505] px-3 py-1 rounded-full border border-white/5">
                      PROCESSING NODES ACTIVE
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center text-[10px] text-muted/50 uppercase tracking-widest mt-6">
                  <span>CAPABILITY METRICS</span>
                  <span>WP SERVICE NODE</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
