import React, { useEffect, useRef, useState, useCallback } from "react";
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
    title: "Grain & Gradient",
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

const ImageSlider = ({ images, projectTitle, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  const autoPlayRef = useRef(null);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handleImageLoad = useCallback((index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (images.length > 1) {
      autoPlayRef.current = setInterval(() => {
        goToNext();
      }, 4000);

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
  }, [images.length, goToNext]);

  // Reset auto-play when manually navigating
  const handleManualNavigation = useCallback(
    (direction) => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }

      if (direction === "prev") {
        goToPrevious();
      } else {
        goToNext();
      }

      // Restart auto-play
      autoPlayRef.current = setInterval(() => {
        goToNext();
      }, 4000);
    },
    [goToPrevious, goToNext]
  );

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {images.length > 1 && (
        <>
          <button
            onClick={() => handleManualNavigation("prev")}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <button
            onClick={() => handleManualNavigation("next")}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </>
      )}

      <div className="w-full h-full overflow-hidden relative">
        <div
          className="flex w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              {!imageLoaded[index] && (
                <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center z-10">
                  <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={image.src}
                alt={image.alt || `${projectTitle} screenshot ${index + 1}`}
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 bg-black/40 backdrop-blur-sm rounded-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (autoPlayRef.current) {
                  clearInterval(autoPlayRef.current);
                }
                setCurrentIndex(index);
                autoPlayRef.current = setInterval(() => {
                  goToNext();
                }, 4000);
              }}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white w-4 h-1.5 md:w-6 md:h-2"
                  : "bg-white/50 hover:bg-white/75 w-1.5 h-1.5 md:w-2 md:h-2"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, index, sectionProgress, allProjects }) => {
  const cardStart = index / allProjects.length;
  const cardEnd = (index + 1) / allProjects.length;

  const isInRange =
    sectionProgress >= cardStart - 0.04 && sectionProgress < cardEnd + 0.04;

  // Calculate slide progress for vertical transitions
  const getSlideProgress = () => {
    const nextNum = index + 2 > allProjects.length ? 1 : index + 2;
    const prevNum = index === 0 ? allProjects.length : index;

    // During fade out phase
    if (sectionProgress >= cardEnd - 0.18 && sectionProgress < cardEnd) {
      const slideProgress = (sectionProgress - (cardEnd - 0.18)) / 0.18;
      return {
        currentTranslate: -slideProgress * 100, // Slide current up
        nextTranslate: (1 - slideProgress) * 100, // Slide next from below
        showNext: true,
        opacity: 1 - slideProgress,
        nextIndex: nextNum,
      };
    }
    // During fade in phase
    else if (
      sectionProgress >= cardStart &&
      sectionProgress < cardStart + 0.035
    ) {
      const slideProgress = (sectionProgress - cardStart) / 0.035;
      return {
        currentTranslate: (1 - slideProgress) * 100 - 100, // Slide current from below
        nextTranslate: -slideProgress * 100 - 100, // Slide previous up
        showNext: true,
        opacity: slideProgress,
        nextIndex: prevNum,
      };
    }
    // Fully visible
    else if (
      sectionProgress >= cardStart + 0.035 &&
      sectionProgress < cardEnd - 0.18
    ) {
      return {
        currentTranslate: 0,
        nextTranslate: 100,
        showNext: false,
        opacity: 1,
        nextIndex: nextNum,
      };
    }

    return {
      currentTranslate: 0,
      nextTranslate: 100,
      showNext: false,
      opacity: 0,
      nextIndex: nextNum,
    };
  };

  const slideState = getSlideProgress();
  const isActive =
    sectionProgress >= cardStart + 0.035 && sectionProgress < cardEnd - 0.18;

  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        zIndex: isInRange ? 10 : 1,
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      <div className="w-full h-full bg-[#080807] overflow-hidden relative">
        {/* Current Card */}
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out"
          style={{
            transform: `translateY(${slideState.currentTranslate}%)`,
            opacity: slideState.opacity,
          }}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-12 h-full flex items-center py-8 md:py-0">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center w-full">
              {/* Left Side - Content */}
              <div className="space-y-3 md:space-y-6">
                {/* Project Number */}
                <div className="overflow-hidden">
                  <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/10 leading-none block tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Project Title */}
                <div className="overflow-hidden">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {project.title}
                  </h2>
                </div>

                {/* Project Description - Hidden on mobile */}
                <div className="overflow-hidden hidden md:block">
                  <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl font-inter">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 font-inter">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 font-inter">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all border border-white/20 text-white text-xs md:text-sm font-medium hover:scale-105 duration-300"
                  >
                    <Github className="w-3 h-3 md:w-4 md:h-4" />
                    <span>View Code</span>
                  </a>
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full hover:from-orange-500 hover:to-orange-300 transition-all text-white text-xs md:text-sm font-medium hover:scale-105 duration-300"
                    >
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Side - Image Slider */}
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                <ImageSlider
                  images={project.images}
                  projectTitle={project.title}
                  className="w-full h-full rounded-xl md:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Next/Previous Card (shown during transition) */}
        {slideState.showNext && (
          <div
            className="absolute inset-0 transition-transform duration-500 ease-out"
            style={{
              transform: `translateY(${slideState.nextTranslate}%)`,
              opacity: 1 - slideState.opacity,
            }}
          >
            <div className="container mx-auto px-4 md:px-6 lg:px-12 h-full flex items-center py-8 md:py-0">
              <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center w-full">
                {/* Left Side - Content */}
                <div className="space-y-3 md:space-y-6">
                  {/* Project Number */}
                  <div className="overflow-hidden">
                    <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/10 leading-none block tabular-nums">
                      {String(slideState.nextIndex).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Project Title */}
                  <div className="overflow-hidden">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      {projects[slideState.nextIndex - 1]?.title}
                    </h2>
                  </div>

                  {/* Project Description - Hidden on mobile */}
                  <div className="overflow-hidden hidden md:block">
                    <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl font-inter">
                      {projects[slideState.nextIndex - 1]?.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 font-inter">
                    {projects[slideState.nextIndex - 1]?.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3 font-inter">
                    <a
                      href={projects[slideState.nextIndex - 1]?.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all border border-white/20 text-white text-xs md:text-sm font-medium hover:scale-105 duration-300"
                    >
                      <Github className="w-3 h-3 md:w-4 md:h-4" />
                      <span>View Code</span>
                    </a>
                    {projects[slideState.nextIndex - 1]?.liveUrl !== "#" && (
                      <a
                        href={projects[slideState.nextIndex - 1]?.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full hover:from-orange-500 hover:to-orange-300 transition-all text-white text-xs md:text-sm font-medium hover:scale-105 duration-300"
                      >
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Side - Image Slider */}
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                  <ImageSlider
                    images={projects[slideState.nextIndex - 1]?.images}
                    projectTitle={projects[slideState.nextIndex - 1]?.title}
                    className="w-full h-full rounded-xl md:rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [sectionProgress, setSectionProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (sectionTop > windowHeight || sectionTop + sectionHeight < 0) {
        return;
      }

      const scrolled = windowHeight - sectionTop;
      const scrollableHeight = sectionHeight + windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setSectionProgress(progress);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#080807] py-10 md:py-20"
      style={{ minHeight: `${projects.length * 220}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="relative w-full h-full">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
              index={index}
              sectionProgress={sectionProgress}
              allProjects={projects}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
