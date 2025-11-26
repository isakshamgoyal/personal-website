"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
}

interface FloatingDockProps {
  items: DockItem[];
  className?: string;
}

export function FloatingDock({ items, className }: FloatingDockProps) {
  return (
    <motion.div
      className={cn(
        "fixed bottom-8 left-1/2 z-50 flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-3 shadow-2xl backdrop-blur-xl",
        className
      )}
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {items.map((item, index) => (
        <DockIcon key={index} item={item} />
      ))}
    </motion.div>
  );
}

function DockIcon({ item }: { item: DockItem }) {
  const Component = item.external ? "a" : Link;
  const externalProps = item.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Component
      href={item.href}
      {...externalProps}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
    >
      <span className="absolute -top-10 scale-0 rounded-md bg-card px-2 py-1 text-xs font-medium text-foreground opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
        {item.title}
      </span>
      {item.icon}
    </Component>
  );
}

