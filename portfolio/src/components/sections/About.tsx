"use client"

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
  return (
    <section id="about" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 text-lg">
            Passionate about creating beautiful and functional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#232323] rounded-lg p-6 hover:bg-[#2a2a2a] transition-colors"
            >
              <div className="mb-4">
                <skill.icon className="w-12 h-12 text-white/80" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span key={tech} className="bg-white/10 text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Skills section */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center mb-12"
          >
            Technical Skills
          </motion.h3>
          <Skills />
        </div>
      </div>
    </section>
  )
}

