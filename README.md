# AirPro

> Responsive hardware product showcase template built with React 19, Tailwind CSS v4, and GSAP ScrollTrigger animation choreography.

[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![GSAP 3](https://img.shields.io/badge/GSAP-3.14.2-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://gsap.com/)
[![Vite 6](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-v4.1-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Live Demo](https://img.shields.io/badge/Demo-Vercel-10B981?style=flat-square)](https://airpro-smooth-react-template.vercel.app/)

---

## Live URL

- **Production URL**: [https://airpro-smooth-react-template.vercel.app/](https://airpro-smooth-react-template.vercel.app/)

---

## Screenshots

| Desktop | Mobile |
| :---: | :---: |
| **Hero Stage Presentation & Ambient Video**<br>![Hero](screenshots/Hero%20Desktop.png) | **Hero Stage Presentation & Ambient Video**<br>![Hero](screenshots/Hero%20Mobile.png) |
| **Dual Earbuds Separation (GSAP Scroll-Scrub)**<br>![Earbuds](screenshots/Earbuds%20Desktop.png) | **Dual Earbuds Separation (GSAP Scroll-Scrub)**<br>![Earbuds](screenshots/Earbuds%20Mobile.png) |
| **Active Noise Cancellation Stage**<br>![Noise Cancellation](screenshots/Noise%20Cancellation%20Desktop.png) | **Active Noise Cancellation Stage**<br>![Noise Cancellation](screenshots/Noise%20Cancellation%20Mobile.png) |
| **Pure Sound & Spatial Audio Stage**<br>![Spatial Audio](screenshots/Spatial%20Audio%20Desktop.png) | **Pure Sound & Spatial Audio Stage**<br>![Spatial Audio](screenshots/Spatial%20Audio%20Mobile.png) |
| **Final Product Reveal & Floating Earbuds**<br>![Final Reveal](screenshots/Final%20Reveal%20Desktop.png) | **Final Product Reveal & Floating Earbuds**<br>![Final Reveal](screenshots/Final%20Reveal%20Mobile.png) |
| **H2 Audio Chip Architecture & Performance**<br>![H2 Chip](screenshots/H2%20Chip%20Desktop.png) | **H2 Audio Chip Architecture & Performance**<br>![H2 Chip](screenshots/H2%20Chip%20Mobile.png) |
| **Hardware Battery & Specifications Grid**<br>![Spesifikasi](screenshots/Spesifikasi%20Desktop.png) | **Hardware Battery & Specifications Grid**<br>![Spesifikasi](screenshots/Spesifikasi%20Mobile.png) |
| **Product Demonstration Video Showcase**<br>![Video Demo](screenshots/Video%20Demo%20Desktop.png) | **Product Demonstration Video Showcase**<br>![Video Demo](screenshots/Video%20Demo%20Mobile.png) |

---

## Features

- **Scroll-Driven GSAP Timeline**: Sticky viewport canvas binding scroll progress directly to a master GSAP timeline (`useGSAP`) with smooth scrub synchronization (`scrub: 2`).
- **Perspective Earbud Choreography**: Coordinated translation vectors separating left and right audio units along 3D axes accompanied by typographic headline transitions.
- **Section Feature Callouts**: Scroll-triggered callouts displaying Active Noise Cancellation and Personalized Spatial Audio highlights.
- **H2 Audio Chip Presentation**: Dark feature block with ambient blue lighting detailing custom amplifier and driver performance.
- **Hardware Specification Cards Grid**: Responsive grid of metric cards (6 hrs Battery Life, 30 hrs With Case, IPX4 Water Resistance, Bluetooth 5.3) with glassmorphism hover interactions.
- **Floating Pill Navigation Bar**: Responsive floating pill navigation bar (`backdrop-blur-2xl`) with desktop link anchors, CTA action button, and mobile drawer.
- **Ambient Background Video**: Continuous ambient video loop layer (`/background-video.mp4`) with radial gradient overlay.
- **Product Demonstration Video**: Responsive 16:9 embedded player showcasing the product video.
- **Asset Preloader**: Preloader gate ensuring video and image assets are fully loaded before revealing the main stage.

---

## Tech Stack

| Category | Technology | Description / Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React `19.0.0`, Vite `6.2.0` | Modern SPA foundation with fast Vite HMR and production bundle optimization |
| **Scroll & Timeline** | GSAP `3.14.2`, ScrollTrigger, `@gsap/react` `2.1.2` | Hardware-accelerated 3D scroll-scrub timeline and choreography |
| **Styling** | Tailwind CSS `4.1.14` (`@tailwindcss/vite`) | Utility-first styling with modern `@theme` design tokens |
| **Type System** | TypeScript `5.8.2` | Type-safe components, DOM refs, and GSAP timeline parameters |
| **Iconography** | Lucide React `0.546.0` | Minimalist line icons for navigation toggles and controls |
| **Class Utilities** | `clsx 2.1.1`, `tailwind-merge 3.5.0` | Conditional CSS class concatenation and conflicting utility resolution |

---

## Local Setup & Deployment

### 1. Prerequisites

- **Node.js**: Version `18.0.0` or higher (`20.x` recommended)
- **npm** or **pnpm**
- Database: **No database required** (100% static client-side application).

### 2. Environment Variables

No environment variables are required.

### 3. Installation & Running the Local Server

```bash
# 1. Clone the repository
git clone https://github.com/widifirmaan/reactjs-airpro-template.git
cd reactjs-airpro-template

# 2. Install dependencies
npm install

# 3. Start Vite development server
npm run dev
```

Open the local URL displayed in the terminal (usually [http://localhost:5173](http://localhost:5173)) in your browser.

### 4. Manual Testing Checklist

| No | Feature | Test Steps | Expected Result |
| :---: | :--- | :--- | :--- |
| 1 | **Asset Preloader** | Refresh the browser page | Preloader displays briefly until visual and video assets are ready |
| 2 | **Hero Stage** | Observe the initial viewport landing | "Magic like you've never heard" text renders cleanly over the background video |
| 3 | **GSAP Scroll-Scrub** | Scroll down slowly | Left and right earbuds smoothly separate and rotate along the scroll timeline |
| 4 | **H2 Chip Section** | Scroll to the H2 Chip section | Card renders with blue ambient glow and typography callout |
| 5 | **Specification Cards** | Hover over battery and Bluetooth cards | Cards lift slightly with interactive glassmorphism hover styles |
| 6 | **Mobile Navigation** | Resize browser to mobile width, click hamburger menu | Mobile navigation drawer slides open smoothly from the right |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
