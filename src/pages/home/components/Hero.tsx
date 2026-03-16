import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://readdy.ai/api/search-image?query=luxury%20fragrance%20boutique%20interior%20warm%20natural%20light%20cream%20marble%20surfaces%20elegant%20perfume%20bottles%20arranged%20on%20pale%20stone%20shelf%20soft%20diffused%20sunlight%20editorial%20photography%20high%20end%20beauty%20retail%20space%20refined%20minimalist%20atmosphere%20neutral%20tones%20ivory%20beige&width=1600&height=900&seq=hero-bg-light-001&orientation=landscape"
          alt="Hauz of Dabs"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f7]/90 via-[#faf9f7]/60 to-[#faf9f7]/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xs uppercase tracking-[0.3em] text-[#b8965a] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            Luxury Fragrance House
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] leading-[1.05] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Refined<br />
            Fragrances<br />
            <em className="font-light text-[#b8965a]">For Modern</em><br />
            Living
          </h1>
          <p className="text-base text-[#6b6560] mb-12 max-w-md leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Elevating personal style and living spaces through carefully composed scents — crafted with care, balance, and longevity in mind.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#products"
              className="inline-block px-10 py-4 bg-[#1a1a1a] text-white text-sm tracking-widest uppercase hover:bg-[#b8965a] transition-all duration-300 whitespace-nowrap text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore Collection
            </a>
            <a
              href="#story"
              className="inline-block px-10 py-4 border border-[#1a1a1a] text-[#1a1a1a] text-sm tracking-widest uppercase hover:border-[#b8965a] hover:text-[#b8965a] transition-all duration-300 whitespace-nowrap text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs uppercase tracking-widest text-[#b8965a]" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll</span>
        <i className="ri-arrow-down-line text-xl text-[#b8965a]"></i>
      </div>
    </section>
  );
}