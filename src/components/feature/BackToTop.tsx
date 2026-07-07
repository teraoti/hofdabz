import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 w-11 h-11 flex items-center justify-center bg-accent-500 text-background-50 hover:bg-accent-600 transition-all duration-300 cursor-pointer ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ fontFamily: "var(--font-label)" }}
    >
      <div className="w-4 h-4 flex items-center justify-center">
        <i className="ri-arrow-up-line text-lg"></i>
      </div>
    </button>
  );
}