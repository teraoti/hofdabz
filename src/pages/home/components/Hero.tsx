import useScrollReveal, { revealClass } from '@/hooks/useScrollReveal';

export default function Hero() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://readdy.ai/api/search-image?query=Luxurious%20modern%20sitting%20room%20lounge%20interior%20with%20cream%20linen%20sofa%20and%20warm%20neutral%20beige%20ivory%20color%20palette%2C%20an%20elegant%20gold-capped%20perfume%20bottle%20and%20a%20reed%20diffuser%20placed%20on%20a%20marble%20center%20coffee%20table%2C%20soft%20diffused%20natural%20light%20through%20sheer%20curtains%2C%20minimalist%20high-end%20home%20decor%2C%20editorial%20interior%20photography%2C%20warm%20muted%20tones%2C%20understated%20elegance%2C%20cozy%20refined%20atmosphere&width=1600&height=900&seq=hero-lounge-v1&orientation=landscape"
          alt="Hauz of Dabs luxury fragrance in an elegant sitting room setting"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground-950/25 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className={`max-w-xs sm:max-w-sm md:max-w-xl ${revealClass(isVisible, 0)}`}>
          <h1
            className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-background-50 leading-[1.08] tracking-tight mb-6 md:mb-10 drop-shadow-lg"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Discover your<br />
            <em className="font-light text-accent-400">signature</em><br />
            <em className="font-light text-accent-400">scent</em><br />
            today
          </h1>
          <a
            href="#contact"
            className="inline-block px-6 py-2.5 md:px-8 md:py-3 border border-background-50/70 text-background-50 text-xs tracking-[0.25em] uppercase hover:bg-background-50 hover:text-foreground-950 transition-all duration-500 whitespace-nowrap text-center cursor-pointer drop-shadow-md"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}