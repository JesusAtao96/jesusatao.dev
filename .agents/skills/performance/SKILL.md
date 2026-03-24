---
name: performance
description: >
  Best practices for Web Performance, including Core Web Vitals and Astro's Zero-JS architecture.
  Trigger: When optimizing asset loading, handling hydration, or analyzing site speed.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Core Principles

- **Core Web Vitals**: Focus on LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift).
- **Zero-JS by Default**: Leverage Astro's server-first approach to ship minimal JavaScript.
- **Partial Hydration**: Use `client:visible`, `client:idle`, or `client:only` sparingly.

## General Best Practices

- **Image Optimization**: Use modern formats (WebP/AVIF) and specify dimensions (`width`/`height`) to avoid CLS.
- **Font Loading**: Use `font-display: swap` and preconnect to Google Fonts.
- **Caching**: Implement efficient cache headers for static assets.
- **Minification**: Ensure CSS and JS are minified (handled by Vite/Astro).

## Astro-Specific Optimizations

- **Image Component**: Leverage `@astrojs/image` or the built-in `<Image />` for automatic resizing and format conversion.
- **Dynamic Imports**: Use `import()` for heavy libraries.
- **Astro Prefetch**: Use `data-astro-prefetch` for faster navigation between pages.
- **CSS Strategy**: Use Scope CSS (standard in Astro) to avoid unused CSS.
- **Middleware**: Use middleware for tasks that don't need hydration.

## Optimization Checklist

- [ ] Images have `loading="lazy"` (except Hero).
- [ ] Use `aspect-ratio` to prevent layout shifts.
- [ ] Audit with Lighthouse/PageSpeed Insights.
- [ ] Compress large JSON or data files.
- [ ] Verify that no unnecessary `client:*` directives are used.
