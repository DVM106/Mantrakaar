import { useState } from 'react';
import SunsetHero from './components/SunsetHero';

function App() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c1a2e] text-white selection:bg-[#ffd56f]/30 selection:text-white font-sans">
      
      {/*  Minimalist Navigation Bar for design context  */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#0c1a2e]/80 to-transparent backdrop-blur-sm border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/*  Simulated Logo  */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#e28544] to-[#ffd269]" />
            <span className="text-xl font-bold tracking-wider text-white uppercase">Mantrakaar</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-white/75 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-sm font-medium text-white border-b-2 border-[#ffd269] pb-1">About</a>
            <a href="#" className="text-sm font-medium text-white/75 hover:text-white transition-colors">Services</a>
            <a href="#" className="text-sm font-medium text-white/75 hover:text-white transition-colors">Projects</a>
            <a href="#" className="text-sm font-medium text-white/75 hover:text-white transition-colors">Contact</a>
          </nav>
          <div>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-widest bg-white/10 hover:bg-white/20 active:bg-white/30 text-white rounded border border-white/15 backdrop-blur-md transition-all duration-200"
              aria-label={isPaused ? "Play background animations" : "Pause background animations"}
            >
              {isPaused ? "▶ Play Anim" : "⏸ Pause Anim"}
            </button>
          </div>
        </div>
      </header>

      {/*  Hero Section Container  */}
      <section className="relative w-full h-screen flex items-center justify-center pt-20">
        
        {/*  Animated Background Component  */}
        <SunsetHero 
          pause={isPaused} 
          className="absolute inset-0 w-full h-full"
          ariaLabel="Procedurally animated ocean sunset background with cobalt sky and golden sparkles"
        />

        {/*  Dark Contrast Overlay to guarantee text legibility (WCAG AA compliant)  */}
        <div className="absolute inset-0 bg-black/25 backdrop-brightness-[0.88] pointer-events-none z-10" />

        {/*  Overlay Hero Content  */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-[#ffd269] mb-4 animate-fade-in">
            Agency Overview
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-sm font-display">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow">
            We are a reimagined digital agency crafting premium, high-fidelity web experiences. 
            Merging design aesthetics, complex digital architectures, and user-first layouts 
            to transform imaginations into reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold tracking-wider uppercase bg-white text-[#0c1a2e] hover:bg-[#ffd269] hover:text-[#0c1a2e] active:scale-95 rounded transition-all duration-200 shadow-lg shadow-black/20"
            >
              Connect With Us
            </a>
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold tracking-wider uppercase bg-white/10 hover:bg-white/20 active:scale-95 text-white rounded border border-white/15 backdrop-blur-md transition-all duration-200"
            >
              View Projects
            </a>
          </div>
        </div>

        {/*  Scroll down indicator  */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </section>

      {/*  Content section below Hero (shows page continue)  */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ffd269]">Who We Are</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Mantrakaar is an independent and forward-thinking digital agency. We specialize in bespoke UI/UX design, high-fidelity web development, conversion-centric search engine optimization (SEO), and data-driven consultancy services.
            </p>
            <p className="text-white/80 leading-relaxed">
              Founded by Parag Gogari, who brings over 23 years of industry-leading experience, Mantrakaar was established to bridge the gap between complex digital architectures and user-first brand experiences. We don't just build websites; we design digital products that solve real business problems and help companies connect meaningfully with their audience.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
            <h3 className="text-xl font-bold mb-4 text-[#ffd269]">Our Foundation</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-[#ffd269] font-bold">01</span>
                <div>
                  <h4 className="font-semibold">Innovation</h4>
                  <p className="text-sm text-white/70">Continuously pushing the boundaries of technology to build custom web experiences that are clean, fast, and interactive.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#ffd269] font-bold">02</span>
                <div>
                  <h4 className="font-semibold">Leadership</h4>
                  <p className="text-sm text-white/70">Leveraging decades of collective expertise to guide brands through successful digital transformations with certainty.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
