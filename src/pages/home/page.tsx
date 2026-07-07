import { useState, useEffect } from 'react';
import SEOHead from '@/components/feature/SEOHead';
import BackToTop from '@/components/feature/BackToTop';
import ThemeToggle from '@/components/feature/ThemeToggle';
import { useTheme } from '@/hooks/useTheme';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import Products from './components/Products';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Footer from './components/Footer';

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://hauzofdabs.com/#webpage",
  "url": "https://hauzofdabs.com/",
  "name": "Hauz of Dabs | Luxury Perfumes & Diffusers",
  "description": "Refined fragrances designed to elevate both personal style and living spaces.",
  "isPartOf": { "@id": "https://hauzofdabs.com/#website" },
  "about": { "@id": "https://hauzofdabs.com/#organization" },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://hauzofdabs.com/og-image.jpg",
    "width": 1200,
    "height": 630
  }
};

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoTextClass = scrolled
    ? (isDark ? 'text-background-50' : 'text-foreground-950')
    : 'text-background-50';

  const leafFilterClass = scrolled
    ? (isDark ? 'brightness-0 invert' : '')
    : 'brightness-0 invert';

  return (
    <div className="bg-background-50 text-foreground-950">
      <SEOHead
        title="Hauz of Dabs | Luxury Perfumes & Diffusers | Refined Fragrances for Modern Living"
        description="Discover Hauz of Dabs - refined luxury fragrances designed to elevate personal style and living spaces. Shop signature perfumes, luxury diffusers, and premium gift sets crafted with care and longevity in mind."
        keywords="luxury perfumes, premium diffusers, refined fragrances, signature scents, home fragrance, luxury gift sets"
        canonical="https://hauzofdabs.com/"
        ogType="website"
        ogImage="https://hauzofdabs.com/og-image.jpg"
        ogImageWidth={1200}
        ogImageHeight={630}
        ogImageAlt="Hauz of Dabs - Luxury Perfumes & Diffusers"
        ogUrl="https://hauzofdabs.com/"
        schemaJson={homeSchema}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-background-50/95 backdrop-blur-sm border-b border-background-200' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-start leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              <span className={`text-2xl md:text-3xl tracking-wide font-semibold transition-colors duration-500 ${logoTextClass}`}>HAUZ</span>
              <div className="flex flex-col items-center mx-0.5 pt-1">
                <img
                  src="https://public.readdy.ai/ai/img_res/e011fd85-7547-44dc-bb8e-1f1c41556f23.png"
                  alt="Hauz of Dabs leaf icon"
                  className={`w-3 h-3 md:w-3.5 md:h-3.5 object-contain transition-all duration-500 ${leafFilterClass}`}
                />
                <span className={`text-[7px] md:text-[8px] tracking-widest uppercase transition-colors duration-500 ${logoTextClass}`}>of</span>
              </div>
              <span className={`text-2xl md:text-3xl tracking-wide font-semibold transition-colors duration-500 ${logoTextClass}`}>DABS</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#story" className="text-sm tracking-widest uppercase text-foreground-600 hover:text-accent-500 transition-colors duration-300 whitespace-nowrap" style={{ fontFamily: "var(--font-label)" }}>Story</a>
            <a href="#products" className="text-sm tracking-widest uppercase text-foreground-600 hover:text-accent-500 transition-colors duration-300 whitespace-nowrap" style={{ fontFamily: "var(--font-label)" }}>Collection</a>
            <a href="#shop" className="text-sm tracking-widest uppercase text-foreground-600 hover:text-accent-500 transition-colors duration-300 whitespace-nowrap" style={{ fontFamily: "var(--font-label)" }}>Shop</a>
            <a href="#contact" className="text-sm tracking-widest uppercase text-foreground-600 hover:text-accent-500 transition-colors duration-300 whitespace-nowrap" style={{ fontFamily: "var(--font-label)" }}>Contact</a>
            <ThemeToggle />
            <a href="#shop" className="px-6 py-2 border border-accent-500 text-accent-500 text-sm tracking-widest uppercase hover:bg-accent-500 hover:text-background-50 transition-all duration-300 whitespace-nowrap" style={{ fontFamily: "var(--font-label)" }}>Order Now</a>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button className="w-8 h-8 flex items-center justify-center cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-xl ${scrolled ? (isDark ? 'text-background-50' : 'text-foreground-950') : 'text-background-50'}`}></i>
              </div>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-background-50 border-t border-background-200 px-4 py-6 flex flex-col gap-5">
            <a href="#story" onClick={() => setMenuOpen(false)} className="text-sm tracking-widest uppercase text-foreground-600 hover:text-accent-500 transition-colors cursor-pointer" style={{ fontFamily: "var(--font-label)" }}>Story</a>
            <a href="#products" onClick={() => setMenuOpen(false)} className="text-sm tracking-widest uppercase text-foreground-600 hover:text-accent-500 transition-colors cursor-pointer" style={{ fontFamily: "var(--font-label)" }}>Collection</a>
            <a href="#shop" onClick={() => setMenuOpen(false)} className="text-sm tracking-widest uppercase text-foreground-600 hover:text-accent-500 transition-colors cursor-pointer" style={{ fontFamily: "var(--font-label)" }}>Shop</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm tracking-widest uppercase text-foreground-600 hover:text-accent-500 transition-colors cursor-pointer" style={{ fontFamily: "var(--font-label)" }}>Contact</a>
            <a href="#shop" onClick={() => setMenuOpen(false)} className="px-6 py-2 border border-accent-500 text-accent-500 text-sm tracking-widest uppercase hover:bg-accent-500 hover:text-background-50 transition-all duration-300 whitespace-nowrap text-center cursor-pointer" style={{ fontFamily: "var(--font-label)" }}>Order Now</a>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <BrandStory />
        <Products />
        <Shop />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}