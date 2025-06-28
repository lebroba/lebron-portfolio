
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-background px-4 py-2 rounded-md z-50 font-rajdhani font-medium"
      >
        Skip to main content
      </a>

      <Header />
      
      <main id="main-content" role="main">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-tactical-dark border-t border-primary/20 py-8" role="contentinfo">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center">
              <span className="text-background font-orbitron font-bold text-xs" aria-hidden="true">eL</span>
            </div>
            <span className="font-orbitron font-bold text-lg tracking-wider text-foreground">
              en Lebron
            </span>
          </div>
          
          <p className="text-muted-foreground font-rajdhani mb-2">
            Military Graphic Artist & Tactical Design Specialist
          </p>
          
          <p className="text-sm text-muted-foreground font-rajdhani">
            © 2025 en Lebron. All rights reserved. | Designed with military precision.
          </p>
          
          {/* 508 Compliance Statement */}
          <p className="text-xs text-muted-foreground font-rajdhani mt-4">
            This website meets Section 508 accessibility standards and WCAG 2.1 AA guidelines.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
