"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function Navbar({
  onMenu,
  soundEnabled,
  onToggleSound,
}: {
  onMenu: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}) {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
      className="fixed left-0 top-0 z-[110] w-full"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        {/* Luxury Typography Logo */}
        <a href="#" className="group relative flex items-center gap-2">
          <span className="headline-display text-sm tracking-[0.3em] font-medium text-white transition-colors duration-300 group-hover:text-lavender">
            W E P U B L I C I S E
          </span>
          <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-lavender transition-all duration-300 group-hover:w-full" />
        </a>

        <div className="flex items-center gap-4">
          {/* Custom Sound Toggle with Audio Waveform */}
          <button
            onClick={onToggleSound}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-[#050505]/40 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-muted backdrop-blur-md transition hover:border-lavender/30 hover:text-white"
            aria-label="Toggle atmospheric sound"
          >
            <span>SOUND</span>
            <div className="flex h-3 w-4 items-end gap-[2px]">
              <span
                className={cn(
                  "h-1 w-[2px] bg-muted transition-all duration-300",
                  soundEnabled && "animate-[bounce_0.8s_infinite_alternate]"
                )}
              />
              <span
                className={cn(
                  "h-3 w-[2px] bg-muted transition-all duration-300",
                  soundEnabled && "animate-[bounce_0.5s_infinite_alternate_0.1s]"
                )}
              />
              <span
                className={cn(
                  "h-2 w-[2px] bg-muted transition-all duration-300",
                  soundEnabled && "animate-[bounce_0.7s_infinite_alternate_0.2s]"
                )}
              />
            </div>
          </button>

          {/* Luxury Menu Toggle */}
          <button
            onClick={onMenu}
            className="group relative flex h-10 w-24 items-center justify-center rounded-full border border-white/12 bg-[#050505]/40 text-[11px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:border-lavender/30"
          >
            <span className="absolute inset-0 rounded-full bg-accent-gradient opacity-0 transition duration-300 group-hover:opacity-20" />
            <span className="relative z-10">MENU</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
