"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBeamProps {
  className?: string;
}

export function AnimatedBeam({ className }: AnimatedBeamProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Primary beam */}
      <motion.div
        className="absolute h-[2px] w-[400px] bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ x: "-100%", y: "20%" }}
        animate={{ x: "200%", y: "80%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ rotate: "15deg" }}
      />
      {/* Secondary beam */}
      <motion.div
        className="absolute h-[2px] w-[300px] bg-gradient-to-r from-transparent via-accent to-transparent"
        initial={{ x: "200%", y: "60%" }}
        animate={{ x: "-100%", y: "40%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        style={{ rotate: "-10deg" }}
      />
      {/* Tertiary beam */}
      <motion.div
        className="absolute h-[1px] w-[200px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ x: "-50%", y: "70%" }}
        animate={{ x: "150%", y: "30%" }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
        }}
        style={{ rotate: "25deg" }}
      />
    </div>
  );
}

export function GridBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50" />
      
      {/* Center glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
    </div>
  );
}

