# Guards of Atlantis II - Game Setup Assistant

## Project Overview

A mobile-first web application to assist with setting up and running Guards of Atlantis II tabletop game sessions. Built with the T3 stack (Next.js, tRPC, Prisma, TypeScript).

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **API**: tRPC for type-safe API routes
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Language**: TypeScript (strict mode)

## Development Guidelines

### UI/UX Principles

1. **Mobile-first always** - Design for mobile screens first, then scale up for larger displays
2. **Use shadcn/ui components** - Always look for existing shadcn components (Button, Input, Card, etc.) before building custom UI. Install new components with `npx shadcn@latest add <component>`
3. **Game-themed styling** - Use the custom color palette derived from the game artwork:
   - Ice blue (`ice-300` to `ice-600`) - Secondary/accent color
   - Amber (`amber-300` to `amber-600`) - Primary CTA buttons
   - Parchment (`parchment-100` to `parchment-300`) - Text on dark backgrounds
   - Crimson (`crimson-500`, `crimson-600`) - Atlantians team / destructive actions
   - Game slate (`game-slate-800` to `game-slate-950`) - Dark backgrounds

### Button Variants

Use the custom game button variants defined in `src/components/ui/button.tsx`:
- `variant="game"` - Primary amber gradient buttons for main CTAs
- `variant="game-secondary"` - Ice blue gradient for secondary actions
- `variant="game-ghost"` - Dashed border style for add/tertiary actions

### Architecture

1. **Backend logic in services** - Create services in `src/server/services/` for business logic
2. **tRPC routers are thin** - Routers in `src/server/api/routers/` should validate input and delegate to services
3. **Crypto for randomization** - Use Node.js `crypto` module for any randomization (team shuffling, etc.)

### File Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/ui/          # shadcn/ui components
├── lib/                    # Utility functions
├── server/
│   ├── api/
│   │   ├── routers/        # tRPC routers (thin, delegate to services)
│   │   └── trpc.ts         # tRPC configuration
│   └── services/           # Business logic services
├── styles/
│   └── globals.css         # Tailwind config + custom theme
└── trpc/                   # tRPC client setup
```

### Current Features

- **Home page** (`/`) - Landing with game artwork and Play button
- **Player setup** (`/setup`) - Add/remove player names, persisted to localStorage
- **Team randomizer** (`/teams`) - Cryptographically secure team randomization
  - Atlantians (red) vs Titans (blue)
  - Crown icon indicates first pick
  - Auto-randomizes when arriving from setup page

### Data Persistence

- Player names and team assignments stored in localStorage for offline/connection-loss resilience
- Keys: `goa2-players`, `goa2-teams`

### Styling Notes

- No hover scale effects on buttons (removed `hover:scale-105`)
- Cards use `rounded-xl` for more rounded corners
- Dark theme by default (no light mode toggle needed)
- Background uses subtle radial gradient with ice-500 tint

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run db:push      # Push Prisma schema to database
npm run db:studio    # Open Prisma Studio
```

## Database

The Prisma schema includes models for Heroes and Cards from the game. See `prisma/schema.prisma` for the full schema.

## Next Steps (Planned)

- Hero pick UI - Draft heroes for each team
- Game state tracking
- Integration with hero/card database
