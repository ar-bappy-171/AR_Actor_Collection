# Actress Gallery

A polished, responsive personal gallery for browsing and managing your favorite actresses.
Built with a vanilla HTML/CSS/JS front-end served as static assets inside a Next.js 16 shell.
**Installable as a PWA** on any device — with its own app icon, badge, and offline support.

![Actress Gallery](https://img.shields.io/badge/Next.js-16-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8) ![PWA](https://img.shields.io/badge/PWA-Installable-5a0fff)

---

## ✨ Features

### 📱 PWA — Installable as an App
- **Custom app icon & badge** — a film-reel icon on an indigo→violet→fuchsia gradient appears in the browser tab, on the home screen, and in the app switcher
- **Web App Manifest** — standalone display mode, app name, theme color, shortcuts
- **Service Worker** — offline support via stale-while-revalidate caching; the gallery loads even with no connection
- **Installable** — use Chrome/Edge's "Install app" prompt (or Safari's "Add to Home Screen") to install it as a native-feeling app
- **App Shortcuts** — quick-launch Search / Quick Add / Admin from the app icon's long-press menu
- **Apple touch icon** + `apple-mobile-web-app-capable` meta for iOS home-screen installation

### Gallery
- **6 view modes** — Grid, Masonry, List, Slideshow, **Cards** (large detailed cards), and **Magazine** (hero featured card + grid)
- **Responsive card grid** that adapts from 5 columns on desktop down to 2 columns on phones
- **Category-coded cards** with colored top accent bars (Worldwide, Japanese, Korean, etc.)
- **Quick-action overlay** on each card (View / Favorite) revealed on hover
- **Image viewer** with zoom, prev/next navigation, download, and share
- **View-count badges** on every card

### Search & Filtering
- **Debounced search** by name, category, or tags (300ms)
- **Search history** with autocomplete suggestions (saved to localStorage)
- **Category filter pills** (All / Worldwide / Japanese / Korean)
- **Sort by** name A-Z, name Z-A, recently added, most viewed, most photos, most links
- **Keyboard shortcut** `Ctrl+K` to focus search

### Admin Panel
- **Add New** — full form with name, category combobox, tags, image URL/upload sources, and dynamic website links
- **Manage** — searchable list with batch actions (delete, change category, add tags)
- **Import / Export** — JSON, CSV, PDF export; JSON/CSV/URL import; cloud backup; danger zone
- **Analytics** — total views, most viewed, category distribution, recent activity
- **Settings** — theme (auto/light/dark), card size, notifications, keyboard shortcuts reference

### Mobile-First UX
- **Sticky glassmorphism header** with backdrop blur
- **Hamburger menu** that opens an off-canvas drawer for the full toolbar
- **Quick-access bottom navigation bar** (glass) with 5 icons:
  - 🗂️ View toggle · 🔍 Search · ➕ Add (elevated center) · 🌙 Theme · ⚙️ Admin
- **Bottom-sheet modals** on phones (slide-up animation)
- **2×2 stats grid** so no stat is ever truncated
- **Safe-area insets** respected for notched devices

### Theming
- **6 themes** — Light, Dark, **Ocean** (deep teal), **Sunset** (warm orange/pink), **Rose** (light pink), **Forest** (emerald)
- **Theme palette popover** — tap the Theme button (header or bottom nav) to open a 6-swatch palette picker; each swatch previews the theme's gradient
- **System / manual** selection, persisted to localStorage
- **Indigo → violet → fuchsia gradient** brand identity (default Light/Dark themes)

### Persistence
- All actress data is stored in **localStorage** (no backend required)
- Sample data (8 actresses) loads automatically on first visit

---

## 🗂️ Project Structure

```
my-project/
├── public/
│   ├── manifest.json              # PWA web app manifest (icons, theme, shortcuts)
│   ├── sw.js                      # Service worker (offline + installability)
│   ├── icons/                     # App icons (SVG + 1024px PNG/JPG)
│   │   ├── icon.svg               # Crisp scalable favicon/badge
│   │   └── icon-1024.jpg          # Install icon (declared at 192/512/1024)
│   └── gallery/                   # The actress gallery app (vanilla HTML/CSS/JS)
│       ├── index.html             # App shell + all views/modals + theme palette
│       ├── style.css              # Full design system, 6 themes, 6 view modes, responsive
│       └── script.js              # All app logic (state, rendering, events, themes, SW)
├── src/
│   └── app/
│       ├── layout.tsx             # Root layout (PWA meta, icons, theme-color, Toaster)
│       └── page.tsx               # Iframe + service worker registration
├── prisma/                        # Prisma schema (available if needed)
├── package.json
└── README.md
```

> **Why an iframe?** The gallery is a self-contained vanilla JS app. Serving it as
> static assets and embedding via iframe keeps it fully functional while satisfying
> the Next.js single-route (`/`) requirement.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ / [Bun](https://bun.sh/) runtime

### Install & Run

```bash
bun install          # install dependencies
bun run dev          # start the dev server on http://localhost:3000
```

Then open the **Preview Panel** on the right (or click **Open in New Tab**).

### Available Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start the Next.js dev server (port 3000) |
| `bun run lint` | Run ESLint to check code quality |
| `bun run db:push` | Push Prisma schema to the SQLite database |

> ⚠️ Do **not** use `bun run build` in this sandbox environment.

---

## 🎨 Design System

### Color Palette

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--primary-color` | `#6366f1` | `#818cf8` | Brand / links / active states |
| `--bg-color` | `#f1f5f9` | `#0b1120` | Page background |
| `--card-bg` | `#ffffff` | `#131a2a` | Cards & surfaces |
| `--text-color` | `#0f172a` | `#f1f5f9` | Primary text |
| `--text-muted` | `#64748b` | `#94a3b8` | Secondary text |

### Category Colors
- **Worldwide** — red (`#ef4444`)
- **Japanese** — cyan (`#06b6d4`)
- **Korean** — pink (`#ec4899`)
- **OnlyFans** — violet (`#8b5cf6`)

### Breakpoints
| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Desktop | > 1024px | Full toolbar inline, 5-col grid |
| Tablet | ≤ 1024px | Tighter spacing, smaller cards |
| Mobile | ≤ 860px | Hamburger drawer appears, bottom nav shown, panels full-width |
| Phone | ≤ 480px | 2-col grid, bottom-sheet modals |
| Small | ≤ 360px | Fixed 2-col grid |

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` | Focus the search bar |
| `Ctrl+N` | Open Admin → Add New |
| `Ctrl+E` | Export data |
| `Esc` | Close modal / panel / drawer |
| `←` / `→` | Navigate images in the viewer |

---

## 📱 Mobile Bottom Navigation

On screens ≤ 860px, a glassmorphism quick-access bar appears at the bottom of the screen:

| Icon | Action | Header equivalent |
|------|--------|-------------------|
| 🗂️ View | Cycle view mode (Grid → Masonry → List → Slideshow → Cards → Magazine) | `#viewToggle` |
| 🔍 Search | Toggle the search dropdown | `#searchToggle` |
| ➕ Add | Open the Quick Add modal (elevated center FAB) | `#quickAdd` |
| 🎨 Theme | Open the 6-theme palette popover | `#themeToggle` |
| ⚙️ Admin | Open the Admin panel | `#adminToggle` |

The center **Add** button is elevated above the bar for prominence. The view icon
mirrors the current view mode. The bar fades out while a modal is open for a
cleaner overlay experience.

---

## 🎨 Themes

Six themes are available via the theme palette popover (tap the 🎨 Theme button) or
the Admin → Settings → Theme dropdown:

| Theme | Type | Primary | Background |
|-------|------|---------|------------|
| **Light** | Light | Indigo `#6366f1` | Soft slate `#f1f5f9` |
| **Dark** | Dark | Violet `#818cf8` | Deep navy `#0b1120` |
| **Ocean** | Dark | Cyan `#06b6d4` | Deep ocean `#041c2b` |
| **Sunset** | Dark | Orange `#f97316` | Warm dark `#1c0f08` |
| **Rose** | Light | Pink `#ec4899` | Soft pink `#fdf2f8` |
| **Forest** | Dark | Emerald `#10b981` | Deep forest `#06140d` |

Each theme overrides the full design-token set (primary, background, card, border,
shadows, category colors) and is persisted to `localStorage` under the `theme` key.
The body's `data-theme` attribute drives the CSS variable cascade.

---

## 🖼️ View Modes

Six view modes are available (cycle with the View toggle or pick from the view-mode panel):

| Mode | Description |
|------|-------------|
| **Grid** | Default responsive auto-fill grid (5 cols desktop → 2 cols phone) |
| **Masonry** | Grid with `align-items: start` for varied card heights |
| **List** | Vertical full-width rows with small thumbnails |
| **Slideshow** | Horizontal scroll-snap carousel of 300px-wide cards |
| **Cards** | Larger 2-col cards with an expanded meta row (views/photos/links) |
| **Magazine** | Full-width **featured hero** card (image + info panel) followed by a grid |

The view mode is persisted to `localStorage` under the `viewMode` key.

---

## 💾 Data Model

Each actress is stored in localStorage under the `actresses.json` key as an array:

```json
{
  "slug": "emma-stone",
  "name": "Emma Stone",
  "category": "worldwide",
  "tags": ["oscar", "comedy", "hollywood"],
  "websites": [
    { "name": "Instagram", "url": "https://...", "type": "instagram" }
  ],
  "gallery": ["https://...image1.jpg", "https://...image2.jpg"],
  "thumb": "https://...thumb.jpg",
  "views": 152,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

Sample data uses [picsum.photos](https://picsum.photos) seeded images for reliable
placeholder visuals. Replace them with real images via the Admin → Add New form.

---

## 🔌 Architecture Notes

- **Static front-end** — the gallery runs entirely client-side; no server calls
- **No build step** for the gallery itself — edits to `public/gallery/*` hot-reload
- **Next.js shell** — `src/app/page.tsx` embeds `/gallery/index.html` via iframe
- **Fail-safe loader** — if the script errors, the loading screen auto-hides after 5s
- **Error banner** — uncaught errors surface a visible banner (not just console)

---

## 🛠️ Tech Stack

- **Next.js 16** (App Router) — serves the shell
- **TypeScript 5** — for `src/` files
- **Vanilla HTML/CSS/JS** — the gallery app itself
- **Font Awesome 6** — icons (via CDN)
- **Inter** — typeface (via Google Fonts)
- **picsum.photos** — placeholder images

---

## 📄 License

Personal project. Built for movie enthusiasts. Sample data is illustrative only.

---

Made with ❤️ for movie enthusiasts.
