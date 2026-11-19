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

console.log('🎨 Constructing AirPro Web Architecture & Features presentation deck...');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>AirPro Web Showcase - Presentasi Arsitektur & Fitur Web</title>
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
    padding: 14mm 16mm;
    page-break-after: always;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #050608 radial-gradient(circle at 50% 0%, rgba(30, 41, 59, 0.45) 0%, rgba(5, 6, 8, 0.98) 75%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  /* Subtle background grid */
  .soundwave-bg {
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.03) 0%, transparent 40%),
      radial-gradient(circle at 90% 80%, rgba(129, 140, 248, 0.03) 0%, transparent 40%),
      linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 36px 36px, 36px 36px;
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
    border-radius: 18px;
    padding: 18px 22px;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  }

  /* Pill Badge */
  .pill-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 15px;
    border-radius: 9999px;
    background: rgba(56, 189, 248, 0.09);
    border: 1px solid rgba(56, 189, 248, 0.35);
    color: #38bdf8;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    width: fit-content;
  }

  .pill-badge.emerald {
    background: rgba(16, 185, 129, 0.09);
    border-color: rgba(16, 185, 129, 0.35);
    color: #34d399;
  }

  .pill-badge.purple {
    background: rgba(168, 85, 247, 0.09);
    border-color: rgba(168, 85, 247, 0.35);
    color: #c084fc;
  }

  /* Typography */
  .gradient-title {
    font-size: 2.4rem;
    font-weight: 900;
    letter-spacing: -0.035em;
    line-height: 1.08;
    background: linear-gradient(180deg, #FFFFFF 20%, #94a3b8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .gradient-cyan {
    background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Titanium Mockup Frame */
  .mockup-frame {
    background: #000000;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 25px 50px -10px rgba(0, 0, 0, 0.95), 0 0 25px rgba(56, 189, 248, 0.06);
    display: flex;
    flex-direction: column;
  }

  .traffic-header {
    background: #0e1117;
    padding: 6px 12px;
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
    margin-left: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    color: #64748b;
    letter-spacing: 0.04em;
  }

  .mockup-img {
    width: 100%;
    height: auto;
    max-height: 122mm;
    display: block;
    object-fit: contain;
    background: #000;
  }

  /* Page Number */
  .page-num {
    position: absolute;
    bottom: 11mm;
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
    gap: 26px;
    align-items: center;
    height: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .split-layout.reverse {
    grid-template-columns: 1.25fr 1fr;
  }

  /* Feature Checklist Item */
  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 8px;
  }

  .feature-icon {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background: rgba(56, 189, 248, 0.12);
    border: 1px solid rgba(56, 189, 248, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #38bdf8;
    font-size: 10.5px;
    font-weight: 900;
    flex-shrink: 0;
  }

  .feature-text h4 {
    font-size: 12px;
    font-weight: 700;
    color: #f8fafc;
    margin-bottom: 2px;
  }

  .feature-text p {
    font-size: 10px;
    color: #94a3b8;
    line-height: 1.4;
  }

  /* Dual phone mockups */
  .dual-phone-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
  }

  .phone-mockup {
    width: 140px;
    border-radius: 22px;
    background: #000;
    border: 2px solid #1e293b;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.9), 0 0 20px rgba(56, 189, 248, 0.08);
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
  <!-- SLIDE 01: COVER -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content" style="justify-content: center; align-items: center; text-align: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 14px; max-width: 860px;">
        <div class="pill-badge">
          <span>●</span> WEB APPLICATION SHOWCASE · 2026
        </div>
        <h1 class="gradient-title" style="font-size: 4.2rem; line-height: 1;">
          REACTJS AIRPRO <span class="gradient-cyan">TEMPLATE</span>
        </h1>
        <div class="glass-card" style="padding: 12px 28px; margin-top: 6px;">
          <p style="font-size: 14px; font-weight: 600; color: #cbd5e1; letter-spacing: 0.02em;">
            Template Web Showcase Interaktif Berbasis React 19 &amp; GSAP ScrollTrigger
          </p>
        </div>
        
        <p style="font-size: 12px; color: #94a3b8; max-width: 680px; line-height: 1.6; margin-top: 6px;">
          Arsitektur frontend modern yang mengintegrasikan animasi scroll sepanjang 3000vh, navigasi melayang bergaya liquid glass, drawer menu mobile adaptif, dan optimasi performa 60fps tanpa lagging.
        </p>

        <div style="display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap; justify-content: center;">
          <span style="font-size: 10px; font-weight: 700; color: #94a3b8; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 5px 12px; border-radius: 9999px;">React 19</span>
          <span style="font-size: 10px; font-weight: 700; color: #94a3b8; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 5px 12px; border-radius: 9999px;">Vite 6</span>
          <span style="font-size: 10px; font-weight: 700; color: #94a3b8; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 5px 12px; border-radius: 9999px;">GSAP ScrollTrigger</span>
          <span style="font-size: 10px; font-weight: 700; color: #94a3b8; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 5px 12px; border-radius: 9999px;">Tailwind CSS v4</span>
          <span style="font-size: 10px; font-weight: 700; color: #94a3b8; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 5px 12px; border-radius: 9999px;">TypeScript</span>
        </div>

        <div style="margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 14px; width: 100%;">
          <p style="font-size: 11px; font-weight: 800; color: #f8fafc; letter-spacing: 0.1em; text-transform: uppercase;">
            WIDI FIRMAAN <span style="color: #64748b; font-weight: 400;">|</span> LEAD FRONTEND DEVELOPER
          </p>
          <p style="font-size: 9.5px; color: #64748b; margin-top: 2px;">Dokumentasi &amp; Presentasi Teknis Aplikasi Web</p>
        </div>
      </div>
    </div>
    <div class="page-num">01</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 02: FITUR WEB - PRELOADER LIFECYCLE -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content">
      <div class="split-layout">
        <!-- Left: Text -->
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div class="pill-badge">
            <span>01</span> FITUR WEB: PRELOADER LIFECYCLE
          </div>
          <h2 class="gradient-title">
            Preloader &amp; Asset State Management
          </h2>
          <div class="glass-card">
            <p style="font-size: 11.5px; line-height: 1.6; color: #cbd5e1;">
              Sistem manajemen siklus pemuatan aplikasi web berbasis state React (<code style="color: #38bdf8; font-family: monospace;">showPreloader</code> &amp; <code style="color: #38bdf8; font-family: monospace;">isLoaded</code>) yang memvalidasi kesiapan dokumen HTML dan aset visual sebelum membuka akses interaktif bagi pengguna.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 2px;">
            <div class="feature-item">
              <div class="feature-icon">✓</div>
              <div class="feature-text">
                <h4>Event Listener Window Onload</h4>
                <p>Memeriksa <code style="color:#cbd5e1">document.readyState === 'complete'</code> untuk mencegah FOUC (Flash of Unstyled Content).</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">✓</div>
              <div class="feature-text">
                <h4>Transisi CSS Halus (1000ms)</h4>
                <p>Animasi penutupan bertahap dengan kombinasi class <code style="color:#cbd5e1">opacity-0</code>, <code style="color:#cbd5e1">scale-110</code>, dan <code style="color:#cbd5e1">blur-sm</code>.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">✓</div>
              <div class="feature-text">
                <h4>Pembersihan Memori DOM</h4>
                <p>Menghapus container preloader dari tree DOM setelah transisi animasi selesai menggunakan setTimeout.</p>
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
          <img class="mockup-img" src="${imgHeroDesktop}" alt="Hero Stage Web Desktop" />
        </div>
      </div>
    </div>
    <div class="page-num">02</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 03: FITUR WEB - LIQUID GLASS NAVBAR -->
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
            <span class="browser-url">https://airpro.widifirmaan.web.id/#navigation</span>
          </div>
          <img class="mockup-img" src="${imgEarbudsDesktop}" alt="Floating Navbar Web Showcase" />
        </div>

        <!-- Right: Text -->
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div class="pill-badge">
            <span>02</span> FITUR WEB: FLOATING NAVBAR
          </div>
          <h2 class="gradient-title">
            Liquid Glass Navigation Bar
          </h2>
          <div class="glass-card">
            <p style="font-size: 11.5px; line-height: 1.6; color: #cbd5e1;">
              Komponen navigasi melayang (*floating navbar*) dengan posisi tetap (<code style="color: #38bdf8; font-family: monospace;">position: fixed</code>) yang mengadopsi prinsip desain liquid glass modern, memberikan akses navigasi cepat tanpa menghalangi visual konten utama.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 2px;">
            <div class="feature-item">
              <div class="feature-icon">✦</div>
              <div class="feature-text">
                <h4>Backdrop Filter Blur (24px)</h4>
                <p>Mengaburkan konten latar belakang secara real-time saat pengguna menggulir halaman ke bawah.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">✦</div>
              <div class="feature-text">
                <h4>Animasi Link Hover Underline</h4>
                <p>Garis bawah dinamis dengan pseudo-element <code style="color:#cbd5e1">::after</code> yang melebar dari tengah (<code style="color:#cbd5e1">w-1/2</code>) saat di-hover.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">✦</div>
              <div class="feature-text">
                <h4>Tombol CTA dengan Efek Tekan</h4>
                <p>Tombol interaktif dengan efek bayangan biru dan umpan balik sentuhan <code style="color:#cbd5e1">active:scale-95</code>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-num">03</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 04: FITUR WEB - GSAP 3000vh SCROLL SYSTEM -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content">
      <div class="split-layout">
        <!-- Left: Text -->
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div class="pill-badge emerald">
            <span>03</span> FITUR WEB: GSAP SCROLL SYSTEM
          </div>
          <h2 class="gradient-title">
            Interactive 3000vh Scroll Scrubbing
          </h2>
          <div class="glass-card">
            <p style="font-size: 11.5px; line-height: 1.6; color: #cbd5e1;">
              Inti dari interaktivitas web ini adalah arsitektur animasi berbasis GSAP ScrollTrigger sepanjang timeline virtual <code style="color: #34d399; font-family: monospace;">end: "+=3000%"</code> dengan parameter <code style="color: #34d399; font-family: monospace;">scrub: 2</code> yang mengikat transformasi elemen secara langsung pada pergerakan scroll pengguna.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 2px;">
            <div class="feature-item">
              <div class="feature-icon" style="background: rgba(16, 185, 129, 0.12); border-color: rgba(16, 185, 129, 0.3); color: #34d399;">⚡</div>
              <div class="feature-text">
                <h4>Isolasi Lifecycle dengan useGSAP Hook</h4>
                <p>Menghubungkan timeline animasi ke <code style="color:#cbd5e1">rootRef</code> React untuk mencegah kebocoran memori saat unmount.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon" style="background: rgba(16, 185, 129, 0.12); border-color: rgba(16, 185, 129, 0.3); color: #34d399;">⚡</div>
              <div class="feature-text">
                <h4>Transformasi Koordinat 3 Sumbu (X, Y, Rotate)</h4>
                <p>Sinkronisasi perpindahan posisi, rotasi sudut, dan skala pembesaran elemen visual secara deterministik.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon" style="background: rgba(16, 185, 129, 0.12); border-color: rgba(16, 185, 129, 0.3); color: #34d399;">⚡</div>
              <div class="feature-text">
                <h4>Inisialisasi Aman dengan ScrollTrigger.refresh()</h4>
                <p>Menghitung ulang posisi trigger secara otomatis setelah seluruh elemen layout selesai dimuat.</p>
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
            <span class="browser-url">https://airpro.widifirmaan.web.id/#timeline-scrub</span>
          </div>
          <img class="mockup-img" src="${imgEarbudsDesktop}" alt="GSAP Timeline Scrubbing Demo" />
        </div>
      </div>
    </div>
    <div class="page-num">04</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 05: FITUR WEB - BREAKPOINT LOGIC -->
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
            <span class="browser-url">https://airpro.widifirmaan.web.id/#responsive-logic</span>
          </div>
          <img class="mockup-img" src="${imgNoiseDesktop}" alt="Responsive Viewport Breakpoint Logic" />
        </div>

        <!-- Right: Text -->
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div class="pill-badge">
            <span>04</span> FITUR WEB: VIEWPORT ADAPTATION
          </div>
          <h2 class="gradient-title">
            Dynamic Viewport Calculations
          </h2>
          <div class="glass-card">
            <p style="font-size: 11.5px; line-height: 1.6; color: #cbd5e1;">
              Skrip aplikasi web secara cerdas mendeteksi lebar jendela browser (<code style="color: #38bdf8; font-family: monospace;">window.innerWidth &lt; 768</code>) untuk secara dinamis mengkalkulasi jarak pergeseran animasi dan skala komponen agar tidak menabrak teks pada layar kecil.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 2px;">
            <div class="feature-item">
              <div class="feature-icon">📐</div>
              <div class="feature-text">
                <h4>Variabel Pergeseran splitX Dinamis</h4>
                <p>Menggunakan nilai <code style="color:#cbd5e1">30%</code> pada mobile dan <code style="color:#cbd5e1">100%</code> pada desktop untuk menjaga komposisi visual.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">📐</div>
              <div class="feature-text">
                <h4>Kompensasi Skala featureScale</h4>
                <p>Menurunkan skala elemen menjadi 0.5x pada mobile (vs 0.8x desktop) agar konten teks tetap terbaca jelas.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">📐</div>
              <div class="feature-text">
                <h4>Vertical Centering (y: -4vh)</h4>
                <p>Menyesuaikan titik tumpu vertikal elemen agar berada tepat di atas blok deskripsi pada perangkat smartphone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-num">05</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 06: FITUR WEB - CONTENT SEQUENCING -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content">
      <div class="split-layout">
        <!-- Left: Text -->
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div class="pill-badge purple">
            <span>05</span> FITUR WEB: CONTENT SEQUENCING
          </div>
          <h2 class="gradient-title">
            Multi-Stage Content Sequencing
          </h2>
          <div class="glass-card">
            <p style="font-size: 11.5px; line-height: 1.6; color: #cbd5e1;">
              Sistem pengaturan timeline konten yang mengatur pergantian teks presentasi (<code style="color: #c084fc; font-family: monospace;">feature-1</code> ke <code style="color: #c084fc; font-family: monospace;">feature-2</code>) secara berurutan dengan jeda baca (*hold duration*) terukur saat pengguna melakukan scroll.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 2px;">
            <div class="feature-item">
              <div class="feature-icon" style="background: rgba(168, 85, 247, 0.12); border-color: rgba(168, 85, 247, 0.3); color: #c084fc;">⏱️</div>
              <div class="feature-text">
                <h4>Pemberian Jeda Baca (.to({}, { duration: 5 }))</h4>
                <p>Menghentikan pergeseran sementara saat scroll agar pengguna dapat membaca penjelasan fitur dengan nyaman.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon" style="background: rgba(168, 85, 247, 0.12); border-color: rgba(168, 85, 247, 0.3); color: #c084fc;">⏱️</div>
              <div class="feature-text">
                <h4>Cross-Fade Transition Antar Tahapan</h4>
                <p>Animasi memudar keluar (-=3s) dari seksi pertama yang bertumpang tindih secara mulus dengan masuknya seksi berikutnya.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon" style="background: rgba(168, 85, 247, 0.12); border-color: rgba(168, 85, 247, 0.3); color: #c084fc;">⏱️</div>
              <div class="feature-text">
                <h4>Smooth Zoom-Out Menuju Teks Akhir</h4>
                <p>Elemen visual membesar hingga 3x skala lalu memudar saat teks kesimpulan akhir diungkap.</p>
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
            <span class="browser-url">https://airpro.widifirmaan.web.id/#content-sequencing</span>
          </div>
          <img class="mockup-img" src="${imgSpatialDesktop}" alt="Content Sequencing Showcase" />
        </div>
      </div>
    </div>
    <div class="page-num">06</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 07: FITUR WEB - MOBILE DRAWER & TOUCH -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content">
      <div style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 6px;">
        <div class="pill-badge">
          <span>06</span> FITUR WEB: MOBILE UX &amp; TOUCH
        </div>
        <h2 class="gradient-title" style="font-size: 2.2rem;">
          Mobile Drawer &amp; Scroll Lock Management
        </h2>
        <p style="font-size: 11.5px; color: #94a3b8; max-width: 650px;">
          Pengalaman navigasi mobile native dengan kontrol menu drawer transparan, animasi staggered menu links, dan manajemen overflow scroll dokumen secara dinamis.
        </p>
      </div>

      <div style="display: flex; align-items: center; justify-content: center; gap: 36px; margin: 12px 0;">
        <!-- Dual Phone Mockups -->
        <div class="dual-phone-container">
          <div class="phone-mockup tilt-left">
            <img src="${imgHeroMobile}" alt="Tampilan Mobile Landing" />
          </div>
          <div class="phone-mockup tilt-right">
            <img src="${imgNoiseMobile}" alt="Tampilan Mobile Section" />
          </div>
        </div>

        <!-- Right Detail Card -->
        <div class="glass-card" style="max-width: 380px; display: flex; flex-direction: column; gap: 10px;">
          <h3 style="font-size: 13.5px; font-weight: 800; color: #ffffff;">Prinsip Implementasi Mobile Web:</h3>
          <div class="feature-item">
            <div class="feature-icon">🔒</div>
            <div class="feature-text">
              <h4>Scroll Lock (<code style="font-size:9.5px">document.body.style.overflow</code>)</h4>
              <p>Mencegah scroll halaman saat drawer menu terbuka dengan menyetel properti ke <code style="color:#cbd5e1">'hidden'</code>.</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✨</div>
            <div class="feature-text">
              <h4>Staggered Delay Menu Links</h4>
              <p>Tautan menu muncul satu per satu dengan penundaan otomatis: <code style="color:#cbd5e1">transitionDelay: (i + 1) * 100ms</code>.</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📱</div>
            <div class="feature-text">
              <h4>Zero Horizontal Scroll Invariant</h4>
              <p>Memastikan lebar konten tidak melebihi lebar viewport iPhone 16 Pro (393px) untuk mencegah pergeseran layar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-num">07</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 08: FITUR WEB - EMBEDDED MEDIA -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content">
      <div class="split-layout">
        <!-- Left: Text -->
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div class="pill-badge">
            <span>07</span> FITUR WEB: EMBEDDED MEDIA
          </div>
          <h2 class="gradient-title">
            Responsive Video Showcase Container
          </h2>
          <div class="glass-card">
            <p style="font-size: 11.5px; line-height: 1.6; color: #cbd5e1;">
              Integrasi seksi pemutar video responsif dengan rasio aspek 16:9 yang diletakkan di luar container scroll pinning untuk memberikan pengalaman transisi alur web yang alami bagi pengunjung.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 2px;">
            <div class="feature-item">
              <div class="feature-icon">▶</div>
              <div class="feature-text">
                <h4>Fluid Aspect-Ratio Preservation</h4>
                <p>Menggunakan teknik pembungkus rasio aspek fleksibel agar tampilan video tidak terpotong pada berbagai resolusi monitor.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">▶</div>
              <div class="feature-text">
                <h4>Theater-Mode Dark Styling</h4>
                <p>Pencahayaan latar belakang gelap murni (<code style="color:#cbd5e1">#000000</code>) yang menonjolkan konten video visual secara maksimal.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">▶</div>
              <div class="feature-text">
                <h4>Lazy Loading Media Iframe</h4>
                <p>Pemuatan deferred untuk memastikan aset skrip utama selesai diunduh tanpa tertahan oleh koneksi media eksternal.</p>
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
          <img class="mockup-img" src="${imgVideoDesktop}" alt="Responsive Video Container Web Feature" />
        </div>
      </div>
    </div>
    <div class="page-num">08</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 09: FITUR WEB - SPECIFICATIONS GRID -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content">
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <div class="pill-badge emerald">
          <span>08</span> FITUR WEB: DATA VISUALIZATION
        </div>
        <h2 class="gradient-title" style="font-size: 2.1rem;">
          Staggered Specification Cards Layout
        </h2>
      </div>

      <!-- 4 Code & Feature Cards -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 10px 0;">
        <div class="glass-card" style="padding: 12px 14px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 800; color: #38bdf8;">Grid Layout</div>
          <div style="font-size: 10px; font-weight: 800; color: #f1f5f9; text-transform: uppercase; margin-top: 2px;">CSS Grid 4-Column</div>
          <p style="font-size: 9.5px; color: #94a3b8; margin-top: 4px; line-height: 1.4;">Tata letak kartu modular yang melipat menjadi 1-2 kolom secara otomatis pada layar smartphone.</p>
        </div>
        <div class="glass-card" style="padding: 12px 14px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 800; color: #34d399;">ScrollTrigger</div>
          <div style="font-size: 10px; font-weight: 800; color: #f1f5f9; text-transform: uppercase; margin-top: 2px;">Start: "top 70%"</div>
          <p style="font-size: 9.5px; color: #94a3b8; margin-top: 4px; line-height: 1.4;">Memicu animasi kemunculan elemen saat seksi mencapai 70% tinggi jendela browser pengguna.</p>
        </div>
        <div class="glass-card" style="padding: 12px 14px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 800; color: #c084fc;">Stagger 0.15s</div>
          <div style="font-size: 10px; font-weight: 800; color: #f1f5f9; text-transform: uppercase; margin-top: 2px;">Sequential Entrance</div>
          <p style="font-size: 9.5px; color: #94a3b8; margin-top: 4px; line-height: 1.4;">Jeda berurutan 150ms antar kartu untuk efek kemunculan visual yang teratur dan rapi.</p>
        </div>
        <div class="glass-card" style="padding: 12px 14px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 800; color: #f59e0b;">Easing Kurva</div>
          <div style="font-size: 10px; font-weight: 800; color: #f1f5f9; text-transform: uppercase; margin-top: 2px;">ease: "power3.out"</div>
          <p style="font-size: 9.5px; color: #94a3b8; margin-top: 4px; line-height: 1.4;">Kurva deselerasi kubik alami yang menghentikan pergerakan kartu secara perlahan dan halus.</p>
        </div>
      </div>

      <!-- Bottom: Specs Mockup Frame -->
      <div class="mockup-frame" style="max-height: 82mm;">
        <div class="traffic-header">
          <div class="traffic-dot dot-red"></div>
          <div class="traffic-dot dot-yellow"></div>
          <div class="traffic-dot dot-green"></div>
          <span class="browser-url">https://airpro.widifirmaan.web.id/#specifications-grid</span>
        </div>
        <img class="mockup-img" src="${imgSpecsDesktop}" alt="Technical Specifications Sheet" style="max-height: 72mm; object-fit: cover;" />
      </div>
    </div>
    <div class="page-num">09</div>
  </section>

  <!-- ========================================================================= -->
  <!-- SLIDE 10: ARSITEKTUR TEKNOLOGI & RINGKASAN -->
  <!-- ========================================================================= -->
  <section class="slide">
    <div class="soundwave-bg"></div>
    <div class="slide-content" style="align-items: center; text-align: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
        <div class="pill-badge">
          <span>09</span> ARSITEKTUR FRONTEND &amp; TEKNOLOGI
        </div>
        <h2 class="gradient-title" style="font-size: 2.2rem;">
          The Architecture Behind AirPro Template
        </h2>
      </div>

      <!-- 3 Stack Cards -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; width: 100%; max-width: 900px; margin: 12px 0;">
        <div class="glass-card" style="text-align: left; padding: 16px 20px;">
          <h3 style="font-size: 12.5px; font-weight: 800; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">
            CORE FRONTEND
          </h3>
          <ul style="font-size: 10.5px; color: #cbd5e1; list-style: none; line-height: 1.8;">
            <li>✦ <strong>React 19:</strong> Fast concurrent rendering</li>
            <li>✦ <strong>Vite 6:</strong> Sub-second HMR module bundler</li>
            <li>✦ <strong>TypeScript:</strong> Type-safe interface contracts</li>
            <li>✦ <strong>ESM Imports:</strong> Native modern JavaScript</li>
          </ul>
        </div>

        <div class="glass-card" style="text-align: left; padding: 16px 20px;">
          <h3 style="font-size: 12.5px; font-weight: 800; color: #34d399; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">
            MOTION &amp; ANIMATION
          </h3>
          <ul style="font-size: 10.5px; color: #cbd5e1; list-style: none; line-height: 1.8;">
            <li>✦ <strong>GSAP 3 Core:</strong> High-performance timeline tween</li>
            <li>✦ <strong>ScrollTrigger:</strong> 3000vh scrub choreographer</li>
            <li>✦ <strong>@gsap/react:</strong> Safe React lifecycle scoping</li>
            <li>✦ <strong>CSS 3D Transforms:</strong> Hardware GPU rendering</li>
          </ul>
        </div>

        <div class="glass-card" style="text-align: left; padding: 16px 20px;">
          <h3 style="font-size: 12.5px; font-weight: 800; color: #c084fc; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">
            STYLING &amp; UX
          </h3>
          <ul style="font-size: 10.5px; color: #cbd5e1; list-style: none; line-height: 1.8;">
            <li>✦ <strong>Tailwind CSS v4:</strong> Modern CSS-first engine</li>
            <li>✦ <strong>Liquid Glass Blur:</strong> Backdrop-filter styling</li>
            <li>✦ <strong>Lucide React:</strong> Clean SVG icon components</li>
            <li>✦ <strong>Scroll Locking:</strong> Body overflow state control</li>
          </ul>
        </div>
      </div>

      <!-- Grand Footer -->
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; margin-top: 8px;">
        <h1 class="gradient-title" style="font-size: 3rem; letter-spacing: 0.04em; line-height: 1;">
          REACTJS AIRPRO TEMPLATE
        </h1>
        <div class="pill-badge" style="font-size: 11px; padding: 6px 22px;">
          WIDI FIRMAAN <span style="opacity: 0.6;">·</span> LEAD FRONTEND DEVELOPER
        </div>
        <p style="font-size: 10px; color: #64748b; margin-top: 4px; font-family: 'JetBrains Mono', monospace;">
          Interactive Web Showcase · 2026 Production Edition · widifirmaan.web.id
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
console.log(`🎉 AIRPRO WEB ARCHITECTURE PDFS SUCCESSFULLY GENERATED!`);
console.log(`📦 Multi-Page Deck (Slides)   : ${pdfSizeMB} MB (10 Pages A4 Landscape)`);
console.log(`   -> Saved: ${pdfPathDownloads}`);
console.log(`📦 Continuous Poster (Scroll) : ${contSizeMB} MB (1 Long Showcase Page)`);
console.log(`   -> Saved: ${pdfContinuousDownloads}`);
console.log(`================================================================================\n`);

await browser.close();
process.exit(0);
