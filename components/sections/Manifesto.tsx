"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lines = [
  "We believe branding is not decoration.",
  "We believe marketing is not posting.",
  "We believe growth is not luck.",
  "We believe great companies deserve great attention.",
  "We believe category leaders are built intentionally.",
  "We believe the future belongs to those who create it.",
];

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Fade in each line smoothly as it rolls into the viewport
      gsap.utils.toArray<HTMLElement>(".manifesto-line").forEach((line) => {
        gsap.fromTo(
          line,
          { opacity: 0.15, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              end: "top 45%",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#050505] px-6 py-40 md:px-10 noise-overlay overflow-hidden relative border-b border-white/5"
    >
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-5xl">
        <span className="text-[10px] uppercase tracking-[0.3em] text-lavender font-bold block text-center mb-6">
          THE MONOGRAM MANIFESTO
        </span>
        <h2 className="headline-display text-4xl md:text-6xl text-white text-center mb-16 font-light">
          We Believe
        </h2>
        
        <div className="space-y-12 md:space-y-16">
          {lines.map((line, index) => (
            <p
              key={line}
              className="manifesto-line headline-display text-2xl md:text-[2.6rem] text-white leading-tight font-extralight text-center"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
