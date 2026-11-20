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

console.log('Assembling English AirPro Apple Dark Showcase Presentation Deck HTML...');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
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
      <div class="badge-pill">DECK-AIR-01 / 10</div>
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
            Interactive 3D Audio &amp; GSAP Scroll Showcase Architecture
          </h1>
          <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.55; margin-bottom: 24px;">
            An exploration of modern frontend craftsmanship featuring 60 FPS timeline scrubbing, responsive audio-visual synchronization, floating liquid glass navigation, and zero-layout-shift component rendering.
          </p>
          <div class="glass-card" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; padding: 14px 18px;">
            <div>
              <div style="font-size: 11px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;">FRAME RATE</div>
              <div style="font-size: 20px; font-weight: 800; color: #FFFFFF; margin-top: 2px;">60 FPS</div>
              <div style="font-size: 11px; color: var(--text-secondary);">GPU Composited</div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;">VIRTUAL TRACK</div>
              <div style="font-size: 20px; font-weight: 800; color: #FFFFFF; margin-top: 2px;">3000vh</div>
              <div style="font-size: 11px; color: var(--text-secondary);">ScrollTrigger Scrub</div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;">ASSET PIPELINE</div>
              <div style="font-size: 20px; font-weight: 800; color: #FFFFFF; margin-top: 2px;">Zero Lag</div>
              <div style="font-size: 11px; color: var(--text-secondary);">Pre-Cached Assets</div>
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.heroDesktop}" alt="AirPro Hero Desktop">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AIRPRO &bull; INTERACTIVE 3D AUDIO SHOWCASE</div>
      <div>WIDI FIRMANSYAH &bull; LEAD FRONTEND ENGINEER</div>
      <div>01 / 10</div>
    </div>
  </div>

  <!-- SLIDE 2: ARCHITECTURE & TECHNICAL FOUNDATIONS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Engineering Foundations</div>
        <div class="brand-subtitle">Timeline Scrubbing Rationale</div>
      </div>
      <div class="badge-pill">DECK-AIR-02 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Core Frontend Rationale</div>
        <h2 class="slide-title">Interactive Scrubbing &amp; Timeline Choreography</h2>
        <p class="slide-subtitle">Engineering a cinematic Apple Keynote-grade experience with zero main-thread jank and seamless cross-device scaling.</p>
      </div>

      <div class="layout-grid-3">
        <div class="glass-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">01 &bull; TECHNICAL CHALLENGE</div>
          <h3 style="font-size: 17px; font-weight: 700; margin-bottom: 8px;">Scroll Jank &amp; Frame Drops</h3>
          <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
            Conventional scroll listeners trigger layout thrashing and reflows when reading DOM geometry repeatedly on the main thread during high-speed wheel events.
          </p>
        </div>

        <div class="glass-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">02 &bull; ARCHITECTURAL SOLUTION</div>
          <h3 style="font-size: 17px; font-weight: 700; margin-bottom: 8px;">GSAP Timeline Pinning</h3>
          <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
            Pinning a 3000vh virtual track using GSAP ScrollTrigger and the useGSAP hook leverages hardware-accelerated CSS transforms without triggering DOM recalculations.
          </p>
        </div>

        <div class="glass-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">03 &bull; RESPONSIVE FIDELITY</div>
          <h3 style="font-size: 17px; font-weight: 700; margin-bottom: 8px;">Dynamic Coordinate Interpolation</h3>
          <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
            Dynamically recalculating scale factors and horizontal travel offsets between desktop and mobile viewports preserves focal narrative precision.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AIRPRO &bull; ARCHITECTURAL FOUNDATIONS</div>
      <div>CINEMATIC WEB STANDARDS</div>
      <div>02 / 10</div>
    </div>
  </div>

  <!-- SLIDE 3: PRELOADER & KINETIC HERO -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Component Lifecycle</div>
        <div class="brand-subtitle">Kinetic Preloader &amp; Hero Transition</div>
      </div>
      <div class="badge-pill">DECK-AIR-03 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Lifecycle &amp; Asset Preloading</div>
        <h2 class="slide-title">Preloader State Machine &amp; Stage Entry Transition</h2>
        <p class="slide-subtitle">Isolated DOM readiness cycle ensuring graphic textures are fully cached before the scroll timeline unlocks.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.heroMobile}" alt="AirPro Hero Mobile View">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Document Ready State Detection</div>
            <div class="feature-item-desc">
              Monitoring document.readyState complete before triggering an animated scale-110 and blur fade-out, eliminating partial element pops.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Initial State Transform Matrix</div>
            <div class="feature-item-desc">
              Initializes left and right earbud elements with dynamic offset coordinates based on window width prior to any scroll user interaction.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Body Scroll Lock During Transition</div>
            <div class="feature-item-desc">
              Prevents scroll glitches during preloader teardown by locking overflow-x and cleaning up window listeners deterministically.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AIRPRO &bull; PRELOADER MODULE</div>
      <div>LIFECYCLE MANAGEMENT</div>
      <div>03 / 10</div>
    </div>
  </div>

  <!-- SLIDE 4: TIMELINE SCRUBBING & GSAP PINNING -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Interactive Core</div>
        <div class="brand-subtitle">GSAP ScrollTrigger Scrubbing Engine</div>
      </div>
      <div class="badge-pill">DECK-AIR-04 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Interactive Animation Engine</div>
        <h2 class="slide-title">3000vh Virtual Track Scrubbing Choreography</h2>
        <p class="slide-subtitle">Transforming stereo earbud elements from split perspective into unified physical hardware along the user's scroll path.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Scrub Smoother Parameter 2s</div>
            <div class="feature-item-desc">
              A 2-second scrub damping value on the GSAP timeline absorbs abrupt wheel events, rendering silky elastic motions.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Breakpoint Dynamic Coordinate Clamping</div>
            <div class="feature-item-desc">
              Adjusts horizontal split travel (30% on mobile screens vs 100% on ultrawide monitors) to prevent elements from breaching the viewport.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Sub-Pixel Rotation &amp; Scale Interpolation</div>
            <div class="feature-item-desc">
              Rotates angles smoothly from -15deg to 0deg with adaptive scaling (0.5x to 1.0x), imparting convincing physical 3D depth.
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

  <!-- SLIDE 5: ACTIVE NOISE CANCELLATION VISUALIZER -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Audio Simulation</div>
        <div class="brand-subtitle">Active Noise Cancellation Visualizer</div>
      </div>
      <div class="badge-pill">DECK-AIR-05 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Acoustic Simulation</div>
        <h2 class="slide-title">Active Noise Cancellation Waveform Visualizer</h2>
        <p class="slide-subtitle">Interactive infographic demonstrating inward and outward microphone arrays calculating anti-noise wave inversion in real time.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.noiseDesktop}" alt="AirPro Active Noise Cancellation Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Inward &amp; Outward Microphone Tracking</div>
            <div class="feature-item-desc">
              Visualizes environmental noise detection and high-speed anti-noise wave calculations up to 48,000 times per second.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Liquid Waveform Rendering</div>
            <div class="feature-item-desc">
              Acoustic frequency waves animated purely with CSS hardware-composited transforms, avoiding canvas overhead on low-power devices.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Synchronized Narrative Card Transitions</div>
            <div class="feature-item-desc">
              Textual descriptions enter in synchronization as the earbud rotates to face acoustic port grilles along the scroll timeline.
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

  <!-- SLIDE 6: SPATIAL AUDIO & H2 SILICON CHIPSET -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Silicon Deep Dive</div>
        <div class="brand-subtitle">Spatial Audio &amp; Apple H2 Chipset</div>
      </div>
      <div class="badge-pill">DECK-AIR-06 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Hardware Exploration</div>
        <h2 class="slide-title">Silicon Chipset Architecture &amp; Spatial Tracking</h2>
        <p class="slide-subtitle">Dissecting the Apple H2 silicon processing pipeline using translucent frosted glass cards and precise typographic layouts.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Silicon Hardware Simulation Layer</div>
            <div class="feature-item-desc">
              Exploded visual representation of digital signal processing cores managing adaptive equalization and multi-channel spatial audio.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Dynamic Head-Tracking UI Model</div>
            <div class="feature-item-desc">
              Visualizes gyroscopic and accelerometer sensors adjusting acoustic soundstage orientation dynamically in virtual 3D space.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">High Dynamic Range Amplifier Card</div>
            <div class="feature-item-desc">
              Custom low-distortion driver specifications highlighted with JetBrains Mono monospace callouts for clear technical benchmarks.
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
        <div class="brand-title">Interface Design</div>
        <div class="brand-subtitle">Floating Liquid Glass Pill &amp; Mobile Drawer</div>
      </div>
      <div class="badge-pill">DECK-AIR-07 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Modern Interface Systems</div>
        <h2 class="slide-title">Floating Navigation Pill with Liquid Glass Effects</h2>
        <p class="slide-subtitle">A responsive floating header bar utilizing multi-layer backdrop blur and stateful drawer animations without layout shifts.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.noiseMobile}" alt="AirPro Mobile Navigation &amp; Layout">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Floating Centered Pill Architecture</div>
            <div class="feature-item-desc">
              Fixed top-4 positioning with left-1/2 -translate-x-1/2 creates the illusion of a hardware remote floating over the stage canvas.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">24px Multi-Layer Backdrop Filter Blur</div>
            <div class="feature-item-desc">
              Diffuse light transmission through a 5% translucent white background preserves typography legibility as animations scroll beneath.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Zero-Layout-Shift Mobile Drawer</div>
            <div class="feature-item-desc">
              Mobile hamburger overlay with dynamic body scroll locking managed via useEffect ensures comfortable single-handed navigation.
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

  <!-- SLIDE 8: DATA BENCHMARK & TECH MATRIX -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Data Matrix</div>
        <div class="brand-subtitle">Comprehensive Technical Specifications</div>
      </div>
      <div class="badge-pill">DECK-AIR-08 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Performance Parameters</div>
        <h2 class="slide-title">Technical Specification Grid &amp; Battery Benchmarks</h2>
        <p class="slide-subtitle">Structured presentation of driver parameters, battery stamina, sensor arrays, and ingress protection ratings.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="visual-stage">
          <img src="${images.specsDesktop}" alt="AirPro Technical Specifications Grid">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Battery Stamina &amp; MagSafe Charging Case</div>
            <div class="feature-item-desc">
              Provides up to 6 hours of continuous listening per charge and 30 total hours with the MagSafe case, detailed in concise metric cards.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Capacitive Touch Controls &amp; Swipe Volume</div>
            <div class="feature-item-desc">
              Documents touch stem gesture mechanics for pinch and swipe volume adjustments without reaching for the paired device.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">IPX4 Sweat and Water Resistance</div>
            <div class="feature-item-desc">
              Certified moisture resistance for intense outdoor workouts and studio listening sessions, reinforced with clean badge styling.
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

  <!-- SLIDE 9: WEB PERFORMANCE & CORE WEB VITALS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Performance Engineering</div>
        <div class="brand-subtitle">Rendering Optimization &amp; Core Web Vitals</div>
      </div>
      <div class="badge-pill">DECK-AIR-09 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Speed &amp; Reliability</div>
        <h2 class="slide-title">High-Velocity Compositing &amp; Zero Frame Drops</h2>
        <p class="slide-subtitle">Resource pre-caching and GPU compositor isolation maintain ultra-low latency during rapid user scrolling.</p>
      </div>

      <div class="layout-grid-3">
        <div class="glass-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">MEMORY DISCIPLINE</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">useGSAP Hook Scoping</h3>
          <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">
            Scope references in useGSAP ensure all ScrollTrigger instances, tweens, and event listeners clean up automatically upon unmount to eliminate memory leaks.
          </p>
        </div>

        <div class="glass-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">GPU COMPOSITING</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Transform &amp; Opacity Only</h3>
          <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">
            Timeline animations manipulate only translate3d, scale, and opacity. No properties trigger expensive browser layout recalculations during active scrolling.
          </p>
        </div>

        <div class="glass-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">CORE WEB VITALS</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Zero CLS &amp; Low INP</h3>
          <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">
            Cumulative Layout Shift scores a perfect 0.00 thanks to absolute container pinning and reserved asset bounding boxes, achieving sub-50ms INP.
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

  <!-- SLIDE 10: ARCHITECTURAL SUMMARY & DEPLOYMENT -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Milestone Summary</div>
        <div class="brand-subtitle">Production Specifications &amp; Quality Audit</div>
      </div>
      <div class="badge-pill">DECK-AIR-10 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Production Readiness</div>
        <h2 class="slide-title">Comprehensive Project Implementation Summary</h2>
        <p class="slide-subtitle">A showcase web experience proving how precision timeline scrubbing and liquid glass UI elevate modern product presentation.</p>
      </div>

      <div class="layout-grid-4">
        <div class="glass-card">
          <div style="font-size: 11px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;">BUNDLER</div>
          <div style="font-size: 18px; font-weight: 800; color: #FFFFFF; margin-top: 4px; margin-bottom: 4px;">Vite 6</div>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.45;">Rapid TypeScript compilation with Rollup code-splitting.</p>
        </div>

        <div class="glass-card">
          <div style="font-size: 11px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;">ANIMATION</div>
          <div style="font-size: 18px; font-weight: 800; color: #FFFFFF; margin-top: 4px; margin-bottom: 4px;">GSAP 3</div>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.45;">Calibrated ScrollTrigger scrubbing with unified timeline.</p>
        </div>

        <div class="glass-card">
          <div style="font-size: 11px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;">STYLING</div>
          <div style="font-size: 18px; font-weight: 800; color: #FFFFFF; margin-top: 4px; margin-bottom: 4px;">Tailwind v4</div>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.45;">Integrated liquid glass tokens with 24px rounded cards.</p>
        </div>

        <div class="glass-card">
          <div style="font-size: 11px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;">QUALITY</div>
          <div style="font-size: 18px; font-weight: 800; color: #FFFFFF; margin-top: 4px; margin-bottom: 4px;">100% Pass</div>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.45;">Fully verified across desktop monitors and mobile touchscreens.</p>
        </div>
      </div>

      <div class="visual-stage" style="min-height: 160px; max-height: 180px; margin-top: 15px;">
        <img src="${images.finalDesktop}" alt="AirPro Final Reveal Desktop">
      </div>
    </div>

    <div class="slide-footer">
      <div>AIRPRO &bull; WEB ARCHITECTURE SHOWCASE</div>
      <div>WIDI FIRMANSYAH &bull; LEAD ENGINEER</div>
      <div>10 / 10</div>
    </div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`Presentation HTML written to: ${htmlFilePath}`);

console.log('Launching Chromium with Playwright to render English AirPro Apple Dark Showcase PDFs...');

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

  console.log('\nAirPro English PDFs successfully generated:');
  console.log(`- Multi-Page Deck: ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (${slidePdfPath})`);
  console.log(`- Continuous Poster: ${(contStat.size / 1024 / 1024).toFixed(2)} MB (${continuousPdfPath})\n`);
}

renderPDF().catch((err) => {
  console.error('Error rendering PDF:', err);
  process.exit(1);
});
