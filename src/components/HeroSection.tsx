
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "Military Graphic Artist",
    "Tactical Design Specialist", 
    "Visual Communications Expert"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-tactical-dark to-background"
      aria-labelledby="hero-heading"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 military-grid opacity-30" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
      </div>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-grid-scan opacity-40"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Name */}
          <h1 
            id="hero-heading"
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-foreground glitch tracking-wider"
            data-text="en Lebron"
          >
            en Lebron
          </h1>

          {/* Dynamic Title */}
          <div className="h-12 md:h-16 flex items-center justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-rajdhani font-medium text-primary uppercase tracking-widest transition-all duration-500">
              {titles[currentTitle]}
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-rajdhani">
            Combining military precision with creative excellence to deliver 
            <span className="text-primary font-medium"> tactical visual solutions</span> that 
            command attention and communicate with impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a href="#portfolio" aria-label="View my portfolio">
              <Button 
                size="lg" 
                className="tactical-btn px-8 py-6 text-lg w-full sm:w-auto"
              >
                View Portfolio
              </Button>
            </a>
            <a href="#contact" aria-label="Get in touch">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 px-8 py-6 text-lg font-orbitron uppercase tracking-wider w-full sm:w-auto"
              >
                Get In Touch
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary opacity-60" aria-hidden="true"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary opacity-60" aria-hidden="true"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary opacity-60" aria-hidden="true"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary opacity-60" aria-hidden="true"></div>
    </section>
  );
};

export default HeroSection;
