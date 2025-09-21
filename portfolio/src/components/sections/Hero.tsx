"use client";
import React, { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  staggerFrom?: "first" | "last";
  initial?: any;
  animate?: any;
  exit?: any;
  staggerDuration?: number;
  splitLevelClassName?: string;
  transition?: any;
  rotationInterval?: number;
}

function RotatingText({
  texts,
  mainClassName = "",
  staggerFrom = "last",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
  staggerDuration = 0.025,
  splitLevelClassName = "",
  transition = { type: "spring", damping: 30, stiffness: 400 },
  rotationInterval = 2000,
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval, shouldReduceMotion]);

  const currentText = texts[currentIndex];
  const letters = currentText.split("");

  return (
    <div className={mainClassName}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="flex"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {letters.map((letter, index) => {
            const delay =
              staggerFrom === "last"
                ? (letters.length - 1 - index) * staggerDuration
                : index * staggerDuration;

            return (
              <div
                key={`${currentIndex}-${index}`}
                className={splitLevelClassName}
              >
                <motion.span
                  initial={shouldReduceMotion ? {} : initial}
                  animate={shouldReduceMotion ? {} : animate}
                  exit={shouldReduceMotion ? {} : exit}
                  transition={
                    shouldReduceMotion
                      ? {}
                      : {
                          ...transition,
                          delay,
                        }
                  }
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: shouldReduceMotion ? "none" : "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0C0E0C]"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-block mb-8 px-4 py-2 bg-[#171717] rounded-full border border-gray-600/30">
                <span className="flex items-center gap-1 text-sm bg-gradient-to-r from-white to-grey-200 bg-clip-text text-transparent font-medium">
                  Available for new projects
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-rocket"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                    <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                    <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                </span>
              </div>

              <h1
                id="hero-heading"
                className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8"
              >
                Hi, I am Samuel
              </h1>

              <div className="text-center lg:text-left mb-8">
                <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-300 leading-relaxed">
                  Full Stack Developer Crafting
                </p>
                <div className="mt-4 inline-flex">
                  <RotatingText
                    texts={[
                      "Scalable Apps",
                      "Modern Websites",
                      "User Experiences",
                      "Digital Solutions",
                    ]}
                    mainClassName="px-5 py-2.5 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full shadow-md font-semibold text-lg md:text-xl"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.03}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    rotationInterval={3000}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              {/* Primary Button */}
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 px-5 py-2.5 text-sm md:text-base font-medium text-white shadow-md transition-all duration-300 hover:from-orange-500 hover:to-orange-600 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                aria-label="Contact Samuel to build a project"
              >
                <span className="font-inter">Take The First Step</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                  />
                </svg>
              </motion.a>

              {/* Secondary Button */}
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full border border-gray-700 bg-black/40 px-5 py-2.5 text-sm md:text-base font-medium text-gray-300 backdrop-blur-md transition-all duration-300 hover:bg-black/60 hover:text-white hover:border-gray-500 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-500/50"
                whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                aria-label="Explore Samuel's projects"
              >
                <span className="font-inter">Explore My Work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative group">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-[#171717] ring-offset-4 ring-offset-[#0C0E0C] transition-all duration-300 group-hover:ring-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Samuel - Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-600 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
