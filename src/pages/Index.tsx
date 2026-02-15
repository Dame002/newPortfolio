import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { ActivityBar, StatusBar } from "@/components/VSCodeLayout";

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <ActivityBar />
      <main className="md:ml-12 pb-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <StatusBar />
    </div>
  );
};

export default Index;
