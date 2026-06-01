"use client";

import { motion } from "framer-motion";

export function FounderSection() {
  return (
    <section className="bg-secondary/60 px-6 py-32 md:px-10 noise-overlay border-y border-white/5 relative overflow-hidden">
      <div className="absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-14 md:grid-cols-2 items-center">
          {/* Left Column: Premium visual video/shoot placeholder card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glass-panel rounded-3xl h-[460px] relative overflow-hidden flex flex-col justify-between p-8 border-lavender/20"
          >
            {/* Background design elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-lavender/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(183,168,255,0.15),transparent_40%)]" />

            <div className="flex justify-between items-start z-10">
              <span className="text-[9px] uppercase tracking-[0.25em] text-lavender font-bold">
                DOCUMENTARY INTRO
              </span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[8px] tracking-widest text-white/60">
                SCENE 01 / BUILDERS
              </span>
            </div>

            {/* Cinematic visual node inside card */}
            <div className="my-auto text-center z-10 space-y-3">
              <span className="text-white/20 text-7xl font-serif italic block select-none">Builders</span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/90 font-medium">
                THE NARRATIVE ARCHITECTS
              </p>
            </div>

            <div className="flex justify-between items-center text-[9px] text-muted/50 uppercase tracking-widest z-10 border-t border-white/5 pt-4">
              <span>LENGTH: 4.2 MINS</span>
              <span>RESOLVE: ULTRA-HD</span>
            </div>
          </motion.div>

          {/* Right Column: Narrative detail */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-lavender font-bold">
                THE BUILDERS PHILOSOPHY
              </span>
              <h2 className="headline-display text-4xl md:text-5xl text-white font-extralight leading-none">
                Built For Founders.<br />
                <span className="text-muted/60">By Builders.</span>
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg text-muted/90 leading-relaxed">
              <p className="text-white font-medium">
                We understand the volatility of scaling a company because we&apos;ve lived through the process ourselves.
              </p>
              <p>
                We have launched consumer brands from absolute zero, scaled SaaS products to seven figures,
                designed high-fidelity digital portals, and engineered marketing frameworks that captured
                millions of views in key metropolitan sectors.
              </p>
              <blockquote className="border-l border-lavender pl-6 italic text-white/90 text-lg">
                "We aren&apos;t here to simply manage digital campaigns. We are here to help you construct a business
                that culture remembers, values, and trusts."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
