import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Keyboard } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';
import ReactPlayer from 'react-player';

// Define interface for Swiper element
interface SwiperElement extends HTMLElement {
  swiper: {
    slideTo: (index: number) => void;
  };
}
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
              // @ts-expect-error - ReactPlayer props are not correctly typed
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
      className="w-full h-full"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
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

      {/* Grid Layout Container */}
      <div className="h-full grid grid-cols-9 grid-rows-6 gap-0">
        {/* div1: Main Image Area (1,1 to 5,7) */}
        <div className="col-start-1 col-end-8 row-start-1 row-end-6 p-4 flex items-center justify-center">
          <div className="w-full h-full">
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

        {/* div3: Description Area (1,8 to 3,10) */}
        <div className="col-start-8 col-end-10 row-start-1 row-end-4 bg-tactical-dark/90 border-l border-primary/20 p-4 overflow-y-auto">
          <h2
            id="carousel-title"
            className="text-2xl font-orbitron font-bold text-white mb-3"
          >
            {slides[activeIndex]?.title}
          </h2>
          <p className="text-gray-300 font-rajdhani leading-relaxed">
            {slides[activeIndex]?.description}
          </p>
        </div>

        {/* div4: Software Used Area (4,8 to 5,10) */}
        <div className="col-start-8 col-end-10 row-start-4 row-end-6 bg-tactical-dark/80 border-l border-t border-primary/20 p-4">
          <h3 className="text-lg font-orbitron font-bold text-white mb-2">Software Used</h3>
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

        {/* div2: Thumbnails Area (6,1 to 6,10) */}
        <div className="col-start-1 col-end-10 row-start-6 row-end-7 bg-tactical-dark/80 border-t border-primary/20 p-3">
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
                    const mainSwiper = document.querySelector('.swiper') as SwiperElement | null;
                    if (mainSwiper && 'swiper' in mainSwiper) {
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
  );
};

export default PortfolioCarousel;
