import { useEffect, useState, useRef } from 'react';

const shopProducts = [
  {
    id: 'price_signature_perfume',
    name: 'Signature Perfume',
    description: 'A refined eau de parfum with notes of bergamot, jasmine, and sandalwood. Long-lasting and elegant.',
    price: 4500,
    currency: 'GBP',
    image: 'https://readdy.ai/api/search-image?query=luxury%20perfume%20bottle%20close%20up%20elegant%20design%20golden%20cap%20on%20cream%20marble%20surface%20editorial%20product%20photography%20high%20end%20fragrance%20refined%20aesthetic%20soft%20natural%20light%20warm%20ivory%20tones&width=500&height=500&seq=shop-perfume-light-001&orientation=squarish'
  },
  {
    id: 'price_luxury_diffuser',
    name: 'Luxury Diffuser',
    description: 'Premium reed diffuser with natural essential oils. Transforms any space with a subtle, lasting fragrance.',
    price: 5500,
    currency: 'GBP',
    image: 'https://readdy.ai/api/search-image?query=luxury%20reed%20diffuser%20elegant%20glass%20bottle%20natural%20reeds%20on%20cream%20marble%20surface%20editorial%20product%20photography%20high%20end%20home%20fragrance%20refined%20aesthetic%20soft%20natural%20light%20warm%20ivory%20tones&width=500&height=500&seq=shop-diffuser-light-001&orientation=squarish'
  },
  {
    id: 'price_gift_set',
    name: 'Gift Set',
    description: 'The complete experience. Includes our Signature Perfume and Luxury Diffuser in premium packaging.',
    price: 7500,
    currency: 'GBP',
    image: 'https://readdy.ai/api/search-image?query=luxury%20fragrance%20gift%20set%20premium%20packaging%20perfume%20diffuser%20together%20on%20cream%20marble%20surface%20editorial%20product%20photography%20high%20end%20presentation%20refined%20aesthetic%20soft%20natural%20light%20warm%20ivory%20tones&width=500&height=500&seq=shop-giftset-light-001&orientation=squarish'
  }
];

export default function Shop() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [notice, setNotice] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCheckout = async (productId: string) => {
    setLoading(productId);
    setNotice(false);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setNotice(true);
      }
    } catch {
      setNotice(true);
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="shop" ref={sectionRef} className="relative py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-[#b8965a]"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#b8965a]" style={{ fontFamily: "'Inter', sans-serif" }}>Shop</span>
            <div className="w-16 h-px bg-[#b8965a]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl text-[#1a1a1a] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Order Now
          </h2>
          <p className="text-[15px] text-[#6b6560] max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Discover your signature scent and transform your space with our curated collection
          </p>
        </div>

        {notice && (
          <div className="mb-10 max-w-xl mx-auto p-4 bg-[#fdf6ec] border border-[#b8965a] text-[#b8965a] text-sm text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
            Stripe payments are not yet connected. Please contact us at hello@hauzofdabs.com to place your order.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10" data-product-shop>
          {shopProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="border border-[#e8e0d5] hover:border-[#b8965a] transition-all duration-500 overflow-hidden">
                {/* Image */}
                <div className="relative w-full h-56 md:h-72 overflow-hidden bg-[#f7f3ee]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Info */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl text-[#1a1a1a] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#9e9690] mb-5 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      £{(product.price / 100).toFixed(0)}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCheckout(product.id)}
                    disabled={loading === product.id}
                    className="w-full py-4 bg-[#1a1a1a] text-white text-sm uppercase tracking-widest hover:bg-[#b8965a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {loading === product.id ? 'Processing...' : 'Buy Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 md:mt-24 relative overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=luxury%20perfume%20bottles%20arranged%20on%20pale%20stone%20surface%20soft%20morning%20light%20warm%20cream%20tones%20editorial%20lifestyle%20photography%20minimalist%20composition%20calm%20refined%20aesthetic%20elegant%20fragrance%20scene%20ivory%20background&width=1400&height=500&seq=cta-lifestyle-light-001&orientation=landscape"
            alt="Hauz of Dabs Collection"
            className="w-full h-[300px] md:h-[400px] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/70 via-[#1a1a1a]/40 to-transparent flex items-center">
            <div className="px-6 md:px-16">
              <p className="text-3xl md:text-5xl text-white leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Discover your<br /><em className="font-light text-[#d4b87a]">signature scent</em> today
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 border border-white text-white text-xs uppercase tracking-widest hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 whitespace-nowrap"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}