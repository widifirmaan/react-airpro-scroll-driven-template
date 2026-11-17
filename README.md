# AirPro

> Responsive React 19 product showcase template featuring scroll-driven GSAP animation.

AirPro is a responsive React web template designed for hardware product showcases and creative landing pages. Built with React 19, GSAP ScrollTrigger, and Tailwind CSS v4, it synchronizes product visuals with scroll progression—featuring an ambient video hero section, dual earbud perspective transitions, feature callouts (Active Noise Cancellation, Spatial Audio), hardware specification cards, and an embedded demonstration video.

[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![GSAP 3](https://img.shields.io/badge/GSAP-3.14.2-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://gsap.com/)
[![Vite 6](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-v4.1-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## Showcase

| Desktop | Mobile |
| :---: | :---: |
| **Hero Stage Presentation Desktop**<br>![AirPro Hero Stage Desktop](screenshots/AirPro%20Hero%20Stage%20Desktop.png) | **Hero Stage Presentation Mobile**<br>![AirPro Hero Stage Mobile](screenshots/AirPro%20Hero%20Stage%20Mobile.png) |
| **Dual Floating Earbuds Scroll Stage Desktop**<br>![AirPro Dual Earbuds Desktop](screenshots/AirPro%20Dual%20Earbuds%20Desktop.png) | **Dual Floating Earbuds Scroll Stage Mobile**<br>![AirPro Dual Earbuds Mobile](screenshots/AirPro%20Dual%20Earbuds%20Mobile.png) |
| **Active Noise Cancellation Stage Desktop**<br>![AirPro Active Noise Cancellation Desktop](screenshots/AirPro%20Active%20Noise%20Cancellation%20Desktop.png) | **Active Noise Cancellation Stage Mobile**<br>![AirPro Active Noise Cancellation Mobile](screenshots/AirPro%20Active%20Noise%20Cancellation%20Mobile.png) |
| **Personalized Spatial Audio Stage Desktop**<br>![AirPro Spatial Audio Desktop](screenshots/AirPro%20Spatial%20Audio%20Desktop.png) | **Personalized Spatial Audio Stage Mobile**<br>![AirPro Spatial Audio Mobile](screenshots/AirPro%20Spatial%20Audio%20Mobile.png) |
| **Hardware Specifications Desktop**<br>![AirPro Battery Specs Desktop](screenshots/AirPro%20Battery%20%26%20Specifications%20Desktop.png) | **Hardware Specifications Mobile**<br>![AirPro Battery Specs Mobile](screenshots/AirPro%20Battery%20%26%20Specifications%20Mobile.png) |

---

## Features

- **Scroll-Driven GSAP Timeline**: Sticky viewport canvas binding scroll progress directly to a master GSAP timeline (`useGSAP`) with smooth scrub synchronization (`scrub: 2`).
- **Perspective Earbud Animation**: Coordinated translation vectors separating left and right audio units along depth axes accompanied by typographic transitions.
- **Feature Callouts**: Scroll-triggered callout sections showcasing Active Noise Cancellation and Personalized Spatial Audio highlights.
- **Audio Processor Overview**: Dark feature block with ambient glow detailing custom amplifier and driver synergy.
- **Product Specification Cards**: Responsive grid of metric cards (`6 hrs Battery Life`, `30 hrs With Case`, `IPX4 Water Resistant`, `5.3 Bluetooth`) with hover states.
- **Floating Navigation Bar**: Responsive floating pill navigation bar (`backdrop-blur-2xl`, `bg-white/5`) with desktop link anchors, CTA button, and mobile drawer.
- **Background Video Atmosphere**: Continuous ambient video loop layer (`/background-video.mp4`) with blur and radial gradient overlay.
- **Embedded Demonstration Video**: Responsive 16:9 player embedding product demonstration video from YouTube.
- **Asset Preloader**: Preloader gate ensuring video and image assets are loaded before revealing the stage.

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
├── screenshots/         # Showcase mockups
├── package.json
├── vite.config.ts
└── README.md
```

---

## Local Setup & Deployment

### 1. Prerequisites

- **Node.js**: Version `18.0.0` or higher (`20.x` recommended)
- **npm** or **pnpm**

### 2. Installation & Menjalankan Server Lokal

Template ini berjalan sepenuhnya di sisi klien tanpa database:

```bash
# 1. Clone repository
git clone https://github.com/widifirmaan/reactjs-airpro-template.git
cd reactjs-airpro-template

# 2. Install dependencies
npm install

# 3. Jalankan server development Vite
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### 3. Panduan Uji Manual (Testing Checklist)

Lakukan verifikasi manual berikut di browser:

| No | Fitur yang Diuji | Langkah Pengujian | Hasil yang Diharapkan |
| :---: | :--- | :--- | :--- |
| 1 | **Asset Preloader** | Refresh halaman `http://localhost:3000` | Preloader tampil hingga seluruh aset video/gambar siap |
| 2 | **Ambient Video Hero** | Amati area hero utama di landing page | Video latar belakang terputar otomatis dan halus (looping) |
| 3 | **Scroll Scrubbing GSAP** | Scroll perlahan ke bawah | Sepasang earbud bergerak memisah dan berotasi secara sinkron mengikuti posisi scroll |
| 4 | **Section Callouts** | Teruskan scroll ke fitur ANC & Spatial Audio | Teks penjelasan muncul bertahap (*fade & slide*) sesuai timeline scrub |
| 5 | **Kartu Spesifikasi** | Hover pada card spesifikasi baterai dan ketahanan | Efek interaksi hover glassmorphism merespons kursor |
| 6 | **Demo Video Embed** | Scroll ke bagian video player di bawah, klik play | Pemutar video demonstrasi YouTube dapat diputar lancar |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
