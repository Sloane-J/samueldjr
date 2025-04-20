"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { Menu } from "lucide-react"
import MobileNav from "./MobileNav"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-[#121212]/80 backdrop-blur-md" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <motion.a href="/" className="text-xl font-bold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              SDJ
            </motion.a>
            <ul className="hidden md:flex items-center gap-8">
              {["Home", "About", "Services", "Testimonials", "Contact"].map((item) => (
                <motion.li key={item} whileHover={{ y: -2 }}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
            <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMobileNavOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </motion.header>

      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </>
  )
}

