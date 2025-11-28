"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, animate } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

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
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  const bottomPosition = useMotionValue(16);

  useEffect(() => {
    footerRef.current = document.querySelector("footer");
    
    const handleScroll = () => {
      if (!footerRef.current || !dockRef.current) return;
      
      const footerRect = footerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if footer is visible in viewport
      const footerTop = footerRect.top;
      const threshold = 120; // Distance threshold before footer
      
      // Approximate dock height (items * icon height + padding)
      const dockHeight = items.length * 48 + 24;
      
      if (footerTop < viewportHeight - threshold) {
        // Footer is near, move dock up
        const newBottom = viewportHeight - footerTop + 20;
        setIsNearFooter(true);
        animate(bottomPosition, newBottom, { duration: 0.3, ease: "easeOut" });
      } else {
        // Footer is far, dock at normal position
        setIsNearFooter(false);
        animate(bottomPosition, 16, { duration: 0.3, ease: "easeOut" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items.length, bottomPosition]);

  return (
    <motion.div 
      className="fixed right-4 z-50 hidden sm:block"
      style={{ bottom: bottomPosition }}
    >
      <motion.div
        ref={dockRef}
        className={cn(
          "flex flex-col gap-2 rounded-xl border border-border bg-card/90 backdrop-blur-xl shadow-lg overflow-hidden",
          className
        )}
        initial={{ x: 100, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 1,
          width: isExpanded ? 56 : 48
        }}
        transition={{ duration: 0.6, delay: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex h-12 w-full items-center justify-center border-b border-border bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label={isExpanded ? "Collapse menu" : "Expand menu"}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isExpanded ? (
              <IconX className="h-5 w-5" />
            ) : (
              <IconMenu2 className="h-5 w-5" />
            )}
          </motion.div>
        </button>

        {/* Navigation Items */}
        <motion.div
          className="flex flex-col gap-1 px-2 pb-2"
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          {items.map((item, index) => (
            <DockIcon key={index} item={item} />
          ))}
        </motion.div>
      </motion.div>
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
      className="group relative flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-secondary/50 text-muted-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105"
    >
      <div className="flex h-5 w-5 items-center justify-center">
        {item.icon}
      </div>
      <span className="absolute left-full ml-2 scale-0 whitespace-nowrap rounded-md bg-card border border-border px-2 py-1 text-xs font-medium text-foreground opacity-0 shadow-lg transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 pointer-events-none z-50">
        {item.title}
      </span>
    </Component>
  );
}

