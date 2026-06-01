"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const reels = [
  {
    title: "Luxury Brand Shoot",
    category: "CREATIVE",
    metric: "Dior Style Reset",
    style: "from-amber-500/10 via-transparent to-[#050505] border-amber-500/20",
    visual: (
      <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <span className="text-[10px] tracking-widest text-amber-400">01 / BRAND</span>
        <h4 className="headline-display text-lg text-white">THE ART OF DESIRE</h4>
      </div>
    ),
  },
  {
    title: "Startup Launchpad",
    category: "INCEPTION",
    metric: "$4.5M Raised",
    style: "from-blue-600/10 via-transparent to-[#050505] border-blue-500/20",
    visual: (
      <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <span className="text-[10px] tracking-widest text-blue-400">02 / LAUNCH</span>
        <div className="h-2 w-2/3 rounded bg-white/10 overflow-hidden"><div className="h-full w-4/5 bg-blue-500 animate-pulse" /></div>
      </div>
    ),
  },
  {
    title: "Viral Creator Campaign",
    category: "ATTENTION",
    metric: "4.2M+ Real Reach",
    style: "from-purple-600/15 via-transparent to-[#050505] border-purple-500/20",
    visual: (
      <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <span className="text-[10px] tracking-widest text-purple-400">03 / INFLUENCE</span>
        <div className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] text-white w-max">
          ⚡ 4.2M VIEWERS
        </div>
      </div>
    ),
  },
  {
    title: "Interactive Web Experience",
    category: "TECHNOLOGY",
    metric: "99 Performance",
    style: "from-emerald-500/10 via-transparent to-[#050505] border-emerald-500/20",
    visual: (
      <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <span className="text-[10px] tracking-widest text-emerald-400">04 / WEB</span>
        <div className="flex gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-white/20" /><span className="h-1.5 w-1.5 rounded-full bg-white/20" /><span className="h-1.5 w-1.5 rounded-full bg-white/20" /></div>
      </div>
    ),
  },
  {
    title: "National Digital Billboard",
    category: "DOMINANCE",
    metric: "18M Impressions",
    style: "from-rose-500/10 via-transparent to-[#050505] border-rose-500/20",
    visual: (
      <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <span className="text-[10px] tracking-widest text-rose-400">05 / CULTURE</span>
        <div className="border border-dashed border-white/20 rounded p-2 text-center text-[10px] text-white/50">OUT OF HOME AD</div>
      </div>
    ),
  },
  {
    title: "Growth Dashboard Setup",
    category: "REVENUE",
    metric: "3.2x LTV Boost",
    style: "from-cyan-500/10 via-transparent to-[#050505] border-cyan-500/20",
    visual: (
      <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <span className="text-[10px] tracking-widest text-cyan-400">06 / ENGINE</span>
        <svg className="w-full h-8 stroke-cyan-500 stroke-1 fill-none" viewBox="0 0 100 30"><path d="M0,25 Q15,10 30,18 T60,5 T90,12" /><circle cx="90" cy="12" r="2" fill="#22d3ee" /></svg>
      </div>
    ),
  },
  {
    title: "Exclusive Product Teaser",
    category: "LUXURY",
    metric: "Premium Positioning",
    style: "from-indigo-600/15 via-transparent to-[#050505] border-indigo-500/20",
    visual: (
      <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <span className="text-[10px] tracking-widest text-indigo-400">07 / DESIGN</span>
        <div className="h-10 w-10 rounded-full bg-accent-gradient opacity-80 border border-white/20 self-center blur-[2px]" />
      </div>
    ),
  },
  {
    title: "Founder Authority Channel",
    category: "TRUST",
    metric: "+150k Subscribers",
    style: "from-violet-600/15 via-transparent to-[#050505] border-violet-500/20",
    visual: (
      <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <span className="text-[10px] tracking-widest text-violet-400">08 / SYSTEM</span>
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-red-500 animate-ping" /><span className="text-[9px] text-white">LIVE SPEECH</span></div>
      </div>
    ),
  },
];

export function CinematicReel() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered parallax reveal of the reel grid blocks (optimized for instant scroll response)
      gsap.fromTo(
        ".reel-card",
        { opacity: 0.15, scale: 0.94, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.02, // Tight staggered reveal wave
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%", // Trigger sooner as it enters
            end: "top 30%", // Complete quickly so cards stay fully visible as user scrolls past
            scrub: 0.4, // Ultra-responsive scroll tracking
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-shell bg-[#050505] px-6 py-32 md:px-10 overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lavender/5 blur-[140px] pointer-events-none" />

      {/* Grid Collages */}
      <div className="mx-auto grid w-full max-w-7xl gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {reels.map((reel) => (
          <article
            key={reel.title}
            className={`reel-card group relative h-64 overflow-hidden rounded-3xl border bg-secondary/35 backdrop-blur-sm transition-all duration-500 hover:border-lavender/40 ${reel.style}`}
          >
            {/* Visual Teaser Environment */}
            {reel.visual}

            {/* Hover details overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-black/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-[9px] uppercase tracking-[0.25em] text-lavender">{reel.category}</span>
              <h4 className="headline-display text-lg mt-2 text-white">{reel.title}</h4>
              <p className="text-xs text-muted mt-1">Impact: {reel.metric}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Narrative Climax */}
      <div className="mx-auto mt-28 max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[0.3em] text-lavender"
        >
          ATTENTION ECONOMY
        </motion.p>
        <h2 className="headline-display mt-6 text-4xl leading-tight md:text-7xl font-extralight text-white">
          Attention is the New Currency.<br />
          <span className="gradient-text-lavender">We help brands own it.</span>
        </h2>
      </div>
    </section>
  );
}
