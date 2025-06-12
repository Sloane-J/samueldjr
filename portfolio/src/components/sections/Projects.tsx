import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Affiliate Nexus",
    description:
      "Affiliate Nexus is a platform designed to empower individuals through personalized coaching in affiliate marketing and lifestyle optimization. It offers services such as affiliate marketing training, life coaching sessions, and self-paced online courses.",
    tags: ["React.js", "TypeScript", "Astro.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://affiliate-nexus.vercel.app/",
    githubUrl: "https://github.com/fairy-app",
    images: [
      { src: "/images/affiliate-nexus-1.jpg" },
      { src: "/images/affiliate-nexus-2.jpg" },
      { src: "/images/affiliate-nexus-3.jpg" },
      { src: "/images/affiliate-nexus-4.jpg" },
      { src: "/images/affiliate-nexus-5.jpg" },
    ],
  },
  {
    title: "Grain and Gradient",
    description: "Grain & Gradient is a modern digital publication offering a blend of insightful and entertaining content across various topics, including technology, current affairs, entertainment, and more. The website features a range of articles.",
    tags: ["Reactjs", "TypeScript", "Astrojs", "Tailwind CSS", "Framer Motion"],
    liveUrl: "http://grainandgradient.vercel.app/",
    githubUrl: "https://github.com/Sloane-J/Grain-Gradient",
    images: [
      "https://picsum.photos/400/300?random=7",
      "https://picsum.photos/400/300?random=8",
      "https://picsum.photos/400/300?random=9",
      "https://picsum.photos/400/300?random=10",
      "https://picsum.photos/400/300?random=11",
      "https://picsum.photos/400/300?random=12",
    ],
  },
  {
    title: "Q-Vault",
    description: "Q-Vault is a web-based platform designed to streamline the examination process for educational institutions. It offers a comprehensive suite of tools for administrators, educators, and students, aiming to enhance efficiency, security, and user experience.",
    tags: ["Laravel", "Tailwind CSS", "Livewire"],
    liveUrl: "#",
    githubUrl: "https://github.com/Q-Vault",
    images: [
      "https://picsum.photos/400/300?random=13",
      "https://picsum.photos/400/300?random=14",
      "https://picsum.photos/400/300?random=15",
      "https://picsum.photos/400/300?random=16",
      "https://picsum.photos/400/300?random=17",
      "https://picsum.photos/400/300?random=18",
    ],
  },
  {
    title: "Peer Tech Konnect",
    description: "Peer Tech Konnect is a web based Learning Management System (LMS) designed to connect students, tutors, and administrators in a unified education environment. It offers user authentication, course enrollment, tutor approvals, discussions, assignments, quizzes, grading, analytics, and real-time email notifications. With dashboards tailored for each role and tools for progress tracking and communication, the system streamlines digital learning from enrollment to certification.",
    tags: ["PHP", "HTML", "Bootstrap", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/LMS",
    images: [
      "https://picsum.photos/400/300?random=19",
      "https://picsum.photos/400/300?random=20",
      "https://picsum.photos/400/300?random=21",
      "https://picsum.photos/400/300?random=22",
      "https://picsum.photos/400/300?random=23",
      "https://picsum.photos/400/300?random=24",
    ],
  },
];

const ImageSlider = ({ images, projectTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  React.useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images.length, isPaused]);

  return (
    <div className="relative w-full h-full max-h-96 lg:max-h-none rounded-xl sm:rounded-2xl overflow-hidden group">
      {/* Image container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 group-hover:opacity-0 transition-opacity"></div>
            <img
              src={image}
              alt={`${projectTitle} screenshot ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Pause/Play Button */}
      <button
        type="button"
        className="absolute bottom-5 right-5 z-20 rounded-full text-white/80 opacity-50 transition hover:opacity-80 focus-visible:opacity-80 bg-black/30 p-2"
        aria-label="pause slideshow"
        onClick={() => setIsPaused(!isPaused)}
      >
        {isPaused ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5-2.25A.75.75 0 0 1 7.75 7h.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-4.5Zm4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-4.5Z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 px-2 py-1">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Reflection effect - hidden on small screens for performance */}
      <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent blur-sm transform scale-y-[-1] opacity-50"></div>
    </div>
  );
};

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
    id="projects"
      ref={ref}
      style={{ y }}
      className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-2 sm:px-4 bg=[#080807]"
    >
      <motion.div 
        style={{ opacity, scale }}
        className="w-full lg:w-[95%] xl:w-[90%] h-[90vh] sm:h-[85vh] mx-auto bg-gradient-to-br from-[#080807] to-[#252525] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
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
            
            <p className="text-sm sm:text-base lg:text-xl text-[#D1D1C7] leading-relaxed max-w-2xl mx-auto lg:mx-0">
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
          
          {/* Image Slider Section */}
          <div className="w-full lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-full flex items-center order-first lg:order-last">
            <ImageSlider images={project.images} projectTitle={project.title} />
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