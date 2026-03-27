"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 9000,
        background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e1e" : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <div className="flex items-center">
            <img
              src="/290grafix-clean.svg"
              alt="290 Grafix"
              className="h-[58px] w-auto max-w-[min(240px,52vw)] object-contain logo-glow"
            />
          </div>
        </a>

        {/* Right side */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <a
            href="tel:8326872741"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#aaa",
              fontSize: "0.82rem",
              letterSpacing: "0.04em",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.18s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F07818")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 17z"/>
            </svg>
            832-687-2741
          </a>

          <a href="#quote" className="btn-primary" style={{ fontSize: "0.72rem", padding: "0.6rem 1.25rem" }}>
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
