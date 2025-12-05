# Tarot Mystique

Front-end React experience for Tarot card readings with immersive animations and Vietnamese copy. The project is organized as a Vite + Tailwind CSS single-page app with modular sections for input, card picking, analyzing, and results.

## Project Structure
- `src/components`: Reusable UI pieces like layout elements and card presenters.
- `src/sections`: Page-height sections for each step of the reading flow.
- `src/data`: Static tarot data seeds.
- `src/index.css`: Tailwind entry with base styles.

## Getting Started
1. Install dependencies (Node.js 18+ recommended):
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Notes
- Animations and layout use Tailwind utility classes; ensure PostCSS/Tailwind processing is enabled during builds.
- Card data currently includes a representative subset of the Rider-Waite deck (Major Arcana) and can be expanded.
