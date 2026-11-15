# AirPro Landing Page

> Apple-inspired 3D scroll-driven product experience built with React 19, GSAP ScrollTrigger, and Vite.

AirPro is a high-impact, kinetic product showcase template recreating Apple's fluid scroll-scrubbing web experience. Built with React 19, GSAP (GreenSock Animation Platform) ScrollTrigger, and Tailwind CSS 4, it synchronizes high-precision 3D headphone hardware visuals with user scroll gestures—transitioning from hero stages and dual floating earbuds to exploded acoustic driver architectures and noise-cancellation specs.

[![Live Demo](https://img.shields.io/badge/Demo-airpro--smooth--react--template.vercel.app-10B981?style=flat-square&logo=vercel&logoColor=white)](https://airpro-smooth-react-template.vercel.app)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![GSAP 3](https://img.shields.io/badge/GSAP-3.14.2-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://gsap.com/)
[![Vite 6](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-v4.1-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

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

## Core Features

- **Linear Timeline Scrubbing**: Pinned viewport track with 800% scrub distance orchestrating multi-layer element transformations synchronously with wheel and touch gestures.
- **Bi-Directional Earbud Separation**: Precision translation vectors moving left and right acoustic units along custom 3D depth planes.
- **Exploded Component Architecture**: High-resolution exploded views dissecting the high-excursion Apple audio driver, amplifier, and acoustic mesh.
- **Adaptive Mobile Transformation**: Breakpoint-aware GSAP timelines that automatically downscale translation matrices and element scales for mobile screens without horizontal spill.
- **Smooth Preloader Gate**: Preloads media and font assets before disengaging the preloader overlay for jank-free first impressions.
- **Responsive Navigation Drawer**: Fullscreen hamburger navigation drawer with animated slide-in transitions and scroll locking.

---

## Tech Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | React `19.0.0` | Modern React root with functional hooks and concurrent scheduling |
| **Scroll Engine** | GSAP `3.14.2` | Industry standard GreenSock timeline and ScrollTrigger plugin |
| **React Integration** | `@gsap/react` `2.1.2` | Safe animation lifecycle management with `useGSAP` |
| **Styling** | Tailwind CSS `4.1.14` | High-performance atomic styling via `@tailwindcss/vite` plugin |
| **Bundler** | Vite `6.2.0` | Ultra-fast module bundling and HMR dev server |
| **Type Checking** | TypeScript `5.8.2` | Strict typings across components and GSAP refs |

---

## Project Structure

```text
react-airpro-scroll-driven-template/
├── src/
│   ├── App.tsx          # Master scroll canvas, GSAP timeline, and chapters
│   ├── main.tsx         # React 19 entry point
│   ├── index.css        # Tailwind 4 directives and custom scroll utilities
│   └── lib/             # Classname merger helpers
├── public/              # High-res product photography and SVG assets
├── raw_screenshots/     # High-resolution production screen captures
└── screenshots/         # MacBook Pro M4 & iPhone 16 Pro showcase mockups
```

---

## Getting Started & Local Development

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/widifirmaan/react-airpro-scroll-driven-template.git
   cd react-airpro-scroll-driven-template
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local dev server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

5. **Build production bundle**:
   ```bash
   npm run build
   ```

---

## License

This project is licensed under the [MIT License](LICENSE).
