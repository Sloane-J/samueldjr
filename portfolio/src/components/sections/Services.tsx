"use client"

import { motion } from "framer-motion"
import { Laptop, Smartphone, Search, Rocket, PenTool, Database } from "lucide-react"

const services = [
  {
    title: "Web Development",
    icon: Laptop,
    description: "Custom web applications built with modern frameworks and best practices.",
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    title: "SEO Optimization",
    icon: Search,
    description: "Improve your website's visibility and ranking in search engines.",
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    description: "User-centered design solutions that enhance user experience.",
  },
  {
    title: "Backend Development",
    icon: Database,
    description: "Robust and scalable backend solutions for your applications.",
  },
  {
    title: "Performance Optimization",
    icon: Rocket,
    description: "Speed up your website and improve Core Web Vitals.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-400 text-lg">Comprehensive solutions for your digital needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#232323] rounded-lg p-6 hover:bg-[#2a2a2a] transition-all"
            >
              <div className="mb-4 text-white/80">
                <service.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

