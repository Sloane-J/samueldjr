import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  src: string;
  alt?: string;
}

interface ImageSliderProps {
  images: Slide[];
  projectTitle: string;
}

const ImageSlider = ({ images = [], projectTitle = '' }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Guard against empty images array
  if (images.length === 0) {
    return (
      <div className="relative w-full h-full max-h-96 lg:max-h-none rounded-xl sm:rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center">
        <p className="text-white">No images available</p>
      </div>
    );
  }

  const goToPrevious = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }),
  };

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full h-full max-h-96 lg:max-h-none rounded-xl sm:rounded-2xl overflow-hidden group">
      {/* Previous button */}
      <button
        type="button"
        className="absolute left-2 sm:left-4 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label="previous slide"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} aria-hidden="true" />
      </button>

      {/* Next button */}
      <button
        type="button"
        className="absolute right-2 sm:right-4 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label="next slide"
        onClick={goToNext}
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} aria-hidden="true" />
      </button>

      {/* Image container with AnimatePresence for smooth transitions */}
      <div className="relative w-full h-full">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
            <motion.img
              src={currentImage.src}
              alt={currentImage.alt || `${projectTitle} screenshot ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Reflection effect */}
      <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent blur-sm transform scale-y-[-1] opacity-30"></div>
    </div>
  );
};

export default ImageSlider;