import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { FloatingDock, DockItem } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconBriefcase,
  IconCode,
  IconRocket,
  IconSchool,
  IconMail,
} from "@tabler/icons-react";

const dockItems: DockItem[] = [
  { title: "Home", icon: <IconHome className="h-5 w-5" />, href: "#home" },
  {
    title: "Experience",
    icon: <IconBriefcase className="h-5 w-5" />,
    href: "#experience",
  },
  { title: "Skills", icon: <IconCode className="h-5 w-5" />, href: "#skills" },
  {
    title: "Projects",
    icon: <IconRocket className="h-5 w-5" />,
    href: "#projects",
  },
  {
    title: "Education",
    icon: <IconSchool className="h-5 w-5" />,
    href: "#education",
  },
  {
    title: "Contact",
    icon: <IconMail className="h-5 w-5" />,
    href: "#contact",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-bg">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <FloatingDock items={dockItems} />
    </main>
  );
}
