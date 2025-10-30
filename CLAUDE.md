# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with 11ty (Eleventy) static site generator, TailwindCSS, and Alpine.js. The site features a blog, portfolio showcase, and resume sections.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (runs webpack, eleventy, and postcss in parallel)
npm run dev

# Production build
npm run build

# Debug mode (shows 11ty debug output)
npm run debug

# Clean build artifacts
npm clean
```

## Build System Architecture

The build system runs three parallel processes via `npm-run-all`:

1. **Webpack** (`dev:webpack`): Bundles JavaScript from `src/assets/scripts/main.js` (primarily Alpine.js)
2. **Eleventy** (`dev:eleventy`): Processes templates, markdown, and generates static HTML
3. **PostCSS** (`dev:postcss`): Processes TailwindCSS

Output directory: `dist/`

## Project Structure

```
src/
├── _data/           # Global data files (meta.js, colors.js, structure.js, social.json)
├── _includes/       # Nunjucks templates
│   ├── layouts/     # Page layouts (base, post, portfolio, resume, etc.)
│   └── components/  # Reusable components (postslist, card-carousel, etc.)
├── posts/
│   ├── portfolio/   # Portfolio project markdown files
│   └── resume/      # Resume entry markdown files
├── assets/
│   ├── css/         # Source CSS (tailwind.css)
│   ├── scripts/     # JavaScript entry point (main.js)
│   ├── images/      # Image assets
│   └── svg/         # SVG icons (processed by eleventy-plugin-svg-sprite)
└── *.njk, *.md      # Top-level pages

utils/
├── filters.js           # Custom 11ty filters (dateToFormat, slugify, getPostsByTag, etc.)
├── shortcodes.js        # Custom shortcodes
├── paired-shortcodes.js # Paired shortcodes
└── transforms.js        # HTML transforms
```

## Content Collections

Three main collections defined in `.eleventy.js`:

1. **post** - Blog posts from `./src/posts/*.md`
2. **portfolio** - Portfolio items from `./src/posts/portfolio/*.md`
3. **resume** - Resume entries from `./src/posts/resume/*.md`

### Draft Behavior

Content with `draft: true` in frontmatter:
- **Development**: Always visible (allows local preview)
- **Production**: Filtered out (not published)

The `ELEVENTY_ENV` environment variable controls this behavior.

## Template System

- **Template Engine**: Nunjucks (.njk files)
- **Markdown**: Uses markdown-it with emoji support and anchor links
- **Layouts**: Located in `src/_includes/layouts/`
- **Components**: Reusable Nunjucks components in `src/_includes/components/`

Template formats processed: `html`, `njk`, `md`

## Styling

- **Framework**: TailwindCSS v3.4.18 (JIT mode is default)
- **Config**: `tailwind.config.js` - custom fonts (Alegreya, Alegreya Sans), custom heights, extended colors
- **Plugins**: `@tailwindcss/forms` v0.5.10, `@tailwindcss/typography` v0.5.19
- **Processing**: PostCSS with autoprefixer and cssnano for minification in production

## JavaScript

- **Entry**: `src/assets/scripts/main.js`
- **Framework**: Alpine.js v2.8 (imported in main.js)
- **Bundler**: Webpack with Babel transpilation
- **Additional**: typer.js library for typing animations (copied from node_modules)

## Custom 11ty Configuration

Key customizations in `.eleventy.js`:

- **Watch Targets**: Watches `src/assets`, `utils/*.js`, and `tailwind.config.js`
- **Passthrough Copy**: Images, SVGs, videos, PDFs, robots.txt
- **Custom Filters**: Date formatting (Luxon), slugify, post filtering by type/tag, CSS minification
- **SVG Sprite**: Auto-generates sprite from `src/assets/svg/`
- **Markdown**: Supports emojis, HTML in markdown, auto-linking, typography enhancements

## Deployment

- **Platform**: Netlify (see `netlify.toml`)
- **Build Command**: `npm run build`
- **Publish Directory**: `dist/`

## Key Dependencies

- `@11ty/eleventy` - Static site generator
- `tailwindcss` - CSS framework
- `alpinejs` - Lightweight JavaScript framework
- `markdown-it` - Markdown parser with emoji/anchor plugins
- `luxon` - Date/time handling in filters
- `typer-js` - Typing animation library
