"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconPhone,
  IconArrowUpRight,
} from "@tabler/icons-react";

const contactLinks = [
  {
    title: "Email",
    value: "isakshamgoyal@gmail.com",
    href: "mailto:isakshamgoyal@gmail.com",
    icon: <IconMail className="h-6 w-6" />,
    color: "from-red-500/20 to-orange-500/10",
  },
  {
    title: "LinkedIn",
    value: "isakshamgoyal",
    href: "https://www.linkedin.com/in/isakshamgoyal",
    icon: <IconBrandLinkedin className="h-6 w-6" />,
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "GitHub",
    value: "isakshamgoyal",
    href: "https://github.com/isakshamgoyal",
    icon: <IconBrandGithub className="h-6 w-6" />,
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    title: "Phone",
    value: "+91 9997781991",
    href: "tel:+919997781991",
    icon: <IconPhone className="h-6 w-6" />,
    color: "from-green-500/20 to-emerald-500/10",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-24">
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
            Get In Touch
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about AI and technology.
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <SpotlightCard className="h-full transition-all duration-300 hover:border-primary/50">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${link.color} text-foreground transition-transform duration-300 group-hover:scale-110`}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      {link.title}
                    </p>
                    <p className="font-medium text-foreground">{link.value}</p>
                  </div>
                  <IconArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </SpotlightCard>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:isakshamgoyal@gmail.com"
            className="glow-primary group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            <IconMail className="h-5 w-5" />
            Send me an email
            <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

