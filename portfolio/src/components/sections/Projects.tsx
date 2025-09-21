import React, { useRef, useState, useCallback, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Affiliate Nexus",
    description:
      "Affiliate Nexus is a platform designed to empower individuals through personalized coaching in affiliate marketing and lifestyle optimization. It offers services such as affiliate marketing training, life coaching sessions, and self-paced online courses.",
    tags: [
      "React.js",
      "TypeScript",
      "Astro.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://affiliate-nexus.vercel.app/",
    githubUrl: "https://github.com/fairy-app",
    images: [
      { src: "/images/affiliate-nexus-1.png" },
      { src: "/images/affiliate-nexus-2.png" },
      { src: "/images/affiliate-nexus-3.png" },
      { src: "/images/affiliate-nexus-4.png" },
      { src: "/images/affiliate-nexus-5.png" },
    ],
  },
  {
    title: "Grain and Gradient",
    description:
      "Grain & Gradient is a modern digital publication offering a blend of insightful and entertaining content across various topics, including technology, current affairs, entertainment, and more. The website features a range of articles.",
    tags: [
      "React.js",
      "TypeScript",
      "Astro.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "http://grainandgradient.vercel.app/",
    githubUrl: "https://github.com/Sloane-J/Grain-Gradient",
    images: [
      { src: "/images/affiliate-nexus-1.png" },
      { src: "/images/affiliate-nexus-2.png" },
      { src: "/images/affiliate-nexus-3.png" },
      { src: "/images/affiliate-nexus-4.png" },
      { src: "/images/affiliate-nexus-5.png" },
    ],
  },
  {
    title: "Q-Vault",
    description:
      "Q-Vault is a web-based platform designed to streamline the examination process for educational institutions. It offers a comprehensive suite of tools for administrators, educators, and students, aiming to enhance efficiency, security, and user experience.",
    tags: ["Laravel", "Tailwind CSS", "Livewire"],
    liveUrl: "#",
    githubUrl: "https://github.com/Q-Vault",
    images: [
      { src: "/images/affiliate-nexus-1.png" },
      { src: "/images/affiliate-nexus-2.png" },
      { src: "/images/affiliate-nexus-3.png" },
      { src: "/images/affiliate-nexus-4.png" },
      { src: "/images/affiliate-nexus-5.png" },
    ],
  },
  {
    title: "Peer Tech Konnect",
    description:
      "Peer Tech Konnect is a web based Learning Management System (LMS) designed to connect students, tutors, and administrators in a unified education environment. It offers user authentication, course enrollment, tutor approvals, discussions, assignments, quizzes, grading, analytics, and real-time email notifications.",
    tags: ["PHP", "HTML", "Bootstrap", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/LMS",
    images: [
      { src: "/images/affiliate-nexus-1.png" },
      { src: "/images/affiliate-nexus-2.png" },
      { src: "/images/affiliate-nexus-3.png" },
      { src: "/images/affiliate-nexus-4.png" },
      { src: "/images/affiliate-nexus-5.png" },
    ],
  },
];

const ImageSlider = ({ images = [], projectTitle = "Project Section" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  const [imageError, setImageError] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Ensure we have at least one slide, use placeholder if empty
  const slides =
    images.length > 1
      ? images
      : [
          {
            src: "Nothing",
            alt: `${projectTitle} - No images available`,
          },
        ];

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [currentIndex, isTransitioning]
  );

  const handleImageLoad = useCallback((index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  }, []);

  const handleImageError = useCallback((index) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  }, []);

  return (
    <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden group">
      {/* Navigation buttons */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="absolute left-2 sm:left-4 top-1/2 z-30 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm p-2 text-white transition-all hover:bg-black/80 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50"
            aria-label="Previous slide"
            onClick={goToPrevious}
            disabled={isTransitioning}
          >
            <ChevronLeft
              className="w-4 h-4 sm:w-5 sm:h-5"
              strokeWidth={3}
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            className="absolute right-2 sm:right-4 top-1/2 z-30 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm p-2 text-white transition-all hover:bg-black/80 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50"
            aria-label="Next slide"
            onClick={goToNext}
            disabled={isTransitioning}
          >
            <ChevronRight
              className="w-4 h-4 sm:w-5 sm:h-5"
              strokeWidth={3}
              aria-hidden="true"
            />
          </button>
        </>
      )}

      {/* Image container with smooth transitions */}
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              {/* Loading spinner */}
              {!imageLoaded[index] && !imageError[index] && (
                <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center z-20">
                  <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
              )}

              {/* Main image */}
              <img
                src={image.src}
                alt={image.alt || `${projectTitle} screenshot ${index + 1}`}
                className="w-full h-full object-cover object-center"
                style={{
                  imageRendering: "crisp-edges",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
                loading={index === 0 ? "eager" : "lazy"}
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
              />

              {/* Error fallback */}
              {imageError[index] && (
                <div className="absolute inset-0 bg-gray-800/80 flex items-center justify-center z-20">
                  <div className="text-center text-white/80">
                    <div className="text-2xl mb-2">📷</div>
                    <p className="text-sm">Image failed to load</p>
                    <p className="text-xs text-gray-400 mt-1">{projectTitle}</p>
                  </div>
                </div>
              )}

              {/* Reduced gradient overlay for better image visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-2 px-3 py-2 bg-black/60 backdrop-blur-sm rounded-full">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "bg-white w-4 h-2"
                  : "bg-white/50 w-2 h-2 hover:bg-white/75"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Project = ({ project, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="sticky top-0 h-screen w-full overflow-hidden relative"
    >
      {/* Full screen background with improved image clarity */}
      <div className="absolute inset-0 z-0">
        <ImageSlider images={project.images} projectTitle={project.title} />
        {/* Reduced overlay darkness for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10"></div>
      </div>

      {/* Decorative elements - reduced opacity for less distraction */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-orange-400/15 to-orange-600/5 blur-3xl rounded-full z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-purple-600/5 blur-2xl rounded-full z-10 animate-pulse"></div>

      {/* Content overlay */}
      <div className="relative h-full z-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Project counter */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-2 px-4 bg-white/10 backdrop-blur-md text-sm rounded-full border border-white/20 mb-6"
            >
              Project {index + 1}/{projects.length}
            </motion.span>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 leading-tight mb-6"
            >
              {project.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mb-8"
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all border border-white/20 hover:border-white/40 text-lg font-medium min-w-[180px] hover:scale-105"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </a>
              {project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full hover:from-orange-500 hover:to-orange-300 transition-all text-lg font-medium min-w-[180px] shadow-lg hover:shadow-orange-500/25 hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </motion.section>
  );
};

const Projects = () => {
  // Dynamic height calculation
  const totalHeight = useMemo(() => {
    return 100 * (projects.length + 0.5);
  }, []);

  return (
    <div
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black relative"
      style={{
        height: `${totalHeight}vh`,
      }}
    >
      {projects.map((project, index) => (
        <Project
          key={`${project.title}-${index}`}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
};

export default Projects;
