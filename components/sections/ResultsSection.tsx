"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ResultsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const giantHeadingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // States to hold running numbers for count-ups
  const [reach, setReach] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [brands, setBrands] = useState(0);
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Pinned ScrollTrigger for the headline & statistics transition
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=120%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        pinType: "transform",
        onUpdate: (self) => {
          const progress = self.progress;

          // Scale down slightly and nudge the headline up by 30px
          if (giantHeadingRef.current) {
            const scale = 1.0 - progress * 0.22; // Shrink from 1 to 0.78
            const y = -progress * 30; // Nudge up to keep centered
            gsap.set(giantHeadingRef.current, {
              scale: scale,
              y: y,
            });
          }

          // Fade in and slide up the statistics grid with a balanced offset
          if (gridRef.current) {
            gsap.set(gridRef.current, {
              opacity: progress,
              y: 40 - progress * 50, // Slide from +40px to -10px for a perfectly balanced visual gap
            });
          }
        },
        onEnter: () => {
          // Trigger numeric count-ups
          animateCount(850, setReach, 1400);
          animateCount(100, setRevenue, 1200);
          animateCount(120, setBrands, 1300);
          animateCount(18, setCountries, 1000);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Precise count-up utility
  const animateCount = (
    target: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
    durationMs: number
  ) => {
    let start = 0;
    const end = target;
    const totalSteps = 45;
    const stepTime = durationMs / totalSteps;

    const timer = setInterval(() => {
      start += Math.ceil(end / totalSteps);
      if (start >= end) {
        setter(end);
        clearInterval(timer);
      } else {
        setter(start);
      }
    }, stepTime);
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] flex flex-col justify-center items-center px-6 overflow-hidden z-20 noise-overlay"
    >
      <div className="absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Unified Column Container (Forces Heading and Cards to stay grouped in the center with a balanced gap) */}
      <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-12 z-10 relative">
        
        {/* Fullscreen Giant Central Headline (Collapses on scroll) */}
        <h2
          ref={giantHeadingRef}
          className="headline-display text-center select-none font-extralight text-white leading-tight tracking-tight filter drop-shadow-glow"
          style={{ fontSize: "clamp(1.8rem, 5.2vw, 4.6rem)" }}
        >
          Growth Is Beautiful.<br />
          <span className="gradient-text-lavender">But Measurable Growth Is Better.</span>
        </h2>

        {/* Statistics Grid (Fades in and slides up on scroll) */}
        <div
          ref={gridRef}
          style={{ opacity: 0 }}
          className="w-full"
        >
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            <article className="glass-panel rounded-2xl p-6 border-white/5 bg-white/[0.01]">
              <p className="text-[9px] uppercase tracking-widest text-muted">REVENUE INFLUENCED</p>
              <p className="headline-display text-3xl md:text-4xl text-lavender mt-3 font-light animate-pulse">
                ₹{revenue}Cr+
              </p>
              <p className="text-xs text-muted/60 mt-1">Direct compounding lift.</p>
            </article>

            <article className="glass-panel rounded-2xl p-6 border-white/5 bg-white/[0.01]">
              <p className="text-[9px] uppercase tracking-widest text-muted font-bold">AUDIENCE REACHED</p>
              <p className="headline-display text-3xl md:text-4xl text-white mt-3 font-light">
                +{reach}M+
              </p>
              <p className="text-xs text-muted/60 mt-1">Generated virality cycles.</p>
            </article>

            <article className="glass-panel rounded-2xl p-6 border-white/5 bg-white/[0.01]">
              <p className="text-[9px] uppercase tracking-widest text-muted">BRANDS SCALED</p>
              <p className="headline-display text-3xl md:text-4xl text-white mt-3 font-light">
                {brands}+
              </p>
              <p className="text-xs text-muted/60 mt-1">Market categories unlocked.</p>
            </article>

            <article className="glass-panel rounded-2xl p-6 border-white/5 bg-white/[0.01]">
              <p className="text-[9px] uppercase tracking-widest text-muted">COUNTRIES SERVED</p>
              <p className="headline-display text-3xl md:text-4xl text-white mt-3 font-light">
                {countries}+
              </p>
              <p className="text-xs text-muted/60 mt-1">Global compliance targets.</p>
            </article>
          </div>

          <div className="flex justify-between items-center text-[9px] text-muted/40 uppercase tracking-widest mt-10 border-t border-white/5 pt-4">
            <span>SOURCE: CERTIFIED VERIFIED LEDGERS 2026</span>
            <span>DOMINANCE UNLOCKED</span>
          </div>
        </div>
      </div>
    </div>
  );
}
