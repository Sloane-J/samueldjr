"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    company: "Leading innovative startup solutions in San Francisco",
    content: "Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations. The attention to detail and innovative solutions provided were beyond what we imagined possible.",
    rating: 5,
    image: "https://picsum.photos/seed/picsum/800/1000",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Global Marketing Solutions Inc.",
    content: "The attention to detail and creative solutions provided were exceptional. Highly recommended! Their understanding of our brand and market positioning was impressive, leading to outstanding results.",
    rating: 5,
    image: "https://picsum.photos/seed/picsum/800/1000",
  },
  {
    name: "Emma Davis",
    role: "Product Manager",
    company: "Tech Innovations Ltd",
    content: "Outstanding work on our web application. The final product was exactly what we envisioned. The team's ability to translate our requirements into a functional and beautiful product was remarkable.",
    rating: 5,
    image: "https://picsum.photos/seed/picsum/800/1000",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Pause auto-play on user interaction
  const handleManualNavigation = (index) => {
    setIsAutoPlaying(false)
    setActiveIndex(index)
    
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextTestimonial = () => {
    setDirection(1)
    handleManualNavigation((activeIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    handleManualNavigation((activeIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Animation variants
  const textVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction * 50
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction * -50,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.2
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="testimonials" className="py-20 bg-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-400 text-xl"
          >
            What clients say about my work
          </motion.p>
        </motion.div>
      </div>

      <div className="relative max-w-8xl mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={direction}
            className="flex flex-col lg:flex-row items-center"
          >
            <motion.div 
              variants={textVariants}
              custom={direction}
              className="w-full lg:w-1/2 px-8 lg:px-16 py-12 lg:py-24 relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: [0, 0.1, 0.3],
                  scale: 1,
                  transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                }}
                className="absolute -top-20 -left-10 text-white opacity-5"
              >
                <Quote size={180} />
              </motion.div>
              
              <motion.div className="space-y-8 relative z-10">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex mb-4"
                >
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1), duration: 0.3 }}
                    >
                      <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-2xl lg:text-3xl font-light text-gray-200 leading-relaxed"
                >
                  "{testimonials[activeIndex].content}"
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-semibold">{testimonials[activeIndex].name}</h3>
                  <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                  <p className="text-gray-500 text-sm">{testimonials[activeIndex].company}</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={imageVariants}
              className="w-full lg:w-1/2 h-[60vh] lg:h-screen relative overflow-hidden"
            >
              <motion.div
                initial={{ height: "100%" }}
                animate={{ height: "0%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-[#1a1a1a] z-10"
              />
              
              <motion.img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-full h-full object-cover"
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent lg:hidden"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicator */}
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: isAutoPlaying ? "100%" : "0%" }}
          transition={{ duration: 6, ease: "linear", repeat: isAutoPlaying ? Infinity : 0 }}
          className="absolute top-0 left-0 h-1 bg-blue-500/50"
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-8 left-8 lg:left-16 flex gap-4"
        >
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="absolute bottom-8 right-8 lg:right-16 flex gap-3"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleManualNavigation(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              <span className={`block w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-white' : 'bg-white/30'
              }`} />
              {index === activeIndex && (
                <motion.span
                  layoutId="activeDot"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}