# Friends of HSMH — Website

React + Vite site for Hasan Suleman Memorial Hospital, componentized by section.

## Run it

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`, ready to deploy to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Add your real logo

A placeholder mark lives at `src/assets/logo.svg`. Replace it with your actual logo file, then
point `Header.jsx` and `Footer.jsx` at it:

```js
import logo from '../assets/your-logo.png'
```

## Edit the content

All page copy — headlines, stats, event details, donation copy, footer links — lives in one
file: `src/content.js`. Change it there and every component that uses it updates automatically.

## Structure

```
src/
  content.js              ← all editable text/data
  context/ThemeContext.jsx ← light/dark theme state (persisted to localStorage)
  components/
    Header.jsx / .css
    AnnouncementBar.jsx / .css
    Hero.jsx / .css
    Mission.jsx / .css          (room sponsorship)
    ProgressTimeline.jsx / .css (construction milestones)
    Services.jsx / .css
    Giving.jsx / .css           (Zakat / Sadqa / general)
    Events.jsx / .css
    Footer.jsx / .css
    ThemeToggle.jsx / .css
```

## Theme

Click the sun/moon toggle in the header to switch between light and dark themes. The palette
is defined as CSS variables in `src/index.css` under `[data-theme='light']` and
`[data-theme='dark']` — change values there to retint the whole site at once.

## Notes

- Donate / event ticket buttons are wired up visually but don't yet point to a real payment
  or ticketing provider — connect those `onClick`/`href` targets to your actual checkout or
  ticketing links.
- Nav links scroll to sections on the same page (`#about`, `#services`, etc.) rather than
  separate routes, matching the original single-page structure of the content provided.
