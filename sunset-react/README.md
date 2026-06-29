# Procedural Sunset-Over-Ocean Hero Animation (React + TS + Vite + Tailwind)

This directory contains a complete, self-contained, production-ready React component and demo page for a realistic, smooth infinite sunset-over-ocean animation to be used as the background of a Hero section (specifically tailored for an **ABOUT US** page).

## Setup & Running Locally

Ensure you have Node.js installed on your machine.

1. **Open your terminal** and navigate to this directory:
   ```bash
   cd c:/Coding/Internships/Mantrakaar/sunset-react
   ```
2. **Install the dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open the browser** at `http://localhost:5173/` (or the port specified by Vite) to view the live animated demo.

---

## Customization Guide

### 1. Adjusting Colors
All scene gradients are defined in `src/components/SunsetHero.tsx`. You can alter the stop values in the definitions (`<defs>`) to change the time of day or theme:
* **Sky Base** (`#skyGrad`): Change `stopColor` values ranging from Midnight Cobalt Blue (`#132b4f`) down to Golden Sunset Yellow (`#ffd269`).
* **Sun Core & Bloom** (`#sunGrad`, `#sunBloom`): Adjust radial gradient values to shift colors (e.g. from white/cream to warm amber orange).
* **Wave Color Layers**: Change the hex code values in `fill` attributes for the three `<path>` layers (e.g. `#122744`, `#0d1f38`, `#091424`).

### 2. Tweaking Animation Speeds
Speeds are bound to Tailwind animations in `tailwind.config.cjs`. You can increase or decrease durations:
* **Parallax Speeds**: Change durations for `'wave-parallax-1'` (slow background), `'wave-parallax-2'` (medium center), and `'wave-parallax-3'` (faster foreground) wave layers.
* **Drifting Clouds**: Adjust durations for `'cloud-drift-slow'` (120s) and `'cloud-drift-fast'` (80s).
* **Sun/Bloom Float**: Tweak the `'sun-float'` (12s) float oscillation.

---

## Accessibility (A11y) & Performance (P11y)

1. **Reduced Motion Support**:
   The CSS file `src/styles/index.css` automatically detects `prefers-reduced-motion: reduce` and stops all animation keyframes, displaying a tranquil static sunset layout.
2. **Programmatic Pause**:
   Passing the `pause={true}` prop to the `<SunsetHero>` component appends the `.animation-paused` class to the wrapper, pausing all animation play states instantly.
3. **Screen Readers**:
   * Uses `role="img"` and `aria-label` to describe the scene.
   * If the hero background is purely decorative, pass the `isDecorative={true}` prop to automatically set `aria-hidden="true"` and omit accessibility descriptions.
4. **Hardware Acceleration**:
   Elements in translation use `will-change: transform` to trigger layer creation in the browser, avoiding layout repaints and utilizing GPU compositing for 60fps animations.
