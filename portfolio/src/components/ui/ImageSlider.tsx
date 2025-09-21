import React, { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  src: string;
  alt?: string;
}

interface ImageSliderProps {
  images?: Slide[];
  projectTitle?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showNavigation?: boolean;
  className?: string;
}

const ImageSlider = ({
  images = [],
  projectTitle = 'Project',
  autoPlay = false,
  autoPlayInterval = 5000,
  showIndicators = true,
  showNavigation = true,
  className = ''
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const [imageError, setImageError] = useState<Record<number, boolean>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const sliderRef = useRef<HTMLDivElement>(null);

  // Use images directly without fallback
  const slides = images;

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentIndex, isTransitioning]);

  const handleImageLoad = useCallback((index: number) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  }, []);

  const handleImageError = useCallback((index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }));
    setImageLoaded(prev => ({ ...prev, [index]: true })); // Consider it "loaded" even if error
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNext();
    }
  }, [goToPrevious, goToNext]);

  // Touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && slides.length > 1) {
      autoPlayRef.current = setInterval(goToNext, autoPlayInterval);
      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
  }, [autoPlay, autoPlayInterval, goToNext, slides.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay && slides.length > 1) {
      autoPlayRef.current = setInterval(goToNext, autoPlayInterval);
    }
  };

  // Keyboard event listener
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('keydown', handleKeyDown);
      return () => slider.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown]);

  // Preload adjacent images
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    // Preload next and previous images
    const nextIndex = (currentIndex + 1) % slides.length;
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;

    if (slides[nextIndex] && !imageLoaded[nextIndex]) {
      preloadImage(slides[nextIndex].src);
    }
    if (slides[prevIndex] && !imageLoaded[prevIndex]) {
      preloadImage(slides[prevIndex].src);
    }
  }, [currentIndex, slides, imageLoaded]);

  const getVisibleSlides = () => {
    // Only render current slide and adjacent ones for performance
    const visibleIndices = [];
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex + 1) % slides.length;

    if (slides.length > 1) {
      visibleIndices.push(prevIndex, currentIndex, nextIndex);
    } else {
      visibleIndices.push(currentIndex);
    }

    return [...new Set(visibleIndices)];
  };

  return (
    <div
      ref={sliderRef}
      className={`relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden group focus:outline-none ${className}`}
      tabIndex={0}
      role="region"
      aria-label={`${projectTitle} image gallery`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation buttons */}
      {showNavigation && slides.length > 1 && (
        <>
          <button
            type="button"
            className="absolute left-2 sm:left-4 top-1/2 z-30 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm p-2 text-white transition-all hover:bg-black/80 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous image"
            onClick={goToPrevious}
            disabled={isTransitioning}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="absolute right-2 sm:right-4 top-1/2 z-30 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm p-2 text-white transition-all hover:bg-black/80 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next image"
            onClick={goToNext}
            disabled={isTransitioning}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} aria-hidden="true" />
          </button>
        </>
      )}

      {/* Image container */}
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => {
            const isVisible = getVisibleSlides().includes(index);

            return (
              <div
                key={index}
                className="w-full h-full flex-shrink-0 relative"
              >
                {isVisible && (
                  <>
                    {/* Loading spinner */}
                    {!imageLoaded[index] && !imageError[index] && (
                      <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center z-20">
                        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      </div>
                    )}

                    {/* Image */}
                    <img
                      src={slide.src}
                      alt={slide.alt || `${projectTitle} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading={index === currentIndex ? "eager" : "lazy"}
                      onLoad={() => handleImageLoad(index)}
                      onError={() => handleImageError(index)}
                    />

                    {/* Error fallback */}
                    {imageError[index] && (
                      <div className="absolute inset-0 bg-gray-800/80 flex items-center justify-center z-10">
                        <div className="text-center text-white/80">
                          <div className="text-2xl mb-2">📷</div>
                          <p className="text-sm">Image failed to load</p>
                        </div>
                      </div>
                    )}

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-2 px-3 py-2 bg-black/60 backdrop-blur-sm rounded-full">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 ${
                currentIndex === index
                  ? 'bg-white w-4 h-2'
                  : 'bg-white/50 w-2 h-2 hover:bg-white/75'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      )}

      {/* Screen reader live region */}
      {slides.length > 0 && (
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {`Image ${currentIndex + 1} of ${slides.length}: ${slides[currentIndex]?.alt || `${projectTitle} screenshot ${currentIndex + 1}`}`}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
