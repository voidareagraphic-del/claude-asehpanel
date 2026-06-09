# ASEH Panel Website

Premium industrial website for ASEH Panel — sandwich panel & cold storage manufacturer.

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GSAP + ScrollTrigger
- Vercel deployment ready

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
npm run start
```

Deploy to Vercel:
```bash
npx vercel
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design system CSS (glassmorphism, brand bar, animations)
│   ├── layout.tsx           # Root layout with metadata & fonts
│   └── page.tsx             # Home page (all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky nav with mobile menu + scroll effect
│   │   └── Footer.tsx       # 4-column footer with brand bar
│   ├── sections/
│   │   ├── Hero.tsx         # Cinematic cold storage hero with GSAP parallax
│   │   ├── Products.tsx     # 5-product grid with PIR cross-section visuals
│   │   ├── FireShield.tsx   # Fire Shield PIR technology with char-layer animation
│   │   ├── Manufacturing.tsx# Continuous production lines + animated counter
│   │   ├── ColdStorage.tsx  # -40°C cold storage with engineering spec table
│   │   ├── CleanRoom.tsx    # Pharmaceutical clean room system
│   │   ├── Stats.tsx        # GSAP CountUp stats with brand-colored cards
│   │   ├── Projects.tsx     # Masonry project portfolio grid
│   │   ├── Blog.tsx         # Editorial article cards
│   │   └── Contact.tsx      # Split contact + glassmorphism form
│   └── ui/
│       ├── AnimateIn.tsx    # Viewport-triggered entrance animations
│       ├── AsteriskMark.tsx # Brand asterisk SVG mark + ghost watermark
│       ├── BrandBar.tsx     # 4-color brand bar segments
│       ├── Button.tsx       # Gradient-border, ghost, solid variants
│       ├── EngBadge.tsx     # Engineering monospace spec badges
│       ├── Logo.tsx         # Stacked wordmark + asterisk
│       └── SectionLabel.tsx # Section eyebrow label
└── lib/
    └── utils.ts             # cn(), brand colors, easing constants
```

## Brand System

Colors extracted from the official aseh panel logo:
- `#7AB648` — Chartreuse green (energy / thermal / roof)
- `#2D4FA3` — Royal blue (cold systems / technology)
- `#8B5EA4` — Soft purple (fire shield PIR)
- `#A8CCE0` — Ice blue (clean room / precision)
- `#3D3D3D` → `#C8C8C8` — Charcoal wordmark

## Performance
- `output: "standalone"` for optimal Vercel/Docker deployment
- Next.js Image optimization (AVIF + WebP)
- Font subsetting via Google Fonts (Inter + JetBrains Mono)
- CSS animations using GPU-accelerated transforms only
- GSAP ScrollTrigger for scroll-driven effects
- Framer Motion for component-level transitions

