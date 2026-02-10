import { useEffect, useRef, useState } from "react";
import "./App.css";

// Hero image
import heroImage from "./assets/image001.png";

// Products (Option A images) — ensure these files exist in src/assets/
import perfumesImg from "./assets/perfume.png";
import diffuserImg from "./assets/diffuser.png";
import giftsetImg from "./assets/giftset.png";

const BRAND = {
  name: "Hauz of Dabs",
  tagline: "Luxury perfumes and home diffusers, crafted to elevate your space.",
  ctaPrimary: "Shop bestsellers",
  ctaSecondary: "Contact us",
  email: "hello@hauzofd.com", // placeholder
  location: "United Kingdom", // placeholder
  instagram: "@hauzofdabs", // placeholder
};

const PRODUCTS = [
  {
    title: "Signature Perfumes",
    desc: "Long-lasting scents designed for daily wear and special moments.",
    image: perfumesImg,
  },
  {
    title: "Home Diffusers",
    desc: "Clean, elegant fragrance that transforms any room instantly.",
    image: diffuserImg,
  },
  {
    title: "Gift Sets",
    desc: "Curated bundles for birthdays, weddings, and corporate gifting.",
    image: giftsetImg
  },
   ];

const TESTIMONIALS = [
  {
    quote:
      "The diffuser is amazing — the scent fills the room without being overpowering.",
    name: "Customer review",
  },
  {
    quote:
      "The perfume lasts all day. Packaging was premium and delivery was fast.",
    name: "Customer review",
  },
  {
    quote: "Perfect gift set — elegant and smells incredible.",
    name: "Customer review",
  },
];

const sectionWrap = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "0 20px",
};

const cardStyle = {
  borderRadius: 18,
  padding: 18,
  background: "var(--bg-surface)",
  border: "1px solid var(--border-soft)",
  boxShadow: "0 12px 40px rgba(0,0,0,.35)",
};

const inputStyle = {
  width: "100%",
  marginTop: 6,
  padding: "12px 12px",
  borderRadius: 12,
  border: "1px solid var(--border-soft)",
  background: "rgba(255,255,255,0.06)",
  color: "var(--text-primary)",
  outline: "none",
};

function App() {
  const heroVisualRef = useRef(null);
  const [parallaxY, setParallaxY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const el = heroVisualRef.current;
    if (!el) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 800;

        const progress = Math.min(
          Math.max((vh - rect.top) / (vh + rect.height), 0),
          1
        );

        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const intensity = isMobile ? 10 : 18;

        const y = (progress - 0.5) * intensity;
        setParallaxY(y);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Top anchor for brand click */}
      <div id="top" />

      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(15,15,16,0.75)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-soft)",
        }}
      >
        <div
          style={{
            ...sectionWrap,
            paddingTop: 14,
            paddingBottom: 14,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <a
            href="#top"
            style={{
              color: "var(--text-primary)",
              letterSpacing: 0.3,
              fontWeight: 800,
            }}
          >
            {BRAND.name}
          </a>

          <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a style={{ color: "var(--text-secondary)" }} href="#about">
              About
            </a>
            <a style={{ color: "var(--text-secondary)" }} href="#products">
              Products
            </a>
            <a style={{ color: "var(--text-secondary)" }} href="#reviews">
              Reviews
            </a>
            <a style={{ color: "var(--text-secondary)" }} href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          padding: "78px 0 54px",
          background:
            "radial-gradient(900px 520px at 25% 10%, rgba(194,164,109,0.08), rgba(0,0,0,0) 60%), radial-gradient(900px 520px at 75% 20%, rgba(194,164,109,0.06), rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(15,15,16,1), rgba(15,15,16,1))",
        }}
      >
        <div
          style={{
            ...sectionWrap,
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 28,
            alignItems: "center",
          }}
        >
          {/* Hero text */}
          <div>
            <h1 style={{ fontSize: 54, margin: "0 0 12px", lineHeight: 1.05 }}>
              {BRAND.name}
            </h1>

            <p
              style={{
                fontSize: 18,
                maxWidth: 560,
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {BRAND.tagline}
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 26,
                flexWrap: "wrap",
              }}
            >
              <a href="#products" className="btn btn--gold">
                <span>{BRAND.ctaPrimary}</span>
              </a>

              <a href="#contact" className="btn btn--glass">
                <span>{BRAND.ctaSecondary}</span>
              </a>
            </div>

            <p
              style={{
                marginTop: 14,
                color: "var(--text-secondary)",
                fontSize: 13,
              }}
            >
              New drops & offers on Instagram:{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                {BRAND.instagram}
              </span>
            </p>
          </div>

          {/* Hero visual */}
          <div
            ref={heroVisualRef}
            className="glassCard parallaxWrap"
            style={{
              padding: 14,
              transform: `translate3d(0, ${
                mounted ? parallaxY : parallaxY + 10
              }px, 0)`,
              opacity: mounted ? 1 : 0,
              transition: "opacity 800ms ease, transform 900ms ease",
            }}
          >
            <div
              className="glassInner"
              style={{
                position: "relative",
                width: "100%",
                height: 420,
              }}
            >
              <img
                src={heroImage}
                alt="Hauz of Dabs home diffuser"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 55%",
                  filter: "saturate(0.9) contrast(1.05) brightness(0.95)",
                  transform: "scale(1.08)",
                }}
              />

              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(15,15,16,0.10), rgba(15,15,16,0.55))",
                  pointerEvents: "none",
                }}
              />

              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(520px 240px at 70% 20%, rgba(194,164,109,0.18), rgba(0,0,0,0))",
                  mixBlendMode: "screen",
                  opacity: 0.75,
                  pointerEvents: "none",
                }}
              />

              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 18,
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Feature pills */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 10,
                marginTop: 14,
              }}
            >
              {["Long-lasting", "Premium blends", "Gift-ready"].map((t) => (
                <div key={t} className="pill">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "70px 0" }}>
        <div style={sectionWrap}>
          <h2 style={{ margin: "0 0 10px" }}>About {BRAND.name}</h2>
          <p style={{ maxWidth: 820, color: "var(--text-secondary)", margin: 0 }}>
            Hauz of Dabs creates refined fragrances designed to elevate both personal style and living spaces.
            Rooted in understated luxury, our collections are inspired by moments of calm, warmth, and intentional living. Each fragrance is thoughtfully composed to enhance presence rather than overpower it, leaving a subtle yet memorable impression.
            With an emphasis on quality, craftsmanship, and timeless aesthetics, Hauz of Dabs fragrances are designed to integrate seamlessly into both personal rituals and interior spaces.
            
          </p>
        </div>
      </section>

      {/* Products (Option A) */}
      <section id="products" style={{ padding: "70px 0" }}>
        <div style={sectionWrap}>
          <h2 style={{ margin: 0 }}>Products</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              marginTop: 26,
            }}
          >
            {PRODUCTS.map((p) => (
              <div key={p.title} style={{ ...cardStyle, padding: 16 }}>
                <div
                  style={{
                    position: "relative",
                    height: 190,
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid var(--border-soft)",
                    background: "rgba(255,255,255,0.02)",
                    marginBottom: 14,
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "saturate(0.9) contrast(1.05) brightness(0.88)",
                      transform: "scale(1.04)",
                    }}
                  />

                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(15,15,16,0.12), rgba(15,15,16,0.72))",
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(420px 180px at 30% 20%, rgba(194,164,109,0.16), rgba(0,0,0,0))",
                      mixBlendMode: "screen",
                      opacity: 0.65,
                      pointerEvents: "none",
                    }}
                  />
                </div>

                <h3 style={{ marginTop: 0 }}>{p.title}</h3>
                <p style={{ color: "var(--text-secondary)", marginBottom: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" style={{ padding: "70px 0" }}>
        <div style={sectionWrap}>
          <h2 style={{ margin: 0 }}>Reviews</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              marginTop: 26,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={cardStyle}>
                <p style={{ color: "var(--text-secondary)", marginTop: 0 }}>
                  “{t.quote}”
                </p>
                <p style={{ fontSize: 13, marginBottom: 0 }}>
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "70px 0" }}>
        <div style={sectionWrap}>
          <h2 style={{ margin: 0 }}>Contact</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginTop: 26,
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted (demo). We’ll connect this to email later.");
              }}
              style={cardStyle}
            >
              <input placeholder="Your name" required style={inputStyle} />
              <input
                placeholder="Email address"
                type="email"
                required
                style={{ ...inputStyle, marginTop: 12 }}
              />
              <textarea
                rows={5}
                placeholder="Your message"
                required
                style={{ ...inputStyle, marginTop: 12, resize: "vertical" }}
              />
              <button
                type="submit"
                className="btn btn--gold"
                style={{ marginTop: 14, width: "100%" }}
              >
                <span>Send message</span>
              </button>
            </form>

            <div style={cardStyle}>
              <p style={{ marginTop: 0, color: "var(--text-secondary)" }}>
                <strong style={{ color: "var(--text-primary)" }}>Email:</strong>{" "}
                {BRAND.email}
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                <strong style={{ color: "var(--text-primary)" }}>Location:</strong>{" "}
                {BRAND.location}
              </p>
              <p style={{ marginBottom: 0, color: "var(--text-secondary)" }}>
                <strong style={{ color: "var(--text-primary)" }}>Instagram:</strong>{" "}
                {BRAND.instagram}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "26px 0", borderTop: "1px solid var(--border-soft)" }}>
        <div
          style={{
            ...sectionWrap,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 13,
            color: "var(--text-secondary)",
          }}
        >
          <div>{BRAND.name}</div>
          <div>© {new Date().getFullYear()}</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
