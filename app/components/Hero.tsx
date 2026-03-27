"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "calc(100vh - 68px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#080808",
      }}
    >
      {/* Background "290" watermark */}
      <div
        aria-hidden
        className="font-display"
        style={{
          position: "absolute",
          right: "-2%",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "clamp(180px, 28vw, 420px)",
          color: "rgba(240,120,24,0.04)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        290
      </div>

      {/* Grid lines */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "4rem 1.5rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "3rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Text side */}
        <div ref={headlineRef} style={{ maxWidth: 780 }}>
          {/* Label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.75rem",
            }}
          >
            <div
              style={{
                width: 28,
                height: 2,
                background: "var(--orange)",
              }}
            />
            <span
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#F07818",
                fontWeight: 600,
              }}
            >
              Houston&apos;s Custom Print Shop
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(56px, 10vw, 140px)",
              lineHeight: 0.95,
              marginBottom: "0.5rem",
              color: "#fff",
            }}
          >
            YOUR BRAND,
          </h1>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(56px, 10vw, 140px)",
              lineHeight: 0.95,
              marginBottom: "2rem",
            }}
          >
            <span style={{ color: "#fff" }}>PRINTED </span>
            <span style={{ color: "var(--orange)" }}>RIGHT.</span>
          </h1>

          {/* Sub copy */}
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.4vw, 1.125rem)",
              color: "#888",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: 520,
              fontWeight: 300,
            }}
          >
            Banners, shirts, magnets &amp; business cards — ready fast in Houston.
          </p>

          {/* Service chips */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "2.75rem",
            }}
          >
            {["Signs", "Banners", "Apparel", "Magnets", "Business Cards", "DTF", "Silkscreen", "Digital Print"].map(
              (s) => (
                <span
                  key={s}
                  style={{
                    padding: "0.3rem 0.75rem",
                    border: "1px solid #2a2a2a",
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#666",
                    fontWeight: 500,
                  }}
                >
                  {s}
                </span>
              )
            )}
          </div>

          <p style={{ marginTop: "1rem", fontSize: "0.78rem", color: "#555", letterSpacing: "0.02em" }}>
            Trusted by local businesses across Houston, Cypress, and surrounding areas.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
            <a href="#quote" className="btn-primary">
              GET YOUR PRICE NOW
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="tel:8326872741" className="btn-ghost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 17z"/>
              </svg>
              Call 832-687-2741
            </a>
          </div>
        </div>

        {/* Logo side */}
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="hero-logo"
        >
          <div
            style={{
              position: "relative",
              width: "clamp(220px, 22vw, 340px)",
              height: "clamp(220px, 22vw, 340px)",
            }}
          >
            {/* Glow behind logo */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-20%",
                background: "radial-gradient(circle, rgba(240,120,24,0.12) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />
            <Image
              src="/290grafix.svg"
              alt="290 GraFiX logo"
              fill
              style={{ objectFit: "contain", mixBlendMode: "screen" }}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          background: "linear-gradient(to top, #080808, transparent)",
          pointerEvents: "none",
        }}
      />

      <style>{`
        @media (max-width: 680px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-logo {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
