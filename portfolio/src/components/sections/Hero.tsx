"use client";
import React from "react";
import { motion } from "framer-motion";


// Custom Aurora Text component that applies effect directly to text
function CustomAuroraText({ children, className = "" }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10 bg-gradient-to-r from-red-300 via-pink-100 to-pink bg-clip-text text-transparent animate-pulse">
        {children}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-red-700 via-pink-200 to-pink-700 bg-clip-text text-transparent blur-sm animate-pulse opacity-90">
        {children}
      </span>
    </span>
  );
}

// Floating particles component
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-2 h-2 bg-gray-600 rounded-full opacity-60"
          initial={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
          }}
          animate={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

// Animated geometric shapes
function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Rotating circles */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 border-gray-700/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-24 h-24 border-2 border-gray-600/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating squares */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-8 h-8 bg-gray-700/30 rotate-45"
        animate={{
          y: [-20, 20, -20],
          rotate: [45, 90, 45]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-gray-600/30 rotate-45"
        animate={{
          y: [20, -20, 20],
          rotate: [45, -45, 45]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Pulsing dots */}
      <motion.div
        className="absolute top-1/2 left-20 w-4 h-4 bg-gray-500/50 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/4 right-1/3 w-3 h-3 bg-gray-600/50 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
    </div>
  );
}

// Animated grid background
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 opacity-10">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(75, 85, 99, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(75, 85, 99, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}

export default function Hero() {
  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Typing animation for subtitle
  const typingVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 1.5
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">

      {/* Animated background elements */}
      <AnimatedGrid />
      <FloatingParticles />
      <GeometricShapes />

      {/* Animated solid orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-700/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content with Stagger Animation */}
          <motion.div
            className="space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <motion.div
                className="inline-block mb-4 px-4 py-2 bg-[#232323] rounded-full border border-gray-600/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="text-sm bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent font-medium">
                  ✨ Available for new projects
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white">
                Hi, I'm <CustomAuroraText>Samuel</CustomAuroraText>
              </h1>
              <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-white">

                Creative Developer & Designer

              </h1>
            </motion.div>

            <motion.div
              className="relative overflow-hidden"
              variants={itemVariants}
            >
              <motion.div
                className="absolute inset-0 h-full"
                variants={typingVariants}
                initial="hidden"
                animate="visible"
              />
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl relative z-10">
                Transforming digital presence for growing brands and startups, I create premium, results-driven websites that give you an unfair advantage. My focus is on crafting compelling digital experiences with modern web technologies and innovative design.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-orange-700 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:bg-orange-600"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>BOOK A CALL</span>

                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                  </svg>
                </motion.div>
              </motion.a>

              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 border-2 border-gray-600/50 text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-[#232323] hover:border-gray-500 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(107, 114, 128, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image with Delayed Animation */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <div className="relative w-full max-w-md">
              {/* Multiple layered glow effects */}
              <motion.div
                className="absolute inset-0 bg-gray-800/40 blur-2xl rounded-full transform -translate-y-4"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gray-700/30 blur-xl rounded-full transform translate-x-2 translate-y-2"
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [5, -5, 5]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              {/* Floating hexagon around image */}
              <motion.div
                className="absolute inset-0 border-2 border-gray-600/30"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />




              {/* Orbiting elements around the image */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-gray-700 rounded-full shadow-lg"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{
                  transformOrigin: "150px 150px"
                }}
              />

              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-gray-600 rounded-full shadow-lg"
                animate={{
                  rotate: -360,
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                style={{
                  transformOrigin: "-150px -150px"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-gray-800/10"
            animate={{
              backgroundColor: [
                "rgba(55, 65, 81, 0.1)",
                "rgba(75, 85, 99, 0.1)",
                "rgba(55, 65, 81, 0.1)"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}