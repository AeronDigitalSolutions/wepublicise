"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";
import { useRef } from "react";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export function MagneticButton({ children, className, variant = "primary" }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18 });
  const sy = useSpring(y, { stiffness: 180, damping: 18 });

  const onMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.18);
    y.set(dy * 0.18);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn(
        "group relative overflow-hidden rounded-full border px-7 py-3 text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-white text-black border-white/15 hover:border-transparent"
          : "bg-transparent text-white border-white/10 hover:border-white/30 hover:bg-white/5",
        className,
      )}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-accent-gradient opacity-0 transition group-hover:opacity-100" />
      )}
      <span className="absolute inset-y-0 left-0 w-1/2 animate-beam bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-70" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
