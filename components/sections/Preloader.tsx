"use client";
 
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
 
const words = ["Attention.", "Influence.", "Trust.", "Authority.", "Dominance."];
 
export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [showClaim, setShowClaim] = useState(false);
  const [exitTriggered, setExitTriggered] = useState(false);
  const [mounted, setMounted] = useState(false);
 
  // Store the onComplete callback in a ref to stabilize the useEffect dependencies
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);
 
  useEffect(() => {
    setMounted(true);
 
    // Cycle through the attention keywords (premium-ized timing: 850ms)
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === words.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setShowClaim(true);
            
            // Allow the luxury claim to sit on screen for 1.8 seconds, then exit
            setTimeout(() => {
              setExitTriggered(true);
              // Call onComplete exactly as the exit transition (1.1s) finishes
              setTimeout(() => {
                onCompleteRef.current();
              }, 1100);
            }, 1800);
          }, 500); // Elegant 500ms pause after last word before showing claim
          return prev;
        }
        return prev + 1;
      });
    }, 850); // Slowed down from 380ms to 850ms for a gorgeous premium pacing
 
    return () => clearInterval(interval);
  }, []); // Run exactly once on mount to prevent loops
 
  if (!mounted) return null;
 
  return createPortal(
    <AnimatePresence mode="wait">
      {!exitTriggered ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] noise-overlay"
          style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh" }}
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.1,
              ease: [0.76, 0, 0.24, 1], // Custom Dior/Apple luxury ease
            },
          }}
        >
          {/* Animated Glow Spot in background */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
 
          <div className="relative text-center px-6">
            {!showClaim ? (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} // Custom Dior liquid-smooth ease
                className="headline-display text-5xl md:text-8xl tracking-tight text-white font-light"
              >
                {words[index]}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="flex flex-col items-center gap-4"
              >
                <span className="headline-display text-3xl md:text-5xl tracking-widest text-white/90">
                  WE BUILD MARKET LEADERS
                </span>
                <motion.span
                  className="h-[1px] w-24 bg-gradient-to-r from-transparent via-lavender to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
