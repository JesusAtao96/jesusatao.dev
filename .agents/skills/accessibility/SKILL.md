---
name: accessibility
description: >
  Best practices for Web Accessibility (a11y), including WCAG standards and Astro-specific optimizations.
  Trigger: When creating components, handling user interactions, or optimizing for screen readers.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Core Principles

- **Semantic HTML**: Always use correct tag hierarchy (`main`, `nav`, `aside`, `section`, `article`).
- **WCAG 2.1 Compliance**: Aim for Level AA or AAA.
- **Keyboard Navigation**: Ensure all interactive elements are focusable and have a clear `outline`.
- **Contrast**: Maintain minimum contrast ratios for text and UI components.

## General Best Practices

- **Alt Text**: Every image must have an `alt` attribute. If decorative, use `alt=""`.
- **ARIA**: Use ARIA labels only when semantic HTML isn't sufficient (`aria-label`, `aria-expanded`).
- **Forms**: Every input must have an associated `label` or `aria-label`.
- **Focus Order**: Manage focus transition for modals, menus, and dynamic content.

## Astro-Specific Optimizations

- **Astro Image**: Use the `<Image />` component with `alt` text.
- **Client Directives**: Be careful with `client:*` directives to ensure hydrated components don't break keyboard flow.
- **Prefetched Links**: Ensure `data-astro-prefetch` doesn't interfere with focus management during navigation.
- **Astro A11y Tools**: Use integration like `astro-a11y` or ESLint plugins for static analysis.

## Checklist

- [ ] Check color contrast (text vs background).
- [ ] Verify screen reader "Skip to content" link.
- [ ] Test with keyboard only (Tab/Enter/Space).
- [ ] Validate HTML semantics.
- [ ] Ensure SVG icons have `aria-hidden="true"` if decorative.
