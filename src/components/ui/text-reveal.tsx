"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.div className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-2 inline-block"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.05,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function Typewriter({
  text,
  className,
  delay = 0,
  speed = 0.05,
}: TypewriterProps) {
  const characters = text.split("");

  return (
    <motion.span className={cn("inline-block", className)}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.03,
            delay: delay + i * speed,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

