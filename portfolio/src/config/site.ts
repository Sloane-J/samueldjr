export const siteConfig = {
    name: "Portfolio",
    description: "A modern portfolio built with Astro and React",
    url: "https://portfolio.dev",
    ogImage: "https://portfolio.dev/og.jpg",
    links: {
      twitter: "https://twitter.com/username",
      github: "https://github.com/username",
      linkedin: "https://www.linkedin.com/in/samueldorkey9a88901bb/",
    },
    creator: {
      name: "Samuel Dorket",
      role: "Full Stack Developer",
      location: "Ghana",
      availability: "Open to opportunities",
      email: "samueldorkeyjr@gmail.com",
    },
    metadata: {
      keywords: ["Full Stack Developer", "Web Development", "React", "PHP", "TypeScript", "Wireframe", "Laravel"],
      themeColor: "#121212",
    },
    navigation: {
      main: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
      ],
      social: [
        {
          name: "GitHub",
          href: "https://github.com/Sloane-J",
          icon: "Github",
        },
        {
          name: "Twitter",
          href: "https://twitter.com/@sloanejnr",
          icon: "Twitter",
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/samueldorkey9a88901bb",
          icon: "Linkedin",
        },
      ],
    },
    theme: {
      colors: {
        primary: {
          background: "#121212",
          foreground: "#FFFFFF",
        },
        secondary: {
          background: "#1A1A1A",
          foreground: "#E5E5E5",
        },
        accent: {
          default: "#FFD700",
          hover: "#FFC700",
        },
        muted: {
          background: "#2A2A2A",
          foreground: "#A3A3A3",
        },
      },
      fonts: {
        heading: "Inter, sans-serif",
        body: "Inter, sans-serif",
        mono: "JetBrains Mono, monospace",
      },
      spacing: {
        container: {
          default: "max-w-7xl",
          sm: "max-w-5xl",
          lg: "max-w-8xl",
        },
        section: {
          sm: "py-12",
          default: "py-20",
          lg: "py-32",
        },
      },
      animation: {
        duration: {
          fast: 0.2,
          default: 0.3,
          slow: 0.5,
        },
        timing: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
    features: {
      darkMode: true,
      analytics: true,
      searchEnabled: false,
      newsletterEnabled: false,
    },
  }
  
  export type SiteConfig = typeof siteConfig
  
  