"use client";

import { motion } from "framer-motion";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconHeart,
} from "@tabler/icons-react";

const socialLinks = [
  {
    icon: <IconBrandLinkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/isakshamgoyal",
    label: "LinkedIn",
  },
  {
    icon: <IconBrandGithub className="h-5 w-5" />,
    href: "https://github.com/isakshamgoyal",
    label: "GitHub",
  },
  {
    icon: <IconMail className="h-5 w-5" />,
    href: "mailto:isakshamgoyal@gmail.com",
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold gradient-text">SG</span>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-1 text-sm text-muted-foreground"
          >
            <span>Made with</span>
            <IconHeart className="h-4 w-4 text-red-500" />
            <span>by Saksham Goyal</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs text-muted-foreground"
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

