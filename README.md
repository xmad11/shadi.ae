# Shadi.ae

UAE Restaurant Review Platform by Shadi Shawqi (@the.ss)

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Runtime**: Bun
- **Styling**: Tailwind CSS 4.1.18
- **Linting**: Biome 2.3.13
- **Database**: Supabase
- **Language**: TypeScript 5.9.3

## Getting Started

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Lint code
bun run lint

# Fix linting issues
bun run lint:fix

# Type check
bun run typecheck
```

## Project Structure

```
app/
├── (auth)/           # Authentication routes
├── (marketing)/      # Privacy, Terms
└── restaurants/      # Restaurant listing & detail

components/           # React components
context/             # Context providers
lib/                 # Utilities & helpers
styles/              # Global styles
```

## License

© 2026 Shadi Shawqi. All rights reserved.
