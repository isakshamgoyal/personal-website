"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: number;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <motion.div
          key={i}
          className={cn(
            "flex shrink-0 gap-[--gap]",
            vertical ? "flex-col" : "flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          animate={{
            x: vertical ? 0 : reverse ? ["0%", "100%"] : ["0%", "-100%"],
            y: vertical ? (reverse ? ["0%", "100%"] : ["0%", "-100%"]) : 0,
          }}
          transition={{
            x: { duration, repeat: Infinity, ease: "linear" },
            y: { duration, repeat: Infinity, ease: "linear" },
          }}
        >
          {children}
        </motion.div>
      ))}
    </div>
  );
}

