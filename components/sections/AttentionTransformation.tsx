"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AttentionScene = dynamic(
  () => import("@/components/three/AttentionParticleScene").then((m) => m.AttentionParticleScene),
  { ssr: false }
);

const stages = [
  { name: "Attention", subtitle: "CAPTURING FOCUS" },
  { name: "Trust", subtitle: "ESTABLISHING VALUE" },
  { name: "Customers", subtitle: "NURTURING DEMAND" },
  { name: "Revenue", subtitle: "COMPOUNDING RESULTS" },
] as const;

export function AttentionTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Pin the section for smooth scroll-driven morphing
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
        anticipatePin: 1,
        pinType: "transform",
        onUpdate: (self) => {
          // Update the global progress for the ThreeJS scene
          window.__attentionScrollProgress = self.progress;

          // Compute active text stage matching particle shapes
          const progress = self.progress;
          if (progress < 0.25) {
            setCurrentStage(0);
          } else if (progress < 0.5) {
            setCurrentStage(1);
          } else if (progress < 0.75) {
            setCurrentStage(2);
          } else {
            setCurrentStage(3);
          }
        },
      });

      // Animate text stage details inside the pinned view
      gsap.fromTo(
        ".transformation-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="services" className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Background Interactive R3F Particles */}
      <div className="absolute inset-0 opacity-90 z-0">
        <AttentionScene />
      </div>

      {/* Luxury Radial Shadows */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_40%,#050505_95%)] pointer-events-none" />

      {/* Floating UI Elements */}
      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center items-center px-6 py-24 md:px-10">
        
        {/* Unified Center Group (Heading + Linear Steps) */}
        <div className="w-full flex flex-col items-center justify-center gap-16 md:gap-20 my-auto">
          {/* Top Header */}
          <div className="transformation-header text-center space-y-4 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-lavender font-bold">
              THE LAWS OF CAPTURING THE MARKET
            </p>
            <h2 className="headline-display text-3xl md:text-5xl text-white">
              Chaos Becomes Clarity
            </h2>
            <p className="text-sm text-muted max-w-xl mx-auto">
              Scroll to see how uncontrolled audience noise is filtered, aligned, and transformed into predictable growth.
            </p>
          </div>

          {/* Horizontal Linear Sequence Steps */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 w-full">
            {stages.map((stage, index) => {
              const isActive = index === currentStage;
              const isPassed = index < currentStage;

              return (
                <div
                  key={stage.name}
                  className="flex-grow flex flex-col items-center text-center transition-all duration-500 relative w-full"
                >
                  {/* Visual Connector Dot */}
                  <div className="flex items-center justify-center relative mb-4">
                    <div
                      className={`h-4 w-4 rounded-full border transition-all duration-500 ${
                        isActive
                          ? "border-lavender bg-white shadow-glow scale-125"
                          : isPassed
                          ? "border-lavender bg-lavender/40"
                          : "border-white/20 bg-transparent"
                      }`}
                    />
                    {index < stages.length - 1 && (
                      <div
                        className={`hidden md:block absolute left-4 h-[1px] w-[20vw] origin-left transition-all duration-500 ${
                          isPassed ? "bg-lavender" : "bg-white/10"
                        }`}
                      />
                    )}
                  </div>

                  {/* Subtitle */}
                  <span
                    className={`text-[9px] tracking-widest uppercase transition-colors duration-500 ${
                      isActive ? "text-lavender font-bold" : "text-muted/50"
                    }`}
                  >
                    {stage.subtitle}
                  </span>

                  {/* Stage Title */}
                  <h3
                    className={`headline-display text-4xl md:text-5xl mt-2 transition-all duration-500 ${
                      isActive ? "text-white scale-105" : "text-white/20"
                    }`}
                  >
                    {stage.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Status Panel (Absolutely Positioned) */}
        <div className="absolute bottom-8 left-6 right-6 md:left-10 md:right-10 flex justify-between items-center text-[10px] text-muted/70 uppercase tracking-widest border-t border-white/5 pt-6 z-20">
          <span>ALGORITHM: LERP PHASE 0{currentStage + 1}</span>
          <span>TRANSFORMATION COMPLETED</span>
        </div>
      </div>
    </div>
  );
}
