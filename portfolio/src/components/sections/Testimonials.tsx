"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-400 text-lg">What clients say about my work</p>
        </motion.div>
      </div>

      <div className="relative max-w-8xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center"
          >
            <div className="w-full lg:w-1/2 px-8 lg:px-16 py-12 lg:py-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-2xl lg:text-3xl font-light text-gray-200 leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </p>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{testimonials[activeIndex].name}</h3>
                  <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                  <p className="text-gray-500 text-sm">{testimonials[activeIndex].company}</p>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 h-[60vh] lg:h-screen relative">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent lg:hidden" />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 left-8 lg:left-16 flex gap-4">
          <button
            onClick={prevTestimonial}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute bottom-8 right-8 lg:right-16 flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}