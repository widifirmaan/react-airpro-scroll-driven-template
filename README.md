# 🎧 Airpro - React Scroll-driven Template

A high-performance, scroll-driven interactive landing page for Airpro. This project leverages advanced animation techniques and modern CSS architectures to deliver a premium, Apple-inspired digital experience.

---

## 🏗️ Technical Architecture

### Animation Engine: GSAP ScrollTrigger
The core experience is built on a master **GSAP (GreenSock Animation Platform)** timeline integrated with `ScrollTrigger`.
- **Interpolation**: Uses `scrub: 1` for a smooth, physics-based connection between scroll position and animation state.
- **Scene Management**: A sticky container architecture allows the AirPods to transition through multiple states (Product Reveal, Feature Callouts, and Deep Zoom) while remaining pinned in the viewport.
- **Perspective Handling**: Implements 3D transforms with `[perspective:1000px]` and `preserve-3d` to maintain visual fidelity during AirPods rotation.

### Design System: Liquid Glass 2.0
The project utilizes a custom "Liquid Glass" design language implemented via **Tailwind CSS v4**.
- **Glassmorphism**: Leverages `backdrop-blur-3xl` and semi-transparent alpha-channel colors (`white/5`, `black/60`) for organic depth.
- **Floating UI**: The navigation bar uses a decoupled, floating capsule design with dynamic hover states and centered transition borders.
- **Gooey Effects**: Utilizes SVG filters (PostCSS compatible) to create "liquid" loading animations for a high-end preloader experience.

### State & Loading Strategy
- **Global Preloader**: A centralized loading state tracks `document.readyState` and `window.onload` to ensure all high-resolution assets (4K textures, video embeds, and H2 chip imagery) are cached before revealing the UI.
- **React Logic**: Managed via `useEffect` and `useState` for clean entry/exit transitions with CSS-driven hardware acceleration.

---

## 🛠️ Technology Stack

### Core
- **React 19**: Leveraging the latest concurrent rendering features.
- **Vite 6**: Utilizing the ESM-based development server for instant HMR.
- **TypeScript**: Full type safety for animation constants and component props.

### Styling & Motion
- **Tailwind CSS v4**: Advanced utility-first styling with native support for CSS variables and container queries.
- **GSAP & ScrollTrigger**: industry-standard performance for scroll-bound animations.
- **Lucide React**: Vector-based iconography for crisp rendering on retina displays.

---

## 📂 Project Anatomy

```bash
.
├── src/
│   ├── App.tsx          # Master Component: Contains GSAP Timeline & ScrollTrigger Logic
│   ├── index.css        # Global Styles: Tailwind v4 Directives & Custom Glass Classes
│   ├── main.tsx         # Entry Point: StrictMode & Global CSS Injection
│   └── components/      # (Optional) Reusable UI components
├── public/              # High-bitrate video assets and static media
├── index.html           # Font Optimization & Meta Configuration
└── package.json         # Dependency manifest (Vite, GSAP, Tailwind)
```

---

## 🚀 Performance Optimizations

1. **Hardware Acceleration**: Used `will-change-transform` on the AirPods container to offload rendering to the GPU.
2. **PostCSS Ordering**: Font imports are optimized via `<link>` tags in the HTML head to avoid PostCSS `@import` blocking and layout shifts.
3. **Asset Lazy Loading**: Iframes for video embeds are deferred until the main thread is idle, managed by the global preloader.
4. **Debounced Resizing**: GSAP `ScrollTrigger.refresh()` is utilized to recalculate animation breakpoints on window resize events.

---

## 💻 Development Workflow

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

---

> [!IMPORTANT]
> This project requires a browser that supports CSS Backdrop Filter and hardware-accelerated 3D transforms for the intended visual experience.
