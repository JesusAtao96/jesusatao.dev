---
name: seo
description: >
  Best practices for Search Engine Optimization (SEO) in Astro.
  Trigger: When optimizing for search engines, adding meta tags, or configuring social sharing.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## When to Use

- When configuring the `<head>` of an Astro site.
- When implementing multilingual SEO (`hreflang`).
- When adding social sharing metadata (Open Graph, Twitter).
- When setting up `robots.txt` or `sitemap-index.xml`.

## Critical Patterns

### 1. Essential Meta Tags

Every page should have at minimum:

- `title`: Unique and descriptive.
- `description`: Compelling summary (150-160 chars).
- `canonical`: Link to the preferred version of the page.
- `viewport`: Correct mobile configuration.
- `charset="UTF-8"`: Essential for accents and special characters.

### 2. Multilingual SEO (i18n)

When having multiple languages, use `hreflang` to tell search engines about the alternatives:

```html
<link rel="alternate" hreflang="es" href="https://example.com/es/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/" />
```

### 3. Open Graph & Twitter Cards

Optimize how links appear on social media:

```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta name="twitter:card" content="summary_large_image" />
```

### 4. Structured Data (JSON-LD)

Use Schema.org to provide machine-readable context (e.g., `Person`, `SoftwareSourceCode`):

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jesús Atao",
    "jobTitle": "Frontend Developer",
    "url": "https://jesusatao.dev"
  }
</script>
```

### 5. Astro Sitemap

Use `@astrojs/sitemap` to automatically generate sitemaps during build.

## Code Examples

### SEO Layout Pattern

```astro
---
interface Props {
  title: string;
  description: string;
  image?: string;
  canonicalURL?: URL;
}
const { title, description, image = '/og-image.png', canonicalURL = new URL(Astro.url.pathname, Astro.site) } = Astro.props;
---
<head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalURL} />
  <!-- OG tags here -->
</head>
```

## Commands

```bash
npx astro add sitemap
```
