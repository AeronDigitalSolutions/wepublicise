"use client";

import { useEffect, useState } from "react";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/sections/Preloader";
import { Navbar } from "@/components/sections/Navbar";
import { FullscreenMenu } from "@/components/sections/FullscreenMenu";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CinematicReel } from "@/components/sections/CinematicReel";
import { BigIdea } from "@/components/sections/BigIdea";
import { AttentionTransformation } from "@/components/sections/AttentionTransformation";
import { BrandTransformationSlider } from "@/components/sections/BrandTransformationSlider";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { ServicesExperience } from "@/components/sections/ServicesExperience";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { CaseStudiesHorizontal } from "@/components/sections/CaseStudiesHorizontal";
import { FounderSection } from "@/components/sections/FounderSection";
import { IndiaMapSection } from "@/components/sections/IndiaMapSection";
import { FutureSection } from "@/components/sections/FutureSection";
import { TestimonialsWall } from "@/components/sections/TestimonialsWall";
import { Manifesto } from "@/components/sections/Manifesto";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Set the preloader state on window synchronously during render to prevent race conditions
  if (typeof window !== "undefined") {
    (window as any).preloaderDone = preloaderDone;
  }

  useEffect(() => {
    // Lock scroll during preloading, release when done
    if (!preloaderDone) {
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.stop();
      }
    } else {
      document.body.style.overflow = "unset";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "unset";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.start();
      }
    };
  }, [preloaderDone]);

  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <Navbar onMenu={() => setMenuOpen(true)} soundEnabled={soundEnabled} onToggleSound={() => setSoundEnabled((v) => !v)} />
      <FullscreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="relative overflow-x-clip bg-bg text-text">
        <Hero done={preloaderDone} />
        <section className="border-t border-white/10 px-6 py-5 text-center text-xs uppercase tracking-[0.22em] text-muted md:px-10">
          Unknown {"->"} Attention {"->"} Trust {"->"} Authority {"->"} Market Leadership
        </section>
        <TrustStrip />
        <CinematicReel />
        <BigIdea />
        <AttentionTransformation />
        <BrandTransformationSlider />
        <DifferenceSection />
        <ServicesExperience />
        <ResultsSection />
        <CaseStudiesHorizontal />
        <FounderSection />
        <IndiaMapSection />
        <FutureSection />
        <TestimonialsWall />
        <Manifesto />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
