"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Sloane-J" },
    { icon: Twitter, href: "https://twitter.com/sloanejnr" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/samueldorkey9a88901bb/" },
    { icon: Mail, href: "mailto:samueldorkeyjr@gmail.com" },
  ]

  return (
    <footer className="bg-[#080807] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-2">SDJ</h3>
              <p className="text-gray-400">Building digital experiences</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-6 mt-6 md:mt-0"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Samuel D. Jr. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

