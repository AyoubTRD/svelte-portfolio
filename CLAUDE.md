# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

**Development & Building:**
```bash
pnpm run dev          # Start development server
pnpm run build        # Create production build  
pnpm run preview      # Preview production build
pnpm run check        # Run Svelte type checking
pnpm run check:watch  # Run type checking in watch mode
pnpm run lint         # Check code formatting and run ESLint
pnpm run format       # Auto-format code with Prettier
```

**Quality Assurance:**
Always run `pnpm run check` and `pnpm run build` after making changes to ensure TypeScript compliance and successful builds.

## Architecture Overview

### Tech Stack
- **SvelteKit** + **TypeScript** - Main framework with full type safety
- **TailwindCSS** - Utility-first styling with custom design system
- **Vite** - Build tool and dev server
- **pnpm** - Package manager (required - see package.json `packageManager` field)

### Component Organization
```
src/components/
├── home-sections/     # Page sections (Hero, About, Portfolio, etc.)
├── shared/           # Reusable UI components (Button, Typography, etc.)  
└── other/            # Specialized components (ProjectInfo)
```

**Key Pattern:** Many sections have paired components (e.g., `About.svelte` handles animations/layout, `AboutContent.svelte` handles content).

### Data Management
- **Static typed data** in `src/constants/` - All portfolio content lives here
- **Modular project structure** - Each project is a separate TypeScript file
- **Type definitions** in `src/constants/projects/project.ts`
- **Single store** for navigation state (`src/stores/navLinksStore.ts`)

### Styling System
- **Custom color palette:** Primary (yellow/orange), Secondary (dark gray), Neutral, Typography
- **Custom fonts:** Cabin (primary), Montserrat (secondary), DM Serif Display (titles)
- **Responsive design:** Mobile-first with lg: breakpoint for desktop features
- **Animation conventions:** Uses svelte-inview for scroll-triggered animations, custom keyframe animations in app.css

### Portfolio Projects
- **Responsive design patterns:** Mobile uses unified content boxes, desktop uses overlapping layouts
- **Image management:** Square aspect ratios, organized in `/static/projects/[project-id]/`
- **Rich content:** Projects support HTML descriptions, tech stacks, features, image galleries

### Routing & Navigation  
- **Single-page structure** with smooth scroll navigation to sections
- **Dynamic project routes** at `/projects/[projectId]` with proper 404 handling
- **Navigation state management** tracks active sections via intersection observer

### Development Patterns
- **TypeScript everywhere** - All data structures are strongly typed
- **Animation timing** - Staggered fade-ins with calculated delays  
- **Conditional layouts** - Different responsive behaviors for mobile vs desktop
- **Image optimization** - `disableImages` prop for development/performance

### Key Files to Understand
- `src/constants/projects/index.ts` - Central project registry
- `src/app.css` - Global styles and animations
- `tailwind.config.js` - Design system configuration
- `src/components/home-sections/Portfolio/ProjectCard.svelte` - Complex responsive component with overlapping layouts

### Animation System
- **Intersection Observer** via svelte-inview for scroll animations
- **Staggered animations** with calculated delays (`i * delay`)
- **Custom transitions** in `src/transitions/` 
- **URL-based timing** for project page transitions

### Adding New Projects
1. Create new file in `src/constants/projects/[project-name].ts`
2. Follow existing `Project` type interface
3. Add to exports in `src/constants/projects/index.ts`
4. Add images to `/static/projects/[project-id]/`