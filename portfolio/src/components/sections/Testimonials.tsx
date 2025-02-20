"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content:
      "Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "The attention to detail and creative solutions provided were exceptional. Highly recommended!",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Emma Davis",
    role: "Product Manager",
    content: "Outstanding work on our web application. The final product was exactly what we envisioned.",
    rating: 5,
    image: "/placeholder.svg",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-400 text-lg">What clients say about my work</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#232323] rounded-lg p-6 hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

