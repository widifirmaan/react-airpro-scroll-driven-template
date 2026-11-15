# AirPro Landing Page

> Apple-inspired 3D scroll-driven product experience built with React 19, GSAP ScrollTrigger, and Vite.

AirPro is an interactive product showcase template built with React 19, GSAP ScrollTrigger, and Tailwind CSS 4. It synchronizes audio hardware visuals with user scroll input across an 800% scrub track—transitioning through hero product stages, dual earbud separation, exploded driver architecture views, H2 chip feature callouts, and battery performance metrics.

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

- **800% Scroll Scrub Track**: Viewport scroll track binding user scroll input directly to a GSAP timeline with 1:1 scrub sensitivity.
- **Dual Earbud Separation**: Coordinated translation vectors splitting left and right acoustic units along 3D depth axes (`splitX = 100%` desktop, `30%` mobile).
- **Exploded Acoustic Driver View**: Visual breakdown illustrating high-excursion audio driver, dynamic range amplifier, and acoustic mesh layers.
- **H2 Audio Chip Callout**: Scroll-triggered section highlighting H2 processor architecture with staggered entrance animations.
- **Performance & Battery Specs**: Responsive telemetry cards detailing noise cancellation decibel reduction, battery longevity, and audio metrics.
- **Responsive GSAP Scaling**: Dynamic viewport listener adjusting timeline scale parameters (`featureScale: 0.5` mobile vs `0.8` desktop) across screen sizes.
- **Asset Preloader**: Pre-caching screen gate ensuring product imagery is ready before revealing the main stage.
- **Mobile Navigation Drawer**: Slide-over drawer with Lucide React icons, backdrop blur filters, and scroll locking.

---

## Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React `19.0.0`, Vite `6.2.0` | React frontend foundation with Vite bundling and development server |
| **Scroll & Motion** | GSAP `3.14.2`, ScrollTrigger | Timeline engine for scroll-linked visual scrubbing |
| **Animation Hooks** | `@gsap/react` `2.1.2`, Motion `12.23.24` | Scoped React animation lifecycles and gesture triggers |
| **Styling** | Tailwind CSS `4.1.14` | Utility styling integrated via `@tailwindcss/vite` |
| **Type Checking** | TypeScript `5.8.2` | Typed components, DOM refs, and GSAP timeline parameters |
| **Icons** | Lucide React `0.546.0` | Vector line icons for navigation and audio indicators |
| **Deployment** | Vercel Edge Platform | Static asset delivery and edge CDN routing |

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
