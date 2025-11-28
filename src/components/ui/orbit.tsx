"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <circle
            className="stroke-border stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      <motion.div
        style={{
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay,
        } as React.CSSProperties}
        className={cn(
          "absolute flex h-full w-full transform-gpu items-center justify-center",
          className
        )}
        animate={{
          rotate: reverse ? -360 : 360,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay: -delay,
        }}
      >
        <div
          className="absolute"
          style={{
            transform: `translateY(-${radius}px)`,
          }}
        >
          <motion.div
            animate={{
              rotate: reverse ? 360 : -360,
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              delay: -delay,
            }}
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

interface IconProps {
  className?: string;
  children: React.ReactNode;
}

export function OrbitIcon({ className, children }: IconProps) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card p-2 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

