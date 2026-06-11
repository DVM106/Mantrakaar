# Recreated Mantrakaar Homepage Documentation

Recreation of the home page for **Mantrakaar** implementing modern web design patterns, high-performance interactions, theme/language toggles, and strict accessibility benchmarks.

## File Architecture

- `/index.html`: Complete semantic HTML5 layout for the homepage.
- `/css/main.css`: Core design system variables, light/dark themes, responsive grids, and animations.
- `/js/main.js`: Interaction code including GSAP timelines, custom cursors, magnetic buttons, translations, search triggers, and Swiper.js initializations.
- `/assets/`: Subdirectory for vector assets (e.g., `/assets/bulb.svg`).

---

## Technical Dependencies (Loaded via CDN)

- **Fonts**: [Google Fonts (Poppins, Montserrat)](https://fonts.google.com/)
- **Icons**: [Font Awesome v6.4.0](https://fontawesome.com/)
- **Carousel & Sliders**: [Swiper.js v9.0.0](https://swiperjs.com/) (both CSS and JS)
- **Animation Sequence Engine**: [GSAP v3.12.2](https://greensock.com/gsap/)

---

## Integration Instructions

If you are incorporating this code into the existing WordPress-based Mantrakaar site:

### 1. Style Integration (`main.css`)
- Extract the variables block from `css/main.css` and append it to your child theme's `style.css` (or customizer CSS block).
- Copy layout rules for `#hero-section-container`, carousels, magnetic buttons, custom cursor, and dot matrices.
- Replace original theme colors with the HSL CSS properties (`--brand-purple` and `--dark-purple`).

### 2. Logic Scripting (`main.js`)
- Enqueue `gsap.min.js` and `swiper-bundle.min.js` via WordPress `functions.php` enqueues.
- Load `js/main.js` as a module or footer script.
- Ensure the Swiper hooks do not conflict with existing slider plugins (e.g., Slick, Owl, Slicker).

### 3. Layout Integration (`index.html`)
- Copy the markup inside `<main>` of `index.html` and write it into a custom page template (e.g., `page-home.php`).
- Replace hardcoded client logo links and blog thumbnails with WordPress dynamic loops:
  - **Blogs**: Fetch the 3 most recent posts with `WP_Query` and loop thumbnails, dates, titles, and excerpts.
  - **Clients**: Query the Client post-type or attachment gallery inside the Swiper loop.

---

## Animation Timeline Details

| Trigger Phase | Timestamp | Animation Action | Easing & Method |
|:---|:---|:---|:---|
| **Phase 1** | `0.0s - 0.8s` | SVG bulb fades in and scales | `ease: power2.out` (GSAP) |
| **Phase 2** | `0.8s - 1.2s` | Filament turns on and glow expands | CSS filter filter-glow / SVG radial gradient |
| **Phase 3** | `1.2s - 1.4s` | Flashbang peak overlay fades in | `ease: power1.in` (GSAP peak peak duration) |
| **Phase 4** | `1.4s - 1.6s` | Settle white to default page bg; show Grid | `ease: power1.out` (GSAP overlay fadeout) |
| **Phase 5** | `1.6s onwards` | Sequential typewriting text lines (1, 2, 3) | JavaScript loop timing |
| **End State** | *Ongoing* | Trailing dot-matrix grid and floating icons | Continuous breathe & float loops |

---

## Assets Optimization Guide

- **Icons**: Keep all logos, service icons, and social links in vector `.svg` format. Do not use PNGs for graphics.
- **Images & Thumbnails**: Convert portfolio cards and author avatars to `.webp` or `.avif` formats.
- **Scaling**: All work cards in the grid should use identical `aspect-ratio: 3 / 2` to prevent layout shifts.
- **Lazy Loading**: Set `loading="lazy"` on all images beneath the fold (happy clients carousel, work items, and avatars).

---

## Internationalization (i18n) Roadmap

The multi-language structure in `js/main.js` is scaffolded using a key-value dictionary (`translations` object):
- Elements needing translations must have a `data-i18n="KEY_NAME"` attribute.
- Adding a new language: Add a new language code key (e.g. `fr` for French) into the `translations` object inside `main.js` with translated strings.
- Production scaling: In a large application, you can extract the translations object to JSON files (e.g., `lang/en.json`, `lang/hi.json`) and fetch them asynchronously when the language is changed.
