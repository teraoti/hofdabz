import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('message', formData.message);
      const response = await fetch('https://readdy.ai/api/form/d6m554o5dsf7sr1n66ng', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-16 md:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-[#b8965a]"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#b8965a]" style={{ fontFamily: "'Inter', sans-serif" }}>Contact</span>
            <div className="w-16 h-px bg-[#b8965a]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-16 items-start">
          {/* Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#9e9690] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-5 py-4 bg-white border border-[#e8e0d5] text-[#1a1a1a] placeholder-[#c5bdb5] text-sm focus:outline-none focus:border-[#b8965a] transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#9e9690] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-5 py-4 bg-white border border-[#e8e0d5] text-[#1a1a1a] placeholder-[#c5bdb5] text-sm focus:outline-none focus:border-[#b8965a] transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#9e9690] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-5 py-4 bg-white border border-[#e8e0d5] text-[#1a1a1a] placeholder-[#c5bdb5] text-sm focus:outline-none focus:border-[#b8965a] transition-all duration-300 resize-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                ></textarea>
                <p className="text-xs text-[#c5bdb5] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {formData.message.length}/500 characters
                </p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#1a1a1a] text-white text-sm uppercase tracking-widest hover:bg-[#b8965a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-[#f0f7f0] border border-[#a8c8a8] text-[#4a7a4a] text-sm text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-[#fdf0f0] border border-[#c8a8a8] text-[#7a4a4a] text-sm text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Something went wrong. Please try again or email us directly.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white border border-[#e8e0d5] p-6 md:p-10 space-y-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#b8965a] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Email Us</p>
                <a
                  href="mailto:hello@hauzofdabs.com"
                  className="text-lg text-[#1a1a1a] hover:text-[#b8965a] transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  hello@hauzofdabs.com
                </a>
              </div>
              <div className="w-full h-px bg-[#e8e0d5]"></div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#b8965a] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Follow Us</p>
                <a
                  href="https://instagram.com/hauzofdabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-[#1a1a1a] hover:text-[#b8965a] transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-instagram-line text-xl"></i>
                  </div>
                  @hauzofdabs
                </a>
              </div>
              <div className="w-full h-px bg-[#e8e0d5]"></div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#b8965a] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Response Time</p>
                <p className="text-[15px] text-[#6b6560]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  We aim to respond to all enquiries within 24–48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
