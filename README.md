# AirPro Landing Page

> Apple-inspired 3D scroll-driven product experience built with React 19, GSAP ScrollTrigger, and Vite.

AirPro is a high-impact, kinetic product showcase template recreating Apple's fluid scroll-scrubbing web experience. Built with React 19, GSAP (GreenSock Animation Platform) ScrollTrigger, and Tailwind CSS 4, it synchronizes high-precision 3D headphone hardware visuals with user scroll gestures—transitioning from hero stages and dual floating earbuds to exploded acoustic driver architectures and noise-cancellation specs.

[![Live Demo](https://img.shields.io/badge/Demo-airpro--smooth--react--template.vercel.app-10B981?style=flat-square&logo=vercel&logoColor=white)](https://airpro-smooth-react-template.vercel.app)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![GSAP 3](https://img.shields.io/badge/GSAP-3.14.2-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://gsap.com/)
[![Vite 6](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-v4.1-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## Live Production

- **URL:** [https://airpro-smooth-react-template.vercel.app](https://airpro-smooth-react-template.vercel.app)
- **Deployment:** Vercel Edge Network
- **Performance:** Hardware-accelerated CSS GPU matrix transformations (`will-change: transform`)

---

## Showcase

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Hero Stage Presentation Desktop**<br>![AirPro Hero Stage Desktop](screenshots/AirPro%20Hero%20Stage%20Desktop.png) | **Hero Stage Presentation Mobile**<br>![AirPro Hero Stage Mobile](screenshots/AirPro%20Hero%20Stage%20Mobile.png) |
| **Dual Floating Earbuds Scroll Stage Desktop**<br>![AirPro Dual Earbuds Desktop](screenshots/AirPro%20Dual%20Earbuds%20Desktop.png) | **Dual Floating Earbuds Scroll Stage Mobile**<br>![AirPro Dual Earbuds Mobile](screenshots/AirPro%20Dual%20Earbuds%20Mobile.png) |
| **Exploded Acoustic Driver Architecture Desktop**<br>![AirPro Acoustic Driver Desktop](screenshots/AirPro%20Acoustic%20Architecture%20Desktop.png) | **Exploded Acoustic Driver Architecture Mobile**<br>![AirPro Acoustic Driver Mobile](screenshots/AirPro%20Acoustic%20Architecture%20Mobile.png) |
| **Active Noise Cancellation & H2 Chip Desktop**<br>![AirPro Noise Cancellation Desktop](screenshots/AirPro%20Active%20Noise%20Cancellation%20Desktop.png) | **Active Noise Cancellation & H2 Chip Mobile**<br>![AirPro Noise Cancellation Mobile](screenshots/AirPro%20Active%20Noise%20Cancellation%20Mobile.png) |
| **Battery Performance & Tech Specs Desktop**<br>![AirPro Battery Specs Desktop](screenshots/AirPro%20Battery%20%26%20Specifications%20Desktop.png) | **Battery Performance & Tech Specs Mobile**<br>![AirPro Battery Specs Mobile](screenshots/AirPro%20Battery%20%26%20Specifications%20Mobile.png) |

---

## Features

- **800% Scroll Scrubbing Distance**: Fixed viewport track binding user mouse wheel and touch gestures directly to a timeline with 1:1 scrub sensitivity.
- **Bi-Directional 3D Earbud Separation**: Coordinated mathematical translation vectors splitting left and right acoustic units along custom 3D depth planes (`splitX = 100%` on desktop, `30%` on mobile).
- **Exploded Acoustic Architecture View**: High-resolution exploded views visualizing the custom high-excursion Apple audio driver, high dynamic range amplifier, and acoustic mesh.
- **H2 Computational Audio Chip Spotlight**: Staggered scroll-triggered entrance revealing Apple H2 chip architecture with custom ease curves and dynamic depth scaling.
- **Performance & Acoustic Telemetry Grid**: Responsive telemetry cards detailing active noise cancellation decibel reduction, battery longevity, and low-distortion audio metrics.
- **Breakpoint-Adaptive GSAP Scaling**: Dynamic viewport listener automatically modifying GSAP timeline scale factors (`featureScale: 0.5` mobile vs `0.8` desktop) to prevent horizontal overflow on smaller screens.
- **Hardware-Accelerated Asset Preloader**: Asset loading gate pre-caching audio graphics before revealing the main stage with smooth opacity transitions.
- **Animated Mobile Navigation Drawer**: Fullscreen slide-over drawer with Lucide React icons, backdrop blur filters, and scroll locking.

---

## Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React `19.0.0`, Vite `6.2.0` | Next-gen React concurrent runtime and lightning-fast ES module bundling |
| **Scroll & Motion** | GSAP `3.14.2`, ScrollTrigger | Industry-standard timeline engine for scroll-linked visual scrubbing |
| **React Animation Hooks** | `@gsap/react` `2.1.2`, Motion `12.23.24` | Scoped animation lifecycles and garbage-collected animation triggers |
| **Styling** | Tailwind CSS `4.1.14` | Zero-runtime CSS utilities integrated directly via `@tailwindcss/vite` |
| **Type Checking** | TypeScript `5.8.2` | Strict typings across DOM refs, animation properties, and GSAP timelines |
| **Icons** | Lucide React `0.546.0` | Accessible vector SVG icons for menus, audio indicators, and actions |
| **Deployment** | Vercel Edge Platform | Global CDN asset delivery with automatic SSL routing |

---

## Project Structure

```bash
/
├── src/
│   ├── App.tsx          # Master scroll canvas, GSAP timeline, and chapters
│   ├── main.tsx         # React 19 entry point
│   ├── index.css        # Tailwind 4 directives and custom scroll utilities
│   └── lib/             # Classname merger helpers
├── public/              # High-resolution product graphics and SVG assets
├── screenshots/         # MacBook Pro M4 & iPhone 16 Pro showcase mockups
└── README.md
```

---

## Getting Started & Local Development

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm** or **pnpm**

### Installation & Setup

> **Environment Variables:** No `.env` file or external API keys are required. All scroll timelines, 3D animations, and canvas scrubbing execute 100% locally in the browser.

```bash
# 1. Clone the repository
git clone https://github.com/widifirmaan/react-airpro-scroll-driven-template.git
cd react-airpro-scroll-driven-template

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Production Build

```bash
# Compile and optimize production distribution bundle
npm run build
```

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
