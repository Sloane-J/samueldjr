"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg">Let's discuss your project and bring your ideas to life</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#232323] rounded-lg p-6"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-[#2a2a2a] rounded-lg border border-gray-700 focus:outline-none focus:border-white transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-[#2a2a2a] rounded-lg border border-gray-700 focus:outline-none focus:border-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-[#2a2a2a] rounded-lg border border-gray-700 focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-[#121212] py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-[#232323] p-3 rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-gray-400">contact@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#232323] p-3 rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#232323] p-3 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-gray-400">New York, NY, United States</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

