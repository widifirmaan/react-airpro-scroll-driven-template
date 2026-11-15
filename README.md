# AirPro

> Modern React 19 product showcase template featuring 3D scroll-driven GSAP Scrub animation and Apple-inspired design.

AirPro is a responsive React template designed for interactive product launches, high-end consumer hardware showcases, and creative audio landing experiences. Built with React 19, GSAP ScrollTrigger, and Tailwind CSS v4, it synchronizes high-definition product visual assets with user scroll gestures across an 800% scrub track (900vh)—transitioning seamlessly through an ambient video hero stage, 3D perspective dual earbud separation with dynamic typography, Active Noise Cancellation callouts, Personalized Spatial Audio showcases, an H2 processor architecture narrative, interactive hardware telemetry stat cards, and an embedded 16:9 demonstration video.

[![Live Demo](https://img.shields.io/badge/Demo-airpro--smooth--react--template.vercel.app-10B981?style=flat-square&logo=vercel&logoColor=white)](https://airpro-smooth-react-template.vercel.app)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![GSAP 3](https://img.shields.io/badge/GSAP-3.14.2-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://gsap.com/)
[![Vite 6](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-v4.1-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## Live Production

- **URL:** [https://airpro-smooth-react-template.vercel.app](https://airpro-smooth-react-template.vercel.app)
- **Deployment:** Vercel (Edge Network with Global CDN Caching)

---

## Showcase

| Desktop | Mobile |
| :---: | :---: |
| **Hero Stage Presentation Desktop**<br>![AirPro Hero Stage Desktop](screenshots/AirPro%20Hero%20Stage%20Desktop.png) | **Hero Stage Presentation Mobile**<br>![AirPro Hero Stage Mobile](screenshots/AirPro%20Hero%20Stage%20Mobile.png) |
| **Dual Floating Earbuds Scroll Stage Desktop**<br>![AirPro Dual Earbuds Desktop](screenshots/AirPro%20Dual%20Earbuds%20Desktop.png) | **Dual Floating Earbuds Scroll Stage Mobile**<br>![AirPro Dual Earbuds Mobile](screenshots/AirPro%20Dual%20Earbuds%20Mobile.png) |
| **Active Noise Cancellation Stage Desktop**<br>![AirPro Active Noise Cancellation Desktop](screenshots/AirPro%20Active%20Noise%20Cancellation%20Desktop.png) | **Active Noise Cancellation Stage Mobile**<br>![AirPro Active Noise Cancellation Mobile](screenshots/AirPro%20Active%20Noise%20Cancellation%20Mobile.png) |
| **Personalized Spatial Audio Stage Desktop**<br>![AirPro Spatial Audio Desktop](screenshots/AirPro%20Spatial%20Audio%20Desktop.png) | **Personalized Spatial Audio Stage Mobile**<br>![AirPro Spatial Audio Mobile](screenshots/AirPro%20Spatial%20Audio%20Mobile.png) |
| **Hardware Telemetry & Battery Specs Desktop**<br>![AirPro Battery Specs Desktop](screenshots/AirPro%20Battery%20%26%20Specifications%20Desktop.png) | **Hardware Telemetry & Battery Specs Mobile**<br>![AirPro Battery Specs Mobile](screenshots/AirPro%20Battery%20%26%20Specifications%20Mobile.png) |

---

## Features

- **800% Scroll Scrub Track**: 900vh sticky viewport canvas binding scroll progress directly to a master GSAP timeline (`useGSAP`) with 1:1 scrub sensitivity (`scrub: 1`).
- **3D Perspective Dual Earbud Separation**: Coordinated translation vectors splitting left and right acoustic units along 3D depth axes (`[perspective:1000px]`, `splitX = 100%` on desktop, `30%` on mobile) accompanied by bold `PURE SOUND` typographic scaling.
- **Active Noise Cancellation Showcase**: Scroll-triggered angled earbud rotation with high-contrast callout highlighting up to 2x reduction in ambient background noise.
- **Personalized Spatial Audio Showcase**: Dynamic repositioning transition highlighting personalized sound calibration tuned specifically for individual ear acoustics.
- **H2 Audio Processor Architecture**: Dedicated dark section with ambient blue radial glow, glassmorphic image card with hover zoom, and technical narrative detailing custom amplifier and driver synergy.
- **Hardware Telemetry Stat Cards**: Responsive grid of 4 glassmorphic metric cards (`6 hrs Battery Life`, `30 hrs With Case`, `IPX4 Water Resistant`, `5.3 Bluetooth`) featuring hover elevation and cyan accent transitions.
- **Liquid Glass Floating Navbar**: Responsive floating pill navigation bar (`backdrop-blur-2xl`, `bg-white/5`) with desktop link anchors (`Overview`, `Tech Specs`, `Compare`), CTA button, and mobile slide-down drawer with Lucide icon toggles and body scroll locking.
- **Background Video Atmosphere**: Continuous ambient video loop layer (`/background-video.mp4`) with Gaussian blur and dark radial gradient overlay for high-end cinematic depth.
- **Embedded 16:9 Demonstration Video**: Responsive aspect-ratio glassmorphic player embedding official product demonstration video from YouTube with automated autoplay, mute, and loop controls.
- **Interactive Global Preloader**: Screen-blocking caching gate with spinner animation ensuring media and 3D assets are fully loaded before revealing the stage.

---

## Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React `19.0.0`, Vite `6.2.0` | Frontend foundation with fast Vite HMR and production bundle optimization |
| **Scroll & Timeline** | GSAP `3.14.2`, ScrollTrigger, `@gsap/react` `2.1.2` | Hardware-accelerated 3D scroll-scrub timeline and element choreography |
| **Styling & Theme** | Tailwind CSS `4.1.14` (`@tailwindcss/vite`) | Utility-first styling with modern `@theme` design tokens |
| **Type System** | TypeScript `5.8.2` | Type-safe components, DOM refs, and GSAP timeline parameters |
| **Iconography** | Lucide React `0.546.0` | Vector line icons for navigation toggles and audio controls |
| **Utility Helpers** | `clsx 2.1.1`, `tailwind-merge 3.5.0` | Conditional CSS class concatenation and conflicting utility resolution |

---

## Project Structure

```bash
/
├── src/
│   ├── App.tsx          # Master scroll canvas, GSAP timeline, and sections
│   ├── main.tsx         # React 19 application root entry point
│   ├── index.css        # Tailwind 4 directives and liquid glass styles
│   └── lib/
│       └── utils.ts     # Classname concatenation helper (cn)
├── public/              # Background ambient video and static assets
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
