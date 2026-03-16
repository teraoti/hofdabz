import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import Products from './components/Products';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#faf9f7] text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#e8e0d5]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex flex-col items-center leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <img
                src="https://public.readdy.ai/ai/img_res/e011fd85-7547-44dc-bb8e-1f1c41556f23.png"
                alt="leaf icon"
                className="w-6 h-6 md:w-7 md:h-7 object-contain mb-0.5"
              />
              <div className="flex items-baseline">
                <span className="text-2xl md:text-3xl tracking-wide text-[#1a1a1a] font-semibold">HAUZ</span>
                <span className="text-[10px] md:text-xs tracking-widest text-[#1a1a1a] uppercase leading-none mr-1.5" style={{ marginBottom: '4px' }}>of</span>
                <span className="text-2xl md:text-3xl tracking-wide text-[#1a1a1a] font-semibold">DABS</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#story" className="text-sm tracking-widest uppercase text-[#6b6560] hover:text-[#b8965a] transition-colors duration-300 whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>Story</a>
            <a href="#products" className="text-sm tracking-widest uppercase text-[#6b6560] hover:text-[#b8965a] transition-colors duration-300 whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>Collection</a>
            <a href="#shop" className="text-sm tracking-widest uppercase text-[#6b6560] hover:text-[#b8965a] transition-colors duration-300 whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>Shop</a>
            <a href="#contact" className="text-sm tracking-widest uppercase text-[#6b6560] hover:text-[#b8965a] transition-colors duration-300 whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>Contact</a>
            <a href="#shop" className="px-6 py-2 border border-[#b8965a] text-[#b8965a] text-sm tracking-widest uppercase hover:bg-[#b8965a] hover:text-white transition-all duration-300 whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>Order Now</a>
          </div>
          <button className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-xl text-[#1a1a1a]`}></i>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#e8e0d5] px-4 py-6 flex flex-col gap-5">
            <a href="#story" onClick={() => setMenuOpen(false)} className="text-sm tracking-widest uppercase text-[#6b6560] hover:text-[#b8965a] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Story</a>
            <a href="#products" onClick={() => setMenuOpen(false)} className="text-sm tracking-widest uppercase text-[#6b6560] hover:text-[#b8965a] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Collection</a>
            <a href="#shop" onClick={() => setMenuOpen(false)} className="text-sm tracking-widest uppercase text-[#6b6560] hover:text-[#b8965a] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Shop</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm tracking-widest uppercase text-[#6b6560] hover:text-[#b8965a] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Contact</a>
            <a href="#shop" onClick={() => setMenuOpen(false)} className="px-6 py-2 border border-[#b8965a] text-[#b8965a] text-sm tracking-widest uppercase hover:bg-[#b8965a] hover:text-white transition-all duration-300 whitespace-nowrap text-center" style={{ fontFamily: "'Inter', sans-serif" }}>Order Now</a>
          </div>
        )}
      </nav>

      <Hero />
      <BrandStory />
      <Products />
      <Shop />
      <Contact />
      <Footer />
    </div>
  );
}