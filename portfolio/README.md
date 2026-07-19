# Personal Portfolio Website — CloudExify Web Dev Month 1, Project 1

**Name:** M. Usman Dastgir
**Registration Number:** _CX-INT-2026-GEN-0541_
**Build Track:** Terminal Coder (dark theme, monospace type, fake terminal boot sequence)
**Signature Feature(s) implemented:**
1. Typewriter hero intro — rotates through role lines, letter by letter, with a blinking cursor
2. Scroll-triggered skill bars — animate 0 → value only once, when scrolled into view
3. Live theme switcher (bonus) — swap the accent color (green / amber / blue), saved with `localStorage`
4. Live project filter (bonus) — filter the project grid by tech tag
5. Hidden easter egg (bonus) — Konami code (↑ ↑ ↓ ↓ ← → ← → b a) unlocks a badge
6. Active nav-link highlight while scrolling (bonus)

**Live Vercel link:** _ADD-AFTER-DEPLOYING_

---

## Tech stack
HTML5, CSS3 (mobile-first, CSS variables, no framework), vanilla JavaScript. No build step, no dependencies.

## Project structure
```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── resume.pdf   ← replace with your real resume
└── README.md
```

## Before you deploy — personalize it
This is a working, ready-to-run site, but it still has placeholders you should replace with your own details:

- [ ] `index.html` → real email, GitHub URL, LinkedIn URL (in the `#contact` section)
- [ ] `index.html` → your two real project GitHub/live links (in `#projects`), swap the third "reserved slot" card for a real project or delete it
- [ ] `assets/resume.pdf` → your actual resume PDF (a placeholder file is included so the download button doesn't 404)
- [ ] `README.md` → your registration number and live Vercel link once deployed
- [ ] Add 2 screenshots (desktop width + mobile width) to the repo, e.g. under `assets/screenshots/`, and link them here

## Run it locally
No build tools needed — it's plain static files.

**Option A — just open it:**
Double-click `index.html`, or drag it into a browser window.

**Option B — VS Code Live Server (recommended, avoids some `file://` quirks):**
1. Open the `portfolio/` folder in VS Code
2. Install the "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

## Deploy to Vercel (mandatory for submission)
1. Push this folder to a new GitHub repository named `cloudexify-web-p1-usman`
2. Go to https://vercel.com and log in with your GitHub account
3. Click **Add New Project** → import the repository
4. Framework preset: **Other** (static site, no build command needed)
5. Click **Deploy** — Vercel gives you a live link like `usman-portfolio.vercel.app`
6. Every future `git push` auto-redeploys that same link

*(See the "Push to GitHub" steps below if you haven't created the repo yet.)*

## Testing checklist (from the project guide — verify before submitting)
- [ ] Live Vercel link loads correctly (not localhost)
- [ ] Hamburger menu opens/closes correctly on mobile width
- [ ] Typewriter + skill bars work as designed
- [ ] Skill bars animate once on scroll, not repeatedly
- [ ] Project filter buttons show/hide the right cards
- [ ] Contact form shows validation errors on empty/invalid input
- [ ] All nav/footer/social links work, no 404s
- [ ] Layout adapts cleanly on both mobile and desktop widths
- [ ] No JavaScript errors in the browser console

---
© 2026 Usman — built for CloudExify Summer Internship, Web Dev Month 1, Project 1.
