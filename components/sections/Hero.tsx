"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParticleNetwork } from "@/components/sections/ParticleNetwork";

gsap.registerPlugin(ScrollTrigger);

export function Hero({ done = false }: { done?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  // 1. Initial State Setup & Scroll triggers (run on mount)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = titleRef.current?.querySelectorAll(".letter-span");
      
      // Initialize states to completely prevent FOUC (flash of unstyled content)
      if (letters && letters.length > 0) {
        gsap.set(letters, { y: "115%", opacity: 0, rotateX: -30 });
      }
      if (elementsRef.current) {
        gsap.set(elementsRef.current.children, { opacity: 0, y: 30 });
      }

      // Scroll Scatter & Scatter-Out Effect
      if (letters && letters.length > 0 && containerRef.current) {
        gsap.to(letters, {
          y: (i) => -60 - (i % 5) * 20,
          x: (i) => ((i % 3) - 1) * 35,
          opacity: 0.15,
          rotate: (i) => ((i % 4) - 2) * 12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom 30%",
            scrub: true,
          },
        });
      }

      // Fade out background details on scroll
      gsap.to(".hero-overlay-fade", {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom 40%",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 2. Play entrance timeline when preloader finishes exit transition
  useEffect(() => {
    if (!done) return;

    const ctx = gsap.context(() => {
      const letters = titleRef.current?.querySelectorAll(".letter-span");
      if (letters && letters.length > 0) {
        gsap.to(letters, {
          y: "0%",
          opacity: 1,
          rotateX: 0,
          duration: 1.1,
          stagger: 0.015,
          ease: "power4.out",
        });
      }

      if (elementsRef.current) {
        gsap.to(elementsRef.current.children, {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.12,
          ease: "power3.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [done]);

  // Helper to split text into letter spans while keeping spaces intact
  const splitText = (text: string) => {
    return text.split("").map((char, index) => {
      if (char === " ") return <span key={index}>&nbsp;</span>;
      return (
        <span
          key={index}
          className="letter-span inline-block origin-bottom transform-gpu"
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section
      ref={containerRef}
      id="work"
      className="section-shell relative min-h-screen flex items-center overflow-hidden px-6 pb-20 pt-32 md:px-10 bg-[#050505]"
    >
      {/* Background Interactive Particle Scene */}
      <div className="absolute inset-0 opacity-70 hero-overlay-fade pointer-events-none">
        <ParticleNetwork />
      </div>

      {/* Luxury Ambient Glow Spots */}
      <div className="absolute inset-0 hero-overlay-fade bg-[radial-gradient(circle_at_20%_20%,rgba(183,168,255,0.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(61,26,120,0.3),transparent_45%)] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">
          {/* Main Huge Headline */}
          <h1
            ref={titleRef}
            className="headline-display text-[9vw] leading-[0.9] md:text-[5.5rem] tracking-tight font-extralight text-white perspective-800"
          >
            <span className="block overflow-hidden pb-2">
              {splitText("WE DON'T")}
            </span>
            <span className="block overflow-hidden pb-2">
              {splitText("MARKET BRANDS.")}
            </span>
            <span className="block overflow-hidden pb-2 gradient-text-lavender">
              {splitText("WE BUILD MARKET LEADERS.")}
            </span>
          </h1>
        </div>

        {/* Fading text elements & CTAs */}
        <div ref={elementsRef} className="mt-8 max-w-3xl">
          <p className="text-base text-muted md:text-xl leading-relaxed">
            For ambitious founders, startups, personal brands, luxury businesses, and global companies ready to dominate
            attention, culture, and revenue.
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-lavender font-semibold">
            Branding. Growth. Content. Technology.
          </p>
          <p className="mt-2 text-sm text-muted">
            Everything required to become impossible to ignore.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <MagneticButton variant="primary" className="hover:scale-105">Book a Strategy Call</MagneticButton>
            <a href="#work-track">
              <MagneticButton variant="secondary" className="hover:scale-105">
                View Our Work
              </MagneticButton>
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-lavender animate-pulse" />
            <p className="text-xs uppercase tracking-widest text-muted/80">
              Trusted by brands generating ₹100Cr+ in revenue
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
