"use client"

import { motion } from "framer-motion"
import { Laptop, Search, Rocket, PenTool, Database } from "lucide-react"

const services = [
  {
    title: "Front-End Web Development",
    icon: Laptop,
    iconColor: "#FF5733", // Orange
    description: "Custom web applications built with modern frameworks and best practices.",
    tools: "Astrojs, React, TypeScript, Tailwind CSS, Framer Motion, Hugo"
  },
  {
    title: "SEO Optimization",
    icon: Search,
    iconColor: "#4CAF50", // Green
    description: "Improve your website's visibility and ranking in search engines.",
    tools: "Google Analytics, SEMrush, Ahrefs, Moz, Schema Markup"
  },
  {
    title: "Wireframe Design",
    icon: PenTool,
    iconColor: "#E91E63", // Pink
    description: "User-centered design solutions that enhance user experience.",
    tools: "Figma, Adobe XD, Sketch, InVision, Zeplin"
  },
  {
    title: "Full-Stack Development",
    icon: Database,
    iconColor: "#2196F3", // Blue
    description: "Robust and scalable backend solutions for your applications.",
    tools: "Laravel, PHP, MySql, Supabase, Firebase, Sqlite"
  },
]

export default function Services() {
  // Animation variants for staggered card animation from left
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }
  
  const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }
  
  // Animation variants for text content from right
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  }
  
  const textItemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="services" className="py-20 bg-[#080807]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D1D1C7]">Services</h2>
          <p className="text-[#D1D1C7] text-lg">Comprehensive solutions for your digital needs</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          {/* Left side - Service Cards (7 columns) */}
          <motion.div 
            className="md:col-span-7 grid md:grid-cols-2 gap-5"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-[#232323] rounded-lg p-5 hover:bg-[#2a2a2a] transition-all max-w-xs"
              >
                <div className="mb-4 inline-flex p-3 rounded-full" style={{ backgroundColor: `${service.iconColor}20` }}>
                  <service.icon className="w-8 h-8" style={{ color: service.iconColor }} />
                </div>
                <h3 className="text-xl text-[#D1D1C7] font-semibold mb-2">{service.title}</h3>
                <p className="text-[#D1D1C7] text-sm mb-3">{service.description}</p>
                <div className="mt-3 pt-3 border-t border-gray-700">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#D1D1C7] mb-2">Tools & Technologies</p>
                  <p className="text-[#D1D1C7] text-xs">{service.tools}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Text content (5 columns) */}
          <motion.div 
            className="md:col-span-5 flex flex-col justify-center"
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              variants={textItemVariants}
              className="text-2xl font-bold mb-6 text-[#D1D1C7]"
            >
              Elevate Your Digital Presence
            </motion.h3>
            
            <motion.p 
              variants={textItemVariants}
              className="mb-5 text-[#D1D1C7]"
            >
              In today's competitive landscape, your digital presence is more important than ever. I provide end-to-end solutions that help businesses stand out and achieve their goals.
            </motion.p>
            
            <motion.p 
              variants={textItemVariants}
              className="text-[#D1D1C7] mb-5"
            >
              From conceptualization to deployment, I handle every aspect of the development process with meticulous attention to detail and a focus on delivering exceptional results.
            </motion.p>
            
            <motion.p 
              variants={textItemVariants}
              className="text-[#D1D1C7] mb-8"
            >
              Every project is approached with a strategic mindset, ensuring that the solutions I provide not only meet your immediate needs but also support your long-term business objectives.
            </motion.p>
            
            <motion.div
              variants={textItemVariants}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-400 text-white px-6 py-3 rounded-full font-medium hover:from-orange-400 hover:to-orange-600 transition-all"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Project
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}