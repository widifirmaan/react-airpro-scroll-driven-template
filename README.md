# AirPro

> Template etalase produk hardware modern berbasis React 19, Tailwind CSS v4, dan animasi scroll interaktif GSAP ScrollTrigger.

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

## Screenshot

| Desktop | Mobile |
| :---: | :---: |
| **Hero Stage & Video Latar Belakang**<br>![Hero](screenshots/Hero%20Desktop.png) | **Hero Stage & Video Latar Belakang**<br>![Hero](screenshots/Hero%20Mobile.png) |
| **Pemisahan Unit Earbud (GSAP Scroll-Scrub)**<br>![Earbuds](screenshots/Earbuds%20Desktop.png) | **Pemisahan Unit Earbud (GSAP Scroll-Scrub)**<br>![Earbuds](screenshots/Earbuds%20Mobile.png) |
| **Koreografi Pure Sound & Spatial Audio**<br>![Spatial Audio](screenshots/Spatial%20Audio%20Desktop.png) | **Koreografi Pure Sound & Spatial Audio**<br>![Spatial Audio](screenshots/Spatial%20Audio%20Mobile.png) |
| **Fitur Performa Chip Audio H2**<br>![H2 Chip](screenshots/H2%20Chip%20Desktop.png) | **Fitur Performa Chip Audio H2**<br>![H2 Chip](screenshots/H2%20Chip%20Mobile.png) |
| **Grid Kartu Spesifikasi Baterai & Daya Tahan**<br>![Spesifikasi](screenshots/Spesifikasi%20Desktop.png) | **Grid Kartu Spesifikasi Baterai & Daya Tahan**<br>![Spesifikasi](screenshots/Spesifikasi%20Mobile.png) |
| **Pemutar Video Demonstrasi Produk**<br>![Video Demo](screenshots/Video%20Demo%20Desktop.png) | **Pemutar Video Demonstrasi Produk**<br>![Video Demo](screenshots/Video%20Demo%20Mobile.png) |

---

## Fitur

- **Timeline Scroll-Driven GSAP**: Canvas *sticky* yang mengikat pergerakan scroll pengguna langsung ke timeline GSAP (`useGSAP`) dengan sinkronisasi scrub (`scrub: 2`).
- **Koreografi Perspektif Unit Earbud**: Transformasi pemisahan unit earbud kiri dan kanan di sepanjang sumbu 3D yang tersinkronisasi dengan perubahan tipografi judul.
- **Section Callout Fitur**: Pemunculan bertahap fitur Active Noise Cancellation dan Personalized Spatial Audio yang disinkronkan dengan posisi scroll.
- **Kartu Arsitektur Audio H2**: Blok presentasi fitur berlatar gelap dengan pencahayaan ambient glow yang menjelaskan performa chip dan driver kustom.
- **Grid Kartu Spesifikasi Produk**: Tata letak kartu metrik spesifikasi (Baterai 6 jam, Total 30 jam dengan casing, Resistansi air IPX4, Bluetooth 5.3) dengan interaksi hover dinamis.
- **Floating Pill Navigation Bar**: Bilah navigasi melayang responsif (`backdrop-blur-2xl`) dengan menu desktop, tombol Call-to-Action, dan menu drawer mobile.
- **Video Latar Belakang Ambient**: Pemutaran video atmosferik berkelanjutan (`/background-video.mp4`) dengan efek overlay gradient radial.
- **Pemutar Demonstrasi Video Produk**: Kontainer tersemat dengan rasio 16:9 untuk video showcase produk.
- **Asset Preloader**: Gerbang pemuatan aset yang memastikan video dan visual selesai dimuat sebelum panggung utama ditampilkan.

---

## Tech Stack

| Kategori | Teknologi | Deskripsi / Peran |
| :--- | :--- | :--- |
| **Framework Utama** | React `19.0.0`, Vite `6.2.0` | Fondasi SPA modern dengan build cepat dan Hot Module Replacement (HMR) |
| **Animasi & Timeline** | GSAP `3.14.2`, ScrollTrigger, `@gsap/react` `2.1.2` | Engine koreografi animasi 3D dan scroll-scrub yang diakselerasi hardware |
| **Styling** | Tailwind CSS `4.1.14` (`@tailwindcss/vite`) | Desain responsif modern berbasis utility dan token `@theme` |
| **Type System** | TypeScript `5.8.2` | Keamanan tipe komponen, referensi DOM, dan parameter timeline |
| **Ikonografi** | Lucide React `0.546.0` | Ikon vektor minimalis untuk menu navigasi dan kontrol |
| **Utilitas Kelas** | `clsx 2.1.1`, `tailwind-merge 3.5.0` | Penggabungan kelas CSS kondisional tanpa konflik utilitas |

---

## Panduan Setup & Menjalankan Lokal

### 1. Prasyarat Sistem

- **Node.js**: Versi `18.0.0` atau lebih baru (`20.x` direkomendasikan)
- **npm** atau **pnpm**
- Database: **Tidak membutuhkan database** (aplikasi statis client-side).

### 2. Environment Variables

Tidak ada environment variable khusus yang dibutuhkan.

### 3. Instalasi & Menjalankan Server Lokal

```bash
# 1. Clone repository
git clone https://github.com/widifirmaan/reactjs-airpro-template.git
cd reactjs-airpro-template

# 2. Install dependensi
npm install

# 3. Jalankan server development Vite
npm run dev
```

Buka URL yang ditampilkan pada terminal (biasanya [http://localhost:5173](http://localhost:5173)) di browser Anda.

### 4. Panduan Uji Manual (Testing Checklist)

| No | Fitur | Langkah Pengujian | Hasil yang Diharapkan |
| :---: | :--- | :--- | :--- |
| 1 | **Preloader Aset** | Refresh halaman browser | Preloader tampil sejenak hingga aset gambar dan video siap dirender |
| 2 | **Hero Stage** | Amati tampilan landing page utama | Teks "Magic like you've never heard" tampil jelas di atas video latar |
| 3 | **Scroll Scrubbing GSAP** | Lakukan scroll ke bawah secara perlahan | Sepasang earbud bergerak memisah dan berotasi secara halus mengikuti timeline scroll |
| 4 | **Bagian H2 Chip** | Lanjutkan scroll hingga ke section chip audio | Card H2 Chip tampil dengan pencahayaan ambient glow biru |
| 5 | **Kartu Spesifikasi** | Arahkan kursor (*hover*) ke kartu baterai & Bluetooth | Kartu sedikit terangkat (*translate-y*) dengan efek glassmorphism interaktif |
| 6 | **Navigasi Mobile** | Perkecil lebar layar browser ke ukuran smartphone, klik menu hamburger | Drawer menu navigasi terbuka mulus dari samping |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
