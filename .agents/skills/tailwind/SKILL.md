---
name: tailwind
description: >
  Best practices for styling with Tailwind CSS, specifically for portfolios.
  Trigger: When adding styles, creating layouts, or adjusting the design system.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## When to Use

- Designing UI components with utility-first classes.
- Configuring the theme (colors, fonts, etc.).
- Implementing responsive landing pages.
- Adding dark mode support.
- Managing consistent spacing and typography.

## Critical Patterns

- **Utility-First**: Avoid writing custom CSS in `<style>` tags unless absolutely necessary (e.g., complex animations). Use Tailwind utilities.
- **Responsive Design**: Always use a mobile-first approach. Use `md:`, `lg:`, etc., to add styles for larger screens.
- **Dark Mode**: Use the `class` strategy in `tailwind.config.mjs` and toggle the `dark` class on the root element.
- **Consistent Design Tokens**: Define brand colors and fonts in `tailwind.config.mjs` instead of hardcoding hex values.
- **Component Styling**: For highly repetitive patterns, consider extracting common class combinations into variables or Astro components.

## Code Examples

### Responsive Card with Dark Mode
```astro
<div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center space-x-4">
  <div class="shrink-0 text-indigo-500">
    <!-- Icon -->
  </div>
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-slate-500 dark:text-slate-400">You have a new message!</p>
  </div>
</div>
```

### Tailwind Config (Design Tokens)
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f3f4f6',
          dark: '#111827',
          accent: '#3b82f6',
        },
      },
    },
  },
  plugins: [],
}
```

## Commands

```bash
# Install Prettier plugin for class sorting
npm install -D prettier prettier-plugin-tailwindcss
```
