export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-center leading-none mb-5 w-fit" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <img
                src="https://public.readdy.ai/ai/img_res/e011fd85-7547-44dc-bb8e-1f1c41556f23.png"
                alt="leaf icon"
                className="w-7 h-7 object-contain mb-0.5"
                style={{ filter: 'brightness(0) saturate(100%) invert(63%) sepia(40%) saturate(500%) hue-rotate(5deg) brightness(95%)' }}
              />
              <div className="flex items-baseline">
                <span className="text-2xl tracking-wide text-[#b8965a] font-semibold">HAUZ</span>
                <span className="text-xs tracking-widest text-[#b8965a] uppercase leading-none" style={{ marginBottom: '4px', marginRight: '6px' }}>of</span>
                <span className="text-2xl tracking-wide text-[#b8965a] font-semibold">DABS</span>
              </div>
            </div>
            <p className="text-sm text-[#8a8480] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Refined fragrances for modern living.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://instagram.com/hauzofdabs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-[#3a3530] text-[#8a8480] hover:border-[#b8965a] hover:text-[#b8965a] transition-all duration-300 cursor-pointer">
                <i className="ri-instagram-line text-base"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center border border-[#3a3530] text-[#8a8480] hover:border-[#b8965a] hover:text-[#b8965a] transition-all duration-300 cursor-pointer">
                <i className="ri-pinterest-line text-base"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center border border-[#3a3530] text-[#8a8480] hover:border-[#b8965a] hover:text-[#b8965a] transition-all duration-300 cursor-pointer">
                <i className="ri-tiktok-line text-base"></i>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#b8965a] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#' },
                { label: 'Collection', href: '#products' },
                { label: 'Our Story', href: '#story' },
                { label: 'Shop', href: '#shop' },
                { label: 'Contact', href: '#contact' },
              ].map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-[#8a8480] hover:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#b8965a] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@hauzofdabs.com" className="text-sm text-[#8a8480] hover:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                  hello@hauzofdabs.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/hauzofdabs" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8a8480] hover:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                  @hauzofdabs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#b8965a] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>Stay Updated</h4>
            <p className="text-sm text-[#8a8480] mb-5 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Receive launch updates and exclusive offers.
            </p>
            <form
              data-readdy-form
              action="https://readdy.ai/api/form/d6m6mg5v117fnkj2h2a0"
              method="POST"
              encType="application/x-www-form-urlencoded"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new URLSearchParams(new FormData(form) as any).toString();
                fetch('https://readdy.ai/api/form/d6m6mg5v117fnkj2h2a0', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: data,
                }).then(() => {
                  form.reset();
                  const btn = form.querySelector('button');
                  if (btn) {
                    btn.innerHTML = '<i class="ri-check-line text-white text-base"></i>';
                    setTimeout(() => { btn.innerHTML = '<i class="ri-arrow-right-line text-white text-base"></i>'; }, 2500);
                  }
                });
              }}
              className="flex"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="flex-1 px-4 py-3 bg-[#2a2520] border border-[#3a3530] text-sm text-white placeholder-[#5a5550] focus:outline-none focus:border-[#b8965a] transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <button type="submit" className="px-5 py-3 bg-[#b8965a] hover:bg-[#a07848] transition-colors duration-300 cursor-pointer whitespace-nowrap">
                <i className="ri-arrow-right-line text-white text-base"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2a2520] flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-[#5a5550]" style={{ fontFamily: "'Inter', sans-serif" }}>
            © 2025 Hauz of Dabs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#5a5550] hover:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>Privacy Policy</a>
            <a href="#" className="text-xs text-[#5a5550] hover:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
