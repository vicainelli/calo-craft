# AI Coding Instructions for CaloCraft

## Project Overview

CaloCraft is a meal planning application built as a Turborepo monorepo with Bun package management. The system helps users create meal plans based on calorie goals, dietary restrictions, and available grocery ingredients.

### Architecture & Components

- **`/apps/web`**: React + Vite frontend with ShadCN UI components and TailwindCSS
- **`/apps/api`**: HonoJS-based API server (minimal implementation, early stage)
- **`/apps/meal-plan-engine`**: Planned service for generating meal plans (not yet implemented)
- **`/apps/groceries-scraper`**: Planned service for scraping grocery data (not yet implemented)

## Development Workflow

### Essential Commands
```bash
# Root level - runs all apps concurrently
bun dev                    # Start all development servers
bun build                  # Build all apps
bun test                   # Run tests across all apps
bun lint                   # Lint all packages

# App-specific (run from app directories)
cd apps/web && bun dev     # Web app on Vite
cd apps/api && bun dev     # API server with auto-reload
```

### Package Management
- **Always use Bun** - all projects configured for `bun` as package manager and runtime
- Workspace packages are referenced as `@calo-craft/web`, `@calo-craft/api`
- Dependencies added to root for shared packages, app-specific for unique needs

## Code Conventions & Patterns

### State Management
- **TanStack Store** (not React Query) for client state - see `/apps/web/src/lib/store.ts`
- Store includes Zod validation with runtime type checking and error throwing
- State updates use `store.setState()` pattern
- Subscribe to state changes with runtime validation

### Component Architecture
- **ShadCN UI** components in `/apps/web/src/components/ui/`
- Function components only, no class components
- Use `@/` path alias for imports (configured in Vite)
- CVA (class-variance-authority) for component variants

### Testing Strategy
- **Vitest** for all testing (API and future web tests)
- API tests use custom `createTestRequest()` helper from `test-utils.ts`
- Coverage configured with v8 provider
- New components/routes require companion test files

### Code Quality
- **Biome** for formatting and linting (not ESLint/Prettier combo)
- 2-space indentation across all files
- camelCase for functions, CONSTANT_CASE for variables
- TypeScript strict mode enabled

## Key Integration Points

### Frontend-API Communication
- API currently minimal (`/` route only), expects REST endpoints
- Frontend ready for TanStack Query integration (dependency already added)
- Form handling follows controlled component pattern with FormData extraction

### Build System
- **Turbo** orchestrates all builds with dependency caching
- Build outputs: `dist/` for apps, build dependencies must complete first
- Environment variables prefixed with `VITE_*` for frontend access

## Current Development State

### Implemented
- Basic web UI with calorie goal setting
- Foundational API structure with HonoJS
- Store with validation and state persistence
- Component library setup with ShadCN

### Next Implementation Areas
- API endpoints for meal plans and user preferences
- Meal plan engine algorithm and data models
- Grocery scraper for ingredient availability
- User authentication and data persistence

## Project-Specific Notes

- Challenge unclear requirements before implementing - see collaboration guidelines in `CLAUDE.md`
- TanStack Store validation throws errors on invalid state - handle appropriately
- Lefthook configured but not actively used - git hooks need setup
- Two separate README contexts exist - prefer root `CLAUDE.md` for full context

When working on this codebase, prioritize type safety, test coverage, and the established architectural patterns over quick implementations.
