"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { IconSchool, IconCertificate } from "@tabler/icons-react";

export function EducationSection() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
            Academic Background
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Education card */}
        <SpotlightCard className="mx-auto max-w-2xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
              <IconSchool className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground">
                Bachelor of Technology - Computer Science
              </h3>
              <p className="mt-1 text-primary">BML Munjal University</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Gurugram, India • 2016 - 2020
              </p>
              <div className="mt-4 flex items-center gap-2">
                <IconCertificate className="h-5 w-5 text-accent" />
                <span className="text-lg font-semibold text-foreground">
                  CGPA: 9.26 / 10
                </span>
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Core competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <h3 className="mb-6 text-lg font-semibold text-foreground">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "AI-Driven Product Development",
              "Backend Architecture",
              "Multi-Agent Orchestration",
              "Prompt Engineering",
              "Scalable Pipelines",
              "Product-Focused Engineering",
              "AI System Integration",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

