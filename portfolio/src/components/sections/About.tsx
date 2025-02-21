"use client"

import React from "react"
import { motion } from "framer-motion"
import { Code2, Palette, Globe2 } from "lucide-react"
import Skills from "./Skills"

const skills = [
  {
    title: "Web Development",
    icon: Code2,
    description: "Building responsive and performant web applications using modern technologies.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "Creating intuitive and beautiful user interfaces with attention to detail.",
    technologies: ["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Full Stack",
    icon: Globe2,
    description: "End-to-end development from database design to frontend implementation.",
    technologies: ["PostgreSQL", "MongoDB", "Express", "REST APIs"],
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
  
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          About Me
        </motion.h2>

        {/* Profile Section with Image Left, Text Right */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Profile Image with Animation */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl" />
              <div className="relative aspect-square overflow-hidden rounded-xl bg-[#2a2a2a]">
                <img
                  src="/images/profile-image.jpg"
                  alt="Developer Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x600/2a2a2a/white?text=Developer+Profile";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
            </motion.div>

            {/* Right - Text Content with Staggered Animation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Creative Developer & Designer
              </motion.h3>
              
              <motion.p variants={itemVariants} className="text-gray-300 text-lg">
                With over 5 years of experience in web development and design, I blend technical expertise with creative vision to build digital experiences that stand out.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-gray-400">
                My journey began with a passion for solving problems through code, evolving into a multidisciplinary approach that encompasses both development and design. I believe great products emerge at the intersection of technical excellence and thoughtful user experience.
              </motion.p>
              
              <motion.div variants={itemVariants} className="pt-2">
                <h4 className="text-xl font-semibold mb-3">Education</h4>
                <p className="text-gray-400">BSc in Computer Science, University of Technology, 2018</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex gap-4 pt-2">
                <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md font-medium text-white hover:opacity-90 transition-opacity">
                  Contact Me
                </a>
                <a href="/resume.pdf" className="px-6 py-3 bg-white/10 rounded-md font-medium text-white hover:bg-white/15 transition-colors">
                  View Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Skills Cards with Staggered Animation */}
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
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              className="bg-[#232323] rounded-lg p-8 hover:bg-[#2a2a2a] transition-all duration-300 border border-white/5 hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/5"
            >
              <div className="mb-5 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-3 rounded-lg w-fit">
                <skill.icon className="w-8 h-8 text-blue-400" />
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
        </motion.div>

        {/* Technical Skills Section */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-2xl font-bold text-center mb-12"
          >
            Technical Skills
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.8 }}
          >
            <Skills />
          </motion.div>
        </div>
      </div>
    </section>
  )
}