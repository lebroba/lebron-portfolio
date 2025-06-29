
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" role="main" className="pt-20">
        <AboutSection />
      </main>
    </div>
  );
};

export default About;
