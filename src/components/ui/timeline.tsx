"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  date: string;
  description: string[];
  tags?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-muted md:left-8" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineEntry key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineEntry({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <motion.div
      className="relative pl-8 md:pl-20"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center md:left-6"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
      >
        <div className="h-3 w-3 rounded-full bg-primary" />
        <div className="absolute h-3 w-3 animate-ping rounded-full bg-primary opacity-75" />
      </motion.div>

      {/* Content */}
      <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        {/* Spotlight effect */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              {item.companyUrl ? (
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {item.company}
                </a>
              ) : (
                <p className="text-primary">{item.company}</p>
              )}
            </div>
            <div className="flex flex-col items-start text-sm text-muted-foreground sm:items-end">
              <span>{item.date}</span>
              <span>{item.location}</span>
            </div>
          </div>

          {/* Description */}
          <ul className="mb-4 space-y-2">
            {item.description.map((desc, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                {desc}
              </li>
            ))}
          </ul>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

