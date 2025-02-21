"use client";
import React from "react";
import { motion } from "framer-motion";

// Custom Aurora Text component that applies effect directly to text
function CustomAuroraText({ children, className = "" }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-300 to-pink-700 bg-clip-text text-transparent animate-text-gradient">
        {children}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm animate-text-gradient opacity-70">
        {children}
      </span>
    </span>
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Creative Developer & <CustomAuroraText>Designer</CustomAuroraText>
              </h1>
            </motion.div>
            <motion.p
              className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl"
              variants={itemVariants}
            >
              Crafting digital experiences with modern web technologies and creative design solutions.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-block bg-orange-700 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Image with Delayed Animation */}
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }} // Delayed to appear after text animation completes
          >
            <div className="relative w-full max-w-md">
              {/* Glow effect behind mockup */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-2xl rounded-full transform -translate-y-4"></div>
              
              <img 
                src="/images/mobile-mockup.png" 
                alt="Mobile App Design Mockup" 
                className="relative z-10 w-full h-auto rounded-lg shadow-xl" 
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/300x600/2a2a2a/white?text=Mobile+Design";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Background Animation - kept from original */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
        </motion.div>
      </div>
    </section>
  );
}