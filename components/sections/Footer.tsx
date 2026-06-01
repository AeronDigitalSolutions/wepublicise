"use client";

import { motion } from "framer-motion";

export function Footer() {
  const links = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ];
  const socials = [
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "X", href: "#" },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#0b0b0b]/60 px-6 py-24 md:px-10 noise-overlay overflow-hidden relative">
      <div className="absolute left-1/2 top-0 h-44 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl relative z-10">
        <div className="space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-lavender font-bold">
            THE CONCLUSION
          </span>
          <h2 className="headline-display text-3xl md:text-5xl text-white leading-tight font-extralight max-w-3xl">
            Ready To Become The Brand<br />
            Everyone Else Studies?
          </h2>
          <p className="text-muted text-sm uppercase tracking-[0.2em] font-semibold">
            Book Your Strategy Call.
          </p>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 md:grid-cols-4 border-t border-white/5 pt-12">
          {/* Logo & description column */}
          <div className="space-y-4">
            <span className="headline-display text-sm tracking-[0.3em] text-white">
              W E P U B L I C I S E
            </span>
            <p className="text-xs text-muted max-w-xs leading-relaxed">
              Constructing market leaders from the inside out through cohesive strategy, Dior-level design, and scalable technology engines.
            </p>
          </div>

          {/* Sitemaps */}
          <div>
            <h4 className="text-[9px] uppercase tracking-widest text-lavender font-bold mb-4">SITEMAP</h4>
            <nav className="flex flex-col space-y-2.5 text-xs text-muted font-medium">
              {links.map((link) => (
                <a
                  href={link.href}
                  key={link.name}
                  className="hover:text-white transition duration-300 w-max"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-[9px] uppercase tracking-widest text-lavender font-bold mb-4">SOCIAL NETWORK</h4>
            <nav className="flex flex-col space-y-2.5 text-xs text-muted font-medium">
              {socials.map((social) => (
                <a
                  href={social.href}
                  key={social.name}
                  className="hover:text-white transition duration-300 w-max"
                >
                  {social.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Location details */}
          <div>
            <h4 className="text-[9px] uppercase tracking-widest text-lavender font-bold mb-4">LOCATIONS</h4>
            <p className="text-xs text-muted leading-relaxed">
              Mumbai • Delhi NCR<br />
              Bengaluru • Hyderabad<br />
              Serving Ambitious Brands Worldwide
            </p>
          </div>
        </div>

        {/* Legal copyrights */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-6 text-[10px] text-muted/65 uppercase tracking-wider">
          <span>Copyright © {new Date().getFullYear()} WePublicise. All rights reserved.</span>
          <span>ESTABLISHED IN INDIA • SHAPING THE FUTURE</span>
        </div>
      </div>
    </footer>
  );
}
