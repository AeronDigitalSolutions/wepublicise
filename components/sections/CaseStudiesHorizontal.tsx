"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const studies = [
  {
    brand: "ATLAS",
    industry: "LUXURY RETAIL",
    challenge: "High visual aesthetic but extremely low digital conversion rates.",
    strategy: "Visual identity reset paired with a high-fidelity checkout system.",
    result: "3.1x qualified demand",
    impact: "₹22Cr Revenue Lift",
    style: "from-amber-600/10 to-amber-950/20 border-amber-500/20",
    badge: "text-amber-400 border-amber-400/30 bg-amber-400/5",
    visual: (
      <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded-2xl p-4 mt-6">
        <div>
          <span className="text-[8px] text-muted uppercase tracking-widest">BEFORE PERCEPTION</span>
          <p className="text-xs text-muted/50 font-serif mt-1">Generic Catalog</p>
        </div>
        <span className="text-lavender">{"->"}</span>
        <div className="text-right">
          <span className="text-[8px] text-lavender uppercase tracking-widest font-bold">AFTER DESIRE</span>
          <p className="text-xs text-white font-serif mt-1">Cinematic Monogram</p>
        </div>
      </div>
    ),
  },
  {
    brand: "ZENITH",
    industry: "SAAS PLATFORM",
    challenge: "Heavy feature lists, lacking high-value positioning.",
    strategy: "Category design narrative + founder-led authority systems.",
    result: "4x inbound pipelines",
    impact: "$2.4M ARR Compound",
    style: "from-blue-600/10 to-blue-950/20 border-blue-500/20",
    badge: "text-blue-400 border-blue-400/30 bg-blue-400/5",
    visual: (
      <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded-2xl p-4 mt-6">
        <div>
          <span className="text-[8px] text-muted uppercase tracking-widest">BEFORE OUTCOME</span>
          <p className="text-xs text-muted/50 font-sans mt-1">Empty Demo Forms</p>
        </div>
        <span className="text-lavender">{"->"}</span>
        <div className="text-right">
          <span className="text-[8px] text-blue-400 uppercase tracking-widest font-bold">AFTER OUTCOME</span>
          <p className="text-xs text-white font-sans mt-1">Automated Queue System</p>
        </div>
      </div>
    ),
  },
  {
    brand: "VERVE",
    industry: "D2C BEAUTY CO.",
    challenge: "No differentiation inside a heavily crowded marketplace.",
    strategy: "Visual aesthetics reset + creator content orchestration loops.",
    result: "270% organic surge",
    impact: "₹14Cr New Revenue",
    style: "from-purple-600/10 to-purple-950/20 border-purple-500/20",
    badge: "text-purple-400 border-purple-400/30 bg-purple-400/5",
    visual: (
      <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded-2xl p-4 mt-6">
        <div>
          <span className="text-[8px] text-muted uppercase tracking-widest">BEFORE FLOW</span>
          <p className="text-xs text-muted/50 mt-1">Paid Ads Dependency</p>
        </div>
        <span className="text-lavender">{"->"}</span>
        <div className="text-right">
          <span className="text-[8px] text-purple-400 uppercase tracking-widest font-bold">AFTER FLOW</span>
          <p className="text-xs text-white mt-1">Self-funding Creators</p>
        </div>
      </div>
    ),
  },
];

export function CaseStudiesHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = sectionRef.current?.querySelector(".case-track");
      if (!track) return;

      // GSAP Horizontal scroll mapping
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 80),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          pinType: "transform",
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work-track" className="min-h-screen bg-[#050505] flex flex-col justify-center overflow-hidden relative py-12 md:py-0">
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Title block */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-lavender font-bold">
            THE KEYNOTES
          </span>
          <h2 className="headline-display text-4xl md:text-6xl mt-4 text-white leading-none">
            Proof Beats Promises.
          </h2>
        </div>
        <button className="rounded-full border border-white/10 bg-white/[0.02] px-6 py-2.5 text-xs font-semibold tracking-widest text-muted hover:text-white hover:border-lavender/30 transition duration-300">
          EXPLORE ALL MONOGRAMS
        </button>
      </div>

      {/* Horizontal horizontal track scroll */}
      <div className="case-track mt-16 flex gap-8 px-6 pb-12 md:px-10 overflow-visible">
        {studies.map((study) => (
          <article
            key={study.brand}
            className={`w-[85vw] md:w-[48vw] shrink-0 rounded-3xl border bg-secondary/60 p-8 flex flex-col justify-between min-h-[460px] relative overflow-hidden backdrop-blur-sm transition-colors duration-500 hover:border-white/20 bg-gradient-to-br ${study.style}`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />

            {/* Header info */}
            <div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-[0.25em] text-lavender font-bold">
                  {study.industry}
                </span>
                <span className={`rounded-full border px-3 py-1 text-[9px] uppercase tracking-widest font-semibold ${study.badge}`}>
                  {study.brand}
                </span>
              </div>
              <h3 className="headline-display text-3xl text-white mt-4 font-light">
                {study.result}
              </h3>
              <p className="text-sm text-muted mt-3 leading-relaxed">
                <strong className="text-white">Challenge:</strong> {study.challenge}
              </p>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                <strong className="text-white">Strategy:</strong> {study.strategy}
              </p>
            </div>

            {/* Visual preview transformation */}
            {study.visual}

            {/* Bottom impact stat */}
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest mt-8 border-t border-white/5 pt-4">
              <span className="text-muted/50">OUTCOME METRIC</span>
              <span className="text-white font-bold tracking-wider">{study.impact}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
