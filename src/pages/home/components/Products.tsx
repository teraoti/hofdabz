import { useState } from 'react';
import useScrollReveal, { revealClass } from '@/hooks/useScrollReveal';

const products = [
  {
    id: 1,
    name: 'Signature Perfume',
    type: 'Eau de Parfum',
    price: '£45',
    notes: 'Bergamot · Jasmine · Sandalwood',
    image: 'https://readdy.ai/api/search-image?query=luxury%20perfume%20bottle%20elegant%20glass%20design%20on%20cream%20ivory%20background%20soft%20natural%20light%20professional%20product%20photography%20high%20end%20fragrance%20minimalist%20composition%20warm%20tones%20editorial%20style%20refined%20aesthetic&width=500&height=650&seq=product-perfume-light-001&orientation=portrait'
  },
  {
    id: 2,
    name: 'Luxury Diffuser',
    type: 'Reed Diffuser',
    price: '£55',
    notes: 'Cedarwood · Amber · Vetiver',
    image: 'https://readdy.ai/api/search-image?query=luxury%20reed%20diffuser%20elegant%20glass%20bottle%20with%20wooden%20reeds%20on%20cream%20ivory%20background%20soft%20natural%20light%20professional%20product%20photography%20high%20end%20home%20fragrance%20minimalist%20composition%20warm%20tones%20editorial%20style&width=500&height=650&seq=product-diffuser-light-001&orientation=portrait'
  },
  {
    id: 3,
    name: 'Gift Set',
    type: 'Perfume & Diffuser',
    price: '£75',
    notes: 'Complete Collection',
    image: 'https://readdy.ai/api/search-image?query=luxury%20fragrance%20gift%20set%20elegant%20packaging%20perfume%20and%20diffuser%20together%20on%20cream%20ivory%20background%20soft%20natural%20light%20professional%20product%20photography%20high%20end%20presentation%20minimalist%20composition%20warm%20tones%20editorial%20style&width=500&height=650&seq=product-giftset-light-001&orientation=portrait'
  }
];

export default function Products() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="products" ref={ref} className="relative py-16 md:py-32 bg-background-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-px bg-accent-500"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent-500" style={{ fontFamily: "var(--font-label)" }}>The Collection</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-foreground-950 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Our Fragrances
            </h2>
          </div>
          <a href="#shop" className="inline-block mt-4 md:mt-0 text-sm uppercase tracking-widest text-foreground-950 border-b border-foreground-950 pb-1 hover:text-accent-500 hover:border-accent-500 transition-all duration-300 whitespace-nowrap cursor-pointer" style={{ fontFamily: "var(--font-label)" }}>
            Shop All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-product-shop>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group transition-all duration-700 cursor-pointer ${revealClass(isVisible, index * 150)}`}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative w-full h-[320px] md:h-[480px] overflow-hidden bg-background-200 mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-contain transition-transform duration-700 ${hovered === product.id ? 'scale-105' : 'scale-100'}`}
                />
                <div className={`absolute inset-0 bg-foreground-950/10 transition-opacity duration-300 ${hovered === product.id ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute bottom-0 left-0 right-0 bg-foreground-950/80 backdrop-blur-sm py-4 text-center transition-all duration-300 ${hovered === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                  <a href="#shop" className="text-xs uppercase tracking-widest text-background-50 whitespace-nowrap" style={{ fontFamily: "var(--font-label)" }}>
                    Quick Shop
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-accent-500 mb-2" style={{ fontFamily: "var(--font-label)" }}>{product.type}</p>
                <h3 className="text-2xl text-foreground-950 mb-1" style={{ fontFamily: "var(--font-heading)" }}>{product.name}</h3>
                <p className="text-sm text-foreground-400 mb-3" style={{ fontFamily: "var(--font-body)" }}>{product.notes}</p>
                <p className="text-xl text-foreground-950" style={{ fontFamily: "var(--font-heading)" }}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}