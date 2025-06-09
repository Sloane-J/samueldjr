"use client"

import React from "react"
import { motion } from "framer-motion"
import { Code2, Palette, Globe2 } from "lucide-react"
//import Skills from "./Skills"

const skills = [
  {
    title: "Web Development",
    icon: Code2,
    description: "Building responsive and performant web applications using modern technologies.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    iconColor: "text-blue-500",
    bgColor: "bg-blue-300/20" // Light blue background
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "Creating intuitive and beautiful user interfaces with attention to detail.",
    technologies: ["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion"],
    iconColor: "text-purple-500",
    bgColor: "bg-purple-300/20" // Light purple background
  },
  {
    title: "Full Stack",
    icon: Globe2,
    description: "End-to-end development from database design to frontend implementation.",
    technologies: ["PostgreSQL", "MongoDB", "Express", "REST APIs"],
    iconColor: "text-green-500",
    bgColor: "bg-green-300/20" // Light green background
  },
]

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.9 // Delay cards until after profile content
      }
    }
  }

  // Updated card variants to come from left side
  const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="py-20 bg-[#080807] text-[#D1D1C7]">
      <div className="container mx-auto px-4">
        
        {/* Profile Section with Image Left, Text Right */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Clean Profile Image with Animation */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/Profile-Pic.jpg"
                alt="Developer Profile"
                className="w-full h-auto rounded-xl object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x600/2a2a2a/white?text=Developer+Profile";
                }}
              />
            </motion.div>

            {/* Right - Text Content with Staggered Animation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                Hi, I'm Samuel Dorkey Jr
              </motion.h3>

              <motion.p variants={itemVariants} className="text-[#D1D1C7] text-lg">
              Driven by a passion for design and development, I transform ideas into live projects, ensuring a seamless journey that delivers a powerful, positive impact on the digital world and your business. My core mission is crafting exceptional web experiences that resonate with users, thanks to a keen eye for detail and a commitment to user-centric principles.
              </motion.p>

              <motion.p variants={itemVariants} className="text-[#D1D1C7]">
              Beyond web development and design, I often share my freelance journey insights on my blog. My YouTube channel is where I unwind with mobile gameplays, and I also enjoy immersing myself in music and art. When I need a physical challenge, I hit the bouldering wall, or simply relax by nurturing my growing collection of houseplants.
              </motion.p>

              <motion.div variants={itemVariants} className="flex gap-4 pt-2">
                <a href="#contact" className="inline-flex items-center gap-2 bg-orange-700 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors">
                  Ready to get started?
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </a>
                <a href="/resume.pdf" className="px-6 py-3 bg-white/10 rounded-full font-medium text-white hover:bg-white/15 transition-colors">
                  View Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Skills Cards with Staggered Animation 
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl font-bold text-center mb-12"
        >
          Core Competencies
        </motion.h3>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              className="bg-white/10 rounded-lg p-8 hover:bg-white/15 transition-all duration-300 border border-white/5 hover:border-white/10 hover:shadow-lg"
            >
              <div className={`mb-5 ${skill.bgColor} p-3 rounded-lg w-fit`}>
                <skill.icon className={`w-8 h-8 ${skill.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-400 mb-5">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span key={tech} className="bg-white/5 text-sm px-3 py-1 rounded-full border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}