"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
}

function AuroraText({ children, className = "" }: AuroraTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-red-300 via-pink-300 to-pink-300 bg-clip-text text-transparent font-bold ${className}`}
    >
      {children}
      <span className="sr-only">{children}</span>
    </span>
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative text-white"
      style={{
        backgroundImage: "var(--background)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontSize: "var(--font-size)",
      }}
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 py-16 relative z-10 max-w-3xl text-center">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block mb-6 px-4 py-2 bg-[#232323] rounded border border-gray-600/50">
              <span className="text-sm bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent font-medium">
                ✨ Available for new projects
              </span>
            </div>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-soul-regular mb-4 leading-tight"
            >
              Hi, I'm <AuroraText>Samuel</AuroraText>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
              Full-Stack Web Developer Crafting Scalable, User-Centric Solutions
            </h2>
          </motion.div>

          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I build high-performance websites and applications for businesses and
            startups, blending modern front-end design with powerful back-end
            functionality to drive results.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-orange-700 text-white px-6 py-3 rounded font-medium shadow-md transition-colors duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              aria-label="Contact Samuel to build a project"
            >
              <span>Let’s Build Something Great</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
            </motion.a>

            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 border-2 border-gray-600/50 text-gray-300 px-6 py-3 rounded font-medium transition-colors duration-300 hover:bg-[#232323] hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              aria-label="Explore Samuel's projects"
            >
              Explore My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
