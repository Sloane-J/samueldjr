"use client";
import React, { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { PhoneIncoming, ArrowDown } from "lucide-react";

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  rotationInterval?: number;
}

function RotatingText({
  texts,
  mainClassName = "",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
    exit: { opacity: 0 },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        className={`flex ${mainClassName}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {currentText.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            transition={{ duration: 0.3 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
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
      className="min-h-screen flex items-center bg-[#080807] relative"
      aria-labelledby="hero-heading"
    >
      {/* Logo Top-Left */}
      <div className="absolute top-4 left-4 lg:top-6 lg:left-6 flex items-center gap-2">
        <img
          src="/images/Profile-Pic.jpg"
          alt="Logo"
          className="w-10 h-10 lg:w-11 lg:h-11 object-contain rounded-full"
        />
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl lg:text-4xl font-bold mb-0 bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
            SDJ
          </h3>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-8 lg:space-y-12 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              {/* Available badge - hidden on mobile */}
              <div className="hidden lg:inline-block mb-8 px-4 py-2 bg-[#171717] rounded-full border border-gray-600/30">
                <span className="flex items-center gap-1 text-sm text-white font-medium">
                  Available for new projects
                </span>
              </div>

              <h1
                id="hero-heading"
                className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 lg:mb-8"
              >
                Hi, I am Samuel
              </h1>

              {/* Full Stack Dev + Rotating Text INLINE */}
              <div className="mb-6 lg:mb-8">
                <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-2">
                  <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-300">
                    Full Stack Developer Crafting
                  </span>
                  <RotatingText
                    texts={[
                      "Scalable Apps",
                      "Modern Websites",
                      "User Experiences",
                      "Digital Solutions",
                    ]}
                    mainClassName="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-orange-500 drop-shadow-[0_2px_6px_rgba(234,88,12,0.6)]"
                    rotationInterval={3000}
                  />
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 lg:gap-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-700
                           px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5
                           text-sm md:text-base font-medium text-white shadow-md
                           transition-all duration-300
                           hover:from-orange-500 hover:to-orange-600 hover:shadow-lg hover:-translate-y-0.5
                           focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              >
                <span className="font-inter">Take The First Step</span>
                <PhoneIncoming className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>

              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 lg:gap-3 rounded-full border border-gray-700 bg-black/40
                           px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5
                           text-sm md:text-base font-medium text-gray-300 backdrop-blur-md
                           transition-all duration-300
                           hover:bg-black/60 hover:text-white hover:border-gray-500 hover:-translate-y-0.5
                           focus:outline-none focus:ring-2 focus:ring-gray-500/50"
                whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              >
                <span className="font-inter">Explore My Work</span>
                <ArrowDown className="w-4 h-4 md:w-5 md:h-5" />
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
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-[#171717] ring-offset-4 ring-offset-[#0C0E0C] transition-all duration-300 group-hover:ring-gray-600">
                <img
                  src="/images/Profile-Pic.jpg"
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
