"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="1"/>
        <path d="M9 9h6M9 12h6M9 15h4"/>
      </svg>
    ),
    name: "Signs & Banners",
    desc: "Outdoor, indoor, vinyl, coroplast — built to get noticed.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
      </svg>
    ),
    name: "Apparel",
    desc: "Custom shirts, hoodies & uniforms. Screen printed or DTF.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    name: "Business Cards",
    desc: "Full color, 2-sided, gloss finish. Design included.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2M2 12h20"/>
      </svg>
    ),
    name: "Magnets",
    desc: "12\"×24\" vehicle magnets in full color. Ready to stick.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    name: "DTF & Silkscreen",
    desc: "Direct-to-film transfers and traditional screen printing.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    name: "Digital Print",
    desc: "Full color digital printing for any project, any size.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".srv-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const idx = parseInt(el.dataset.idx ?? "0");
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, idx * 80);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        padding: "6rem 1.5rem",
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      {/* Heading */}
      <div style={{ marginBottom: "3.5rem" }}>
        <p
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--orange)",
            fontWeight: 600,
            marginBottom: "0.75rem",
          }}
        >
          What We Do
        </p>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(36px, 5vw, 68px)",
            lineHeight: 1,
            color: "#fff",
          }}
        >
          EVERYTHING YOUR
          <br />
          BRAND NEEDS.
        </h2>
      </div>

      {/* Grid */}
      <div
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "var(--border)",
        }}
      >
        {services.map((s, i) => (
          <div
            key={s.name}
            className="service-card srv-card"
            data-idx={i}
            style={{
              opacity: 0,
              transform: "translateY(16px)",
              transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.22s, background 0.22s",
            }}
          >
            <div style={{ color: "var(--orange)", marginBottom: "1.25rem" }}>
              {s.icon}
            </div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              {s.name}
            </h3>
            <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.6 }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
