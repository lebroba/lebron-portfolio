
const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-b from-background to-tactical-dark relative"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 
              id="about-heading"
              className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-4 tracking-wider"
            >
              Mission Brief
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground font-rajdhani">
              Strategic visual communications with military precision
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="relative animate-slide-in-right">
              <div className="aspect-square bg-gradient-to-br from-tactical-green/20 to-tactical-olive/20 rounded-lg border border-primary/30 flex items-center justify-center relative overflow-hidden group">
                {/* Military-style frame */}
                <div className="absolute inset-2 border border-primary/50 rounded-lg group-hover:border-primary transition-colors duration-300"></div>
                
                {/* Placeholder content */}
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-orbitron font-bold text-primary">BL</span>
                  </div>
                  <p className="text-muted-foreground font-rajdhani">Professional Portrait</p>
                </div>

                {/* Corner markers */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4 tracking-wide">
                  Tactical Design Operations
                </h3>
                
                <div className="space-y-4 text-muted-foreground font-rajdhani text-lg leading-relaxed">
                  <p>
                    With precision-driven design methodology and military attention to detail, 
                    I execute visual communications that achieve mission objectives and 
                    exceed operational requirements.
                  </p>
                  
                  <p>
                    My expertise spans <span className="text-primary font-medium">tactical graphics</span>, 
                    <span className="text-primary font-medium"> digital warfare visualization</span>, and 
                    <span className="text-primary font-medium"> strategic communication design</span> 
                    - delivering solutions that perform under pressure.
                  </p>
                  
                  <p>
                    Every project is approached with military discipline, ensuring 
                    deadlines are met, specifications are exceeded, and the mission 
                    is accomplished with distinction.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-primary/20">
                  <div className="text-center">
                    <div className="text-2xl font-orbitron font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground font-rajdhani uppercase tracking-wider">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-orbitron font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground font-rajdhani uppercase tracking-wider">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-orbitron font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground font-rajdhani uppercase tracking-wider">Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 military-grid opacity-5" aria-hidden="true"></div>
    </section>
  );
};

export default AboutSection;
