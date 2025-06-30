import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Keyboard } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';
import ReactPlayer from 'react-player';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SlideData } from '@/data/portfolioData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface PortfolioCarouselProps {
  slides: SlideData[];
  initialSlide?: number;
  onClose: () => void;
}

const PortfolioCarousel = ({ slides, initialSlide = 0, onClose }: PortfolioCarouselProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(initialSlide);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const renderSlideContent = (slide: SlideData) => {
    switch (slide.type) {
      case 'image':
        return (
          <img
            src={slide.src}
            alt={slide.title}
            className="w-full h-full object-contain max-h-[70vh]"
            loading="lazy"
          />
        );
      case 'video':
        return (
          <video
            src={slide.src}
            controls
            className="w-full h-full object-contain max-h-[70vh]"
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        );
      case 'youtube':
      case 'vimeo':
        return (
          <div className="w-full max-w-4xl mx-auto aspect-video">
            <ReactPlayer
              url={slide.src}
              width="100%"
              height="100%"
              controls={true}
              light={true}
              playing={false}
            />
          </div>
        );
      default:
        return <div className="text-center text-muted-foreground">Unsupported content type</div>;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="carousel-title"
    >
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
        onClick={onClose}
        aria-label="Close carousel"
      >
        <X size={24} />
      </Button>

      {/* Navigation Arrows */}
      <button
        ref={prevRef}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ArrowLeft size={20} />
      </button>
      
      <button
        ref={nextRef}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ArrowRight size={20} />
      </button>

      <div className="h-full flex flex-col">
        {/* Main Carousel */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <Swiper
              modules={[Navigation, Thumbs, Keyboard]}
              spaceBetween={30}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              keyboard={{ enabled: true }}
              initialSlide={initialSlide}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              onBeforeInit={(swiper) => {
                if (typeof swiper.params.navigation !== 'boolean') {
                  if (swiper.params.navigation) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }
                }
              }}
              className="h-full"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="flex items-center justify-center">
                  <div className="text-center">
                    {renderSlideContent(slide)}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Slide Information */}
        <div className="bg-tactical-dark/90 border-t border-primary/20 p-6">
          <div className="container mx-auto max-w-4xl">
            <h2 
              id="carousel-title"
              className="text-2xl font-orbitron font-bold text-white mb-2"
            >
              {slides[activeIndex]?.title}
            </h2>
            <p className="text-gray-300 font-rajdhani mb-3 leading-relaxed">
              {slides[activeIndex]?.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {slides[activeIndex]?.software.split(', ').map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-primary/20 text-primary text-sm font-rajdhani font-medium uppercase tracking-wider rounded-sm border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="p-4 bg-tactical-dark/80">
          <div className="container mx-auto max-w-4xl">
            <Swiper
              modules={[Navigation]}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView="auto"
              freeMode
              watchSlidesProgress
              className="thumbs-swiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={slide.id} className="!w-auto">
                  <div 
                    className={`
                      w-20 h-16 bg-tactical-green/20 rounded border-2 cursor-pointer overflow-hidden
                      ${index === activeIndex ? 'border-primary' : 'border-primary/30 hover:border-primary/60'}
                      transition-all duration-200
                    `}
                    onClick={() => {
                      // Navigate to this slide
                      const mainSwiper = document.querySelector('.swiper') as any;
                      if (mainSwiper?.swiper) {
                        mainSwiper.swiper.slideTo(index);
                      }
                    }}
                  >
                    {slide.thumbnail ? (
                      <img 
                        src={slide.thumbnail} 
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-primary font-orbitron font-bold">
                        {slide.title.charAt(0)}
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
