# Accessibility & Testing Checklist

Guidelines for auditing and testing the accessibility, responsiveness, and interaction quality of the recreated homepage.

---

## 1. Accessibility (WCAG 2.1 Compliance)

### Keyboard Operability & Focus Management
- [ ] **Skip Link**: Verify "Skip to main content" skips the header menu and puts focus directly on `#main-content`.
- [ ] **Focus Rings**: Verify a clear visual outline (`:focus-visible`) is visible when navigating using `Tab`.
- [ ] **Search Box Trap**: 
  - Expand the search field using `Space` or `Enter`.
  - Ensure focus shifts into the search input.
  - Verify pressing `Esc` collapses the search bar and focuses back on the search button.
- [ ] **Clients Slideshow**: Verify arrow buttons and play/pause button can be activated using keyboard focus.
- [ ] **Testimonials**: Verify users can tab to slider items and swipe through cards using arrow keys when focused.

### Screen Reader Support (Narrator / ChromeVox)
- [ ] **Aria-Live Updates**: Check that the typewriter headline container (`.typed-headline-container`) announced updates to the screen reader using `aria-live="polite"` as each sentence is rendered.
- [ ] **Nav Dropdowns**: Dropdown menus for "Services" and "Clients" should announce expand/collapse status using `aria-expanded` and `aria-haspopup`.
- [ ] **Floating Buttons**: Float channels (WhatsApp, LinkedIn, Instagram) should have descriptive, clickable `aria-label` text.
- [ ] **Bulb Asset**: Verify the decorative bulb SVG uses `aria-hidden="true"` or `pointer-events: none` to bypass redundant screen reader focus.

### Prefers-Reduced-Motion Preferences
- [ ] Enable system motion reduction (Windows settings -> Ease of Access -> Display -> Show animations in Windows -> OFF).
- [ ] Verify the black screen mask is immediately hidden, background is set, typewriter sequences are bypassed, text lines are fully populated, and dot grid is set to standard visibility.

---

## 2. Color Contrast Verification

Verify the following text/background color contrast values using Chrome DevTools Accessibility Audits (minimum requirement is WCAG AA - 4.5:1 ratio for normal text, 3:1 for large text):

- [ ] **Brand Purple Text (`#aa00d3`) on White BG**: AA compliance verified.
- [ ] **Light Theme Heading Text (`#333333`) on White BG**: AA compliant.
- [ ] **White Text on Dark Purple BG (`#410051`)**: Contrast ratio is > 7:1 (AAA compliance).
- [ ] **Brand Purple Text (`#aa00d3`) on Dark Purple BG**: Ensure large labels only, or style with a background glow to offset outline paths.

---

## 3. Responsive Breakpoints Verification

Resize the viewport or use browser device modes to audit the layout across these breakpoints:

- [ ] **320px (Small Mobile)**:
  - Navbar logo shrinks properly.
  - Typewriter text wraps correctly without breaking out of boundaries.
  - Floating buttons stack vertically without covering contact submit.
- [ ] **480px - 768px (Mobile & Tablet)**:
  - Navigation links hide; hamburger button behaves as a clean toggle.
  - Blogs slideshow scales from 1 card to 2 cards.
  - Services lists change from 4-column layout to alternate vertical cards.
- [ ] **1024px - 1200px (Laptops & Desktop)**:
  - Horizontal enqueued navbar menu appears.
  - Services layout defaults to 4 columns.
  - Blogs and Client slide views show 3 and 5 items respectively.

---

## 4. QA Audits & Test Devices

### Recommended Test Matrix
1. **Desktop Chrome / Windows**: Verify GSAP timeline, custom cursor smoothing, and magnetic button translation coordinates.
2. **Desktop Safari / macOS**: Verify CSS backdrop-filter glassmorphism overlays and background-attachment attachment parallax.
3. **Mobile Safari / iOS**: Verify Swiper touch gesture swiping on Blogs and Clients logo cards.
4. **Mobile Chrome / Android**: Verify lazy-load image speeds and fluid touch events.

### Edge Cases to Monitor
- **Double Clicks on Toggles**: Clicking dark mode or language dropdown multiple times rapidly should not disrupt CSS state triggers.
- **Fast Scroll during Intro**: Scrolling down page during the bulb flash transition should not result in the page background getting locked to black. The mask must hide properly at peak flash time.
- **Form Validation**: Submitting the contact form with missing inputs should show native HTML5 invalid fields alerts.
