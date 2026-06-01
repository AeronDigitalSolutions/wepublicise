"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const phase1Ref = useRef<HTMLDivElement>(null);
  const phase2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Pin the climax CTA section
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        anticipatePin: 1,
        pinType: "transform",
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress < 0.5) {
            // PHASE 1: Slide & fade out the first CTA group
            const factor = progress / 0.5; // 0 -> 1
            gsap.set(phase1Ref.current, {
              opacity: 1 - factor,
              y: -factor * 50,
            });
            gsap.set(phase2Ref.current, {
              opacity: 0,
              scale: 0.85,
            });
          } else {
            // PHASE 2: Scale and fade in the final close
            const factor = (progress - 0.5) / 0.5; // 0 -> 1
            gsap.set(phase1Ref.current, {
              opacity: 0,
            });
            
            // Bring in the final text and the single CTA
            gsap.set(phase2Ref.current, {
              opacity: factor,
              scale: 0.85 + factor * 0.15,
            });
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black flex flex-col justify-center items-center px-6 overflow-hidden z-20 noise-overlay"
    >
      {/* Background massive glow spot */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[140px] pointer-events-none" />

      {/* PHASE 1: Initial call to action */}
      <div
        ref={phase1Ref}
        className="w-full max-w-4xl text-center space-y-8 absolute flex flex-col items-center justify-center px-6"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-lavender font-bold">
          SECURE YOUR CATEGORY
        </span>
        <h2 className="headline-display text-4xl leading-tight md:text-7xl font-extralight text-white">
          The Brand You Want To<br />
          Build Tomorrow Should<br />
          <span className="gradient-text-lavender">Start Today.</span>
        </h2>
        <p className="max-w-2xl text-muted text-base md:text-lg">
          If you are ready to construct a category leader that people remember, trust, and choose, let&apos;s talk.
        </p>
        <div className="pt-4">
          <MagneticButton className="hover:scale-105">Book your Strategy Call</MagneticButton>
        </div>
      </div>

      {/* PHASE 2: The ultimate cinematic close (Only single button remains) */}
      <div
        ref={phase2Ref}
        style={{ opacity: 0, transform: "scale(0.85)" }}
        className="w-full max-w-4xl text-center space-y-10 flex flex-col items-center justify-center px-6 pointer-events-auto"
      >
        <h2 className="headline-display text-4xl leading-tight md:text-7xl font-extralight text-white/40 tracking-tight">
          THE NEXT<br />
          CATEGORY LEADER<br />
          <span className="text-white filter drop-shadow-glow">MIGHT BE YOU.</span>
        </h2>
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted max-w-xs leading-relaxed">
          EVERYTHING STARTS WITH AN INITIATION. WE BUILD MARKET LEADERS.
        </p>
        <div className="pt-6">
          <MagneticButton className="shadow-glow hover:scale-110 !px-10 !py-4 text-base font-semibold bg-white text-black">
            START BUILDING
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
