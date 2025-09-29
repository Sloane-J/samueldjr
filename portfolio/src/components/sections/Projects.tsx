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

const ImageSlider = ({ images, projectTitle, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handleImageLoad = useCallback((index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <button
            onClick={goToNext}
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
              onClick={() => setCurrentIndex(index)}
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
    sectionProgress >= cardStart - 0.05 && sectionProgress < cardEnd + 0.05;

  const localProgress = Math.max(
    0,
    Math.min(1, (sectionProgress - cardStart) / (cardEnd - cardStart))
  );

  // Improved opacity and blur logic - blur removes faster
  let opacity = 0;
  let scale = 0.95;
  let blur = 0;

  if (sectionProgress < cardStart) {
    opacity = 0;
    scale = 0.95;
    blur = 0;
  } else if (
    sectionProgress >= cardStart &&
    sectionProgress < cardStart + 0.03
  ) {
    // Quick fade in (first 3%)
    const fadeInProgress = (sectionProgress - cardStart) / 0.03;
    opacity = fadeInProgress;
    scale = 0.95 + fadeInProgress * 0.05;
    blur = 0; // No blur during fade in
  } else if (
    sectionProgress >= cardStart + 0.03 &&
    sectionProgress < cardEnd - 0.15
  ) {
    // Fully visible phase (82% of card's section)
    opacity = 1;
    scale = 1;
    blur = 0;
  } else if (sectionProgress >= cardEnd - 0.15 && sectionProgress < cardEnd) {
    // Fade out phase (last 15%)
    const fadeOutProgress = (sectionProgress - (cardEnd - 0.15)) / 0.15;
    opacity = 1 - fadeOutProgress;
    scale = 1 - fadeOutProgress * 0.05;
    blur = 0; // No blur during fade out either
  } else {
    opacity = 0;
    scale = 0.95;
    blur = 0;
  }

  const isActive =
    sectionProgress >= cardStart + 0.03 && sectionProgress < cardEnd - 0.15;

  // Text reveal animations
  const titleReveal = Math.max(0, Math.min(1, (localProgress - 0.02) * 3));
  const descReveal = Math.max(0, Math.min(1, (localProgress - 0.08) * 3));
  const tagsReveal = Math.max(0, Math.min(1, (localProgress - 0.14) * 3));
  const buttonsReveal = Math.max(0, Math.min(1, (localProgress - 0.2) * 3));

  // Calculate morphing number display
  const getMorphedNumber = () => {
    const currentNum = index + 1;
    const nextNum = index + 2 > allProjects.length ? 1 : index + 2;
    const prevNum = index === 0 ? allProjects.length : index;

    // During fade out, morph towards next number
    if (sectionProgress >= cardEnd - 0.15 && sectionProgress < cardEnd) {
      const morphProgress = (sectionProgress - (cardEnd - 0.15)) / 0.15;
      return {
        display: currentNum + morphProgress * (nextNum - currentNum),
        opacity: 1 - morphProgress * 0.3,
      };
    }
    // During fade in from previous, morph from previous number
    else if (
      sectionProgress >= cardStart &&
      sectionProgress < cardStart + 0.03
    ) {
      const morphProgress = (sectionProgress - cardStart) / 0.03;
      return {
        display: prevNum + morphProgress * (currentNum - prevNum),
        opacity: 0.7 + morphProgress * 0.3,
      };
    }

    return { display: currentNum, opacity: 1 };
  };

  const morphedNumber = getMorphedNumber();

  return (
    <div
      className="absolute inset-0 w-full h-full transition-all duration-300"
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        filter: `blur(${blur}px)`,
        zIndex: isInRange ? 10 : 1,
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      <div className="w-full h-full bg-[#080807] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 h-full flex items-center py-8 md:py-0">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center w-full">
            {/* Left Side - Content */}
            <div className="space-y-3 md:space-y-6">
              {/* Project Number - Morphing */}
              <div
                className="overflow-hidden"
                style={{
                  transform: `translateY(${(1 - titleReveal) * 50}px)`,
                  opacity: titleReveal * morphedNumber.opacity,
                }}
              >
                <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/10 leading-none block tabular-nums">
                  {String(Math.round(morphedNumber.display)).padStart(2, "0")}
                </span>
              </div>

              {/* Project Title */}
              <div
                className="overflow-hidden"
                style={{
                  transform: `translateY(${(1 - titleReveal) * 30}px)`,
                  opacity: titleReveal,
                }}
              >
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {project.title}
                </h2>
              </div>

              {/* Project Description - Hidden on mobile */}
              <div
                className="overflow-hidden hidden md:block"
                style={{
                  transform: `translateY(${(1 - descReveal) * 20}px)`,
                  opacity: descReveal,
                }}
              >
                <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div
                className="flex flex-wrap gap-1.5 md:gap-2"
                style={{
                  transform: `translateY(${(1 - tagsReveal) * 15}px)`,
                  opacity: tagsReveal,
                }}
              >
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
              <div
                className="flex flex-col sm:flex-row gap-2 md:gap-3"
                style={{
                  transform: `translateY(${(1 - buttonsReveal) * 10}px)`,
                  opacity: buttonsReveal,
                }}
              >
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
            <div
              className="relative h-[300px] md:h-[400px] lg:h-[500px]"
              style={{
                transform: `scale(${0.95 + titleReveal * 0.05})`,
                opacity: titleReveal,
              }}
            >
              <ImageSlider
                images={project.images}
                projectTitle={project.title}
                className="w-full h-full rounded-xl md:rounded-2xl"
              />
            </div>
          </div>
        </div>
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
      style={{ minHeight: `${projects.length * 250}vh` }}
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
