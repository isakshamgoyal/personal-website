"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: BentoGridItemProps) {
  return (
    <motion.div
      className={cn(
        "group relative row-span-1 flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-4 pb-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 sm:p-6 sm:pb-7",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Spotlight effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {header && <div className="relative z-10">{header}</div>}
      
      <div className="relative z-10 mt-auto pb-1">
        {icon && (
          <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="mb-2 text-sm font-semibold text-foreground sm:text-base">{title}</h3>
        )}
        {description && (
          <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{description}</p>
        )}
      </div>
    </motion.div>
  );
}

