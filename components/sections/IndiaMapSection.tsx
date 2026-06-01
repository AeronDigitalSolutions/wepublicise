"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";

const IndiaMap = dynamic(
  () => import("@/components/three/IndiaLightMapScene").then((m) => m.IndiaLightMapScene),
  { ssr: false }
);

const regions = [
  {
    name: "Mumbai",
    tag: "CREATOR FINANCE",
    desc: "Luxury storytelling combined with creator-driven conversion funnels.",
  },
  {
    name: "Delhi",
    tag: "AUTHORITY CHANNELS",
    desc: "Bilingual business networks and extensive founder thought leadership campaigns.",
  },
  {
    name: "Bengaluru",
    tag: "SAAS POSITIONING",
    desc: "Product-first positioning architectures built to capture global markets.",
  },
  {
    name: "Hyderabad",
    tag: "PERFORMANCE ENGINE",
    desc: "Autonomous media buying architectures and scalable conversion structures.",
  },
] as const;

export function IndiaMapSection() {
  const [activeCity, setActiveCity] = useState<string>("");

  const handleHover = (city: string) => {
    setActiveCity(city);
    window.__indiaActiveCity = city;
  };

  const handleLeave = () => {
    setActiveCity("");
    window.__indiaActiveCity = "";
  };

  return (
    <section className="section-shell bg-[#050505] px-6 py-32 md:px-10 noise-overlay overflow-hidden">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-lavender font-bold">
            DOMESTIC INTELLECT
          </span>
          <h2 className="headline-display text-4xl md:text-6xl mt-4 text-white leading-tight">
            Global Standards. Indian Market Intelligence.
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            We combine Silicon Valley growth strategies with deep Indian consumer psychology to construct unbeatable local market leaders.
          </p>
        </div>

        <div className="mx-auto mt-16 grid w-full max-w-6xl gap-10 md:grid-cols-2 items-center">
          {/* 3D Map Viewport */}
          <div className="h-[460px] overflow-hidden rounded-3xl border border-white/5 bg-secondary/35 backdrop-blur-sm relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
            <IndiaMap />
            {/* Labeled coordinate tracking */}
            <div className="absolute bottom-6 left-6 text-[9px] text-muted/60 uppercase tracking-widest font-semibold">
              ACTIVE NODE: {activeCity ? activeCity : "SCANNING REGIONS"}
            </div>
          </div>

          {/* Interactive Lists */}
          <div className="space-y-4">
            {regions.map((region) => {
              const isActive = activeCity.toLowerCase() === region.name.toLowerCase();

              return (
                <article
                  key={region.name}
                  onMouseEnter={() => handleHover(region.name)}
                  onMouseLeave={handleLeave}
                  className={`rounded-2xl border p-5 transition-all duration-300 cursor-default ${
                    isActive
                      ? "border-lavender/40 bg-white/[0.04] shadow-glow translate-x-3"
                      : "border-white/5 bg-white/[0.01]"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-lavender font-bold">
                      {region.tag}
                    </span>
                    <span className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      isActive ? "bg-white scale-125" : "bg-white/20"
                    }`} />
                  </div>
                  <h4 className="headline-display text-xl text-white mt-2 font-light">
                    {region.name}
                  </h4>
                  <p className="text-xs text-muted mt-2 leading-relaxed">
                    {region.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
