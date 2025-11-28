"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

const experiences = [
  {
    title: "Senior Software Engineer - AI + Backend",
    company: "IOK Labs Inc (NutriChef)",
    companyUrl: "https://nutrichef.io/",
    location: "Remote",
    date: "Apr 2021 - Aug 2025",
    description: [
      "Architected and developed NutriChef end-to-end, integrating Agentic AI workflows, backend systems, and full-stack mobile apps (Flutterflow), powering personalized nutrition and fitness solutions for thousands of users.",
      "Designed modular, brand-customizable architecture supporting white-label rollouts for clients, including Ryan Fernando (50K+ users, 10K+ MAU), Sustainable Secrets Academy, and Sweat & Tonic.",
      "Built and deployed GenAI-driven features such as 'Snap-to-Track' and 'Write-to-Track' enabling automated meal and workout logging.",
      "Implemented real-time personalized diet and workout plan generation, integrating dietary preference analysis, blood report interpretation, and MarianaTek APIs.",
      "Delivered scalable backend infrastructure supporting thousands of concurrent user sessions and seamless LLM-powered interactions.",
    ],
    tags: ["Python", "FastAPI", "OpenAI", "LangChain", "AWS", "FlutterFlow"],
  },
  {
    title: "Platform Engineer - tinychef",
    company: "IOK Labs Inc",
    companyUrl: "https://nutrichef.io/",
    location: "Remote",
    date: "Apr 2021 - Aug 2025",
    description: [
      "Delivered LLM-powered features and core platform enhancements for the Sanjeev Kapoor Recipes App and Smart Recipes Alexa Skill, tripling engagement to 100K+ MAU and 500K+ monthly voice interactions.",
      "Built advanced Search 2.0 and a Recipe Recommendation Engine, increasing user satisfaction by 30%.",
      "Developed an in-house ads platform and internal CMS tools, streamlining content import, analytics, and campaign operations.",
      "Partnered with teams from ITC, Swastha Cookware, Yogify to build AI-powered campaign features improving personalization and brand engagement.",
      "Led and mentored a cross-functional team of engineers and interns to deliver high-impact releases under tight timelines.",
    ],
    tags: ["Python", "Django", "Alexa Skills", "ElasticSearch", "Redis"],
  },
  {
    title: "Software Engineer - AI",
    company: "Nayan Technologies",
    companyUrl: "https://nayan.co/",
    location: "Remote",
    date: "Jun 2020 - Feb 2021",
    description: [
      "As part of the Dubai Future Accelerators program, developed and deployed an AI-powered traffic violation detection system for Dubai Police.",
      "Automated the retraining and deployment of Deep Learning models via a microservices-based architecture, reducing developer effort by 70%.",
      "Achieved 91% accuracy in detecting Lane Occlusion with a trained lane segmentation model on live camera feeds.",
      "Improved YOLOv4 model accuracy by 25% through dataset optimization and retraining for our use cases.",
      "Developed an optimized License Number Plate Recognition (LNPR) system for both cloud and mobile deployment.",
    ],
    tags: ["PyTorch", "YOLOv4", "Computer Vision", "Docker", "Microservices"],
  },
  {
    title: "Research Intern (AI / Computer Vision)",
    company: "Adventure Advanced Solutions",
    location: "Remote",
    date: "Jan 2020 - May 2020",
    description: [
      "Built and deployed an AI-powered pipeline for early Glaucoma detection using fundus imaging, improving diagnostic accuracy and processing time.",
      "Trained and evaluated deep learning models for semantic segmentation, anomaly detection, and disease classification on medical image datasets.",
      "Applied transfer learning and ensemble modeling to enhance robustness of medical imaging predictions.",
      "Collaborated with healthcare specialists to validate results and optimize performance for real-world use.",
    ],
    tags: ["TensorFlow", "Keras", "Medical Imaging", "Computer Vision"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-4 py-16 sm:px-6 sm:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
            Career Journey
          </span>
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Over 4 years of building scalable AI-powered products and backend
            systems that impact thousands of users worldwide.
          </p>
        </motion.div>

        {/* Timeline */}
        <Timeline items={experiences} />
      </div>
    </section>
  );
}

