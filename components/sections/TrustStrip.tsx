"use client";

import { motion } from "framer-motion";

const logos = [
  "A T L A S",
  "Z E N I T H",
  "V E R V E",
  "M O N O L I T H",
  "A E T H E R",
  "S O L A I R E",
  "N O V A",
  "R A D I A N T",
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-white/5 bg-[#0b0b0b]/40 py-12 noise-overlay overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute left-1/4 top-1/2 h-44 w-96 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.26em] text-muted/90 font-medium"
        >
          Trusted by ambitious brands across India, UAE, Singapore, UK & USA.
        </motion.p>
      </div>

      {/* Infinite Elegant Marquee */}
      <div className="relative mt-8 flex overflow-x-hidden mask-gradient-x">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee gap-8 pr-8 shrink-0">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] px-10 py-5 backdrop-blur-md transition-colors duration-300 hover:border-lavender/25 hover:bg-white/[0.04] shrink-0 whitespace-nowrap"
            >
              <span className="headline-display text-sm tracking-[0.4em] font-light text-white/70 transition-colors duration-300 hover:text-white whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
