# ImLJS Personal Website

A modern, full-stack personal portfolio website built with the T3 Stack and enhanced with comprehensive gallery management. This site serves as both a showcase of my work and a playground for experimenting with cutting-edge web technologies.

## 🚀 Features

- **Modern Design System** - Custom UI components with dark/light theme support
- **Gallery Management** - Full-featured image gallery with upload, preview, and admin controls
- **Authentication System** - Secure auth with role-based access control
- **File Storage** - Appwrite integration for scalable image storage
- **Database Management** - Type-safe database operations with Drizzle ORM
- **Admin Dashboard** - Protected admin routes for content management
- **Responsive Layout** - Mobile-first design with desktop optimizations
- **Smooth Animations** - Framer Motion powered interactions and transitions
- **Optimized Performance** - Next.js 15 with App Router and Turbo for lightning-fast loading
- **Type Safety** - End-to-end TypeScript for robust development
- **Accessible** - Built with accessibility best practices in mind

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org) with App Router & Turbo
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) + Custom Design System
- **UI Components:** [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://radix-ui.com) primitives
- **Animations:** [Motion](https://motion.dev) (Framer Motion successor)
- **State Management:** [TanStack Query](https://tanstack.com/query) + [Jotai](https://jotai.org)
- **Forms:** [TanStack Form](https://tanstack.com/form)
- **Tables:** [TanStack Table](https://tanstack.com/table) for data grids
- **Typography:** [Geist Sans & Mono](https://vercel.com/font)
- **Icons:** [Lucide React](https://lucide.dev) + [Developer Icons](https://developer-icons.dev)

### Backend
- **API:** [tRPC](https://trpc.io) for type-safe APIs
- **Database:** [PostgreSQL](https://postgresql.org) with [Drizzle ORM](https://orm.drizzle.team)
- **Authentication:** [Better Auth](https://better-auth.com) with GitHub OAuth
- **File Storage:** [Appwrite](https://appwrite.io) for image management
- **Validation:** [Zod](https://zod.dev) for runtime type validation

### Tools & Infrastructure
- **Package Manager:** [Bun](https://bun.sh)
- **Linting:** [Biome](https://biomejs.dev) for fast linting and formatting
- **Type Checking:** [TypeScript](https://typescriptlang.org)
- **Database Tools:** [Drizzle Kit](https://orm.drizzle.team/kit-docs/overview) for migrations
- **Deployment:** [Vercel](https://vercel.com) with Speed Insights

## 🏗️ Project Structure

```
src/
├── app/                    # App Router pages and API routes
│   ├── (admin)/           # Protected admin routes
│   ├── (auth)/            # Authentication pages
│   ├── (root)/            # Public pages
│   └── api/               # API endpoints
├── components/
│   ├── features/          # Feature-specific components
│   │   ├── auth/          # Authentication components
│   │   ├── gallery/       # Gallery management
│   │   └── navigation/    # Navigation components
│   ├── forms/             # Form components and utilities
│   ├── layout/            # Layout components
│   ├── pages/             # Page-specific components
│   ├── shared/            # Shared/common components
│   └── ui/                # Reusable UI primitives
├── data/                  # Static data and content
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and configurations
├── server/                # Server-side code
│   ├── api/               # tRPC routers
│   ├── auth/              # Authentication config
│   └── db/                # Database schemas and utilities
├── styles/                # Global styles and CSS
├── trpc/                  # tRPC client configuration
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## 🎨 Design Philosophy

This website is intentionally over-engineered to serve as:
- A testing ground for new technologies and patterns
- A showcase of modern web development practices
- A demonstration of attention to detail and craft
- A full-stack application with real-world features

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or [Bun](https://bun.sh) (recommended)
- PostgreSQL database
- Appwrite account for file storage
- GitHub OAuth app for authentication

### Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/imljs/web.git
   cd web
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Set up the database**
   ```bash
   bun run db:push
   ```

5. **Start the development server**
   ```bash
   bun dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `bun dev` - Start development server with Turbo
- `bun build` - Build for production  
- `bun start` - Start production server
- `bun run preview` - Build and preview production locally
- `bun run check` - Run Biome linter and formatter
- `bun run check:write` - Fix linting issues automatically
- `bun run check:unsafe` - Fix with unsafe transformations
- `bun run typecheck` - Run TypeScript compiler
- `bun run db:generate` - Generate database migrations
- `bun run db:migrate` - Run database migrations
- `bun run db:push` - Push database schema changes
- `bun run db:studio` - Open Drizzle Studio

## 🎯 Key Features

### Gallery Management
- **File Upload** - Multi-file upload with drag-and-drop support via React Dropzone
- **Image Processing** - Automatic dimension detection and optimization
- **Admin Controls** - Protected routes for gallery management
- **Data Tables** - Advanced sortable and filterable tables with TanStack Table
- **File Downloads** - Direct download functionality with Appwrite integration
- **Lazy Loading** - Optimized image loading with intersection observer

### Authentication System
- **Role-based Access** - Admin and user role separation
- **Protected Routes** - Server-side route protection
- **Session Management** - Persistent login sessions

### Database Features
- **Type-safe Queries** - End-to-end type safety with tRPC and Drizzle ORM
- **Schema Management** - Version-controlled database schemas with Drizzle Kit
- **Data Validation** - Runtime validation with Zod schemas
- **Database Studio** - Visual database management with Drizzle Studio

## 🔧 Customization

The design system is built with CSS custom properties and Tailwind CSS:

- **Colors:** Update the theme in `src/styles/theme.css`
- **Typography:** Modify font configurations in layout components
- **Components:** Extend the shadcn/ui component library
- **Animations:** Adjust Framer Motion configurations
- **Database:** Modify schemas in `src/server/db/schema/`

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. **Prepare for deployment**
   ```bash
   bun run build
   ```

2. **Deploy to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Configure environment variables in Vercel dashboard
   - Deploy automatically on every push to main

3. **Environment Variables on Vercel**
   Add all the environment variables from your `.env.local` to your Vercel project settings.

For other platforms, follow the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## 🙏 Acknowledgments

- [T3 Stack](https://create.t3.gg/) for the excellent full-stack template
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Vercel](https://vercel.com/) for seamless deployment
- The open-source community for incredible tools and libraries

---

*Built with ❤️, too much caffeine, and probably over-engineered for fun.*