"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconSalad,
  IconChefHat,
  IconCar,
  IconEye,
  IconBrain,
  IconDeviceMobile,
} from "@tabler/icons-react";

const projects = [
  {
    title: "NutriChef AI Platform",
    description:
      "End-to-end AI nutrition platform with agentic workflows, personalized diet plans, and GenAI-powered meal tracking. Powers 50K+ users with white-label solutions for fitness brands.",
    icon: <IconSalad className="h-5 w-5" />,
    className: "md:col-span-2",
    header: (
      <div className="flex h-32 w-full items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5">
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex items-center gap-4"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
            <IconBrain className="h-8 w-8" />
          </div>
          <div className="h-px w-8 bg-primary/40" />
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
            <IconSalad className="h-6 w-6" />
          </div>
          <div className="h-px w-8 bg-accent/40" />
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary">
            <IconDeviceMobile className="h-7 w-7" />
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "tinychef Voice Platform",
    description:
      "LLM-powered cooking platform for Sanjeev Kapoor Recipes with 100K+ MAU and 500K+ monthly voice interactions via Alexa.",
    icon: <IconChefHat className="h-5 w-5" />,
    className: "md:col-span-1",
    header: (
      <div className="flex h-32 w-full items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 via-primary/10 to-accent/5">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent"
        >
          <IconChefHat className="h-8 w-8" />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Traffic Violation Detection",
    description:
      "AI-powered system for Dubai Police detecting lane violations with 91% accuracy using YOLOv4 and custom lane segmentation.",
    icon: <IconCar className="h-5 w-5" />,
    className: "md:col-span-1",
    header: (
      <div className="flex h-32 w-full items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 via-red-500/10 to-orange-500/5">
        <motion.div
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/20 text-orange-400"
        >
          <IconCar className="h-7 w-7" />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Glaucoma Detection System",
    description:
      "AI pipeline for early Glaucoma detection using fundus imaging with transfer learning and ensemble modeling for robust predictions.",
    icon: <IconEye className="h-5 w-5" />,
    className: "md:col-span-2",
    header: (
      <div className="flex h-32 w-full items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-emerald-500/5">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-full border border-emerald-500/20" />
          <div className="absolute -inset-8 rounded-full border border-emerald-500/10" />
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <IconEye className="h-8 w-8" />
          </div>
        </motion.div>
      </div>
    ),
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
            Featured Work
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Notable <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A selection of impactful projects that showcase expertise in AI,
            backend architecture, and product development.
          </p>
        </motion.div>

        {/* Bento grid */}
        <BentoGrid className="mx-auto">
          {projects.map((project, index) => (
            <BentoGridItem
              key={index}
              title={project.title}
              description={project.description}
              header={project.header}
              icon={project.icon}
              className={project.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

