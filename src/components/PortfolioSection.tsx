
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/Modal";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import { portfolioData } from "@/data/portfolioData";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ui", label: "UI Design" },
    { id: "military-insignia", label: "Military Insignia" },
    { id: "3d", label: "3D Design" },
    { id: "print-design", label: "Print Design" },
    { id: "web-design", label: "Web Design" },
    { id: "ai", label: "AI & Digital Art" }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "UI Design",
      category: "ui",
      description: "Mission-critical interface design for command operations",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["UI/UX", "Figma", "Adobe XD"]
    },
    {
      id: 2,
      title: "Military & Unit Insignia",
      category: "military-insignia",
      description: "Official unit insignia and branding system",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Illustrator", "Branding", "Vector Art"]
    },
    {
      id: 3,
      title: "3D Modeling & Rendering",
      category: "3d",
      description: "3D rendered tactical equipment for training materials",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Blender", "Cinema 4D", "KeyShot"]
    },
    {
      id: 4,
      title: "Print Layout",
      category: "print-design",
      description: "Technical manual design with clear information hierarchy",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["InDesign", "Technical Illustration", "Print Design"]
    },
    {
      id: 5,
      title: "Military Portal Website",
      category: "web-design",
      description: "Responsive web portal for military personnel",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Web Design", "HTML/CSS", "JavaScript"]
    },
    {
      id: 6,
      title: "AI-Generated Concept Art",
      category: "ai",
      description: "Futuristic military concept art using AI tools",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Midjourney", "Photoshop", "AI Art"]
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleItemClick = (category: string) => {
    const categoryData = portfolioData.find(cat => cat.id === category);
    if (categoryData && categoryData.slides.length > 0) {
      setSelectedCategory(category);
      setSelectedSlideIndex(0);
    }
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setSelectedSlideIndex(0);
  };

  const selectedCategoryData = portfolioData.find(cat => cat.id === selectedCategory);

  return (
    <section 
      id="portfolio" 
      className="py-20 bg-background relative"
      aria-labelledby="portfolio-heading"
    >
      <div
        className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl"
        role="region"
        aria-labelledby="portfolio-heading"
      >
        <h2 id="portfolio-heading" className="sr-only">Portfolio Projects</h2>
        {/* Portfolio Filter Navigation */}
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
              className="group animate-fade-in bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleItemClick(item.category)}
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

      {/* Portfolio Carousel Modal */}
      <Modal isOpen={!!selectedCategory} onClose={closeModal}>
        {selectedCategoryData && (
          <PortfolioCarousel
            slides={selectedCategoryData.slides}
            initialSlide={selectedSlideIndex}
            onClose={closeModal}
          />
        )}
      </Modal>

      {/* Background decoration */}
      <div className="absolute inset-0 military-grid opacity-5" aria-hidden="true"></div>
    </section>
  );
};

export default PortfolioSection;
