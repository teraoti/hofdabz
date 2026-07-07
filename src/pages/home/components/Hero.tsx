import useScrollReveal, { revealClass } from '@/hooks/useScrollReveal';

export default function Hero() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://readdy.ai/api/search-image?query=Two%20luxury%20perfume%20bottles%20with%20gold%20caps%20on%20cream%20ceramic%20pedestals%2C%20soft%20natural%20side%20lighting%20from%20right%2C%20warm%20muted%20ivory%20and%20beige%20tones%2C%20minimal%20cream%20background%2C%20editorial%20product%20photography%2C%20soft%20shadows%2C%20understated%20elegance%2C%20high%20end%20fragrance%20scene&width=1600&height=900&seq=hero-tone-v2-001&orientation=landscape"
          alt="Hauz of Dabs luxury perfume bottles"
          className="w-full h-full object-cover object-right md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground-950/85 via-foreground-950/55 to-foreground-950/20 md:from-foreground-950/50 md:via-foreground-950/15 md:to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className={`max-w-xs sm:max-w-sm md:max-w-xl ${revealClass(isVisible, 0)}`}>
          <h1
            className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-background-50 leading-[1.08] tracking-tight mb-6 md:mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Discover your<br />
            <em className="font-light text-accent-400">signature</em><br />
            <em className="font-light text-accent-400">scent</em><br />
            today
          </h1>
          <a
            href="#contact"
            className="inline-block px-6 py-2.5 md:px-8 md:py-3 border border-background-50/70 text-background-50 text-xs tracking-[0.25em] uppercase hover:bg-background-50 hover:text-foreground-950 transition-all duration-500 whitespace-nowrap text-center cursor-pointer"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}