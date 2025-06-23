# ImLJS Personal Website

A modern, over-engineered personal portfolio website built with the T3 Stack. This site serves as both a showcase of my work and a playground for experimenting with new web technologies.

## 🚀 Features

- **Modern Design System** - Custom UI components with dark/light theme support
- **Responsive Layout** - Mobile-first design with desktop optimizations
- **Smooth Animations** - Framer Motion powered interactions and transitions
- **Optimized Performance** - Next.js 14 with App Router for lightning-fast loading
- **Type Safety** - End-to-end TypeScript for robust development
- **Accessible** - Built with accessibility best practices in mind

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org) with App Router
- **Styling:** [Tailwind CSS](https://tailwindcss.com) + [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)
- **UI Components:** Custom components with [Radix UI](https://radix-ui.com) primitives
- **Animations:** [Motion](https://motion.dev)
- **State Management:** [Jotai](https://jotai.org)
- **Typography:** [Geist Sans & Mono](https://vercel.com/font)
- **Icons:** Custom SVG icon system
- **Deployment:** [Vercel](https://vercel.com)

## 🏗️ Project Structure

```
src/
├── app/                    # App Router pages
├── components/
│   ├── common/            # Shared components (Header, Footer, etc.)
│   ├── home/              # Homepage specific components
│   ├── about/             # Aboutpage specific components
│   ├── projects/          # Projectspage specific components
│   ├── providers/         # Providers
│   ├── layouts/           # Layout components
│   └── ui/                # Reusable UI primitives
├── data/                  # Static data and content
├── lib/                   # Utilities and configurations
├── server/                # DB related Files
└── styles/                # Global styles and CSS
```

## 🎨 Design Philosophy

This website is intentionally over-engineered to serve as:
- A testing ground for new technologies and patterns
- A showcase of modern web development practices
- A demonstration of attention to detail and craft

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/imljs/web.git
   cd web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 🎯 Key Components

- **Responsive Navigation** - Desktop and mobile navigation with smooth animations
- **Hero Section** - Animated profile picture with custom SVG graphics
- **Mobile Menu** - Slide-down mobile navigation with backdrop blur
- **Sticky Layouts** - Smart sticky positioning for enhanced UX
- **Custom Scrollbars** - Styled scrollbars for WebKit and Firefox browsers

## 🔧 Customization

The design system is built with CSS custom properties and Tailwind CSS, making it easy to customize:

- **Colors:** Update the theme in `tailwind.config.js`
- **Typography:** Modify font stacks in the layout components
- **Animations:** Adjust Framer Motion configurations in component files
- **Layout:** Update grid systems and spacing in layout components

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push to main

For other platforms, follow the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal website, I welcome feedback and suggestions! Feel free to:

- Open an issue for bugs or feature requests
- Submit a pull request for improvements
- Share your thoughts on the design and implementation

---

*Built with ❤️ and probably too much caffeine.*