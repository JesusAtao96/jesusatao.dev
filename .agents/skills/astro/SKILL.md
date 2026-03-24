---
name: astro
description: >
  Best practices for creating and maintaining Astro projects, specifically for portfolios.
  Trigger: When starting a new Astro project, adding components, or optimizing for SEO/Performance.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## When to Use

- Initializing an Astro project.
- Creating reusable UI components.
- Implementing page layouts and routing.
- Optimizing for SEO and Core Web Vitals.
- Managing static assets and collections.

## Critical Patterns

- **Project Structure**:
  - `src/pages`: All routing files.
  - `src/components`: UI components (Atoms, Molecules, etc.).
  - `src/layouts`: Generic page shells.
  - `src/content`: Markdown/MDX content collections.
- **Islands Architecture**: Use `client:*` directives ONLY when partial hydration is absolutely necessary. Keep everything static by default.
- **Asset Optimization**: Always use `astro:assets` (`<Image />`) for local images to ensure automatic optimization.
- **SEO First**: Centralize metadata (Title, Description, OpenGraph) in a `BaseLayout.astro` or a dedicated `SEO.astro` component.
- **Content Collections**: Use `defineCollection` for blog posts, projects, or any data-driven content to benefit from type safety.

## Code Examples

### Standard Component Structure
```astro
---
// src/components/Card.astro
interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---
<div class="p-4 border rounded-lg">
  <h2 class="text-xl font-bold">{title}</h2>
  <p>{description}</p>
</div>
```

### Layout with SEO
```astro
---
// src/layouts/BaseLayout.astro
import SEO from '../components/SEO.astro';
const { title, description } = Astro.props;
---
<html lang="es">
  <head>
    <SEO title={title} description={description} />
  </head>
  <body>
    <slot />
  </body>
</html>
```

## Commands

```bash
# Add integrations (Tailwind, Sitemap, etc.)
npx astro add tailwind
npx astro add sitemap

# Development
npm run dev

# Build for production
npm run build
```
