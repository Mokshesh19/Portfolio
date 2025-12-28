# Repository Guidelines

## Project Structure & Module Organization
- `src/main.jsx` mounts the React 19 app and loads global styles from `src/index.css`.
- `src/App.jsx` wires the page order, while `src/components/` holds feature blocks (Hero, About, Experience, Projects, Skills, Contact, Navbar, TextureOverlay, etc.).
- Keep shared styles in `App.css` or Tailwind utilities configured in `tailwind.config.js`; static assets belong under `src/assets/`.
- `public/` serves untouched static files, `dist/` is the build output, and root configs (`vite.config.js`, `postcss.config.js`, `eslint.config.js`) should change only when the build pipeline needs an update.

## Build, Test, and Development Commands
- `npm install` - sync dependencies before any other task.
- `npm run dev` - start the Vite dev server with HMR; use it for fast visual checks.
- `npm run build` - produce the optimized bundle in `dist/`; run before each push to ensure Tailwind purging works.
- `npm run preview` - serve the production bundle locally for smoke tests.
- `npm run lint` - execute ESLint using the repo config; keep this passing prior to opening a PR.

## Coding Style & Naming Conventions
- Use functional React components with hooks, two-space indentation, and closing semicolons as shown in `src/App.jsx`.
- Components/files are `PascalCase.jsx`; hooks or helpers are `camelCase.js`.
- Prefer Tailwind tokens (colors such as `earth`, `bone`, `matcha`) for layout and palette; limit bespoke CSS inside `App.css` to what Tailwind cannot express.
- Run `npm run lint` plus your editor ESLint plugin; do not silence warnings unless you document why.

## Testing Guidelines
- No automated test suite exists today; rely on `npm run dev` for iterative QA and `npm run preview` for production parity.
- When writing tests, colocate them next to the component (`Projects.test.jsx`) and cover animation helpers (GSAP, Lenis) along with rendering logic.
- Until automated coverage ships, add manual test notes (viewport sizes, interaction paths, animation timing) in each PR description.

## Commit & Pull Request Guidelines
- History currently uses short, descriptive titles (for example, `Personal Portfolio`); keep future commit subjects imperative, under 50 characters, and focused on one concern.
- Reference issue IDs in the body, list affected components (Hero, Navbar, etc.), and call out visual or animation changes explicitly.
- Each PR should include a summary, setup or migration notes, screenshots or GIFs for UI work, and proof that `npm run lint` and `npm run build` both succeeded.
