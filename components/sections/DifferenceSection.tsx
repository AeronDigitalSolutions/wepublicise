"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    title: "Positioning",
    tag: "THE CATEGORY RESET",
    text: "Become the obvious choice, not the cheapest option. We define a unique category that makes competitors irrelevant.",
  },
  {
    title: "Brand Identity",
    tag: "EMOTIONAL DESIRE",
    text: "Build an iconic brand people remember, not just a plain logo people see. Crafting premium assets that dictate trust.",
  },
  {
    title: "Content Ecosystem",
    tag: "COMPOUNDING REACH",
    text: "Create a system that commands attention while you sleep. Organic, viral, and paid content designed to build real fans.",
  },
  {
    title: "Growth Systems",
    tag: "SCALABLE INBOUND",
    text: "Turn target audience attention into predictable pipeline revenue. Performance funnels built on exact numbers, not luck.",
  },
  {
    title: "Technology",
    tag: "AI AUTOMATION",
    text: "AI integrations, advanced funnels, custom web apps, autonomous sales bots, and flawless real-time analytics engines.",
  },
  {
    title: "Authority",
    tag: "DOMINANT STATUS",
    text: "Position yourself as the absolute leader. Build deep cultural authority that protects your premium margins.",
  },
] as const;

function InteractiveCard({ title, tag, text, index }: { title: string; tag: string; text: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Set up 3D Parallax spring coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 15 });

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-secondary/60 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-lavender/30 flex flex-col justify-between min-h-[260px] perspective-1000"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.8 }}
    >
      {/* Interactive border gradient beam hover effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-transparent to-lavender/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-accent/15 group-hover:to-lavender/5 pointer-events-none" />

      {/* Decorative glowing grid line */}
      <div className="absolute top-0 right-10 h-[1px] w-12 bg-gradient-to-r from-transparent via-lavender/40 to-transparent group-hover:w-20 transition-all duration-500" />

      <div style={{ transform: "translateZ(40px)" }} className="transition-transform duration-300">
        <span className="text-[9px] uppercase tracking-[0.25em] text-lavender font-semibold">
          {tag}
        </span>
        <h3 className="headline-display text-2xl md:text-3xl text-white mt-3 font-extralight">
          {title}
        </h3>
        <p className="mt-4 text-sm text-muted/95 leading-relaxed">
          {text}
        </p>
      </div>

      <div style={{ transform: "translateZ(20px)" }} className="flex justify-between items-center mt-6 text-[10px] text-muted/40 uppercase tracking-widest font-semibold transition-colors duration-300 group-hover:text-lavender/60">
        <span>0{index + 1} / LEADERSHIP</span>
        <span>{"->"}</span>
      </div>
    </motion.article>
  );
}

export function DifferenceSection() {
  return (
    <section className="section-shell bg-[#050505] px-6 py-32 md:px-10 noise-overlay overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-lavender font-bold">
            THE STRATEGIC ADVANTAGE
          </span>
          <h2 className="headline-display text-4xl md:text-6xl mt-4 text-white leading-tight">
            Why The World's Fastest Growing Brands Win
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            Success is not accidental. We construct five core brand vectors that convert attention into high-margin revenue.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <InteractiveCard
              key={item.title}
              title={item.title}
              tag={item.tag}
              text={item.text}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
