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
    console.warn(`Warning: Screenshot not found: ${filePath}`);
    return '';
  }
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileBuffer.toString('base64')}`;
}

console.log('Encoding AirPro screenshots...');

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

console.log('Constructing clean AirPro Presentation Deck HTML...');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AirPro - Web Architecture Showcase</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #05070B;
      --bg-card: rgba(18, 24, 38, 0.7);
      --border-card: rgba(255, 255, 255, 0.1);
      --accent-cyan: #38BDF8;
      --accent-blue: #60A5FA;
      --text-main: #F8FAFC;
      --text-muted: #94A3B8;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      background-color: var(--bg-dark);
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--text-main);
      line-height: 1.45;
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
      background: var(--bg-dark);
      display: flex;
      flex-direction: column;
      padding: 16mm 18mm;
      overflow: hidden;
      background-image: 
        radial-gradient(circle at 85% 15%, rgba(56, 189, 248, 0.08) 0%, transparent 50%),
        linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
      background-size: 100% 100%, 36px 36px, 36px 36px;
    }

    .slide::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #38BDF8, #818CF8);
      z-index: 50;
    }

    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5mm;
      border-bottom: 1px solid var(--border-card);
      padding-bottom: 3.5mm;
    }

    .header-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      color: var(--accent-cyan);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.3);
      padding: 3px 10px;
      border-radius: 4px;
    }

    .slide-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: var(--text-muted);
    }

    .slide-body {
      display: grid;
      grid-template-columns: 1fr 1.35fr;
      gap: 22px;
      flex: 1;
      min-height: 0;
    }

    .slide-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 0;
    }

    .headline-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .slide-title {
      font-size: 24px;
      font-weight: 800;
      line-height: 1.2;
      color: #FFFFFF;
      letter-spacing: -0.02em;
    }

    .slide-desc {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.5;
    }

    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 10px 0;
    }

    .feature-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 6px;
      padding: 12px 14px;
      border-left: 3px solid var(--accent-cyan);
    }

    .feature-card-title {
      font-size: 12px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 4px;
    }

    .feature-card-text {
      font-size: 11px;
      color: var(--text-muted);
      line-height: 1.45;
    }

    .metrics-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .metric-box {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 6px;
      padding: 8px 10px;
      text-align: center;
    }

    .metric-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 15px;
      font-weight: 800;
      color: var(--accent-cyan);
    }

    .metric-lbl {
      font-size: 9px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin-top: 2px;
    }

    /* Clean Direct Screenshot Display without nested mockup frames */
    .visual-stage {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      min-height: 0;
    }

    .screenshot-desktop {
      max-width: 95%;
      max-height: 380px;
      object-fit: contain;
      display: block;
      filter: drop-shadow(0 14px 28px rgba(0, 0, 0, 0.6));
    }

    .screenshot-mobile {
      position: absolute;
      right: 0px;
      bottom: -8px;
      max-height: 280px;
      max-width: 28%;
      object-fit: contain;
      display: block;
      filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.7));
    }

    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid var(--border-card);
      padding-top: 3.5mm;
      margin-top: 4mm;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: #64748B;
      font-weight: 600;
    }

    /* Cover Slide */
    .cover-slide {
      background: 
        radial-gradient(circle at 75% 25%, rgba(56, 189, 248, 0.14) 0%, transparent 60%),
        #05070B;
      justify-content: space-between;
      padding: 18mm 20mm;
    }

    .cover-title {
      font-size: 46px;
      font-weight: 900;
      line-height: 1.05;
      letter-spacing: -0.03em;
      color: #FFFFFF;
      margin-bottom: 12px;
    }

    .cover-title span {
      color: var(--accent-cyan);
    }

    .cover-desc {
      font-size: 15px;
      line-height: 1.5;
      color: var(--text-muted);
      max-width: 680px;
    }

    .cover-split {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 28px;
      align-items: center;
      margin: 10px 0;
    }

    .cover-specs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .spec-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 6px;
      padding: 12px 14px;
    }

    .spec-k {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 700;
      color: var(--accent-cyan);
      text-transform: uppercase;
      margin-bottom: 3px;
    }

    .spec-v {
      font-size: 13.5px;
      font-weight: 700;
      color: #FFFFFF;
    }

    /* Tech Stack Grid */
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-top: 10px;
      flex: 1;
    }

    .tech-col {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 8px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .tech-col-title {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding-bottom: 6px;
      border-bottom: 1px solid var(--border-card);
      color: var(--accent-cyan);
    }

    .tech-item {
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 5px;
      padding: 8px 10px;
      font-size: 11px;
    }

    .tech-item-name {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 2px;
    }

    .tech-item-desc {
      font-size: 10px;
      color: var(--text-muted);
      line-height: 1.4;
    }

    /* Closing Slide */
    .closing-slide {
      background: radial-gradient(circle at 50% 40%, rgba(56, 189, 248, 0.12) 0%, transparent 60%), #05070B;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20mm;
      gap: 18px;
    }

    .closing-title {
      font-size: 36px;
      font-weight: 900;
      letter-spacing: -0.02em;
      color: #FFFFFF;
    }

    .closing-card {
      background: var(--bg-card);
      border: 1px solid var(--accent-cyan);
      border-radius: 8px;
      padding: 16px 36px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      margin-top: 10px;
    }

    .closing-url {
      font-family: 'JetBrains Mono', monospace;
      font-size: 16px;
      font-weight: 800;
      color: var(--accent-cyan);
    }
  </style>
</head>
<body>

  <!-- SLIDE 01: COVER -->
  <div class="slide cover-slide">
    <div>
      <div style="display:flex; gap:12px; align-items:center;">
        <div class="header-tag">WEB SHOWCASE</div>
        <div class="header-tag" style="border-color:#10B981; color:#34D399; background:rgba(16,185,129,0.1);">PRODUCTION READY</div>
      </div>
      <div style="margin-top: 20px; max-width: 80%;">
        <div class="cover-title">
          <span>AIRPRO</span> WEB SHOWCASE
        </div>
        <p class="cover-desc">
          Template web showcase interaktif produk audio nirkabel dengan navigasi responsif, animasi berbasis scroll GSAP, dan penataan komponen modular menggunakan React 19 dan Tailwind CSS v4.
        </p>
      </div>
    </div>

    <div class="cover-split">
      <div class="cover-specs">
        <div class="spec-card">
          <div class="spec-k">FRAMEWORK</div>
          <div class="spec-v">React 19 + Vite 6</div>
        </div>
        <div class="spec-card">
          <div class="spec-k">STYLING</div>
          <div class="spec-v">Tailwind CSS v4</div>
        </div>
        <div class="spec-card">
          <div class="spec-k">ANIMATION</div>
          <div class="spec-v">GSAP ScrollTrigger</div>
        </div>
        <div class="spec-card">
          <div class="spec-k">ICONS</div>
          <div class="spec-v">Lucide React</div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.heroDesktop}" class="screenshot-desktop" alt="AirPro Cover">
      </div>
    </div>

    <div class="slide-footer">
      <div>WIDI FIRMANSYAH</div>
      <div>REACTJS AIRPRO TEMPLATE</div>
      <div>01 / 10</div>
    </div>
  </div>

  <!-- SLIDE 02: HERO & NAVBAR -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-tag">TAMPILAN AWAL</div>
      <div class="slide-num">02 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Hero Section & Navigasi Sticky</h2>
          <p class="slide-desc">
            Bagian atas website menampilkan headline produk dengan latar belakang gelap, navigasi mengapung di bagian atas, dan tombol panggilan aksi langsung ke video showcase.
          </p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Navigasi Mengapung (Sticky Navbar)</div>
            <div class="feature-card-text">
              Bilah navigasi tetap berada di atas layar saat halaman digulir, menggunakan efek blur latar belakang dan tautan cepat ke seksi fitur.
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Preloader Awal</div>
            <div class="feature-card-text">
              Layar pemuatan aset ringan yang memastikan seluruh gambar dan font terunduh sebelum transisi ke tampilan utama.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">React 19</div>
            <div class="metric-lbl">Komponen</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Sticky</div>
            <div class="metric-lbl">Navigasi</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-lbl">Responsif</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.heroDesktop}" class="screenshot-desktop" alt="Hero Desktop">
        <img src="${images.heroMobile}" class="screenshot-mobile" alt="Hero Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <div>KOMPONEN HERO & PRELOADER</div>
      <div>LIFECYCLE TAMPILAN AWAL</div>
      <div>02 / 10</div>
    </div>
  </div>

  <!-- SLIDE 03: EARBUDS SHOWCASE -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-tag">SHOWCASE VISUAL</div>
      <div class="slide-num">03 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Visualisasi Earbuds & Detail Desain</h2>
          <p class="slide-desc">
            Seksi presentasi fisik produk yang menonjolkan bentuk earbuds nirkabel melalui kontras warna tinggi dan tipografi besar.
          </p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Penataan Grid Sentral</div>
            <div class="feature-card-text">
              Gambar produk diletakkan di tengah dengan teks pengiring proporsional untuk fokus visual yang jelas.
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Pemisah Antarseksi</div>
            <div class="feature-card-text">
              Garis pembatas halus dan jarak vertikal yang rapi memudahkan pembacaan konten saat digulir.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">WebP</div>
            <div class="metric-lbl">Format Gambar</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Flex/Grid</div>
            <div class="metric-lbl">Tata Letak</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">CSS</div>
            <div class="metric-lbl">Transitions</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.earbudsDesktop}" class="screenshot-desktop" alt="Earbuds Desktop">
      </div>
    </div>

    <div class="slide-footer">
      <div>VISUALISASI EARBUDS</div>
      <div>KOMPOSISI GRAFIS PRODUK</div>
      <div>03 / 10</div>
    </div>
  </div>

  <!-- SLIDE 04: NOISE CANCELLATION -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-tag">FITUR AUDIO</div>
      <div class="slide-num">04 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Peredam Bising Aktif (Noise Cancellation)</h2>
          <p class="slide-desc">
            Halaman presentasi fitur peredam suara bising dengan kartu informasi terpisah dan ilustrasi grafis pendukung.
          </p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Kartu Informasi Bergradien</div>
            <div class="feature-card-text">
              Latar belakang kartu menggunakan efek gradien transparan yang serasi dengan latar gelap keseluruhan web.
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Penyesuaian Mobile</div>
            <div class="feature-card-text">
              Di layar ponsel, tata letak dua kolom otomatis berubah menjadi satu kolom vertikal yang mudah dibaca.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">2x</div>
            <div class="metric-lbl">Isolasi Suara</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Adaptive</div>
            <div class="metric-lbl">Frekuensi</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Clean</div>
            <div class="metric-lbl">UI Cards</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.noiseDesktop}" class="screenshot-desktop" alt="Noise Cancellation Desktop">
        <img src="${images.noiseMobile}" class="screenshot-mobile" alt="Noise Cancellation Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <div>FITUR NOISE CANCELLATION</div>
      <div>ADAPTASI TATA LETAK FITUR</div>
      <div>04 / 10</div>
    </div>
  </div>

  <!-- SLIDE 05: SPATIAL AUDIO -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-tag">AUDIO SPASIAL</div>
      <div class="slide-num">05 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Visualisasi Audio Spasial</h2>
          <p class="slide-desc">
            Seksi penjelasan simulasi suara tiga dimensi dengan diagram grafis berpusat pada kepala pengguna dan pelacakan orientasi.
          </p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Diagram Posisi Suara</div>
            <div class="feature-card-text">
              Ilustrasi visual dengan gelombang melingkar yang menggambarkan pengalaman audio surround 360 derajat.
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Teks Penjelasan Terarah</div>
            <div class="feature-card-text">
              Keterangan singkat yang menjelaskan interaksi sensor gyroscope dan accelerometer pada earphone.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">360°</div>
            <div class="metric-lbl">Ruang Suara</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Head</div>
            <div class="metric-lbl">Tracking</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Dolby</div>
            <div class="metric-lbl">Atmos Spec</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.spatialDesktop}" class="screenshot-desktop" alt="Spatial Audio Desktop">
      </div>
    </div>

    <div class="slide-footer">
      <div>AUDIO SPASIAL</div>
      <div>DIAGRAM & TIPOGRAFI FITUR</div>
      <div>05 / 10</div>
    </div>
  </div>

  <!-- SLIDE 06: H2 CHIP ARCHITECTURE -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-tag">ARSITEKTUR HARDWARE</div>
      <div class="slide-num">06 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Komponen Pemrosesan Chip H2</h2>
          <p class="slide-desc">
            Seksi teknis yang membedah arsitektur chip internal dengan visual close-up mikroskopis dan metrik komputasi audio.
          </p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Visualisasi Mikroskopis</div>
            <div class="feature-card-text">
              Penyajian gambar detail komponen silikon dengan pencahayaan dramatis dan teks keterangan teknis.
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Metrik Efisiensi Daya</div>
            <div class="feature-card-text">
              Blok angka statistik yang menunjukkan peningkatan efisiensi baterai dan pengurangan distorsi suara.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">H2 Chip</div>
            <div class="metric-lbl">Processor</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">48 kHz</div>
            <div class="metric-lbl">Sample Rate</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Low</div>
            <div class="metric-lbl">Latency</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.h2ChipDesktop}" class="screenshot-desktop" alt="H2 Chip Desktop">
      </div>
    </div>

    <div class="slide-footer">
      <div>ARSITEKTUR CHIP H2</div>
      <div>DETAIL KOMPONEN SILIKON</div>
      <div>06 / 10</div>
    </div>
  </div>

  <!-- SLIDE 07: VIDEO SHOWCASE -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-tag">PEMUTAR VIDEO</div>
      <div class="slide-num">07 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Kontainer Pemutar Video 16:9</h2>
          <p class="slide-desc">
            Bagian demonstrasi produk interaktif menggunakan kontainer video HTML5 terintegrasi dengan rasio aspek standar 16:9 dan tombol kontrol kustom.
          </p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Kontainer Responsif Aspect-Video</div>
            <div class="feature-card-text">
              Video menyesuaikan lebar wadah secara dinamis tanpa distorsi gambar di berbagai resolusi layar.
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Overlay Play & Pause</div>
            <div class="feature-card-text">
              Tombol play besar di bagian tengah yang menghilang otomatis saat video mulai diputar.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">16:9</div>
            <div class="metric-lbl">Rasio Aspek</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">HTML5</div>
            <div class="metric-lbl">Video Player</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Autoplay</div>
            <div class="metric-lbl">Dukungan Muted</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.videoDesktop}" class="screenshot-desktop" alt="Video Showcase Desktop">
      </div>
    </div>

    <div class="slide-footer">
      <div>PEMUTAR VIDEO</div>
      <div>KONTROL MEDIA & RASIO ASPEK</div>
      <div>07 / 10</div>
    </div>
  </div>

  <!-- SLIDE 08: SPESIFIKASI TEKNIS -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-tag">SPESIFIKASI</div>
      <div class="slide-num">08 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Grid Spesifikasi Teknis Lengkap</h2>
          <p class="slide-desc">
            Tabel ringkasan teknis yang merangkum parameter daya tahan baterai, dimensi, bobot, jenis sensor, dan protokol konektivitas nirkabel.
          </p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Komponen Kartu Berulang</div>
            <div class="feature-card-text">
              Data spesifikasi disimpan dalam array JavaScript dan dirender secara modular melalui metode map() React.
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Penataan Kolom Bersih</div>
            <div class="feature-card-text">
              Label spesifikasi berwarna abu-abu terang dengan nilai angka tebal untuk memudahkan pembandingan.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">30 Jam</div>
            <div class="metric-lbl">Baterai Total</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">BT 5.3</div>
            <div class="metric-lbl">Koneksi</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">IPX4</div>
            <div class="metric-lbl">Tahan Air</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.specsDesktop}" class="screenshot-desktop" alt="Spesifikasi Desktop">
      </div>
    </div>

    <div class="slide-footer">
      <div>SPESIFIKASI TEKNIS</div>
      <div>DATA ARRAY RENDERING</div>
      <div>08 / 10</div>
    </div>
  </div>

  <!-- SLIDE 09: TECH STACK -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-tag">TEKNOLOGI</div>
      <div class="slide-num">09 / 10</div>
    </div>

    <div style="margin-bottom: 8px;">
      <h2 class="slide-title">Susunan Teknologi & Dependensi</h2>
      <p class="slide-desc">
        Aplikasi web dibangun menggunakan pustaka modern tanpa dependensi berat untuk menjaga kecepatan waktu muat dan kemudahan pemeliharaan kode.
      </p>
    </div>

    <div class="tech-grid">
      <div class="tech-col">
        <div class="tech-col-title">01. FRONTEND CORE</div>
        <div class="tech-item">
          <div class="tech-item-name">React 19.0</div>
          <div class="tech-item-desc">Framework UI berbasis komponen dengan manajemen state lokal ringan.</div>
        </div>
        <div class="tech-item">
          <div class="tech-item-name">Vite 6 Bundler</div>
          <div class="tech-item-desc">Peralatan build modern dengan hot module replacement instan saat pengembangan.</div>
        </div>
        <div class="tech-item">
          <div class="tech-item-name">Tailwind CSS v4</div>
          <div class="tech-item-desc">Styling berbasis utility-first dengan kompilator CSS teroptimasi.</div>
        </div>
      </div>

      <div class="tech-col">
        <div class="tech-col-title">02. ANIMASI & IKON</div>
        <div class="tech-item">
          <div class="tech-item-name">GSAP 3 Core</div>
          <div class="tech-item-desc">Pustaka animasi JavaScript berkinerja tinggi untuk timeline pergerakan elemen.</div>
        </div>
        <div class="tech-item">
          <div class="tech-item-name">ScrollTrigger Plugin</div>
          <div class="tech-item-desc">Sinkronisasi animasi dengan posisi gulir layar pengguna.</div>
        </div>
        <div class="tech-item">
          <div class="tech-item-name">Lucide React</div>
          <div class="tech-item-desc">Koleksi ikon SVG ringan dengan ukuran berkas teroptimasi.</div>
        </div>
      </div>

      <div class="tech-col">
        <div class="tech-col-title">03. KUALITAS & DEPLOYMENT</div>
        <div class="tech-item">
          <div class="tech-item-name">GitHub Pages</div>
          <div class="tech-item-desc">Hosting berkas statis otomatis via continuous deployment.</div>
        </div>
        <div class="tech-item">
          <div class="tech-item-name">Playwright E2E</div>
          <div class="tech-item-desc">Pengujian otomatis lintas browser untuk desktop dan mobile.</div>
        </div>
        <div class="tech-item">
          <div class="tech-item-name">ESLint & Prettier</div>
          <div class="tech-item-desc">Pemeriksaan kualitas kode dan pemformatan otomatis yang konsisten.</div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>SUSUNAN TEKNOLOGI</div>
      <div>ARSITEKTUR & DEPENDENSI</div>
      <div>09 / 10</div>
    </div>
  </div>

  <!-- SLIDE 10: CLOSING -->
  <div class="slide closing-slide">
    <div class="header-tag" style="padding: 5px 16px; font-size: 11px;">AIRPRO SHOWCASE TEMPLATE</div>
    <h1 class="closing-title">INTERACTIVE AUDIO PRODUCT SHOWCASE</h1>
    
    <p style="font-size: 14.5px; color: var(--text-muted); max-width: 650px; line-height: 1.5;">
      Template landing page modern yang dirancang untuk menampilkan detail produk audio secara interaktif, cepat dimuat, dan nyaman diakses di seluruh ukuran layar.
    </p>

    <div class="closing-card">
      <div style="font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.06em;">
        DEMO PRODUKSI
      </div>
      <div class="closing-url">https://widifirmaan.web.id/reactjs-airpro-template/</div>
      <div style="font-size:11px; color:var(--text-muted);">
        React 19 • Vite 6 • Tailwind CSS v4 • GSAP ScrollTrigger
      </div>
    </div>

    <div class="slide-footer" style="width: 100%; margin-top: 15px;">
      <div>WIDI FIRMANSYAH</div>
      <div>PENGEMBANG UTAMA</div>
      <div>10 / 10</div>
    </div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`Presentation HTML written to: ${htmlFilePath}`);

console.log('Launching Chromium with Playwright to render AirPro PDF...');

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
  console.log('Rendering Multi-Page A4 Landscape Presentation PDF (Slide Mode)...');
  await page.pdf({
    path: slidePdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
  });

  // 2. Continuous Poster Mode (Single tall scroll)
  console.log('Rendering Continuous Single-Scroll Showcase PDF (Poster Mode)...');
  await page.addStyleTag({
    content: `
      @page {
        size: auto;
        margin: 0;
      }
      body {
        background: #05070B !important;
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

  console.log('\nAirPro PDFs successfully generated:');
  console.log(`- Multi-Page Deck: ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (${slidePdfPath})`);
  console.log(`- Continuous Poster: ${(contStat.size / 1024 / 1024).toFixed(2)} MB (${continuousPdfPath})\n`);
}

renderPDF().catch((err) => {
  console.error('Error during PDF generation:', err);
  process.exit(1);
});
