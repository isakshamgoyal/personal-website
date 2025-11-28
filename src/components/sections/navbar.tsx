"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3 sm:px-6 sm:py-4">
          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Resume button */}
          <a
            href="/Saksham_Goyal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-primary bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            Resume
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground md:hidden"
          >
            {isMobileMenuOpen ? (
              <IconX className="h-5 w-5" />
            ) : (
              <IconMenu2 className="h-5 w-5" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[65px] z-40 bg-background/95 backdrop-blur-xl md:hidden sm:top-[72px]"
          >
            <div className="flex flex-col items-center gap-4 px-4 py-6 sm:px-6 sm:py-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="/Saksham_Goyal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                className="mt-4 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground"
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

