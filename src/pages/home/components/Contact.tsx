import { useState } from 'react';
import useScrollReveal, { revealClass } from '@/hooks/useScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setFormError(null);

    const form = e.currentTarget as HTMLFormElement;
    const formDataObj = new FormData(form);
    const honeypot = formDataObj.get('website_alt')?.toString().trim() || '';

    if (honeypot) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      form.reset();
      return;
    }

    try {
      const body = new URLSearchParams();
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d6m554o5dsf7sr1n66ng', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      const responseText = await response.text();
      let parsed: { code?: string; meta?: { message?: string; detail?: string } } = {};
      try { parsed = JSON.parse(responseText); } catch { /* ignore parse errors */ }

      if (response.ok && parsed.code === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const serverMsg = parsed?.meta?.message || parsed?.meta?.detail || 'Something went wrong. Please try again or email us directly.';
        setSubmitStatus('error');
        setFormError(serverMsg);
      }
    } catch {
      setSubmitStatus('error');
      setFormError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" ref={ref} className="relative py-16 md:py-32 bg-background-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-accent-500"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent-500" style={{ fontFamily: "var(--font-label)" }}>Contact</span>
            <div className="w-16 h-px bg-accent-500"></div>
          </div>
          <h2 className="text-4xl md:text-6xl text-foreground-950" style={{ fontFamily: "var(--font-heading)" }}>
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-16 items-start">
          <div className={`lg:col-span-3 ${revealClass(isVisible, 100)}`}>
            <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="website_alt"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly
                className="absolute opacity-0 pointer-events-none"
                style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: '1px', height: '1px', opacity: 0 }}
              />
              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground-400 mb-2" style={{ fontFamily: "var(--font-label)" }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-5 py-4 bg-background-50 border border-background-300 text-foreground-950 placeholder-foreground-300 text-sm focus:outline-none focus:border-accent-500 transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground-400 mb-2" style={{ fontFamily: "var(--font-label)" }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-5 py-4 bg-background-50 border border-background-300 text-foreground-950 placeholder-foreground-300 text-sm focus:outline-none focus:border-accent-500 transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground-400 mb-2" style={{ fontFamily: "var(--font-label)" }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-5 py-4 bg-background-50 border border-background-300 text-foreground-950 placeholder-foreground-300 text-sm focus:outline-none focus:border-accent-500 transition-all duration-300 resize-none"
                  style={{ fontFamily: "var(--font-body)" }}
                ></textarea>
                <p className="text-xs text-foreground-300 mt-1" style={{ fontFamily: "var(--font-body)" }}>
                  {formData.message.length}/500 characters
                </p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 border border-foreground-800 text-foreground-800 text-sm uppercase tracking-widest hover:bg-foreground-950 hover:text-background-50 hover:border-foreground-950 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                style={{ fontFamily: "var(--font-label)" }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-accent-100/50 border border-accent-300 text-accent-800 text-sm text-center" style={{ fontFamily: "var(--font-body)" }}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-secondary-100/50 border border-secondary-300 text-secondary-800 text-sm text-center" style={{ fontFamily: "var(--font-body)" }}>
                  {formError || 'Something went wrong. Please try again or email us directly.'}
                </div>
              )}
            </form>
          </div>

          <div className={`lg:col-span-2 ${revealClass(isVisible, 300)}`}>
            <div className="bg-background-50 border border-background-300 p-6 md:p-10 space-y-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent-500 mb-3" style={{ fontFamily: "var(--font-label)" }}>Email Us</p>
                <a
                  href="mailto:hello@hauzofdabs.com"
                  className="text-lg text-foreground-950 hover:text-accent-500 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  hello@hauzofdabs.com
                </a>
              </div>
              <div className="w-full h-px bg-background-300"></div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent-500 mb-3" style={{ fontFamily: "var(--font-label)" }}>Follow Us</p>
                <a
                  href="https://instagram.com/hauzofdabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-foreground-950 hover:text-accent-500 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-instagram-line text-xl"></i>
                  </div>
                  @hauzofdabs
                </a>
              </div>
              <div className="w-full h-px bg-background-300"></div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent-500 mb-3" style={{ fontFamily: "var(--font-label)" }}>Response Time</p>
                <p className="text-[15px] text-foreground-600" style={{ fontFamily: "var(--font-body)" }}>
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