import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const screenshotsDir = path.join(projectRoot, 'screenshots');
const downloadsDir = '/home/widifirmaan/Downloads';

function encodeImage(filename) {
  const filePath = path.join(screenshotsDir, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`Peringatan: Screenshot tidak ditemukan: ${filePath}`);
    return '';
  }
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileBuffer.toString('base64')}`;
}

console.log('Memproses screenshot AirPro...');

const images = {
  heroDesktop: encodeImage('Hero Desktop.png'),
  heroMobile: encodeImage('Hero Mobile.png'),
  earbudsDesktop: encodeImage('Earbuds Desktop.png'),
  noiseDesktop: encodeImage('Noise Cancellation Desktop.png'),
  noiseMobile: encodeImage('Noise Cancellation Mobile.png'),
  spatialDesktop: encodeImage('Spatial Audio Desktop.png'),
  h2ChipDesktop: encodeImage('H2 Chip Desktop.png'),
  videoDesktop: encodeImage('Video Demo Desktop.png'),
  specsDesktop: encodeImage('Spesifikasi Desktop.png'),
  finalDesktop: encodeImage('Final Reveal Desktop.png'),
};

console.log('Menyusun HTML presentasi dengan style murni AirPro Apple Dark Showcase...');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AirPro - Web Engineering Presentation</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-black: #000000;
      --card-bg: rgba(255, 255, 255, 0.04);
      --card-bg-elevated: rgba(255, 255, 255, 0.07);
      --card-border: rgba(255, 255, 255, 0.10);
      --card-border-highlight: rgba(255, 255, 255, 0.22);
      --text-primary: #FFFFFF;
      --text-secondary: #A1A1AA;
      --text-tertiary: #71717A;
      --pill-bg: rgba(255, 255, 255, 0.06);
      --pill-border: rgba(255, 255, 255, 0.12);
      --radius-card: 24px;
      --radius-pill: 9999px;
      --shadow-elevation: 0 20px 50px rgba(0, 0, 0, 0.6);
      --shadow-nav: 0 8px 32px rgba(0, 0, 0, 0.37);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      background-color: var(--bg-black);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      color: var(--text-primary);
      line-height: 1.45;
      letter-spacing: -0.01em;
    }

    @page {
      size: 297mm 210mm;
      margin: 0;
    }

    .slide {
      width: 297mm;
      height: 210mm;
      page-break-after: always;
      position: relative;
      background: var(--bg-black);
      display: flex;
      flex-direction: column;
      padding: 16mm 20mm;
      overflow: hidden;
      background-image: 
        radial-gradient(circle at 50% -10%, rgba(255, 255, 255, 0.07) 0%, transparent 60%),
        radial-gradient(circle at 90% 90%, rgba(255, 255, 255, 0.03) 0%, transparent 40%);
    }

    /* Header Nav Pill */
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6mm;
      z-index: 10;
    }

    .brand-pill {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--pill-bg);
      border: 1px solid var(--pill-border);
      border-radius: var(--radius-pill);
      padding: 6px 16px;
      backdrop-filter: blur(16px);
      box-shadow: var(--shadow-nav);
    }

    .brand-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #FFFFFF;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    }

    .brand-title {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--text-primary);
    }

    .brand-subtitle {
      font-size: 12px;
      color: var(--text-secondary);
      font-weight: 400;
      border-left: 1px solid rgba(255, 255, 255, 0.15);
      padding-left: 10px;
      margin-left: 2px;
    }

    .badge-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      color: var(--text-secondary);
      background: var(--pill-bg);
      border: 1px solid var(--pill-border);
      border-radius: var(--radius-pill);
      padding: 6px 14px;
      letter-spacing: 0.02em;
    }

    /* Content Layout */
    .slide-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 10;
    }

    .title-block {
      margin-bottom: 5mm;
    }

    .slide-category {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 600;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 4px;
    }

    .slide-title {
      font-size: 27px;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: #FFFFFF;
      line-height: 1.15;
    }

    .slide-subtitle {
      font-size: 13.5px;
      color: var(--text-secondary);
      margin-top: 4px;
      max-width: 900px;
      font-weight: 400;
    }

    /* Glass Cards */
    .glass-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: var(--radius-card);
      backdrop-filter: blur(20px);
      box-shadow: var(--shadow-elevation);
      padding: 18px 22px;
    }

    .glass-card-elevated {
      background: var(--card-bg-elevated);
      border: 1px solid var(--card-border-highlight);
      border-radius: var(--radius-card);
      backdrop-filter: blur(20px);
      box-shadow: var(--shadow-elevation);
      padding: 18px 22px;
    }

    /* Layout Splits */
    .layout-split {
      display: grid;
      grid-template-columns: 1.12fr 0.88fr;
      gap: 20px;
      align-items: stretch;
      flex: 1;
    }

    .layout-split-reversed {
      display: grid;
      grid-template-columns: 0.88fr 1.12fr;
      gap: 20px;
      align-items: stretch;
      flex: 1;
    }

    .layout-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      flex: 1;
    }

    .layout-grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      flex: 1;
    }

    /* Visual Stage for Screenshots */
    .visual-stage {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--card-border);
      border-radius: var(--radius-card);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 100%;
      min-height: 290px;
      padding: 12px;
    }

    .visual-stage img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 14px 28px rgba(0, 0, 0, 0.7));
    }

    /* Feature Items */
    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      justify-content: center;
    }

    .feature-item {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 13px 16px;
    }

    .feature-item-title {
      font-size: 14px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 3px;
      letter-spacing: -0.01em;
    }

    .feature-item-desc {
      font-size: 12.5px;
      color: var(--text-secondary);
      line-height: 1.4;
    }

    /* Footer */
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5mm;
      padding-top: 3.5mm;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 11px;
      color: var(--text-tertiary);
      font-family: 'JetBrains Mono', monospace;
    }

    .tech-pill {
      display: inline-block;
      padding: 3px 9px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: var(--radius-pill);
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #FFFFFF;
      margin-right: 6px;
      margin-top: 5px;
    }
  </style>
</head>
<body>

  <!-- SLIDE 1: COVER -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">AirPro Showcase</div>
        <div class="brand-subtitle">Interactive 3D Audio Web Template</div>
      </div>
      <div class="badge-pill">DECK-PRO-01 / 10</div>
    </div>

    <div class="slide-content">
      <div class="layout-split">
        <div style="display: flex; flex-direction: column; justify-content: center; padding-right: 15px;">
          <div style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 16px;">
            <span class="tech-pill">React 18</span>
            <span class="tech-pill">TypeScript</span>
            <span class="tech-pill">GSAP ScrollTrigger</span>
            <span class="tech-pill">Tailwind CSS</span>
          </div>
          <h1 style="font-size: 42px; font-weight: 900; letter-spacing: -0.04em; line-height: 1.08; margin-bottom: 16px;">
            Arsitektur Web Showcase Interaktif Audio Pro
          </h1>
          <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.55; margin-bottom: 24px;">
            Eksplorasi rekayasa frontend modern dengan manipulasi timeline scrubbing 60 FPS, sinkronisasi audio-visual responsif, liquid glass navigation, dan rendering komponen tanpa jeda layout shift.
          </p>
          <div class="glass-card" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; padding: 14px 18px;">
            <div>
              <div style="font-size: 11px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;">FRAME RATE</div>
              <div style="font-size: 20px; font-weight: 800; color: #FFFFFF; margin-top: 2px;">60 FPS</div>
              <div style="font-size: 11px; color: var(--text-secondary);">GPU Composited</div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;">SCRUB VIRTUAL</div>
              <div style="font-size: 20px; font-weight: 800; color: #FFFFFF; margin-top: 2px;">3000vh</div>
              <div style="font-size: 11px; color: var(--text-secondary);">Scroll Trigger Track</div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;">ASSET WEIGHT</div>
              <div style="font-size: 20px; font-weight: 800; color: #FFFFFF; margin-top: 2px;">Zero Lag</div>
              <div style="font-size: 11px; color: var(--text-secondary);">Optimized Pipeline</div>
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.heroDesktop}" alt="AirPro Hero Desktop">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AIRPRO WEB ARCHITECTURE SHOWCASE</div>
      <div>WIDI FIRMANSYAH &bull; LEAD FRONTEND ENGINEER</div>
      <div>01 / 10</div>
    </div>
  </div>

  <!-- SLIDE 2: LATAR BELAKANG & TUJUAN REKAYASA -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Arsitektur &amp; Fondasi</div>
        <div class="brand-subtitle">Spesifikasi Kebutuhan Teknis</div>
      </div>
      <div class="badge-pill">DECK-PRO-02 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Fondasi Rekayasa Frontend</div>
        <h2 class="slide-title">Tantangan Scrubbing Interaktif &amp; Komposisi Timeline</h2>
        <p class="slide-subtitle">Membangun pengalaman web sinematik setara Apple Keynote dengan performa tinggi tanpa membebani thread rendering browser.</p>
      </div>

      <div class="layout-grid-3">
        <div class="glass-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">01 &bull; KENDALA TEKNIS</div>
          <h3 style="font-size: 17px; font-weight: 700; margin-bottom: 8px;">Scroll Jank &amp; Frame Drop</h3>
          <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
            Animasi scroll web konvensional sering mengalami layout thrashing akibat pembacaan nilai offset DOM secara berulang di main thread saat pengguna menggulir cepat.
          </p>
        </div>

        <div class="glass-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">02 &bull; SOLUSI ARSITEKTUR</div>
          <h3 style="font-size: 17px; font-weight: 700; margin-bottom: 8px;">GSAP Timeline Pinning</h3>
          <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
            Pengikatan track virtual 3000vh melalui GSAP ScrollTrigger dan hook useGSAP, memanfaatkan CSS transform hardware-accelerated tanpa merusak reflow DOM.
          </p>
        </div>

        <div class="glass-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">03 &bull; TARGET OUTPUT</div>
          <h3 style="font-size: 17px; font-weight: 700; margin-bottom: 8px;">Konsistensi Responsif</h3>
          <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
            Interpolasi skala dan koordinat X/Y secara dinamis antara desktop dan mobile breakpoint guna mempertahankan fokus narasi visual audio produk secara presisi.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AIRPRO &bull; SPESIFIKASI ARSITEKTUR</div>
      <div>STANDARISASI WEB SINEMATIK</div>
      <div>02 / 10</div>
    </div>
  </div>

  <!-- SLIDE 3: PRELOADER & HERO KINETIC -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Komponen Web</div>
        <div class="brand-subtitle">Kinetic Preloader &amp; Hero Transition</div>
      </div>
      <div class="badge-pill">DECK-PRO-03 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Manajemen Siklus Hidup &amp; Preloading</div>
        <h2 class="slide-title">Transisi State Preloader Menuju Panggung Interaktif</h2>
        <p class="slide-subtitle">Siklus load DOM terisolasi yang memastikan aset grafis telah tersimpan di cache sebelum timeline scroll diaktifkan.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.heroMobile}" alt="AirPro Hero Mobile View">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Deteksi Status Ready Document</div>
            <div class="feature-item-desc">
              Pengecekan document.readyState complete yang memicu timer fade-out CSS scale-110 dan blur, mencegah tampilan antarmuka yang belum selesai ter-render.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Initial State Transform Setup</div>
            <div class="feature-item-desc">
              Inisialisasi posisi earbud kiri dan kanan dengan properti x offset dinamis berbasis viewport width sebelum scrubber ScrollTrigger menerima input gulir.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Lock Scrolling Body Saat Transisi</div>
            <div class="feature-item-desc">
              Pencegahan scroll glitch sebelum animasi inisial selesai dengan manipulasi overflow-x hidden dan cleanup listener window load yang aman.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AIRPRO &bull; MODUL PRELOADER</div>
      <div>LIFECYCLE MANAGEMENT</div>
      <div>03 / 10</div>
    </div>
  </div>

  <!-- SLIDE 4: TIMELINE SCRUBBING & GSAP PINNING -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Inti Interaktivitas</div>
        <div class="brand-subtitle">GSAP ScrollTrigger Scrubbing Engine</div>
      </div>
      <div class="badge-pill">DECK-PRO-04 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Mesin Animasi Web</div>
        <h2 class="slide-title">Koreografi Scrubbing Virtual Track 3000vh</h2>
        <p class="slide-subtitle">Transformasi elemen AirPods dari posisi split stereo menuju penyatuan fisik secara bertahap mengikuti guliran scroll pengguna.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Scrub Smoother Parameter 2s</div>
            <div class="feature-item-desc">
              Pengaturan scrub: 2 pada timeline GSAP meredam akselerasi roda gulir mendadak sehingga gerak visual terasa elastis, stabil, dan sinematik.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Breakpoint Dynamic Coordinate Clamping</div>
            <div class="feature-item-desc">
              Pemisahan koordinat X (30% pada perangkat seluler vs 100% pada layar desktop lebar) untuk menjaga objek 3D tidak keluar dari batas viewport.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Sub-Pixel Rotation &amp; Scale Interpolation</div>
            <div class="feature-item-desc">
              Rotasi sudut dari -15 derajat ke 0 derajat dengan skala adaptif 0.5x hingga 1.0x untuk memberikan kedalaman dimensi ruang 3D nyata.
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.earbudsDesktop}" alt="AirPro Earbuds Split Scrubbing">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AIRPRO &bull; INTERACTIVE SCRUB ENGINE</div>
      <div>GSAP TIMELINE REFS</div>
      <div>04 / 10</div>
    </div>
  </div>

  <!-- SLIDE 5: NOISE CANCELLATION VISUALIZER -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Fitur Web Audio</div>
        <div class="brand-subtitle">Active Noise Cancellation Simulation</div>
      </div>
      <div class="badge-pill">DECK-PRO-05 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Simulasi Akustik Web</div>
        <h2 class="slide-title">Visualisasi Gelombang Peredam Kebisingan Aktif</h2>
        <p class="slide-subtitle">Penyajian infografis interaktif terkait mekanisme mikrofon peredam dan inversi gelombang anti-noise secara real-time.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.noiseDesktop}" alt="AirPro Active Noise Cancellation Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Inward &amp; Outward Mic Tracking</div>
            <div class="feature-item-desc">
              Diagram visual penangkapan noise eksternal dan kalkulasi frekuensi suara balik hingga 48.000 kali per detik melalui komputasi audio.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Liquid Waveform Rendering</div>
            <div class="feature-item-desc">
              Animasi gelombang frekuensi audio yang di-render dengan efisiensi CSS transform dan opacity blending tanpa membebani GPU.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Konteks Informasi Berlapis</div>
            <div class="feature-item-desc">
              Transisi teks narasi teknis yang masuk bersamaan saat objek earbud berotasi mengarah ke posisi mikrofon akustik.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AIRPRO &bull; ACOUSTIC SIMULATION MODULE</div>
      <div>COMPUTATIONAL AUDIO VISUALIZER</div>
      <div>05 / 10</div>
    </div>
  </div>

  <!-- SLIDE 6: SPATIAL AUDIO & H2 CHIPSET -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Arsitektur Komponen</div>
        <div class="brand-subtitle">Spatial Audio &amp; Chipset H2 Deep Dive</div>
      </div>
      <div class="badge-pill">DECK-PRO-06 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Eksplorasi Perangkat Keras</div>
        <h2 class="slide-title">Bedah Komponen Silikon &amp; Spatial Tracking</h2>
        <p class="slide-subtitle">Visualisasi layer komponen internal chipset H2 dengan kartu kaca semi-transparan dan penataan tipografi teknis presisi.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Modul Hardware Simulation</div>
            <div class="feature-item-desc">
              Representasi arsitektur silikon pemrosesan sinyal digital yang mengatur peredaman derau dan spatial audio multi-channel.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Dynamic Head Tracking UI</div>
            <div class="feature-item-desc">
              Visualisasi sumbu orientasi kepala pengguna dengan sensor giroskopik yang disajikan lewat elemen kartu glassmorphism modern.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">High Dynamic Range Amplifier Card</div>
            <div class="feature-item-desc">
              Spesifikasi driver kustom distorsi rendah yang dipadukan dengan tipografi JetBrains Mono untuk metrik akustik spesifik.
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.h2ChipDesktop}" alt="AirPro H2 Chip Architecture Showcase">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AIRPRO &bull; SILICON SHOWCASE</div>
      <div>HARDWARE BREAKDOWN</div>
      <div>06 / 10</div>
    </div>
  </div>

  <!-- SLIDE 7: LIQUID GLASS NAVIGATION -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Sistem Navigasi</div>
        <div class="brand-subtitle">Floating Liquid Glass Pill &amp; Mobile Overlay</div>
      </div>
      <div class="badge-pill">DECK-PRO-07 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Desain Antarmuka Modern</div>
        <h2 class="slide-title">Navigasi Mengambang dengan Efek Liquid Glass</h2>
        <p class="slide-subtitle">Komponen navigasi responsif yang memanfaatkan filter blur multi-layer dan transisi state tanpa jeda tata letak.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.noiseMobile}" alt="AirPro Mobile Navigation &amp; Layout">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Floating Centered Pill Layout</div>
            <div class="feature-item-desc">
              Posisi tetap top-4 dengan left-1/2 -translate-x-1/2 pada desktop yang menciptakan ilusi bilah kendali melayang di atas panggung audio.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Backdrop-Filter Blur 24px</div>
            <div class="feature-item-desc">
              Difusi cahaya latar belakang dengan latar putih transparan 5% dan batas 10% untuk menjaga keterbacaan teks saat animasi lewat di bawahnya.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Zero-Layout-Shift Mobile Drawer</div>
            <div class="feature-item-desc">
              Overlay menu seluler dengan penguncian scroll body dinamis via hook useEffect guna menjamin kenyamanan navigasi satu tangan.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AIRPRO &bull; NAVIGATION SYSTEM</div>
      <div>LIQUID GLASS PILL</div>
      <div>07 / 10</div>
    </div>
  </div>

  <!-- SLIDE 8: SPESIFIKASI TEKNIS & GRID BENCHMARK -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Matriks Data</div>
        <div class="brand-subtitle">Spesifikasi Komprehensif &amp; Tolok Ukur</div>
      </div>
      <div class="badge-pill">DECK-PRO-08 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Matriks Data Performa</div>
        <h2 class="slide-title">Grid Spesifikasi Teknis &amp; Efisiensi Daya</h2>
        <p class="slide-subtitle">Struktur penyajian parameter teknis menggunakan grid kartu terisolasi dengan kontras rasio tinggi untuk keterbacaan optimal.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="visual-stage">
          <img src="${images.specsDesktop}" alt="AirPro Technical Specifications Grid">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Daya Tahan Baterai &amp; Case Pengisian</div>
            <div class="feature-item-desc">
              Informasi durasi pemutaran hingga 6 jam per pengisian tunggal dan 30 jam bersama wadah pengisi daya MagSafe ditampilkan secara ringkas.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Sensor Sentuh Kapasitif &amp; Swipe Volume</div>
            <div class="feature-item-desc">
              Dokumentasi kendali gestur cubit dan usap untuk penyesuaian volume audio instan tanpa perlu menjangkau perangkat induk.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Sertifikasi Ketahanan Air IPX4</div>
            <div class="feature-item-desc">
              Perlindungan terhadap keringat dan percikan air untuk penggunaan olahraga berat di luar ruangan maupun dalam studio.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AIRPRO &bull; DATA SPECIFICATION GRID</div>
      <div>TECHNICAL METRICS</div>
      <div>08 / 10</div>
    </div>
  </div>

  <!-- SLIDE 9: OPTIMASI PERFORMA & WEB VITALS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Rekayasa Kinerja</div>
        <div class="brand-subtitle">Optimasi Rendering &amp; Core Web Vitals</div>
      </div>
      <div class="badge-pill">DECK-PRO-09 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Kinerja &amp; Keandalan Sistem</div>
        <h2 class="slide-title">Arsitektur Performa Tinggi Tanpa Penurunan Frame</h2>
        <p class="slide-subtitle">Penerapan strategi pemuatan sumber daya dan isolasi lapisan render GPU untuk mempertahankan latensi ultra-rendah.</p>
      </div>

      <div class="layout-grid-3">
        <div class="glass-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">STRATEGI MEMORI</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">useGSAP Hook Scoping</h3>
          <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">
            Penggunaan scope ref pada hook useGSAP memastikan seluruh ScrollTrigger instance, tween, dan event listener dibersihkan secara otomatis saat komponen unmount untuk menghindari memory leak.
          </p>
        </div>

        <div class="glass-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">GPU COMPOSITING</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Transform &amp; Opacity Only</h3>
          <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">
            Seluruh transisi timeline murni menggerakkan translate3d, scale, dan opacity. Tidak ada properti yang memicu layout recalculation (seperti width, height, atau top/left) selama siklus gulir aktif.
          </p>
        </div>

        <div class="glass-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">CORE WEB VITALS</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Zero CLS &amp; Low INP</h3>
          <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">
            Cumulative Layout Shift bernilai 0.00 berkat container pinning berukuran absolut dan reserved space pada gambar, menghasilkan skor responsivitas Interaction to Next Paint di bawah 50ms.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AIRPRO &bull; WEB PERFORMANCE BENCHMARKS</div>
      <div>CORE WEB VITALS OPTIMIZATION</div>
      <div>09 / 10</div>
    </div>
  </div>

  <!-- SLIDE 10: KESIMPULAN & DEPLOYMENT PIPELINE -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Ringkasan Proyek</div>
        <div class="brand-subtitle">Ekosistem Produksi &amp; Deployment</div>
      </div>
      <div class="badge-pill">DECK-PRO-10 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Produksi &amp; Rangkuman</div>
        <h2 class="slide-title">Kesimpulan Implementasi &amp; Pipeline Siap Rilis</h2>
        <p class="slide-subtitle">Rangkuman capaian rekayasa frontend AirPro dan kesiapan integrasi ke dalam sistem produksi berstandar enterprise.</p>
      </div>

      <div class="layout-grid-4">
        <div class="glass-card">
          <div style="font-size: 11px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;">BUNDLER</div>
          <div style="font-size: 18px; font-weight: 800; color: #FFFFFF; margin-top: 4px; margin-bottom: 4px;">Vite 6</div>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.45;">Kompilasi TypeScript cepat dengan Rollup code splitting teroptimasi.</p>
        </div>

        <div class="glass-card">
          <div style="font-size: 11px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;">ANIMATION</div>
          <div style="font-size: 18px; font-weight: 800; color: #FFFFFF; margin-top: 4px; margin-bottom: 4px;">GSAP 3</div>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.45;">Scrubbing ScrollTrigger terkalibrasi dengan timeline terpadu.</p>
        </div>

        <div class="glass-card">
          <div style="font-size: 11px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;">STYLING</div>
          <div style="font-size: 18px; font-weight: 800; color: #FFFFFF; margin-top: 4px; margin-bottom: 4px;">Tailwind v4</div>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.45;">Desain token Liquid Glass terintegrasi dan konsisten.</p>
        </div>

        <div class="glass-card">
          <div style="font-size: 11px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;">QUALITY</div>
          <div style="font-size: 18px; font-weight: 800; color: #FFFFFF; margin-top: 4px; margin-bottom: 4px;">100% Pass</div>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.45;">Verifikasi lintas viewport desktop dan seluler teruji.</p>
        </div>
      </div>

      <div class="visual-stage" style="min-height: 160px; max-height: 180px; margin-top: 15px;">
        <img src="${images.finalDesktop}" alt="AirPro Final Reveal Desktop">
      </div>
    </div>

    <div class="slide-footer">
      <div>AIRPRO &bull; KESIMPULAN REKAYASA WEB</div>
      <div>WIDI FIRMANSYAH &bull; LEAD ENGINEER</div>
      <div>10 / 10</div>
    </div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`HTML presentasi disimpan di: ${htmlFilePath}`);

console.log('Menjalankan Playwright Chromium untuk render PDF AirPro Apple Dark Showcase...');

async function renderPDF() {
  const playwrightPath = '/home/widifirmaan/Projects/qa-toolkit/node_modules/playwright/index.mjs';
  const { chromium } = await import(playwrightPath);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();
  await page.goto(`file://${htmlFilePath}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const slidePdfPath = path.join(downloadsDir, 'AirPro.pdf');
  const continuousPdfPath = path.join(downloadsDir, 'AirPro-Continuous.pdf');

  // 1. Multi-Page Deck Mode (10 Slides A4 Landscape)
  console.log('Rendering Multi-Page A4 Landscape (Slide Mode)...');
  await page.pdf({
    path: slidePdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
  });

  // 2. Continuous Poster Mode (Single tall scroll)
  console.log('Rendering Continuous Single-Scroll Showcase (Poster Mode)...');
  await page.addStyleTag({
    content: `
      @page {
        size: auto;
        margin: 0;
      }
      body {
        background: #000000 !important;
      }
      .slide {
        page-break-after: unset !important;
        page-break-inside: avoid !important;
        margin-bottom: 0px !important;
        box-shadow: none !important;
      }
    `
  });

  await page.waitForTimeout(500);

  const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.pdf({
    path: continuousPdfPath,
    width: '1428px',
    height: `${scrollHeight}px`,
    printBackground: true,
    pageRanges: '1',
  });

  await browser.close();

  const slideStat = fs.statSync(slidePdfPath);
  const contStat = fs.statSync(continuousPdfPath);

  console.log('\nPDF AirPro Apple Dark Showcase berhasil dibuat:');
  console.log(`- Multi-Page Deck: ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (${slidePdfPath})`);
  console.log(`- Continuous Poster: ${(contStat.size / 1024 / 1024).toFixed(2)} MB (${continuousPdfPath})\n`);
}

renderPDF().catch((err) => {
  console.error('Error saat render PDF:', err);
  process.exit(1);
});
