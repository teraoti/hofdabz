export default function Footer() {
  return (
    <footer className="bg-foreground-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-start leading-none mb-5 w-fit" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="text-2xl tracking-wide text-accent-500 font-semibold">HAUZ</span>
              <div className="flex flex-col items-center mx-0.5 pt-1">
                <img
                  src="https://public.readdy.ai/ai/img_res/e011fd85-7547-44dc-bb8e-1f1c41556f23.png"
                  alt="Hauz of Dabs leaf icon"
                  className="w-3 h-3 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(63%) sepia(40%) saturate(500%) hue-rotate(5deg) brightness(95%)' }}
                />
                <span className="text-[7px] tracking-widest text-accent-500 uppercase">of</span>
              </div>
              <span className="text-2xl tracking-wide text-accent-500 font-semibold">DABS</span>
            </div>
            <p className="text-sm text-foreground-500 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Refined fragrances for modern living.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://instagram.com/hauzofdabs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-foreground-700 text-foreground-500 hover:border-accent-500 hover:text-accent-500 transition-all duration-300 cursor-pointer">
                <i className="ri-instagram-line text-base"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center border border-foreground-700 text-foreground-500 hover:border-accent-500 hover:text-accent-500 transition-all duration-300 cursor-pointer">
                <i className="ri-pinterest-line text-base"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center border border-foreground-700 text-foreground-500 hover:border-accent-500 hover:text-accent-500 transition-all duration-300 cursor-pointer">
                <i className="ri-tiktok-line text-base"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-accent-500 mb-6" style={{ fontFamily: "var(--font-label)" }}>Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#' },
                { label: 'Collection', href: '#products' },
                { label: 'Our Story', href: '#story' },
                { label: 'Shop', href: '#shop' },
                { label: 'Contact', href: '#contact' },
              ].map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-foreground-500 hover:text-background-50 transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-accent-500 mb-6" style={{ fontFamily: "var(--font-label)" }}>Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@hauzofdabs.com" className="text-sm text-foreground-500 hover:text-background-50 transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                  hello@hauzofdabs.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/hauzofdabs" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground-500 hover:text-background-50 transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                  @hauzofdabs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-accent-500 mb-6" style={{ fontFamily: "var(--font-label)" }}>Stay Updated</h4>
            <p className="text-sm text-foreground-500 mb-5 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
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
                const formData = new FormData(form);
                const honeypot = formData.get('company_alt')?.toString().trim() || '';
                if (honeypot) {
                  form.reset();
                  const btn = form.querySelector('button');
                  if (btn) {
                    btn.innerHTML = '<i class="ri-check-line text-background-50 text-base"></i>';
                    setTimeout(() => { btn.innerHTML = '<i class="ri-arrow-right-line text-background-50 text-base"></i>'; }, 2500);
                  }
                  return;
                }
                const data = new URLSearchParams(formData as any).toString();
                fetch('https://readdy.ai/api/form/d6m6mg5v117fnkj2h2a0', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: data,
                }).then(() => {
                  form.reset();
                  const btn = form.querySelector('button');
                  if (btn) {
                    btn.innerHTML = '<i class="ri-check-line text-background-50 text-base"></i>';
                    setTimeout(() => { btn.innerHTML = '<i class="ri-arrow-right-line text-background-50 text-base"></i>'; }, 2500);
                  }
                });
              }}
              className="flex"
            >
              <input
                type="text"
                name="company_alt"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly
                className="absolute opacity-0 pointer-events-none"
                style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: '1px', height: '1px', opacity: 0 }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="flex-1 px-4 py-3 bg-foreground-800 border border-foreground-700 text-sm text-background-50 placeholder-foreground-400 focus:outline-none focus:border-accent-500 transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              />
              <button type="submit" className="px-5 py-3 bg-accent-500 hover:bg-accent-600 transition-colors duration-300 cursor-pointer whitespace-nowrap">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-background-50 text-base"></i>
                </div>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground-700 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-foreground-400" style={{ fontFamily: "var(--font-body)" }}>
            © 2025 Hauz of Dabs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-foreground-400 hover:text-background-50 transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>Privacy Policy</a>
            <a href="#" className="text-xs text-foreground-400 hover:text-background-50 transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}