import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Modal from "@/components/Modal";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import { portfolioData } from "@/data/portfolioData";

const PortfolioSection = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  // Global click handler is no longer needed as we have direct click handlers

  // Generate filters from portfolioData
  const filters = [
    { id: "all", label: "All Projects" },
    ...portfolioData.map(category => ({
      id: category.id,
      label: category.name
    }))
  ];

  // Create portfolio items from portfolioData for the grid display
  const portfolioItems = portfolioData.map(category => {
    // Use the first slide as the representative for the category
    const firstSlide = category.slides[0];
    return {
      id: category.id,
      title: category.name,
      category: category.id,
      description: firstSlide.description,
      image: firstSlide.thumbnail || firstSlide.src,
      tech: firstSlide.software.split(', ')
    };
  });

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleItemClick = (category: string) => {
    try {
      if (!category) {
        console.error('handleItemClick called with empty category');
        return;
      }
      
      const categoryData = portfolioData.find(cat => cat.id === category);
      
      if (!categoryData) {
        console.error(`Category ${category} not found in portfolioData`);
        return;
      }
      
      if (!categoryData.slides || categoryData.slides.length === 0) {
        console.error(`Category ${category} has no slides`);
        return;
      }
      
      // Update state
      setSelectedCategory(category);
      setSelectedSlideIndex(0);
    } catch (error) {
      console.error('Error in handleItemClick:', error);
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
      className="portfolio-section py-20 bg-background relative"
      aria-labelledby="portfolio-heading"
      data-selected-category={selectedCategory || "none"}
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
              className="portfolio-item group animate-fade-in bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-category={item.category}
              role="button"
              tabIndex={0}
              onClick={() => handleItemClick(item.category)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleItemClick(item.category);
                }
              }}
              aria-label={`View ${item.title} portfolio`}
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

                {/* Image or Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
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
                  )}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <button
                    className="view-details-btn inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md tactical-btn px-4 py-2 text-xs"
                    aria-label={`View details for ${item.title}`}
                    data-category={item.category}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleItemClick(item.category);
                    }}
                  >
                    View Details
                  </button>
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
            onClick={() => navigate('/portfolio')}
          >
            View Complete Archive
          </Button>
        </div>
      </div>

      {/* Portfolio Carousel Modal */}
      <Modal isOpen={!!selectedCategory} onClose={closeModal}>
        {selectedCategoryData ? (
          <PortfolioCarousel
            slides={selectedCategoryData.slides}
            initialSlide={selectedSlideIndex}
            onClose={closeModal}
          />
        ) : (
          <div className="text-white p-8 text-center">
            <p>Loading content...</p>
          </div>
        )}
      </Modal>

      {/* Background decoration - with pointer-events-none to allow clicks to pass through */}
      <div className="absolute inset-0 military-grid opacity-5 pointer-events-none" aria-hidden="true"></div>
    </section>
  );
};

export default PortfolioSection;
