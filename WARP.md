# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Commands

### Development
```bash
# Start development server with Turbopack
npm run dev
# or
bun dev
```

### Building and Production
```bash
# Build the application
npm run build

# Start production server  
npm run start
```

### Code Quality
```bash
# Run ESLint
npm run lint
```

### Package Management
This project uses both npm and bun. The `bun.lock` file indicates bun is the preferred package manager:
```bash
# Install dependencies
bun install

# Add new packages
bun add [package-name]

# Add dev dependencies
bun add -d [package-name]
```

## Project Architecture

### Technology Stack
- **Framework**: Next.js 15.3.5 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **UI Components**: Extensive use of Radix UI primitives
- **Animation**: Framer Motion for animations and interactions
- **3D Graphics**: Three.js with React Three Fiber for 3D elements
- **Database**: Drizzle ORM with libSQL client
- **Authentication**: Better Auth
- **Forms**: React Hook Form with Zod validation

### Key Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with ErrorReporter and VisualEditsMessenger
│   ├── page.tsx           # Main homepage with section components
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page section components (header, hero, footer, etc.)
│   └── ui/               # shadcn/ui component library
├── hooks/                 # Custom React hooks
├── lib/
│   └── utils.ts          # Utility functions (cn for class merging)
└── visual-edits/         # Visual editing system components
```

### Component Architecture
The homepage (`src/app/page.tsx`) follows a section-based architecture:
- Each major page section is a separate component in `src/components/sections/`
- Sections include: Header, HeroBanner, ProductCarousel, ShopByColor, SpotlightSale, ComfortLayering, UniformMarketplace, CustomerGallery, MainContentDescription, PromotionalCards, Footer, EmailSignupModal

### Visual Editing System
This project includes a sophisticated visual editing system:
- **VisualEditsMessenger**: Handles real-time visual editing capabilities
- **ErrorReporter**: Manages error reporting and display in iframe contexts
- **Component Tagger Loader**: Custom webpack loader for visual editing metadata
- The system supports live text editing, style changes, and image updates
- Uses postMessage API for parent-child iframe communication

### Configuration Details
- **TypeScript**: Strict mode enabled with path aliases (`@/*` -> `./src/*`)
- **ESLint**: Next.js configuration with custom import rules
- **Turbopack**: Configured with custom loader for visual editing
- **shadcn/ui**: New York style, RSC enabled, Lucide icons, neutral base color

### Key Features
- **3D Elements**: Uses Three.js for interactive 3D components
- **Advanced Animations**: Framer Motion for complex animations
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Form Handling**: React Hook Form with Zod schemas
- **Image Optimization**: Next.js Image component with remote pattern support
- **Database Integration**: Drizzle ORM setup for data persistence
- **Authentication**: Better Auth integration for user management

### Development Notes
- The project uses Turbopack for faster development builds
- Visual editing system requires iframe context for full functionality
- Error reporting is optimized for development and iframe environments
- Component system is built around shadcn/ui design system
- Extensive use of Radix UI ensures accessibility compliance