# 🎧 Airpro - React Scroll-driven Template

**Airpro** is a high-performance, scroll-driven interactive landing page built with **React 19**, **Vite 6**, and **GSAP 3**. It leverages advanced animation techniques and modern CSS architectures to deliver a premium, Apple-inspired digital experience. Rebuilt from the sound up, it features a custom **Liquid Glass Design System** implemented via **Tailwind CSS v4**, featuring high-end glassmorphism, fluid motion, and hardware-accelerated 3D transforms.

![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![GSAP](https://img.shields.io/badge/GSAP_3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

Explore the visual journey of **Airpro** through our interactive gallery.

| | |
|:---:|:---:|
| ![Hero](screenshot/Hero%20Page.png)<br>**Hero Section** | ![Reveal](screenshot/Product%20Page.png)<br>**Animated Product Reveal** |
| ![Features](screenshot/Product%20Info%20Page.png)<br>**Feature Deep-Dive** | ![Footer](screenshot/Footer%20Page.png)<br>**Liquid Glass Stats & Footer** |

---

### 🎮 Immersive Motion
*   **GSAP ScrollTrigger**: Physics-based scroll interpolation (`scrub: 1`) for cinematic storytelling.
*   **3D Perspective**: Implements hardware-accelerated 3D transforms (`preserve-3d`) for realistic product rotation.
*   **Staggered Entrance**: Content sections feature orchestrated entry animations for a premium feel.

### 🧩 Liquid Glass Design
*   **Glassmorphism 2.0**: High-density `backdrop-blur-3xl` with semi-transparent tinted backgrounds.
*   **Floating Navigation**: Capsule-shaped floating navbar with dynamic hover interactions and center-out transitions.
*   **Gooey Preloader**: Event-driven global loading system featuring liquid SVG filters and curtain reveal animations.

### 📱 Technical Excellence
*   **Mobile-First Core**: Fully responsive architecture that adapts complex GSAP timelines across all viewports.
*   **Performance First**: Zero layout shifts, optimized PostCSS ordering, and `will-change-transform` GPU offloading.
*   **React 19 Ready**: Utilizing the latest concurrent rendering and state management patterns.

---

### 🛠️ Architecture & Logic
*   **Framework**: React 19 (Hooks, StrictMode)
*   **Animations**: GSAP (ScrollTrigger, useGSAP)
*   **Styling**: Tailwind CSS v4 (Alpha), Modern CSS Variables
*   **Iconography**: Lucide React
*   **Tooling**: Vite 6, PostCSS, TypeScript

---

### 📂 Project Structure
```bash
/
├── src/
│   ├── App.tsx          # Main logic & GSAP timelines
│   ├── index.css        # Liquid Glass design system
│   └── main.tsx         # App entry & global CSS
├── public/              # High-bitrate video & 4K media
├── index.html           # Font & Meta optimization
├── package.json         # Dependency manifest
└── vite.config.ts       # Vite & Tailwind configuration
```

---

### 📦 Quick Start

```bash
# Clone the repository
git clone https://github.com/widifirmaan/airpro-smooth-react-template.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 👥 Authors
Developed with ❤️ by:
*   **AI Studio Builder** - Lead Implementation
*   **Widi Firmansyah** - Product Vision & Iteration

---

## 📜 License
This project is developed for educational and showcase purposes. Any distribution or commercial use requires prior authorization.

---

**Developed for a better sound experience** 🚀
