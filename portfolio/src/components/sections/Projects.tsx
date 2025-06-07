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

  // Smoother transform values with responsive adjustments
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [index === 0 ? 0 : 100, -100] // Reduced movement for mobile
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
      className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-2 sm:px-4"
    >
      <motion.div 
        style={{ opacity, scale }}
        className="w-full lg:w-[95%] xl:w-[90%] h-[90vh] sm:h-[85vh] mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40 z-10"></div>
        
        {/* Glowing accent in corner - responsive positioning */}
        <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-br from-orange-400/20 to-orange-600/5 blur-3xl rounded-full"></div>
        
        <div className="relative h-full z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            <span className="inline-block py-1 px-3 bg-white/5 text-xs sm:text-sm rounded-full border border-white/10">
              Project {index + 1}/{projects.length}
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight">
              {project.title}
            </h2>
            
            <p className="text-sm sm:text-base lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {project.description}
            </p>
            
            {/* Tags - responsive grid */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Buttons - responsive layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all border border-white/5 hover:border-white/20 text-sm sm:text-base min-w-[140px]"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>View Code</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-orange-600/80 to-orange-400/80 rounded-full hover:from-orange-400 hover:to-orange-600 transition-all text-sm sm:text-base min-w-[140px]"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-full flex items-center order-first lg:order-last">
            <div className="relative w-full h-full max-h-96 lg:max-h-none rounded-xl sm:rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 group-hover:opacity-0 transition-opacity"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Reflection effect - hidden on small screens for performance */}
              <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent blur-sm transform scale-y-[-1] opacity-50"></div>
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