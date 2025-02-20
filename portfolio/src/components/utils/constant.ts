// Navigation
export const NAV_LINKS = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]
  
  // Social Media Links
  export const SOCIAL_LINKS = [
    {
      platform: "GitHub",
      url: "https://github.com",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      icon: "Linkedin",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com",
      icon: "Twitter",
    },
  ]
  
  // Contact Information
  export const CONTACT_INFO = {
    email: "contact@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY, United States",
  }
  
  // Section Metadata
  export const SECTION_METADATA = {
    hero: {
      title: "Creative Developer & Designer",
      subtitle: "Crafting digital experiences with modern web technologies and creative design solutions.",
    },
    about: {
      title: "About Me",
      subtitle: "Passionate about creating beautiful and functional digital experiences",
    },
    services: {
      title: "Services",
      subtitle: "Comprehensive solutions for your digital needs",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Some of my recent work that showcases my skills and experience",
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "What clients say about my work",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's discuss your project and bring your ideas to life",
    },
  }
  
  // Theme Configuration
  export const THEME = {
    colors: {
      background: "#121212",
      card: "#1E1E1E",
      border: "#2A2A2A",
      primary: "#FFFFFF",
      muted: "#737373",
    },
    spacing: {
      section: {
        desktop: "py-20",
        mobile: "py-16",
      },
      container: {
        desktop: "px-4 max-w-7xl mx-auto",
        mobile: "px-4",
      },
    },
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  }
  
  // Animation Settings
  export const ANIMATION_SETTINGS = {
    duration: {
      fast: 0.2,
      normal: 0.5,
      slow: 0.8,
    },
    ease: [0.6, -0.05, 0.01, 0.99],
  }
  
  // Form Configuration
  export const FORM_CONFIG = {
    maxLength: {
      name: 50,
      email: 100,
      message: 1000,
    },
    validation: {
      name: {
        required: true,
        minLength: 2,
      },
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
      message: {
        required: true,
        minLength: 10,
      },
    },
  }
  
  