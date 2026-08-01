# JAS Labs

**Engineering studio for data-heavy software.**

> A three-person studio building geospatial platforms, cross-platform apps and applied NLP
> systems — from schema design through to production deploy.

Source for the JAS Labs portfolio site.

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [React Router](https://reactrouter.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (CDN build, config in `index.html`)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide](https://lucide.dev/)
- **Contact form**: [EmailJS](https://www.emailjs.com/)

## Project structure

```
App.tsx                 Routes + page composition
index.html              Tailwind theme tokens (colors, fonts, keyframes)
index.css               Base styles, grid/mask utilities, scrollbar
data/site.ts            All studio copy: nav, capabilities, stack, process, team
data/projects.ts        Project records (the source of truth for both /  and /projects)
components/             Section components + primitives (Button, SectionHeading, Lightbox)
pages/ProjectsPage.tsx  Filterable project index
```

Content lives in `data/`. To change what the site says, edit those two files — the
components render whatever is there.

## Design tokens

Defined in the Tailwind config block in `index.html`:

| Token           | Use                                             |
| --------------- | ----------------------------------------------- |
| `ink-950 … 50`  | Background through to primary text (dark theme) |
| `acid-300 … 700`| Single accent — signals, focus, active states    |
| `font-display`  | Inter Tight — headings                          |
| `font-sans`     | Inter — body                                     |
| `font-mono`     | JetBrains Mono — labels, metadata, buttons       |

## Run locally

```bash
npm install
npm run dev
```

### Environment variables

The contact form posts through EmailJS. Create `.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The template must accept `user_name`, `user_email`, `project_type` and `message`.

## Build

```bash
npm run build     # production build to dist/
npm run preview   # serve the build locally
```

## Deployment

Deployed to **GitHub Pages** via GitHub Actions on push to `main`. The `base` in
`vite.config.ts` must match the repository name (`/jas-labs-portfolio/`).

## License

All rights reserved.
