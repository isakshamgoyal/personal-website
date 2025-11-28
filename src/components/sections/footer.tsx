"use client";

import { motion } from "framer-motion";
import { IconHeart } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1 text-sm text-muted-foreground"
          >
            <span>Made with</span>
            <IconHeart className="h-4 w-4 text-red-500" />
            <span>using Cursor AI</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

