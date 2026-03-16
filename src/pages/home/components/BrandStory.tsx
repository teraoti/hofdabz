import { useEffect, useState, useRef } from 'react';

export default function BrandStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="relative py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Label */}
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <div className="w-16 h-px bg-[#b8965a]"></div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#b8965a]" style={{ fontFamily: "'Inter', sans-serif" }}>Our Story</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Text */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-6xl text-[#1a1a1a] mb-6 md:mb-10 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Where Craft<br />Meets <em className="font-light text-[#b8965a]">Artistry</em>
            </h2>
            <div className="space-y-5 text-[15px] text-[#6b6560] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p>
                Hauz of Dabs creates refined fragrances designed to elevate both personal style and living spaces. Every scent is crafted with care, balance, and longevity in mind.
              </p>
              <p>
                Inspired by calm moments and everyday rituals, each fragrance is composed to leave a subtle but memorable impression.
              </p>
              <p>
                We believe in the power of scent to transform spaces and enhance experiences — bringing a sense of luxury to the everyday.
              </p>
            </div>
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-6 md:gap-8">
              <div className="text-center">
                <p className="text-3xl md:text-4xl text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>100%</p>
                <p className="text-xs uppercase tracking-widest text-[#b8965a] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>Natural Oils</p>
              </div>
              <div className="w-px h-12 bg-[#e8e0d5]"></div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>12h+</p>
                <p className="text-xs uppercase tracking-widest text-[#b8965a] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>Longevity</p>
              </div>
              <div className="w-px h-12 bg-[#e8e0d5]"></div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>3</p>
                <p className="text-xs uppercase tracking-widest text-[#b8965a] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>Signatures</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=luxury%20perfume%20diffuser%20arrangement%20on%20cream%20marble%20surface%20soft%20natural%20window%20light%20warm%20ivory%20tones%20editorial%20lifestyle%20photography%20high%20end%20home%20fragrance%20scene%20minimalist%20composition%20elegant%20bottles%20reeds&width=700&height=800&seq=brand-story-light-001&orientation=portrait"
                alt="Hauz of Dabs Brand Story"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative year removed */}
          </div>
        </div>
      </div>
    </section>
  );
}