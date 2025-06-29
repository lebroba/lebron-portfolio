
import Header from "@/components/Header";
import SkillsSection from "@/components/SkillsSection";

const Skills = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" role="main" className="pt-20">
        <SkillsSection />
      </main>
    </div>
  );
};

export default Skills;
