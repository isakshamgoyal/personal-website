"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Marquee } from "@/components/ui/marquee";
import {
  IconBrandPython,
  IconBrandOpenai,
  IconBrandDocker,
  IconBrandAws,
  IconDatabase,
  IconBrain,
  IconCode,
  IconCloud,
  IconRobot,
  IconServer,
  IconBrandGit,
  IconApi,
} from "@tabler/icons-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: <IconBrain className="h-6 w-6" />,
    skills: [
      "OpenAI & GPT Models",
      "LangChain & LlamaIndex",
      "Agentic Workflows",
      "Prompt Engineering",
      "Multi-Agent Orchestration",
      "RAG Systems",
      "FAISS & Pinecone",
      "Hugging Face",
    ],
    color: "rgba(139, 92, 246, 0.15)",
  },
  {
    title: "Backend Development",
    icon: <IconServer className="h-6 w-6" />,
    skills: [
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "REST APIs",
      "Microservices",
      "Celery",
      "Redis",
    ],
    color: "rgba(34, 211, 238, 0.15)",
  },
  {
    title: "Cloud & Infrastructure",
    icon: <IconCloud className="h-6 w-6" />,
    skills: [
      "AWS",
      "GCP",
      "Docker",
      "CI/CD",
      "ElasticSearch",
      "PostgreSQL",
      "DynamoDB",
      "Data Pipelines",
    ],
    color: "rgba(251, 146, 60, 0.15)",
  },
  {
    title: "Deep Learning & CV",
    icon: <IconRobot className="h-6 w-6" />,
    skills: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "OpenCV",
      "YOLO",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
    color: "rgba(236, 72, 153, 0.15)",
  },
];

const technologies = [
  { name: "Python", icon: <IconBrandPython className="h-6 w-6" /> },
  { name: "OpenAI", icon: <IconBrandOpenai className="h-6 w-6" /> },
  { name: "LangChain", icon: <IconBrain className="h-6 w-6" /> },
  { name: "FastAPI", icon: <IconCode className="h-6 w-6" /> },
  { name: "Docker", icon: <IconBrandDocker className="h-6 w-6" /> },
  { name: "AWS", icon: <IconBrandAws className="h-6 w-6" /> },
  { name: "PostgreSQL", icon: <IconDatabase className="h-6 w-6" /> },
  { name: "Git", icon: <IconBrandGit className="h-6 w-6" /> },
  { name: "REST APIs", icon: <IconApi className="h-6 w-6" /> },
  { name: "Redis", icon: <IconServer className="h-6 w-6" /> },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
            Technical Expertise
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A comprehensive toolkit for building intelligent, scalable systems
            from concept to production.
          </p>
        </motion.div>

        {/* Skill cards grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SpotlightCard
              key={index}
              spotlightColor={category.color}
              className="h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Technology marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-xl border border-border bg-card/50 py-8"
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-card to-transparent" />

          <Marquee pauseOnHover duration={30}>
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="mx-4 flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="text-primary">{tech.icon}</div>
                <span className="font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}

