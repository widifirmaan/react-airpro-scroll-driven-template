#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const screenshotsDir = path.join(projectRoot, 'screenshots');
const downloadsDir = '/home/widifirmaan/Downloads';
const artifactsDir = '/home/widifirmaan/.gemini/antigravity-cli/brain/08ebf919-b450-4a62-aa6d-40dba251fefc';

// Require Playwright from qa-toolkit
const { chromium } = await import('/home/widifirmaan/Projects/qa-toolkit/node_modules/playwright/index.mjs');

function loadBase64Image(filename) {
  const filePath = path.join(screenshotsDir, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️ Warning: Image not found: ${filePath}`);
    return '';
  }
  const buffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${buffer.toString('base64')}`;
}

console.log('🖼️  Encoding screenshots into high-resolution base64 data URIs...');
const imgHeroDesktop = loadBase64Image('Hero Desktop.png');
const imgHeroMobile = loadBase64Image('Hero Mobile.png');
const imgEarbudsDesktop = loadBase64Image('Earbuds Desktop.png');
const imgNoiseDesktop = loadBase64Image('Noise Cancellation Desktop.png');
const imgNoiseMobile = loadBase64Image('Noise Cancellation Mobile.png');
const imgSpatialDesktop = loadBase64Image('Spatial Audio Desktop.png');
const imgH2ChipDesktop = loadBase64Image('H2 Chip Desktop.png');
const imgVideoDesktop = loadBase64Image('Video Demo Desktop.png');
const imgSpecsDesktop = loadBase64Image('Spesifikasi Desktop.png');
const imgFinalRevealDesktop = loadBase64Image('Final Reveal Desktop.png');

console.log('🎨 Constructing AirPro luxury Apple-style presentation deck...');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>AirPro Product Showcase Presentation 2026</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700;800&display=swap');

  @page {
    size: 297mm 210mm;
    margin: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #030406;
    color: #f1f5f9;
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .slide {
    width: 297mm;
    height: 210mm;
    padding: 15mm 18mm;
    page-break-after: always;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #050608 radial-gradient(circle at 50% 0%, rgba(30, 41, 59, 0.45) 0%, rgba(5, 6, 8, 0.98) 75%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  /* Subtle background soundwave lines */
  .soundwave-bg {
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.03) 0%, transparent 40%),
      radial-gradient(circle at 90% 80%, rgba(129, 140, 248, 0.03) 0%, transparent 40%),
      linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
    pointer-events: none;
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Glass Card */
  .glass-card {
    background: rgba(255, 255, 255, 0.025);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 20px;
    padding: 20px 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  }

  /* Pill Badge */
  .pill-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 16px;
    border-radius: 9999px;
    background: rgba(56, 189, 248, 0.09);
    border: 1px solid rgba(56, 189, 248, 0.35);
    color: #38bdf8;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    width: fit-content;
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.15);
  }

  .pill-badge.emerald {
    background: rgba(16, 185, 129, 0.09);
    border-color: rgba(16, 185, 129, 0.35);
    color: #34d399;
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.15);
  }

  .pill-badge.purple {
    background: rgba(168, 85, 247, 0.09);
    border-color: rgba(168, 85, 247, 0.35);
    color: #c084fc;
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.15);
  }

  /* Typography */
  .gradient-title {
    font-size: 2.6rem;
    font-weight: 900;
    letter-spacing: -0.035em;
    line-height: 1.05;
    background: linear-gradient(180deg, #FFFFFF 15%, #94a3b8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .gradient-cyan {
    background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .gradient-emerald {
    background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Titanium Mockup Frame */
  .mockup-frame {
    background: #000000;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 25px 50px -10px rgba(0, 0, 0, 0.95), 0 0 30px rgba(56, 189, 248, 0.08);
    display: flex;
    flex-direction: column;
  }

  .traffic-header {
    background: #0e1117;
    padding: 7px 14px;
    display: flex;
    align-items: center;
    gap: 6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  }

  .traffic-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }
  .dot-red { background: #ef4444; }
  .dot-yellow { background: #f59e0b; }
  .dot-green { background: #10b981; }
  .browser-url {
    margin-left: 10px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 9.5px;
    color: #64748b;
    letter-spacing: 0.05em;
  }

  .mockup-img {
    width: 100%;
    height: auto;
    max-height: 125mm;
    display: block;
    object-fit: contain;
    background: #000;
  }

  /* Page Number */
  .page-num {
    position: absolute;
    bottom: 12mm;
    right: 14mm;
    background: rgba(255, 255, 255, 0.035);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #38bdf8;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 800;
    padding: 4px 14px;
    border-radius: 9999px;
    letter-spacing: 0.12em;
    z-index: 10;
  }

  /* Split layout */
  .split-layout {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    gap: 28px;
    align-items: center;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .split-layout.reverse {
    grid-template-columns: 1.25fr 1fr;
  }

  /* Feature Checklist Item */
  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-top: 10px;
  }

  .feature-icon {
    width: 22px;
    height: 22px;
    border-radius: 6px;
    background: rgba(56, 189, 248, 0.12);
    border: 1px solid rgba(56, 189, 248, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #38bdf8;
    font-size: 11px;
    font-weight: 900;
    flex-shrink: 0;
  }

  .feature-text h4 {
    font-size: 12.5px;
    font-weight: 700;
    color: #f8fafc;
    margin-bottom: 2px;
  }

  .feature-text p {
    font-size: 10.5px;
    color: #94a3b8;
    line-height: 1.45;
  }

  /* Metrics Grid */
  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    width: 100%;
  }

  .metric-card {
    background: rgba(255, 255, 255, 0.025);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 16px;
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .metric-value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.8rem;
    font-weight: 900;
    color: #38bdf8;
    line-height: 1;
    margin-bottom: 4px;
  }

  .metric-label {
    font-size: 10.5px;
    font-weight: 800;
    color: #e2e8f0;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .metric-desc {
    font-size: 9.5px;
    color: #94a3b8;
    margin-top: 4px;
    line-height: 1.35;
  }

  /* Dual phone mockups */
  .dual-phone-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .phone-mockup {
    width: 145px;
    border-radius: 24px;
    background: #000;
    border: 3px solid #1e293b;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.9), 0 0 25px rgba(56, 189, 248, 0.1);
    overflow: hidden;
  }

  .phone-mockup img {
    width: 100%;
    display: block;
  }

  .phone-mockup.tilt-left {
    transform: rotate(-3deg);
  }

  .phone-mockup.tilt-right {
    transform: rotate(3deg);
  }
</style>
</head>
<body>

  <!-- ========================================================================= -->
  <!-- SLIDE 01: COVER HERO -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content" style="justify-content: center; align-items: center; text-align: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 14px; max-width: 850px;">
        <div class="pill-badge">
          <span>●</span> 2026 HARDWARE &amp; EXPERIENCE SHOWCASE
        </div>
        <h1 class="gradient-title" style="font-size: 4.8rem; line-height: 0.98;">
          AIRPRO <span class="gradient-cyan">STUDIO</span>
        </h1>
        <div class="glass-card" style="padding: 14px 28px; margin-top: 10px;">
          <p style="font-size: 15px; font-weight: 600; color: #cbd5e1; letter-spacing: 0.02em;">
            High-Fidelity Wireless Audio &amp; 3000vh GSAP Scroll Choreography
          </p>
        </div>
        
        <div style="display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap; justify-content: center;">
          <span style="font-size: 10px; font-weight: 700; color: #94a3b8; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 5px 12px; border-radius: 9999px;">Vite 6</span>
          <span style="font-size: 10px; font-weight: 700; color: #94a3b8; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 5px 12px; border-radius: 9999px;">React 19</span>
          <span style="font-size: 10px; font-weight: 700; color: #94a3b8; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 5px 12px; border-radius: 9999px;">GSAP ScrollTrigger</span>
          <span style="font-size: 10px; font-weight: 700; color: #94a3b8; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 5px 12px; border-radius: 9999px;">Tailwind CSS v4</span>
          <span style="font-size: 10px; font-weight: 700; color: #94a3b8; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 5px 12px; border-radius: 9999px;">TypeScript</span>
        </div>

        <div style="margin-top: 35px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px; width: 100%;">
          <p style="font-size: 12px; font-weight: 800; color: #f8fafc; letter-spacing: 0.1em; text-transform: uppercase;">
            WIDI FIRMAAN <span style="color: #64748b; font-weight: 400;">|</span> LEAD CREATIVE ARCHITECT
          </p>
          <p style="font-size: 10px; color: #64748b; margin-top: 3px;">AirPro Interactive Hardware Template · Engineered for Pure Performance</p>
        </div>
      </div>
    </div>
    <div class="page-num">01</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 02: HERO STAGE & FIRST IMPRESSION -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content">
      <div class="split-layout">
        <!-- Left: Text & Features -->
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div class="pill-badge">
            <span>01</span> FIRST IMPRESSION
          </div>
          <h2 class="gradient-title">
            Magic Like You've Never Heard.
          </h2>
          <div class="glass-card">
            <p style="font-size: 12.5px; line-height: 1.6; color: #cbd5e1;">
              Sebuah pengalaman pendaratan imersif yang dirancang dengan transisi preloader halus, navigation bar bergaya liquid glass transparan, dan tipografi sinematik beresolusi tinggi yang memperkenalkan era baru perangkat audio nirkabel.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;">
            <div class="feature-item">
              <div class="feature-icon">✓</div>
              <div class="feature-text">
                <h4>Liquid Glass Floating Navbar</h4>
                <p>Navigasi mengambang dengan efek backdrop-blur dinamis dan border transparan responsif.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">✓</div>
              <div class="feature-text">
                <h4>Seamless Preloader Dismissal</h4>
                <p>Transisi fade-out dan scale-up instan saat aset 3D siap dirender di kanvas pengguna.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">✓</div>
              <div class="feature-text">
                <h4>Fluid Typography Scale</h4>
                <p>Skalabilitas ukuran teks adaptif otomatis tanpa menyebabkan layout shift pada viewport desktop.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Mockup -->
        <div class="mockup-frame">
          <div class="traffic-header">
            <div class="traffic-dot dot-red"></div>
            <div class="traffic-dot dot-yellow"></div>
            <div class="traffic-dot dot-green"></div>
            <span class="browser-url">https://airpro.widifirmaan.web.id/</span>
          </div>
          <img class="mockup-img" src="${imgHeroDesktop}" alt="Hero Stage Desktop" />
        </div>
      </div>
    </div>
    <div class="page-num">02</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 03: 3D DUAL EARBUDS CHOREOGRAPHY -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content">
      <div class="split-layout reverse">
        <!-- Left: Mockup -->
        <div class="mockup-frame">
          <div class="traffic-header">
            <div class="traffic-dot dot-red"></div>
            <div class="traffic-dot dot-yellow"></div>
            <div class="traffic-dot dot-green"></div>
            <span class="browser-url">https://airpro.widifirmaan.web.id/#earbuds</span>
          </div>
          <img class="mockup-img" src="${imgEarbudsDesktop}" alt="Earbuds 3D Choreography" />
        </div>

        <!-- Right: Text & Features -->
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div class="pill-badge">
            <span>02</span> HARDWARE CHOREOGRAPHY
          </div>
          <h2 class="gradient-title">
            Architected for Total Immersion.
          </h2>
          <div class="glass-card">
            <p style="font-size: 12.5px; line-height: 1.6; color: #cbd5e1;">
              Visualisasi 3D mendalam dengan timeline GSAP ScrollTrigger sepanjang 3000vh. Saat pengguna melakukan scroll, komponen earbuds kanan dan kiri bergerak, terurai, dan menyatu kembali dalam koordinat 3 dimensi dengan kehalusan 60fps.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;">
            <div class="feature-item">
              <div class="feature-icon">⚡</div>
              <div class="feature-text">
                <h4>3000vh Scrub Timeline Scrubbing</h4>
                <p>Interpolasi posisi akurat yang terikat langsung pada posisi scroll pengguna secara deterministik.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">⚡</div>
              <div class="feature-text">
                <h4>Dual Independent Rotation Matrices</h4>
                <p>Sumbu rotasi X, Y, dan Z terpisah untuk setiap earbud guna mensimulasikan gerak floating nyata.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">⚡</div>
              <div class="feature-text">
                <h4>Hardware Acceleration</h4>
                <p>Menggunakan translate3d dan will-change untuk meminimalkan beban CPU dan konsumsi baterai.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-num">03</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 04: SILICON INNOVATION - H2 CHIP -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content">
      <div class="split-layout">
        <!-- Left: Text -->
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div class="pill-badge emerald">
            <span>03</span> SILICON INNOVATION
          </div>
          <h2 class="gradient-title">
            The Brains Behind the Sound.
          </h2>
          <div class="glass-card">
            <p style="font-size: 12.5px; line-height: 1.6; color: #cbd5e1;">
              Didukung oleh arsitektur silicon H2 rancangan kustom yang menjalankan algoritma komputasi audio mutakhir secara real-time. Memproses dan menyaring sinyal frekuensi 48.000 kali per detik untuk menghasilkan kejernihan suara akustik tanpa kompromi.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;">
            <div class="feature-item">
              <div class="feature-icon" style="background: rgba(16, 185, 129, 0.15); border-color: rgba(16, 185, 129, 0.35); color: #34d399;">⚙</div>
              <div class="feature-text">
                <h4>48,000 Cycles / Second</h4>
                <p>Pemrosesan komputasi audio instan untuk adaptasi akustik di setiap jenis musik dan lingkungan bising.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon" style="background: rgba(16, 185, 129, 0.15); border-color: rgba(16, 185, 129, 0.35); color: #34d399;">⚙</div>
              <div class="feature-text">
                <h4>Low-Distortion Custom Audio Driver</h4>
                <p>Reproduksi bass yang dalam dan treble yang jernih dengan kontrol distorsi minimal.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon" style="background: rgba(16, 185, 129, 0.15); border-color: rgba(16, 185, 129, 0.35); color: #34d399;">⚙</div>
              <div class="feature-text">
                <h4>Ultra-Low Power DSP</h4>
                <p>Optimalisasi efisiensi daya baterai untuk daya tahan mendengarkan lebih lama.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Mockup -->
        <div class="mockup-frame">
          <div class="traffic-header">
            <div class="traffic-dot dot-red"></div>
            <div class="traffic-dot dot-yellow"></div>
            <div class="traffic-dot dot-green"></div>
            <span class="browser-url">https://airpro.widifirmaan.web.id/#h2-chip</span>
          </div>
          <img class="mockup-img" src="${imgH2ChipDesktop}" alt="H2 Chip Silicon Architecture" />
        </div>
      </div>
    </div>
    <div class="page-num">04</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 05: ACTIVE NOISE CANCELLATION -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content">
      <div class="split-layout reverse">
        <!-- Left: Mockup -->
        <div class="mockup-frame">
          <div class="traffic-header">
            <div class="traffic-dot dot-red"></div>
            <div class="traffic-dot dot-yellow"></div>
            <div class="traffic-dot dot-green"></div>
            <span class="browser-url">https://airpro.widifirmaan.web.id/#noise-cancellation</span>
          </div>
          <img class="mockup-img" src="${imgNoiseDesktop}" alt="Active Noise Cancellation" />
        </div>

        <!-- Right: Text -->
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div class="pill-badge">
            <span>04</span> ACOUSTIC ISOLATION
          </div>
          <h2 class="gradient-title">
            Up to 2x More Noise Cancellation.
          </h2>
          <div class="glass-card">
            <p style="font-size: 12.5px; line-height: 1.6; color: #cbd5e1;">
              Mikrofon peredam bising eksternal dan ventilasi akustik belakang diposisikan secara strategis untuk mendeteksi gelombang suara luar, kemudian menetralkannya secara instan dengan gelombang anti-bising sebelum mencapai gendang telinga.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;">
            <div class="feature-item">
              <div class="feature-icon">🛡️</div>
              <div class="feature-text">
                <h4>Dual Beamforming Microphones</h4>
                <p>Memfokuskan tangkapan suara vokal sekaligus meredam kebisingan latar belakang dan angin.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🛡️</div>
              <div class="feature-text">
                <h4>Adaptive Transparency Mode</h4>
                <p>Memungkinkan suara sekitar tetap terdengar natural saat Anda berinteraksi dengan lingkungan luar.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🛡️</div>
              <div class="feature-text">
                <h4>Acoustic Vent Equalization</h4>
                <p>Menyeimbangkan tekanan udara di dalam telinga untuk kenyamanan pemakaian jangka panjang.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-num">05</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 06: PERSONALIZED SPATIAL AUDIO -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content">
      <div class="split-layout">
        <!-- Left: Text -->
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div class="pill-badge purple">
            <span>05</span> DYNAMIC HEAD TRACKING
          </div>
          <h2 class="gradient-title">
            Sound Tuned to Your Anatomy.
          </h2>
          <div class="glass-card">
            <p style="font-size: 12.5px; line-height: 1.6; color: #cbd5e1;">
              Teknologi Personalized Spatial Audio bekerja selaras dengan sensor giroskop dan akselerometer untuk melacak pergerakan kepala secara dinamis. Menempatkan instrumen dan vokal dalam ruang tiga dimensi yang stabil layaknya di panggung teater.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;">
            <div class="feature-item">
              <div class="feature-icon" style="background: rgba(168, 85, 247, 0.15); border-color: rgba(168, 85, 247, 0.35); color: #c084fc;">🎧</div>
              <div class="feature-text">
                <h4>Dynamic Head Tracking</h4>
                <p>Suara tetap terkunci di ruang virtual terlepas dari ke mana kepala Anda menoleh.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon" style="background: rgba(168, 85, 247, 0.15); border-color: rgba(168, 85, 247, 0.35); color: #c084fc;">🎧</div>
              <div class="feature-text">
                <h4>Custom Ear Canal Profiling</h4>
                <p>Penyetelan frekuensi audio yang disesuaikan dengan geometri unik telinga setiap pengguna.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon" style="background: rgba(168, 85, 247, 0.15); border-color: rgba(168, 85, 247, 0.35); color: #c084fc;">🎧</div>
              <div class="feature-text">
                <h4>Binaural Spatial Rendering</h4>
                <p>Reproduksi audio 360 derajat sinematik untuk film, gaming, dan rekaman audio spasial.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Mockup -->
        <div class="mockup-frame">
          <div class="traffic-header">
            <div class="traffic-dot dot-red"></div>
            <div class="traffic-dot dot-yellow"></div>
            <div class="traffic-dot dot-green"></div>
            <span class="browser-url">https://airpro.widifirmaan.web.id/#spatial-audio</span>
          </div>
          <img class="mockup-img" src="${imgSpatialDesktop}" alt="Personalized Spatial Audio" />
        </div>
      </div>
    </div>
    <div class="page-num">06</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 07: RESPONSIVE MOBILE EXPERIENCE -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content">
      <div style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px;">
        <div class="pill-badge">
          <span>06</span> CROSS-DEVICE EXCELLENCE
        </div>
        <h2 class="gradient-title" style="font-size: 2.3rem;">
          Flawless Across Every Screen Size.
        </h2>
        <p style="font-size: 12px; color: #94a3b8; max-width: 650px;">
          Dioptimalkan secara presisi untuk perangkat mobile dengan touch target ramah jemari, drawer navigasi liquid glass, dan performa scroll 60fps tanpa lagging.
        </p>
      </div>

      <div style="display: flex; align-items: center; justify-content: center; gap: 40px; margin: 15px 0;">
        <!-- Dual Phone Mockups -->
        <div class="dual-phone-container">
          <div class="phone-mockup tilt-left">
            <img src="${imgHeroMobile}" alt="Mobile Landing" />
          </div>
          <div class="phone-mockup tilt-right">
            <img src="${imgNoiseMobile}" alt="Mobile Noise Cancellation" />
          </div>
        </div>

        <!-- Right Detail Card -->
        <div class="glass-card" style="max-width: 360px; display: flex; flex-direction: column; gap: 12px;">
          <h3 style="font-size: 15px; font-weight: 800; color: #ffffff;">Mobile First Invariants:</h3>
          <div class="feature-item">
            <div class="feature-icon">📱</div>
            <div class="feature-text">
              <h4>Zero Horizontal Overflow</h4>
              <p>Viewport terjaga presisi pada iPhone 16 Pro (393x852) tanpa pergeseran sumbu horizontal.</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📱</div>
            <div class="feature-text">
              <h4>Touch Target &gt;= 44px</h4>
              <p>Semua tombol CTA dan hamburger menu memenuhi standar aksesibilitas WCAG AA.</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📱</div>
            <div class="feature-text">
              <h4>Mobile GSAP Performance</h4>
              <p>Dukungan scroll touch native dengan pinning optimal tanpa loncatan visual (zero-jank).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-num">07</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 08: INTERACTIVE CINEMATIC VIDEO DEMO -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content">
      <div class="split-layout">
        <!-- Left: Text -->
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div class="pill-badge">
            <span>07</span> MEDIA DEMONSTRATION
          </div>
          <h2 class="gradient-title">
            Experience the Sound in Motion.
          </h2>
          <div class="glass-card">
            <p style="font-size: 12.5px; line-height: 1.6; color: #cbd5e1;">
              Seksi demonstrasi multimedia terintegrasi dengan pemutar video beresolusi tinggi, kontrol interaktif, rasio aspek sinematik 16:9, dan mode backdrop gelap untuk presentasi audio visual penuh.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;">
            <div class="feature-item">
              <div class="feature-icon">▶</div>
              <div class="feature-text">
                <h4>Cinematic 16:9 Video Container</h4>
                <p>Framing presisi dengan rasio standar industri video untuk pemutaran tanpa distorsi piksel.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">▶</div>
              <div class="feature-text">
                <h4>Theater Mode Ambient Backdrop</h4>
                <p>Pencahayaan latar belakang gelap yang menyerap fokus pengguna langsung ke konten media.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">▶</div>
              <div class="feature-text">
                <h4>Accessible Media Controls</h4>
                <p>Mendukung navigasi keyboard, gesture sentuh, dan kontrol volume terintegrasi.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Mockup -->
        <div class="mockup-frame">
          <div class="traffic-header">
            <div class="traffic-dot dot-red"></div>
            <div class="traffic-dot dot-yellow"></div>
            <div class="traffic-dot dot-green"></div>
            <span class="browser-url">https://airpro.widifirmaan.web.id/#video-demo</span>
          </div>
          <img class="mockup-img" src="${imgVideoDesktop}" alt="Cinematic Video Demo" />
        </div>
      </div>
    </div>
    <div class="page-num">08</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 09: TECHNICAL SPECIFICATIONS & METRICS -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content">
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <div class="pill-badge emerald">
          <span>08</span> HARDWARE BENCHMARKS
        </div>
        <h2 class="gradient-title" style="font-size: 2.2rem;">
          Pro Performance in Every Dimension.
        </h2>
      </div>

      <!-- 4 Metrics Row -->
      <div class="metrics-grid" style="margin: 12px 0;">
        <div class="metric-card">
          <div>
            <div class="metric-value">6.0 hrs</div>
            <div class="metric-label">Listening Time</div>
          </div>
          <p class="metric-desc">Hingga 6 jam pemutaran audio dengan ANC aktif (30 jam dengan MagSafe Case).</p>
        </div>
        <div class="metric-card">
          <div>
            <div class="metric-value" style="color: #34d399;">48,000 /s</div>
            <div class="metric-label">Acoustic Tuning</div>
          </div>
          <p class="metric-desc">Siklus komputasi per detik dari chipset H2 untuk penyesuaian akustik adaptif.</p>
        </div>
        <div class="metric-card">
          <div>
            <div class="metric-value" style="color: #c084fc;">IP54</div>
            <div class="metric-label">Dust &amp; Water Resistant</div>
          </div>
          <p class="metric-desc">Sertifikasi ketahanan debu, keringat, dan cipratan air untuk aktivitas luar ruangan.</p>
        </div>
        <div class="metric-card">
          <div>
            <div class="metric-value" style="color: #f59e0b;">BT 5.3</div>
            <div class="metric-label">Wireless Protocol</div>
          </div>
          <p class="metric-desc">Koneksi nirkabel ultra-low latency dengan dukungan LE Audio generasi terbaru.</p>
        </div>
      </div>

      <!-- Bottom: Specs Mockup Frame -->
      <div class="mockup-frame" style="max-height: 82mm;">
        <div class="traffic-header">
          <div class="traffic-dot dot-red"></div>
          <div class="traffic-dot dot-yellow"></div>
          <div class="traffic-dot dot-green"></div>
          <span class="browser-url">https://airpro.widifirmaan.web.id/#specifications</span>
        </div>
        <img class="mockup-img" src="${imgSpecsDesktop}" alt="Technical Specifications Sheet" style="max-height: 72mm; object-fit: cover;" />
      </div>
    </div>
    <div class="page-num">09</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 10: MODERN TECHNOLOGY & GRAND CLOSING -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content" style="align-items: center; text-align: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <div class="pill-badge">
          <span>09</span> ENGINEERING EXCELLENCE
        </div>
        <h2 class="gradient-title" style="font-size: 2.3rem;">
          The Architecture Behind AirPro.
        </h2>
      </div>

      <!-- 3 Stack Cards -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; width: 100%; max-width: 900px; margin: 12px 0;">
        <div class="glass-card" style="text-align: left; padding: 16px 20px;">
          <h3 style="font-size: 13px; font-weight: 800; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">
            CORE PLATFORM
          </h3>
          <ul style="font-size: 11px; color: #cbd5e1; list-style: none; line-height: 1.8;">
            <li>✦ <strong>React 19:</strong> Fast concurrent rendering</li>
            <li>✦ <strong>Vite 6:</strong> Sub-second HMR module bundler</li>
            <li>✦ <strong>TypeScript:</strong> Type-safe interface contracts</li>
            <li>✦ <strong>HTML5 Video:</strong> Native hardware decoding</li>
          </ul>
        </div>

        <div class="glass-card" style="text-align: left; padding: 16px 20px;">
          <h3 style="font-size: 13px; font-weight: 800; color: #34d399; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">
            MOTION &amp; 3D
          </h3>
          <ul style="font-size: 11px; color: #cbd5e1; list-style: none; line-height: 1.8;">
            <li>✦ <strong>GSAP Core:</strong> High-performance timeline tween</li>
            <li>✦ <strong>ScrollTrigger:</strong> 3000vh scrub choreographer</li>
            <li>✦ <strong>CSS 3D Matrix:</strong> Hardware-accelerated GPU</li>
            <li>✦ <strong>RAF Loop:</strong> Flawless 60fps render syncing</li>
          </ul>
        </div>

        <div class="glass-card" style="text-align: left; padding: 16px 20px;">
          <h3 style="font-size: 13px; font-weight: 800; color: #c084fc; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">
            DESIGN SYSTEM
          </h3>
          <ul style="font-size: 11px; color: #cbd5e1; list-style: none; line-height: 1.8;">
            <li>✦ <strong>Tailwind CSS v4:</strong> Modern CSS-first engine</li>
            <li>✦ <strong>Liquid Glass:</strong> Real-time backdrop blurring</li>
            <li>✦ <strong>Lucide Icons:</strong> Ultra-clean SVG icon suite</li>
            <li>✦ <strong>Fluid Typography:</strong> Clamp-based scaling</li>
          </ul>
        </div>
      </div>

      <!-- Grand Footer -->
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; margin-top: 10px;">
        <h1 class="gradient-title" style="font-size: 3.5rem; letter-spacing: 0.05em; line-height: 1;">
          HEAR THE UNHEARD.
        </h1>
        <div class="pill-badge" style="font-size: 11px; padding: 6px 22px;">
          WIDI FIRMAAN <span style="opacity: 0.6;">·</span> LEAD ARCHITECT &amp; DEVELOPER
        </div>
        <p style="font-size: 10px; color: #64748b; margin-top: 4px; font-family: 'JetBrains Mono', monospace;">
          AirPro Hardware Showcase · 2026 Production Edition · widifirmaan.web.id
        </p>
      </div>
    </div>
    <div class="page-num">10</div>
  </section>

</body>
</html>`;

// Write the generated HTML to a temporary file
const htmlPath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlPath, htmlContent);
console.log(`📄 Presentation HTML written to: ${htmlPath}`);

console.log('🚀 Launching Chromium with Playwright to render PDF...');
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 2,
});

await page.setContent(htmlContent, { waitUntil: 'load' });
await page.waitForTimeout(1000); // Allow any fonts and layout to settle

// 1. Generate Multi-Page Landscape PDF Presentation (A4 297x210mm)
const pdfPathProject = path.join(projectRoot, 'AirPro.pdf');
const pdfPathDownloads = path.join(downloadsDir, 'AirPro.pdf');
const pdfPathArtifacts = path.join(artifactsDir, 'AirPro.pdf');

console.log('🖨️  Rendering Multi-Page A4 Landscape Presentation PDF (Slide Mode)...');
const pdfBuffer = await page.pdf({
  format: 'A4',
  landscape: true,
  printBackground: true,
  preferCSSPageSize: true,
});

fs.writeFileSync(pdfPathProject, pdfBuffer);
fs.writeFileSync(pdfPathDownloads, pdfBuffer);
fs.writeFileSync(pdfPathArtifacts, pdfBuffer);

const pdfSizeMB = (pdfBuffer.length / (1024 * 1024)).toFixed(2);

// 2. Generate Continuous Showcase PDF (Matching Book Games single long scroll format)
const pdfContinuousProject = path.join(projectRoot, 'AirPro-Continuous.pdf');
const pdfContinuousDownloads = path.join(downloadsDir, 'AirPro-Continuous.pdf');
const pdfContinuousArtifacts = path.join(artifactsDir, 'AirPro-Continuous.pdf');

console.log('📜 Rendering Continuous Single-Scroll Showcase PDF (Poster Mode)...');
// Inject CSS override to remove page breaks and add card margins for seamless vertical scroll
await page.addStyleTag({
  content: `
    @page { size: auto; margin: 0; }
    body { padding: 40px 0; background: #030406; display: flex; flex-direction: column; align-items: center; gap: 40px; }
    .slide { page-break-after: unset !important; border: 1px solid rgba(255,255,255,0.12) !important; border-radius: 28px !important; box-shadow: 0 30px 60px rgba(0,0,0,0.8) !important; }
  `
});
await page.waitForTimeout(500);

const bodyHeight = await page.evaluate(() => document.documentElement.scrollHeight);
const continuousBuffer = await page.pdf({
  width: '1428px',
  height: `${bodyHeight}px`,
  printBackground: true,
});

fs.writeFileSync(pdfContinuousProject, continuousBuffer);
fs.writeFileSync(pdfContinuousDownloads, continuousBuffer);
fs.writeFileSync(pdfContinuousArtifacts, continuousBuffer);

const contSizeMB = (continuousBuffer.length / (1024 * 1024)).toFixed(2);

console.log(`\n================================================================================`);
console.log(`🎉 AIRPRO PRESENTATION PDFS SUCCESSFULLY GENERATED!`);
console.log(`📦 Multi-Page Deck (Slides)   : ${pdfSizeMB} MB (10 Pages A4 Landscape)`);
console.log(`   -> Saved: ${pdfPathDownloads}`);
console.log(`📦 Continuous Poster (Scroll) : ${contSizeMB} MB (1 Long Showcase Page)`);
console.log(`   -> Saved: ${pdfContinuousDownloads}`);
console.log(`================================================================================\n`);

await browser.close();
process.exit(0);
