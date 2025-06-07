"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    company: "Leading innovative startup solutions in San Francisco",
    content: "Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations. The attention to detail and innovative solutions provided were beyond what we imagined possible.",
    image: "https://devicescss.xyz/assets/img/bg-10.jpg",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Global Marketing Solutions Inc.",
    content: "The attention to detail and creative solutions provided were exceptional. Highly recommended! Their understanding of our brand and market positioning was impressive, leading to outstanding results.",
    image: "https://devicescss.xyz/assets/img/bg-10.jpg",
  },
  {
    name: "Emma Davis",
    role: "Product Manager",
    company: "Tech Innovations Ltd",
    content: "Outstanding work on our web application. The final product was exactly what we envisioned. The team's ability to translate our requirements into a functional and beautiful product was remarkable.",
    image: "https://devicescss.xyz/assets/img/bg-10.jpg",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-[#080807] overflow-hidden">
      <div className="container mx-auto px-4 mb-8 sm:mb-12 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Testimonials</h2>
          <p className="text-gray-400 text-base sm:text-lg">What clients say about my work</p>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8"
          >
            {/* Content Section */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4 sm:space-y-6 text-center lg:text-left px-4 sm:px-6 lg:px-8"
              >
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-gray-200 leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </p>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold">{testimonials[activeIndex].name}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{testimonials[activeIndex].role}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{testimonials[activeIndex].company}</p>
                </div>
              </motion.div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-[900px] aspect-square sm:aspect-[4/5] lg:aspect-[3/4] xl:h-[666px] xl:aspect-auto overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls - Mobile Optimized */}
        <div className="flex justify-between items-center mt-8 sm:mt-12 lg:absolute lg:bottom-8 lg:left-8 lg:right-8 lg:mt-0">
          {/* Navigation Buttons */}
          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors touch-manipulation"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors touch-manipulation"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 sm:gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors touch-manipulation ${
                  index === activeIndex ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}