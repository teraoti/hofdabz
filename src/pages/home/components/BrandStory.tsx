import useScrollReveal, { revealClass } from '@/hooks/useScrollReveal';

export default function BrandStory() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="story" ref={ref} className="relative py-16 md:py-32 bg-background-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <div className="w-16 h-px bg-accent-500"></div>
          <span className="text-xs uppercase tracking-[0.3em] text-accent-500" style={{ fontFamily: "var(--font-label)" }}>Our Story</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className={revealClass(isVisible, 100)}>
            <h2 className="text-4xl md:text-6xl text-foreground-950 mb-6 md:mb-10 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Where Craft<br />Meets <em className="font-light text-accent-500">Artistry</em>
            </h2>
            <div className="space-y-5 text-[15px] text-foreground-600 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
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
                <p className="text-3xl md:text-4xl text-foreground-950" style={{ fontFamily: "var(--font-heading)" }}>100%</p>
                <p className="text-xs uppercase tracking-widest text-accent-500 mt-1" style={{ fontFamily: "var(--font-label)" }}>Natural Oils</p>
              </div>
              <div className="w-px h-12 bg-background-300"></div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl text-foreground-950" style={{ fontFamily: "var(--font-heading)" }}>12h+</p>
                <p className="text-xs uppercase tracking-widest text-accent-500 mt-1" style={{ fontFamily: "var(--font-label)" }}>Longevity</p>
              </div>
              <div className="w-px h-12 bg-background-300"></div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl text-foreground-950" style={{ fontFamily: "var(--font-heading)" }}>3</p>
                <p className="text-xs uppercase tracking-widest text-accent-500 mt-1" style={{ fontFamily: "var(--font-label)" }}>Signatures</p>
              </div>
            </div>
          </div>

          <div className={revealClass(isVisible, 300)}>
            <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden bg-background-200">
              <img
                src="https://readdy.ai/api/search-image?query=luxury%20perfume%20diffuser%20arrangement%20on%20cream%20marble%20surface%20soft%20natural%20window%20light%20warm%20ivory%20tones%20editorial%20lifestyle%20photography%20high%20end%20home%20fragrance%20scene%20minimalist%20composition%20elegant%20bottles%20reeds&width=700&height=800&seq=brand-story-light-001&orientation=portrait"
                alt="Hauz of Dabs fragrance arrangement on marble surface"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}