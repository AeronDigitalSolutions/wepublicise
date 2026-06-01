"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/cn";

const menuItems = [
  { id: "work", name: "Work", tag: "CASE FILMS & KEYNOTES", desc: "Transforming standard brands into category leaders." },
  { id: "services", name: "Services", tag: "GROWTH ABILITIES", desc: "Strategy, design, growth marketing, and automation." },
  { id: "insights", name: "Insights", tag: "CULTURAL SIGNALS", desc: "Decoding consumer psychology and market trends." },
  { id: "about", name: "About", tag: "MEET THE BUILDERS", desc: "Built for founders who refuse to be ignored." },
  { id: "contact", name: "Contact", tag: "SECURE LEADERSHIP", desc: "Book an exclusive category strategy call." },
] as const;

export function FullscreenMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [hovered, setHovered] = useState<string>("work");

  return (
    <AnimatePresence>
      {open ? (
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[130] bg-[#050505]/98 noise-overlay backdrop-blur-2xl"
        >
          {/* Close Trigger */}
          <button
            onClick={onClose}
            className="absolute right-8 top-8 group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted transition hover:border-lavender/30 hover:text-white"
          >
            <span>Close</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lavender opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lavender"></span>
            </span>
          </button>

          <div className="mx-auto grid h-full w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:px-10">
            {/* Menu Links */}
            <nav className="flex flex-col space-y-4">
              <p className="text-[10px] uppercase tracking-[0.28em] text-muted mb-4">
                NAVIGATE TRANSFORMATION
              </p>
              {menuItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onClose}
                  className="group relative block border-b border-white/5 py-4"
                  onMouseEnter={() => setHovered(item.id)}
                  whileHover={{ x: 12 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-lavender opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {item.tag}
                      </p>
                      <h2 className="headline-display text-4xl leading-none mt-1 md:text-6xl text-white/80 group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </h2>
                    </div>
                    <span className="text-xl text-muted/30 group-hover:text-lavender transition-colors duration-300">
                      {"->"}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted max-w-sm line-clamp-1">
                    {item.desc}
                  </p>
                </motion.a>
              ))}
            </nav>

            {/* Dynamic visual preview column */}
            <div className="hidden h-[460px] flex-col justify-between rounded-3xl border border-white/8 bg-secondary/80 p-8 md:flex relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-lavender/5 pointer-events-none" />

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-lavender">
                  {menuItems.find((m) => m.id === hovered)?.tag}
                </p>
                <p className="mt-4 headline-display text-2xl leading-snug">
                  {menuItems.find((m) => m.id === hovered)?.desc}
                </p>
              </div>

              {/* Rich Contextual Previews */}
              <div className="relative flex-grow flex items-center justify-center mt-6">
                <AnimatePresence mode="wait">
                  {hovered === "work" && (
                    <motion.div
                      key="work"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="grid grid-cols-2 gap-4 w-full"
                    >
                      <div className="glass-panel rounded-2xl p-4 text-center">
                        <p className="text-2xl headline-display text-lavender">3.1X</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted mt-1">Growth Demand</p>
                      </div>
                      <div className="glass-panel rounded-2xl p-4 text-center">
                        <p className="text-2xl headline-display text-white">₹22Cr</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted mt-1">Impact Lift</p>
                      </div>
                    </motion.div>
                  )}

                  {hovered === "services" && (
                    <motion.div
                      key="services"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="w-full space-y-2"
                    >
                      {["Strategy & Monograms", "Interfaces & Interactions", "Compound Ads & Funnels"].map((s, idx) => (
                        <div key={s} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-2.5 text-xs text-white/95">
                          <span className="text-[10px] text-lavender">0{idx + 1}</span>
                          <span>{s}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {hovered === "insights" && (
                    <motion.div
                      key="insights"
                      initial={{ opacity: 0, filter: "blur(4px)" }}
                      animate={{ opacity: 1, filter: "blur(0)" }}
                      exit={{ opacity: 0 }}
                      className="w-full glass-panel rounded-2xl p-5 text-center"
                    >
                      <span className="text-[10px] uppercase tracking-widest text-lavender">CULTURAL SIGNAL REPORT</span>
                      <p className="mt-2 text-sm text-white/90">"Culture is the ultimate compound effect."</p>
                      <div className="mt-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-[10px] text-white">
                        Read Latest Issue
                      </div>
                    </motion.div>
                  )}

                  {hovered === "about" && (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full glass-panel rounded-2xl p-5 flex flex-col justify-between h-40 relative"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(183,168,255,0.15),transparent_40%)]" />
                      <p className="text-xs text-white/80 italic">"We are here to create digital masterpieces that convert curiosity into commercial dominance."</p>
                      <p className="text-[10px] uppercase tracking-widest text-lavender mt-3">- The Technologists</p>
                    </motion.div>
                  )}

                  {hovered === "contact" && (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="w-full rounded-2xl border border-lavender/30 bg-lavender/5 p-5 text-center"
                    >
                      <p className="text-xs text-white">NEXT DISCOVERY SLOT OPEN</p>
                      <p className="text-2xl headline-display text-lavender mt-2">14:00 GMT</p>
                      <button className="mt-4 rounded-full bg-white px-5 py-2 text-xs font-semibold text-black transition hover:bg-lavender">
                        RESERVE WINDOW
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex justify-between items-center text-[10px] text-muted uppercase tracking-wider">
                <span>EST 2026</span>
                <span>WP AGENCY</span>
              </div>
            </div>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
