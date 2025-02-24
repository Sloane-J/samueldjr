import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/200/300.webp",
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered application that generates high-quality content using machine learning algorithms.",
    tags: ["React", "Python", "OpenAI", "Flask"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team collaboration features.",
    tags: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/200/300?grayscale",
  },
];

const Project = ({ project, index }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smoother transform values
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [index === 0 ? 0 : 200, -200]
  );

  // Add opacity transform for smoother transitions
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.section 
      ref={ref}
      style={{ y }}
      className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-4 bg-[#1a1a1a] rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <motion.div 
          style={{ opacity }}
          className="relative h-full container mx-auto px-8 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">{project.title}</h2>
            <p className="text-xl text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-sm px-4 py-2 bg-white/5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Projects = () => {
  return (
    <div 
      className="bg-black relative min-h-screen"
      style={{ 
        height: `${100 * (projects.length + 0.5)}vh`
      }}
    >
      {projects.map((project, index) => (
        <Project key={project.title} project={project} index={index} />
      ))}
    </div>
  );
};

export default Projects;