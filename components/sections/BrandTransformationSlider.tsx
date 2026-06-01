"use client";

import { useMemo, useState, useRef } from "react";
import { motion } from "framer-motion";

export function BrandTransformationSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const clipStyle = useMemo(() => {
    return {
      clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
    };
  }, [position]);

  return (
    <section className="bg-[#050505] px-6 py-32 md:px-10 overflow-hidden relative">
      <div className="absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-lavender font-bold">
            THE SHIFT IN PERCEPTION
          </span>
          <h2 className="headline-display text-4xl md:text-6xl mt-4 text-white">
            From Average Brand to Market Leader
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            Drag the interactive divider across the card to experience the visual, structural, and narrative transformation.
          </p>
        </div>

        {/* Drag Container */}
        <div
          ref={containerRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
          className="relative mt-16 h-[500px] w-full rounded-3xl border border-white/5 bg-secondary/80 overflow-hidden select-none touch-none"
        >
          {/* BACKGROUND LAYER: Market Leader (Premium Design) */}
          <div className="absolute inset-0 w-full h-full p-8 flex flex-col justify-between bg-gradient-to-r from-accent/20 via-transparent to-lavender/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(183,168,255,0.1),transparent_40%)] pointer-events-none" />
            <div className="flex justify-between items-start z-10">
              <div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-lavender font-bold">MARKET LEADER EXPERIENCE</span>
                <h4 className="headline-display text-3xl text-white mt-1">THE OBVIOUS CHOICE</h4>
              </div>
              <span className="rounded-full bg-lavender/10 border border-lavender/30 px-4 py-1.5 text-[10px] text-lavender font-semibold shadow-glow">
                ₹100Cr+ POWERED
              </span>
            </div>

            {/* High-fidelity Market Leader UI Teaser */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto z-10">
              <div className="glass-panel rounded-2xl p-6 border-lavender/30 bg-white/[0.04]">
                <p className="text-[9px] uppercase tracking-widest text-muted">MONOGRAM BRANDING</p>
                <p className="headline-display text-2xl text-white mt-2">Dior-Grade Identity</p>
                <p className="text-xs text-muted mt-2">Custom typographic assets built for cultural influence.</p>
              </div>
              <div className="glass-panel rounded-2xl p-6 border-lavender/30 bg-white/[0.04]">
                <p className="text-[9px] uppercase tracking-widest text-muted">CONVERSION FUNNEL</p>
                <p className="headline-display text-2xl text-lavender mt-2">99/100 Core Web Vitals</p>
                <p className="text-xs text-muted mt-2">Instant loading times, flawless responsive experience.</p>
              </div>
              <div className="glass-panel rounded-2xl p-6 border-lavender/30 bg-white/[0.04]">
                <p className="text-[9px] uppercase tracking-widest text-muted">GROWTH ENGINES</p>
                <p className="headline-display text-2xl text-white mt-2">+340% Pipeline Lift</p>
                <p className="text-xs text-muted mt-2">Autonomous lead nurture, CRM automated loops.</p>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-muted/60 uppercase tracking-widest z-10 border-t border-white/5 pt-4">
              <span>POSITIONING: HIGHEST-VALUE CATEGORY EXCLUSIVE</span>
              <span>COMMERCIAL COMPOUNDING STAGE</span>
            </div>
          </div>

          {/* FOREGROUND LAYER: Average Brand (Basic, Cluttered design) */}
          <div
            style={clipStyle}
            className="absolute inset-0 w-full h-full p-8 flex flex-col justify-between bg-black/95 z-10 pointer-events-none"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-muted">AVERAGE BRAND PORTAL</span>
                <h4 className="headline-display text-3xl text-muted/80 mt-1">ANOTHER COMMODITY</h4>
              </div>
              <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-[10px] text-muted">
                ₹0.5Cr STAGNATION
              </span>
            </div>

            {/* Dull Average Brand UI Teaser */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6">
                <p className="text-[9px] uppercase tracking-widest text-muted/60">LOGO & DESIGN</p>
                <p className="headline-display text-2xl text-muted/40 mt-2">Generic Typography</p>
                <p className="text-xs text-muted/40 mt-2">Boring templates, basic fonts, no emotional depth.</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6">
                <p className="text-[9px] uppercase tracking-widest text-muted/60">WEBSITE INTERFACE</p>
                <p className="headline-display text-2xl text-muted/40 mt-2">Slow-loading Template</p>
                <p className="text-xs text-muted/40 mt-2">Clunky navigation, broken mobile layout shifts.</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6">
                <p className="text-[9px] uppercase tracking-widest text-muted/60">ADVERTISING OUTCOMES</p>
                <p className="headline-display text-2xl text-muted/40 mt-2">Inconsistent Ad ROAS</p>
                <p className="text-xs text-muted/40 mt-2">High cost per acquisition, no audience trust.</p>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-muted/40 uppercase tracking-widest border-t border-white/5 pt-4">
              <span>POSITIONING: PRICE-DISCOUNT COMPETITION</span>
              <span>MARKETING STAGE: TRANSACTIONAL NOISE</span>
            </div>
          </div>

          {/* DRAGGABLE BEAM INTERACTION */}
          <div
            style={{ left: `${position}%` }}
            className="absolute inset-y-0 z-20 cursor-ew-resize -translate-x-1/2 flex items-center justify-center pointer-events-none"
          >
            {/* Glowing line */}
            <div className="h-full w-[2px] bg-gradient-to-b from-transparent via-lavender to-transparent shadow-glow" />

            {/* Glowing interactive cursor ring */}
            <div className="absolute h-10 w-10 rounded-full border border-white/80 bg-black/90 shadow-glow flex items-center justify-center transition-transform group-active:scale-90">
              <span className="text-white text-[10px] font-semibold tracking-wider">{"<>"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
