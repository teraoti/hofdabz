import { useState } from 'react';
import useScrollReveal, { revealClass } from '@/hooks/useScrollReveal';

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
  const [loading, setLoading] = useState<string | null>(null);
  const [notice, setNotice] = useState(false);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

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
    <section id="shop" ref={ref} className="relative py-16 md:py-32 bg-background-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-accent-500"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent-500" style={{ fontFamily: "var(--font-label)" }}>Shop</span>
            <div className="w-16 h-px bg-accent-500"></div>
          </div>
          <h2 className="text-4xl md:text-6xl text-foreground-950 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Order Now
          </h2>
          <p className="text-[15px] text-foreground-600 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Discover your signature scent and transform your space with our curated collection
          </p>
        </div>

        {notice && (
          <div className="mb-10 max-w-xl mx-auto p-4 bg-accent-100/50 border border-accent-500 text-accent-700 text-sm text-center" style={{ fontFamily: "var(--font-body)" }}>
            Stripe payments are not yet connected. Please contact us at hello@hauzofdabs.com to place your order.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10" data-product-shop>
          {shopProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group transition-all duration-700 ${revealClass(isVisible, index * 150)}`}
            >
              <div className="border border-background-300 hover:border-accent-500 transition-all duration-500 overflow-hidden">
                <div className="relative w-full h-56 md:h-72 overflow-hidden bg-background-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl text-foreground-950 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-foreground-400 mb-5 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl text-foreground-950" style={{ fontFamily: "var(--font-heading)" }}>
                      £{(product.price / 100).toFixed(0)}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCheckout(product.id)}
                    disabled={loading === product.id}
                    className="w-full py-4 border border-foreground-800 text-foreground-800 text-sm uppercase tracking-widest hover:bg-foreground-950 hover:text-background-50 hover:border-foreground-950 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {loading === product.id ? 'Processing...' : 'Buy Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 relative overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=luxury%20perfume%20bottles%20arranged%20on%20pale%20stone%20surface%20soft%20morning%20light%20warm%20cream%20tones%20editorial%20lifestyle%20photography%20minimalist%20composition%20calm%20refined%20aesthetic%20elegant%20fragrance%20scene%20ivory%20background&width=1400&height=500&seq=cta-lifestyle-light-001&orientation=landscape"
            alt="Hauz of Dabs luxury fragrance collection"
            className="w-full h-[300px] md:h-[400px] object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground-950/70 via-foreground-950/40 to-transparent flex items-center">
            <div className="px-6 md:px-16">
              <p className="text-3xl md:text-5xl text-background-50 leading-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Discover your<br /><em className="font-light text-accent-300">signature scent</em> today
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 border border-background-50 text-background-50 text-xs uppercase tracking-widest hover:bg-background-50 hover:text-foreground-950 transition-all duration-300 whitespace-nowrap cursor-pointer"
                style={{ fontFamily: "var(--font-label)" }}
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