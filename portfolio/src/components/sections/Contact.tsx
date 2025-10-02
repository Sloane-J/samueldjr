"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  ArrowRight,
  Clock,
  Calendar,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactCard() {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://cal.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Track mouse position for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Function to open Cal.com popup
  const openCalPopup = () => {
    if (typeof window.Cal !== "undefined") {
      Cal("init", {
        calLink: "sloane-jnr/project-discussion",
        config: {
          layout: "month_view",
          theme: "dark",
        },
      });
      Cal("ui", {
        styles: { branding: { brandColor: "#ea580c" } },
        hideEventTypeDetails: false,
      });
      Cal("open");
    } else {
      console.log("Cal.com embed script not loaded yet");
      window.open("https://cal.com/sloane-jnr/project-discussion", "_blank");
    }
  };

  // Staggered text animation for heading
  const headingWords = "Ready To Build Something Extraordinary?".split(" ");

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden bg-[#080807] "
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(234, 88, 12, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(234, 88, 12, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(234, 88, 12, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(234, 88, 12, 0.08) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 px-4 md:px-8 lg:px-20 max-w-7xl w-full mx-auto text-center flex flex-col items-center justify-center"
      >
        {/* Sparkle icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 200,
            delay: 0.2,
          }}
          className="mb-6"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center"
            >
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </motion.div>

            {/* Glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-orange-500 blur-xl -z-10"
            />
          </div>
        </motion.div>

        {/* Heading with word-by-word animation */}
        <div className="mb-6 md:mb-8 overflow-hidden">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08 + 0.3,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="text-3xl md:text-5xl lg:text-7xl font-bold text-white inline-block"
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 md:mb-16 px-4"
        >
          Let's turn your vision into reality. Schedule a call and let's discuss
          how we can work together.
        </motion.p>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 w-full max-w-4xl"
        >
          {[
            {
              icon: Calendar,
              text: "Choose Your Time",
              color: "from-orange-600 to-orange-500",
            },
            {
              icon: Clock,
              text: "30 Min Discussion",
              color: "from-orange-500 to-orange-400",
            },
            {
              icon: MessageSquare,
              text: "Share Your Vision",
              color: "from-orange-600 to-orange-500",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 1.1 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-orange-500/30 overflow-hidden">
                {/* Hover gradient effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, rgba(234, 88, 12, 0.1) 0%, transparent 100%)`,
                  }}
                />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`inline-flex bg-gradient-to-br ${item.color} p-4 rounded-xl mb-4 shadow-lg`}
                >
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </motion.div>
                <p className="text-gray-200 text-base md:text-lg font-medium relative z-10">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 1.4,
            type: "spring",
            stiffness: 150,
          }}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          className="relative w-full max-w-md"
        >
          <motion.button
            onClick={openCalPopup}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative w-full py-5 md:py-6 px-8 md:px-10 rounded-full font-bold flex items-center justify-center gap-4 text-xl md:text-2xl transition-all duration-300 bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-500 hover:to-orange-300 text-white group overflow-hidden shadow-2xl shadow-orange-500/20"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: "-200%" }}
              animate={{ x: isHovering ? "200%" : "-200%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            <motion.div
              animate={{ rotate: isHovering ? [0, -10, 10, -10, 0] : 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 relative z-10"
            >
              {/* Slightly smaller icon sizes */}
              <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" />
            </motion.div>

            <span className="relative z-10 font-semibold text-sm sm:text-base">
              Book Your Call Now
            </span>

            <motion.div
              animate={{
                x: isHovering ? [0, 5, 0] : 0,
              }}
              transition={{
                duration: 0.6,
                repeat: isHovering ? Infinity : 0,
                ease: "easeInOut",
              }}
              className="flex-shrink-0 relative z-10"
            >
              {/* Slightly smaller arrow icon */}
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" />
            </motion.div>

            {/* Button glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 blur-xl opacity-50"
              animate={{
                scale: isHovering ? [1, 1.2, 1] : 1,
                opacity: isHovering ? [0.5, 0.7, 0.5] : 0.5,
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ zIndex: -1 }}
            />
          </motion.button>

          {/* Pulsing rings */}
          <AnimatePresence>
            {isHovering && (
              <>
                {[0, 0.3, 0.6].map((delay, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 1.2 + index * 0.1, opacity: [0, 0.3, 0] }}
                    exit={{ scale: 1.4, opacity: 0 }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeOut",
                      delay: delay,
                    }}
                    className="absolute inset-0 border-2 border-orange-500 rounded-full pointer-events-none"
                    style={{ zIndex: -1 }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-8 text-gray-500 text-sm md:text-base"
        >
          No commitment required · Free consultation · Let's explore
          possibilities
        </motion.p>
      </motion.div>
    </section>
  );
}
