"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function BigIdea() {
  return (
    <section className="relative bg-[#050505] py-36 px-6 md:px-10 overflow-hidden noise-overlay">
      <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl">
        {/* Editorial Heading */}
        <SectionTitle
          eyebrow="THE CORE DISCOVERY"
          title="Most Brands Don't Have a Marketing Problem. They Have an Identity Problem."
          className="text-left !px-0"
        />

        <div className="mt-20 grid gap-14 md:grid-cols-[1fr_2fr]">
          {/* Vertical luxury tagline */}
          <div className="border-l border-white/10 pl-6 flex flex-col justify-between py-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-lavender font-semibold">
              THE POSITIONING ANOMALY
            </span>
            <h3 className="headline-display text-2xl md:text-3xl text-white/40 mt-4 leading-none select-none">
              VISIBILITY<br />
              WITHOUT<br />
              POSITIONING<br />
              IS NOISE.
            </h3>
          </div>

          {/* Core Copy Blocks with Staggered Scroll-In Effect */}
          <div className="space-y-10 text-lg leading-relaxed text-muted/90">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p>
                Companies spend lakhs on digital ads. Founders spend months filming viral short-form content.
                Businesses cycle through agency after agency.
              </p>
              <p className="text-white font-medium">
                Yet their growth remains inconsistent, volatile, and highly dependent on active spends.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="border-t border-white/5 pt-8 space-y-4"
            >
              <p>
                The truth is simple: **visibility without sharp positioning is merely expensive noise**. 
                In a saturated market, you don't scale by yelling louder; you scale by standing apart.
              </p>
              <p className="text-lavender">
                We construct market leaders from the inside out—forging a sharp strategy, unique visual identity,
                dominant digital presence, and scalable growth engine designed to compound for years.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
