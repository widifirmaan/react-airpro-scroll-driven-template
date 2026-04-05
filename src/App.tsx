import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Menu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const airpodsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trackRef.current,
        start: "top top",
        end: "+=800%",
        scrub: 1,
      }
    });

    const isMobile = window.innerWidth < 768;
    const splitX = isMobile ? "30%" : "100%";
    const featureScale = isMobile ? 0.5 : 0.8;

    // Initial state
    tl.fromTo(".hero-text",
      { opacity: 1, y: 0, scale: 1 },
      { opacity: 0, y: -100, scale: 0.8, duration: 1 }
    )
      .fromTo(".airpods-main",
        { y: "100vh", scale: 0.5, rotate: -15 },
        { y: "0vh", scale: 1, rotate: 0, duration: 2 },
        "-=0.5"
      )
      .to(".airpod-left", { opacity: 1, duration: 0.1 }, "<") // Show left immediately as it rises
      .to({}, { duration: 1 }) // Hold with 1 image
      .to(".airpod-left", {
        rotationY: 360,
        x: `-${splitX}`,
        z: 10, // Add slight depth to prevent clipping
        duration: 2.5,
        ease: "power2.inOut"
      })
      .fromTo(".airpod-right", {
        opacity: 0,
        rotationY: 180,
        scale: 0.8,
        x: "0%",
        z: 0
      }, {
        opacity: 1,
        rotationY: 0,
        scale: 1,
        x: splitX,
        z: 20, // Bring right one slightly forward
        duration: 2.5,
        ease: "power2.inOut"
      }, "<")
      .to(".airpods-main", {
        x: "25%",
        scale: featureScale, // Larger on desktop for features
        rotate: 15,
        duration: 2
      })
      .to(".airpod-left", {
        x: "0%",
        duration: 1
      }, "<")
      .to(".airpod-right", {
        x: "0%",
        duration: 1
      }, "<")
      .to(".video-bg", { opacity: 0, duration: 1 }, "-=1")
      .to(".feature-1", {
        opacity: 1,
        x: 0,
        duration: 1
      }, "<")
      .to({}, { duration: 2 }) // Hold feature 1
      .to(".airpods-main", {
        x: isMobile ? "0%" : "-30%", // Adjusted x for larger scale
        y: isMobile ? "-20vh" : "0%", // Slightly down for better centering on mobile
        scale: featureScale,
        rotate: -15,
        duration: 3 // Slower transition to feature 2
      })
      .to(".feature-1", {
        opacity: 0,
        x: -20,
        duration: 0.8
      }, "-=3")
      .to(".feature-2", {
        opacity: 1,
        x: 0,
        duration: 1
      }, "-=1.5")
      .to({}, { duration: 2 }) // Hold feature 2
      .to([".feature-1", ".feature-2"], {
        opacity: 0,
        y: -20,
        duration: 0.5
      })
      .to(".airpods-main", {
        scale: 3,
        opacity: 0,
        duration: 3 // Slower zoom out
      })
      .to(".video-bg", { opacity: 1, duration: 2 }, "-=2")
      .fromTo(".final-text",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 2 } // Slower text reveal
      )
      .to({}, { duration: 3 }); // Hold final text at the end

    // H2 Chip Section Animations
    gsap.fromTo(".h2-content > *",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".h2-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }
    );

    gsap.fromTo(".h2-image",
      { scale: 0.8, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".h2-section",
          start: "top 70%",
          toggleActions: "play none none reverse"
        },
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)"
      }
    );

    // Stats Section Animations
    gsap.fromTo(".stats-title",
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    );

    gsap.fromTo(".stat-card",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 70%",
          toggleActions: "play none none reverse"
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }
    );

    ScrollTrigger.refresh();

  }, { scope: rootRef });

  return (
    <div ref={rootRef} className="bg-black min-h-screen font-sans text-white selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="text-xl font-bold tracking-tighter">AirPods Pro</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Overview</a>
          <a href="#" className="hover:text-white transition-colors">Tech Specs</a>
          <a href="#" className="hover:text-white transition-colors">Compare</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer">
            Buy
          </button>
          <Menu className="w-6 h-6 md:hidden cursor-pointer" />
        </div>
      </nav>

      {/* Main Scroll Container Track */}
      <div ref={trackRef} className="relative h-[900vh] bg-black">
        {/* Sticky Content Container */}
        <div ref={containerRef} className="sticky top-0 h-screen overflow-hidden z-0">
          {/* Background Video */}
          <div className="video-bg absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover blur-[2px]"
            >
              <source
                src="/background-video.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-gray-800/20 to-black opacity-50 z-1" />

          {/* Hero Text */}
          <div className="hero-text absolute inset-0 flex flex-col items-center justify-center text-center z-10 pb-32 md:pb-0">
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold tracking-tighter mb-4 leading-[0.9]">
              Magic like you've <br /> never heard.
            </h1>
            <p className="text-base md:text-lg lg:text-2xl text-gray-400 max-w-2xl px-6">
              AirPods Pro have been re-engineered for even richer audio experiences.
            </p>
          </div>

          {/* Animated AirPods */}
          <div ref={airpodsRef} className="airpods-main absolute inset-0 flex items-center justify-center z-20 pointer-events-none pt-40 md:pt-0 [perspective:1000px]">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center [transform-style:preserve-3d] will-change-transform">
              <img
                src="https://cdn.prod.website-files.com/64e5e9c3cc050ce7725aeb4f/64e6327ca7d56667e9014da0_hero_airpods_left__e4mt0u0p25ea_xlarge.png"
                alt="AirPods Pro Left"
                className="airpod-left absolute w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.2)] opacity-0 [backface-visibility:hidden]"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://cdn.prod.website-files.com/64e5e9c3cc050ce7725aeb4f/64e632769f899497fc63d562_hero_airpods_right__dtlz95zz9ryq_xlarge.png"
                alt="AirPods Pro Right"
                className="airpod-right absolute w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.2)] opacity-0 [backface-visibility:hidden]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Floating Features */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            <div className="feature-1 opacity-0 -translate-x-20 absolute top-1/4 left-6 md:left-20 max-w-2xl">
              <h3 className="text-4xl md:text-5xl lg:text-8xl font-bold tracking-tighter mb-4 leading-[0.9]">Active Noise <br className="hidden md:block" /> Cancellation</h3>
              <p className="text-base md:text-lg lg:text-2xl text-gray-400">Up to 2x more noise cancellation than the previous generation.</p>
            </div>

            <div className="feature-2 opacity-0 translate-x-20 absolute bottom-10 md:bottom-1/4 left-6 right-6 md:left-auto md:right-20 max-w-3xl text-center md:text-right">
              <h3 className="text-4xl md:text-5xl lg:text-8xl font-bold tracking-tighter mb-4 leading-[0.9]">Personalized <br className="hidden md:block" /> Spatial Audio</h3>
              <p className="text-base md:text-lg lg:text-2xl text-gray-400">Sound that surrounds you, tuned specifically for your ears.</p>
            </div>
          </div>

          {/* Final Reveal */}
          <div className="final-text opacity-0 absolute inset-0 flex flex-col items-center justify-center text-center z-40">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">
              Rebuilt from the <br /> sound up.
            </h2>
            <div className="flex gap-4">
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all cursor-pointer">
                Learn more
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all cursor-pointer">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Sections */}
      <section className="h2-section py-32 px-6 bg-white text-black relative z-50 mt-[-100vh]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="h2-content">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">H2 Chip</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8 tracking-tight leading-[0.9]">
              A smarter way to hear.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The Apple-designed H2 chip is the force behind AirPods Pro and its advanced audio performance. It works in concert with a custom-built driver and amplifier to deliver crisp, clear high notes and deep, rich bass in stunning definition.
            </p>
          </div>
          <div className="h2-image relative group overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=1000"
              alt="H2 Chip"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <section className="stats-section py-32 px-6 bg-gray-50 text-black relative z-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="stats-title text-4xl md:text-5xl lg:text-7xl font-bold mb-16 tracking-tight leading-[0.9]">
            Everything you need <br /> to hear is here.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Battery Life", value: "6 hrs" },
              { label: "With Case", value: "30 hrs" },
              { label: "Water Resistant", value: "IPX4" },
              { label: "Bluetooth", value: "5.3" }
            ].map((stat, i) => (
              <div key={i} className="stat-card p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-500">
                <div className="text-4xl font-bold mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black border-t border-white/5 text-gray-500 text-sm relative z-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white font-bold text-lg">AirPods Pro</div>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Sales Policy</a>
              <a href="#" className="hover:text-white transition-colors">Legal</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center md:text-left">
            <p>© 2026 Apple Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
