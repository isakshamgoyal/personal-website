import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

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
    </main>
  );
}
