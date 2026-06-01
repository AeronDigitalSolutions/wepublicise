"use client";

import { motion } from "framer-motion";

export function FutureSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-36 md:px-10 noise-overlay border-b border-white/5">
      {/* Interactive, slowly rotating futuristic ambient light spots */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-lavender/5 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-24 left-1/4 h-[420px] w-[420px] rounded-full bg-accent/5 blur-[120px] pointer-events-none"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-4xl space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-lavender font-bold">
            THE NEXT DECADE
          </span>
          <h2 className="headline-display text-4xl md:text-6xl text-white leading-tight font-extralight">
            The Next Decade Belongs To<br />
            <span className="gradient-text-lavender">Brands That Move Faster.</span>
          </h2>
          <div className="h-[1px] w-24 bg-white/10 my-8" />
          <p className="text-muted/90 text-lg md:text-xl leading-relaxed max-w-3xl">
            Artificial Intelligence is resetting entire visual environments. Social distribution networks are changing daily.
            Consumer buying habits are evolving every month. The companies that adapt fastest will dominate attention,
            culture, and industry margins.
          </p>
          <p className="text-white font-medium text-base md:text-lg">
            We help you build the infrastructure required to stay ahead before the competition catches up.
          </p>
        </div>
      </div>
    </section>
  );
}
