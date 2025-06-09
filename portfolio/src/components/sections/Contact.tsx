"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, ArrowRight, Clock, Calendar, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactCard() {
  const [isHovering, setIsHovering] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://cal.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Track scroll position for parallax effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up on unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to open Cal.com popup
  const openCalPopup = () => {
    // Make sure Cal is loaded
    if (typeof window.Cal !== 'undefined') {
      Cal("init", {
        calLink: "sloane-jnr/project-discussion",
        config: {
          layout: "month_view",
          theme: "dark"
        }
      });
      Cal("ui", {
        styles: { branding: { brandColor: "#3B82F6" } },
        hideEventTypeDetails: false,
      });
      Cal("open");
    } else {
      console.log("Cal.com embed script not loaded yet");
      // Fallback to direct link if script fails to load
      window.open("https://cal.com/sloane-jnr/project-discussion", "_blank");
    }
  };

  // Staggered text animation for heading
  const headingWords = "Looking For That Unfair Advantage?".split(" ");
  
  // Background shapes animation
  const shapes = [
    { size: 100, x: -250, y: -150, delay: 0.1, rotation: 25 },
    { size: 80, x: 250, y: -100, delay: 0.3, rotation: -15 },
    { size: 60, x: -200, y: 150, delay: 0.5, rotation: 10 },
    { size: 120, x: 200, y: 200, delay: 0.7, rotation: -20 }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 flex items-center justify-center relative overflow-hidden bg-[#1a1a1a] text-[#D1D1C7]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="px-4 md:px-8 lg:p-20 max-w-7xl w-full mx-auto text-center flex flex-col items-center justify-center min-h-[70vh] md:min-h-[80vh] relative"
      >
        {/* Animated background shapes */}
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.05, 
              scale: 1,
              x: hasScrolled ? shape.x / 2 : shape.x,
              y: hasScrolled ? shape.y / 2 : shape.y,
              rotate: shape.rotation
            }}
            transition={{ 
              delay: shape.delay, 
              duration: 0.8, 
              ease: "easeOut",
              opacity: { duration: 1.2 }
            }}
            className="absolute rounded-full bg-blue-500 hidden md:block"
            style={{ width: shape.size, height: shape.size }}
          />
        ))}

        {/* Heading with word-by-word animation */}
        <div className="mb-6 md:mb-8 overflow-hidden">
          <motion.div 
            initial={{ y: 20 }} 
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4"
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + 0.3,
                  ease: "easeOut"
                }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-300 text-md max-w-4xl mb-10 md:mb-14 px-4"
>
          Let's Make It Happen!
        </motion.p>
        
        {/* Features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14 w-full max-w-4xl"
        >
          {[
            { icon: Calendar, text: "Pick Your Appointment Date" },
            { icon: Clock, text: "At Your Own Time" },
            { icon: MessageSquare, text: "Let's Discuss Your Needs" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
              className="flex flex-col items-center p-4"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-blue-500/10 p-3 md:p-4 rounded-xl mb-3"
              >
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
              </motion.div>
              <p className="text-gray-300 text-base md:text-lg text-center">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Redesigned Cal.com popup button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: 1.2,
            type: "spring",
            stiffness: 200
          }}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          className="relative w-full max-w-sm md:max-w-md"
        >
          <motion.button
            onClick={openCalPopup}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 md:py-6 px-6 md:px-8 rounded-full font-bold flex items-center justify-center gap-3 md:gap-4 text-lg md:text-2xl lg:text-3xl transition-all duration-300 shadow-2xl bg-blue-500 hover:bg-blue-600 text-white group relative overflow-hidden"
          >
            {/* Background shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
              initial={{ x: '-100%' }}
              animate={{ x: isHovering ? '200%' : '-100%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            
            <motion.div
              animate={{ rotate: isHovering ? 15 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <PhoneCall className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </motion.div>
            
            <span className="relative z-10">Book a Call</span>
            
            <motion.div
              initial={{ x: -5, opacity: 0 }}
              animate={{ 
                x: isHovering ? 0 : -5, 
                opacity: isHovering ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          </motion.button>
          
          
          {/* Enhanced pulsing effect */}
          <AnimatePresence>
            {isHovering && (
              <>
                <motion.div
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1.1, opacity: 0.2 }}
                  exit={{ scale: 1.2, opacity: 0 }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 bg-blue-500 rounded-full pointer-events-none"
                  style={{ zIndex: -1 }}
                />
                <motion.div
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: 0.1 }}
                  exit={{ scale: 1.3, opacity: 0 }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeOut",
                    delay: 0.3
                  }}
                  className="absolute inset-0 bg-blue-500 rounded-full pointer-events-none"
                  style={{ zIndex: -2 }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}