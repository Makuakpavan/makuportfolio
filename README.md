# Maku Akpavan Paul — portfolio

React 19 + TypeScript + Vite + Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typechecks, then builds to dist/
npm run preview  # serve the production build locally
```

## Deploy

Vercel picks this up with no configuration. Build command `npm run build`,
output directory `dist`. Netlify and Render static sites are the same.

## Where things live

```
src/
  data/site.ts        all copy and project content — edit here, not in JSX
  hooks/index.ts      reduced motion, scroll ticker, in-view, decode
  components/         one file per section
  index.css           Tailwind theme tokens + the few custom rules
  App.tsx             section order
```

### Adding a project

Push an object onto `projects` in `src/data/site.ts`. Nothing else to touch —
the rail, station dots and scroll animation all derive from the array length.

```ts
{
  id: 'slug',
  kind: 'Category shown above the title',
  title: 'Project name',
  href: 'https://optional-live-url',      // omit and the title stops being a link
  body: 'What it does and what was hard about it.',
  build: 'The stack sentence.',
  links: [{ label: 'Live site', href: '...' }],   // optional
  status: { label: 'In development', live: false },
}
```

## Tailwind v4 notes

There is no `tailwind.config.js`. Theme tokens are declared in `@theme` in
`src/index.css`, and Tailwind turns each one into a utility:

| Token             | Gives you                            |
| ----------------- | ------------------------------------ |
| `--color-beam`    | `bg-beam` `text-beam` `border-beam`  |
| `--font-display`  | `font-display`                       |
| `--animate-lift`  | `animate-lift`                       |

To recolour the whole site, change the hex values in `@theme`. Nothing else.

### What is deliberately not Tailwind

Three things live in `@layer components` in `index.css`, because expressing
them as utilities would be worse code, not better:

1. `.field-grid` — a `mask-image` over a repeating background.
2. `.route-track` / `.route-line` / `.route-pod` — the hero route line draws
   top-to-bottom on mobile and left-to-right on desktop. Different axis,
   transform-origin and keyframes per breakpoint.
3. The `prefers-reduced-motion` overrides for both.

## Motion

Every animation is disabled when the visitor's OS is set to reduce motion.
This is enforced twice on purpose: `useReducedMotion()` makes components skip
the work in JS, and a `@media (prefers-reduced-motion: reduce)` block in CSS
catches anything the JS misses.

All scroll-driven UI shares one `requestAnimationFrame` ticker in
`src/hooks/index.ts` rather than each hook attaching its own listener.

## Still to add

- Gumroad URL for the NaijaDash entry
- Project screenshots
