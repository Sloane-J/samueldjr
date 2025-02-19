# astro-portfolio-website

# Modern Portfolio Website

A modern, animated portfolio website built with Astro, React, Framer Motion, and Tailwind CSS. Features a dark theme design with smooth animations and optimal performance.

## 🚀 Tech Stack

- **Framework:** Astro v4.x
- **UI Library:** React v18.x
- **Styling:** 
  - Tailwind CSS v3.x
  - CSS Variables for theming
- **Animations:** Framer Motion v11.x
- **Icons:** Lucide React
- **Development:**
  - TypeScript
  - ESLint
  - Prettier
- **Performance:**
  - Astro Image Optimization
  - Partial Hydration
  - Lazy Loading

## 📁 Project Structure

portfolio/
├── src/
│   ├── components/
│   │   ├── react/           # Interactive React components
│   │   │   ├── navigation/  # Navigation components
│   │   │   ├── cards/       # Reusable card components
│   │   │   └── forms/       # Form components
│   │   └── astro/          # Static Astro components
│   ├── layouts/
│   │   └── Layout.astro    # Main layout component
│   ├── pages/
│   │   └── index.astro     # Home page
│   ├── styles/
│   │   ├── globals.css     # Global styles
│   │   └── theme.css       # Theme variables
│   ├── utils/              # Utility functions
│   ├── hooks/              # Custom React hooks
│   ├── animations/         # Framer Motion animations
│   └── types/              # TypeScript types
├── public/
│   ├── fonts/             # Custom fonts
│   └── images/            # Static images
└── astro.config.mjs       # Astro configuration


## 🎨 Design System

### Colors
- Background: Matte Black (`#121212`)
- Card Background: Light Matte Black (`#1E1E1E`)
- Accent: TBD
- Text: White/Gray scale

### Typography
- Headings: [Font TBD]
- Body: [Font TBD]
- Monospace: [Font TBD]

### Spacing System
Following Tailwind CSS spacing scale

## 📱 Sections & Features

### Hero Section
- Full-screen landing
- Animated text reveals
- Background subtle animation
- CTA button

### About Section
- Professional introduction
- Skills/technology stack
- Animated progress bars
- Personal image/avatar

### Services Section
- Service cards with hover effects
- Animated icons
- Description of each service
- CTA for each service

### Testimonials
- Client testimonials carousel
- Animated quote cards
- Client information
- Rating system

### Contact
- Contact form with validation
- Social media links
- Email integration
- Success/error states

## 🎭 Animation Guidelines

### Framer Motion Usage
- Entrance animations
- Scroll-triggered reveals
- Hover state animations
- Page transitions

### Performance Considerations
- Use `will-change` for heavy animations
- Implement lazy loading
- Respect user preferences
- Mobile optimization

## 🔧 Development Setup

1. Clone the repository:
\`\`\`bash
git clone [repository-url]
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start development server:
\`\`\`bash
npm run dev
\`\`\`

## 📦 Build & Deployment

### Build
\`\`\`bash
npm run build
\`\`\`

### Preview
\`\`\`bash
npm run preview
\`\`\`

### Deployment
- Configured for Vercel deployment
- Automatic deployments on push
- Environment variables setup required

## 🎯 Performance Goals

- Lighthouse Score: 90+ in all categories
- Core Web Vitals compliance
- First Contentful Paint < 1.2s
- Time to Interactive < 2.5s

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: 320px+
  - Tablet: 768px+
  - Desktop: 1024px+
  - Large Desktop: 1280px+

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Future Enhancements

- Blog integration
- Dark/Light theme toggle
- Portfolio filtering
- Multi-language support
- RSS feed
- Analytics integration

## 📄 License

MIT License - see LICENSE file for details

## 👥 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 🤝 Support

For support, email [samueldorkeyjr@gmail.com] or open an issue in the repository.

