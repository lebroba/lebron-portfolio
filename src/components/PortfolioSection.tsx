
import { useState } from "react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Operations" },
    { id: "tactical", label: "Tactical Graphics" },
    { id: "digital", label: "Digital Art" },
    { id: "branding", label: "Military Branding" },
    { id: "ui", label: "Interface Design" }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Tactical Command Interface",
      category: "ui",
      description: "Mission-critical interface design for command operations",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["UI/UX", "Figma", "Adobe XD"]
    },
    {
      id: 2,
      title: "Military Unit Insignia",
      category: "branding",
      description: "Official unit insignia and branding system",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Illustrator", "Branding", "Vector Art"]
    },
    {
      id: 3,
      title: "Digital Warfare Visualization",
      category: "digital",
      description: "Complex data visualization for strategic planning",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["3D Modeling", "After Effects", "Cinema 4D"]
    },
    {
      id: 4,
      title: "Tactical Field Manual",
      category: "tactical",
      description: "Technical illustration and layout design",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["InDesign", "Technical Illustration", "Print Design"]
    },
    {
      id: 5,
      title: "Command Center Display",
      category: "ui",
      description: "Real-time monitoring dashboard design",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Dashboard Design", "Data Viz", "React"]
    },
    {
      id: 6,
      title: "Military Campaign Graphics",
      category: "tactical",
      description: "Strategic communication materials",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Photoshop", "Campaign Design", "Print"]
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section 
      id="portfolio" 
      className="py-20 bg-background relative"
      aria-labelledby="portfolio-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 
            id="portfolio-heading"
            className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-4 tracking-wider"
          >
            Mission Archive
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            Classified operations and tactical achievements in visual communications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                px-6 py-3 font-rajdhani font-medium uppercase tracking-wider text-sm
                ${activeFilter === filter.id 
                  ? "tactical-btn" 
                  : "border-primary/50 text-primary hover:bg-primary/10"
                }
                transition-all duration-300
              `}
              aria-pressed={activeFilter === filter.id}
              aria-label={`Filter portfolio by ${filter.label}`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group animate-fade-in bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-video bg-gradient-to-br from-tactical-green/20 to-tactical-olive/20 overflow-hidden">
                {/* Military-style overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Corner markers */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl font-orbitron font-bold text-primary">
                        {item.title.charAt(0)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-rajdhani uppercase tracking-wider">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <Button 
                    size="sm" 
                    className="tactical-btn px-4 py-2 text-xs"
                    aria-label={`View details for ${item.title}`}
                  >
                    View Details
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-orbitron font-bold text-foreground mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-rajdhani mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-rajdhani font-medium uppercase tracking-wider rounded-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="tactical-btn px-8 py-6 text-lg"
            aria-label="View complete portfolio"
          >
            View Complete Archive
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 military-grid opacity-5" aria-hidden="true"></div>
    </section>
  );
};

export default PortfolioSection;
