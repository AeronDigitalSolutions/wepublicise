"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger to manage scroll transitions
gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Initialize smooth scrolling with optimized parameters
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 1.3,
      infinite: false,
    });

    // Expose lenis instance globally for scroll control
    if (typeof window !== "undefined") {
      (window as any).lenis = lenis;
      if ((window as any).preloaderDone === false) {
        lenis.stop();
      }
    }

    // 1. Force GSAP ScrollTrigger to update every time Lenis scrolls
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // 2. Set ScrollTrigger defaults globally to use CSS 3D Transforms instead of position:fixed
    // This completely bypasses browser paint lag, eliminating all snapping glitches!
    ScrollTrigger.defaults({
      pinType: "transform",
    });

    ScrollTrigger.normalizeScroll(true);

    // 3. Render Lenis frame updates perfectly in sync with the browser refresh rate
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // 4. Force a global recalculation of scroll coordinates after page hydration settles
    const initialRefresh = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    const resizeHandler = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.removeEventListener("resize", resizeHandler);
      clearTimeout(initialRefresh);
    };
  }, []);

  return <>{children}</>;
}
