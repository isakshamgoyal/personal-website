"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";
import { GridBackground, AnimatedBeam } from "@/components/ui/animated-beam";
import { OrbitingCircles, OrbitIcon } from "@/components/ui/orbit";
import { 
  IconBrandPython, 
  IconBrandOpenai, 
  IconBrandDocker, 
  IconBrandAws, 
  IconDatabase, 
  IconBrain,
  IconCalendar
} from "@tabler/icons-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6"
    >
      {/* Background effects */}
      <GridBackground />
      <AnimatedBeam />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        {/* Left side - Text content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span className="text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="gradient-text">Saksham Goyal</span>
          </motion.h1>

          {/* Role */}
          <TextReveal
            text="Senior Software Engineer - AI + Backend"
            className="mb-6 text-lg text-muted-foreground sm:text-xl md:text-2xl"
            delay={0.3}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8 max-w-xl text-sm text-muted-foreground sm:text-base md:text-lg"
          >
            Building intelligent systems at the intersection of AI and scalable
            backend architecture. Specialized in GenAI-powered products, agentic
            workflows, and full-stack mobile development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="https://cal.com/isakshamgoyal/book-a-meet"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-primary group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 sm:text-base"
            >
              <IconCalendar className="h-4 w-4" />
              <span className="relative z-10">Book a Meeting</span>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-card/50 px-6 py-3 text-center text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card sm:text-base"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="rounded-full border border-border bg-card/50 px-6 py-3 text-center text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card sm:text-base"
            >
              View Experience
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-12 sm:gap-6 md:gap-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground sm:text-3xl">5+</div>
              <div className="text-xs text-muted-foreground sm:text-sm">Years Experience</div>
            </div>
            <div className="hidden h-10 w-px bg-border sm:block md:h-12" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground sm:text-3xl">500K+</div>
              <div className="text-xs text-muted-foreground sm:text-sm">Monthly Interactions</div>
            </div>
            <div className="hidden h-10 w-px bg-border sm:block md:h-12" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground sm:text-3xl">100K+</div>
              <div className="text-xs text-muted-foreground sm:text-sm">MAU</div>
            </div>
          </motion.div>
        </div>

        {/* Right side - Orbiting icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative hidden h-[400px] w-[400px] lg:block"
        >
          {/* Center element */}
          <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-card shadow-lg glow-primary">
            <IconBrain className="h-10 w-10 text-primary" />
          </div>

          {/* Inner orbit */}
          <OrbitingCircles duration={20} radius={80}>
            <OrbitIcon className="border-primary/50 bg-card">
              <IconBrandPython className="h-5 w-5 text-primary" />
            </OrbitIcon>
          </OrbitingCircles>

          <OrbitingCircles duration={20} delay={10} radius={80}>
            <OrbitIcon className="border-accent/50 bg-card">
              <IconBrandOpenai className="h-5 w-5 text-accent" />
            </OrbitIcon>
          </OrbitingCircles>

          {/* Middle orbit */}
          <OrbitingCircles duration={30} radius={130} reverse>
            <OrbitIcon className="border-primary/50 bg-card">
              <IconBrandDocker className="h-5 w-5 text-primary" />
            </OrbitIcon>
          </OrbitingCircles>

          <OrbitingCircles duration={30} delay={15} radius={130} reverse>
            <OrbitIcon className="border-accent/50 bg-card">
              <IconDatabase className="h-5 w-5 text-accent" />
            </OrbitIcon>
          </OrbitingCircles>

          {/* Outer orbit */}
          <OrbitingCircles duration={40} radius={180}>
            <OrbitIcon className="border-primary/50 bg-card">
              <IconBrandAws className="h-5 w-5 text-primary" />
            </OrbitIcon>
          </OrbitingCircles>
        </motion.div>
      </div>
    </section>
  );
}

