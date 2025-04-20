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
  const headingWords = "Let's Work Together".split(" ");
  
  // Background shapes animation
  const shapes = [
    { size: 100, x: -250, y: -150, delay: 0.1, rotation: 25 },
    { size: 80, x: 250, y: -100, delay: 0.3, rotation: -15 },
    { size: 60, x: -200, y: 150, delay: 0.5, rotation: 10 },
    { size: 120, x: 200, y: 200, delay: 0.7, rotation: -20 }
  ];

  return (
    <section id="contact" className="py-20 flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="p-20 max-w-7xl w-full mx-auto text-center flex flex-col items-center justify-center min-h-[80vh] relative"
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
            className="absolute rounded-full bg-blue-500"
            style={{ width: shape.size, height: shape.size }}
          />
        ))}

        {/* Heading with word-by-word animation */}
        <div className="mb-8 overflow-hidden">
          <motion.div 
            initial={{ y: 20 }} 
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
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
                className="text-6xl font-bold text-white inline-block"
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
          className="text-gray-300 text-3xl max-w-4xl mb-14"
        >
          Ready to take your project to the next level? Get in touch today and let's make something amazing together.
        </motion.p>
        
        {/* Features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 mb-14 w-full max-w-4xl"
        >
          {[
            { icon: Calendar, text: "Pick Your Appointment Date" },
            { icon: Clock, text: "At Your Own Time" },
            { icon: MessageSquare, text: "Discuss Your Needs" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
              className="flex flex-col items-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-blue-500/10 p-4 rounded-xl mb-3"
              >
                <item.icon className="w-8 h-8 text-blue-500" />
              </motion.div>
              <p className="text-gray-300 text-lg">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Cal.com popup button with enhanced animations */}
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
          className="relative"
        >
          <motion.button
            onClick={openCalPopup}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-80 py-6 rounded-xl font-bold flex items-center justify-center gap-4 text-3xl transition-all shadow-lg bg-blue-500 hover:bg-blue-600 text-white"
          >
            <PhoneCall className="w-10 h-10" /> 
            <span>Book a Call</span>
            <AnimatePresence>
              {isHovering && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-6"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          
          {/* Pulsing effect */}
          <AnimatePresence>
            {isHovering && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.15, opacity: 0.15 }}
                exit={{ scale: 1.3, opacity: 0 }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeOut"
                }}
                className="absolute inset-0 bg-blue-500 rounded-xl"
                style={{ zIndex: -1 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}