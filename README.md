# Torneio.app

🔗 [torneio-app.vercel.app](https://torneio-app.vercel.app)

Torneio.app is a web app for creating, editing, tracking, and exporting tournament brackets. It is designed for any sport or competition format that can be represented as a single-elimination bracket.

The app lets users create a tournament, choose the number of teams, fill in team names, advance winners through each round, and export the final bracket as an image.

## Features

- Create single-elimination tournament brackets
- Supports 2 to 32 teams
- Quick team-count presets for 4, 8, 16, and 32 teams
- Rename teams directly in the bracket
- Select and undo match winners
- Persist bracket state locally with browser storage
- Export brackets as PNG or JPEG
- Dark and light theme support
- Static SEO files, including Open Graph image, sitemap, robots.txt, and favicon

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Zustand
- Zod
- CSS Modules
- html-to-image
- Lucide React
- pnpm

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

## Project Structure

```text
src/
  components/
    modals/
    ui/
  hooks/
  pages/
  store/
  styles/
  types/
  utils/
```

## License

MIT License — see [LICENSE](./LICENSE) for details.
