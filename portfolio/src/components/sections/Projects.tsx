import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Affeliate Nexus",
    description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/200/300.webp",
  },
  {
    title: "Web Blog",
    description: "An AI-powered application that generates high-quality content using machine learning algorithms.",
    tags: ["React", "Python", "OpenAI", "Flask"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    title: "Web Developer Portfolio",
    description: "An AI-powered application that generates high-quality content using machine learning algorithms.",
    tags: ["Astrojs", "React", "Tailwind CSS", "Framer Motion", "Magic UI"],
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

  // Add subtle scale effect
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.95, 1, 1, 0.95]
  );

  return (
    <motion.section 
      ref={ref}
      style={{ y }}
      className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        style={{ opacity, scale }}
        className="w-[95%] h-[85vh] mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40 z-10"></div>
        
        {/* Glowing accent in corner */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-orange-600/5 blur-3xl rounded-full"></div>
        
        <div className="relative h-full z-20 container mx-auto px-8 py-12 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <span className="inline-block py-1 px-3 bg-white/5 text-sm rounded-full border border-white/10">
              Project {index + 1}/{projects.length}
            </span>
            
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {project.title}
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-sm px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 pt-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all border border-white/5 hover:border-white/20"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600/80 to-orange-400/80 rounded-full hover:from-orange-400 hover:to-orange-600 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 h-full flex items-center">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 group-hover:opacity-0 transition-opacity"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Reflection effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent blur-sm transform scale-y-[-1] opacity-50"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

const Projects = () => {
  return (
    <div 
      className="bg-[#121212] relative"
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