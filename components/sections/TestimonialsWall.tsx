"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: "luxury-d2c",
    brand: "Founder, Luxury D2C Beauty",
    quote: "They transformed our brand from visible to undeniable. Customer demand followed creative authority.",
    videoLabel: "SCENE FILM: DIOR RESET",
    caseStudy: {
      challenge: "High ad spend dependency, weak brand story, and flat consumer perception.",
      strategy: "Redesigned custom monograms, transitioned checkout pages to premium glass templates, and orchestrated high-contrast video shoots.",
      outcome: "+320% Qualified Pipeline, ₹14Cr New Revenue in 8 Months.",
    },
  },
  {
    id: "saas-zenith",
    brand: "CEO, Zenith B2B SaaS",
    quote: "This felt less like a standard marketing agency and more like a high-fidelity growth architecture team.",
    videoLabel: "PRODUCT CASE: NARRATIVE OUTCOME",
    caseStudy: {
      challenge: "Cluttered dashboards and technical jargon failing to connect with premium enterprise leads.",
      strategy: "Established category authority narratives, deployed autonomous lead pipelines, and built high-performance custom landing pages.",
      outcome: "4.2X inbound demonstration bookings, $2.4M ARR Compound.",
    },
  },
  {
    id: "retail-group",
    brand: "CMO, Atlas Retail Group",
    quote: "Our campaigns started compounding once our positioning became crystal clear. Flawless execution.",
    videoLabel: "RETAIL DOCUMENTARY: TRUST LIFT",
    caseStudy: {
      challenge: "Diluted positioning across multiple channels causing price discount wars.",
      strategy: "Unified all digital touchpoints under a luxury aesthetic, optimized SEO structures, and launched targeted creator campaigns.",
      outcome: "3.1x qualified organic search demand, ₹22Cr direct revenue lift.",
    },
  },
  {
    id: "creator-brand",
    brand: "Personal Brand Creator",
    quote: "Attention turned into trust, then partnerships, then serious business momentum. Impossible to ignore.",
    videoLabel: "AUTHORITY KEYNOTE: COMPOUND REACH",
    caseStudy: {
      challenge: "High organic views but zero lead conversions and low commercial trust.",
      strategy: "Built automated newsletters, organized exclusive creator communities, and set up founder thought leadership funnels.",
      outcome: "+850M Audience Reach, +12K newsletter subscribers.",
    },
  },
];

export function TestimonialsWall() {
  const [activeStory, setActiveStory] = useState<(typeof testimonials)[number] | null>(null);

  return (
    <section className="bg-secondary/60 px-6 py-32 md:px-10 noise-overlay border-y border-white/5 relative overflow-hidden">
      <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-lavender font-bold">
            CLIENT ADVOCACY
          </span>
          <h2 className="headline-display text-3xl md:text-5xl text-white">
            What Ambitious Brands Say
          </h2>
          <p className="text-sm text-muted max-w-md mx-auto">
            Click on any client card below to open the complete transformation story, strategy blueprints, and results.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <motion.article
              key={item.id}
              onClick={() => setActiveStory(item)}
              whileHover={{ scale: 1.015, y: -4 }}
              className="group rounded-3xl border border-white/5 bg-secondary/80 p-7 cursor-pointer hover:border-lavender/30 transition-colors duration-500 flex flex-col justify-between h-[360px]"
            >
              {/* Premium video thumbnail placeholder */}
              <div className="relative h-44 rounded-2xl border border-white/5 bg-gradient-to-br from-accent/20 to-lavender/5 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Visual Play Icon */}
                <div className="z-10 h-12 w-12 rounded-full border border-white/40 bg-black/80 flex items-center justify-center group-hover:scale-110 group-hover:border-lavender transition-all duration-300">
                  <span className="text-white text-xs pl-0.5">▶</span>
                </div>

                <span className="absolute bottom-4 left-4 text-[9px] uppercase tracking-widest text-white/70 font-semibold z-10">
                  {item.videoLabel}
                </span>
              </div>

              <div className="mt-6 flex-grow flex flex-col justify-between">
                <p className="text-sm md:text-base text-white/90 italic leading-relaxed line-clamp-2">
                  "{item.quote}"
                </p>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-muted/60 mt-4 border-t border-white/5 pt-3">
                  <span>{item.brand}</span>
                  <span className="text-lavender font-bold">READ BLUEPRINT {"->"}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* DETAILED GLASSMORPHIC STORY MODAL */}
      <AnimatePresence>
        {activeStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="glass-panel w-full max-w-2xl rounded-3xl p-8 bg-[#0b0b0b] border-lavender/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-lavender/5 pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setActiveStory(null)}
                className="absolute right-6 top-6 text-xs uppercase tracking-widest text-muted hover:text-white border border-white/10 rounded-full px-3 py-1 bg-white/5 transition"
              >
                Close
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-lavender font-bold">TRANSFORMATION REPORT</span>
                  <h3 className="headline-display text-2xl text-white mt-1">{activeStory.brand}</h3>
                </div>

                <p className="text-base md:text-lg text-white italic leading-relaxed border-l-2 border-lavender pl-6">
                  "{activeStory.quote}"
                </p>

                <div className="space-y-4 border-t border-white/5 pt-6 text-sm">
                  <p className="text-muted leading-relaxed">
                    <strong className="text-white uppercase tracking-wider text-[10px] block mb-1">Challenge</strong>
                    {activeStory.caseStudy.challenge}
                  </p>
                  <p className="text-muted leading-relaxed">
                    <strong className="text-white uppercase tracking-wider text-[10px] block mb-1">Strategy Blueprint</strong>
                    {activeStory.caseStudy.strategy}
                  </p>
                  <p className="text-muted leading-relaxed">
                    <strong className="text-lavender uppercase tracking-wider text-[10px] block mb-1 font-bold">Verified Impact</strong>
                    <span className="text-white font-medium">{activeStory.caseStudy.outcome}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
