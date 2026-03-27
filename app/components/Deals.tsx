"use client";

import { useEffect, useRef } from "react";

const deals = [
  {
    featured: true,
    label: "Best Value",
    title: "$129 Special",
    items: [
      "Pair of 12\" × 24\" Magnets",
      "500 Business Cards",
      "Full Color + Gloss Finish",
      "Custom Design Included",
    ],
    note: "Ask about logo setup!",
    cta: "Claim This Deal",
  },
  {
    featured: false,
    label: "Business Cards",
    title: "From $75",
    items: [
      "500 Cards — $75",
      "1000 Cards — $85",
      "Full Color, 2 Sides",
      "Gloss Finish, Design Included",
    ],
    note: null,
    cta: "Order Cards",
  },
  {
    featured: false,
    label: "Magnet Deal",
    title: "$75",
    items: [
      "Pair of 12\" × 24\" Magnets",
      "Full Color Print",
      "Weatherproof & Durable",
      "Ready to Brand Your Vehicle",
    ],
    note: null,
    cta: "Get Magnets",
  },
];

const Check = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#F07818"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, marginTop: 2 }}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Deals() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".deal-anim");
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
            }, idx * 100);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="deals"
      style={{
        background: "#0d0d0d",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Heading */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
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
              Limited Time
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(36px, 5vw, 68px)",
                lineHeight: 1,
                color: "#fff",
              }}
            >
              CURRENT DEALS.
            </h2>
          </div>
          <a
            href="tel:8326872741"
            style={{
              fontSize: "0.78rem",
              color: "#555",
              textDecoration: "none",
              letterSpacing: "0.06em",
            }}
          >
            Questions? Call 832-687-2741
          </a>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
          {deals.map((d, i) => (
            <div
              key={d.title + i}
              className={`deal-card deal-anim ${d.featured ? "featured" : ""}`}
              data-idx={i}
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.22s",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Label */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: d.featured ? "var(--orange)" : "#555",
                  }}
                >
                  {d.label}
                </span>
                {d.featured && (
                  <span
                    style={{
                      background: "var(--orange)",
                      color: "#000",
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "0.2rem 0.5rem",
                    }}
                  >
                    Hot Deal
                  </span>
                )}
              </div>

              {/* Price */}
              <div
                className="font-display"
                style={{
                  fontSize: "clamp(40px, 5vw, 60px)",
                  lineHeight: 1,
                  color: d.featured ? "var(--orange)" : "#fff",
                }}
              >
                {d.title}
              </div>

              {/* Items */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {d.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      fontSize: "0.875rem",
                      color: "#ccc",
                    }}
                  >
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Note */}
              {d.note && (
                <p style={{ fontSize: "0.78rem", color: "#666", fontStyle: "italic" }}>
                  *{d.note}
                </p>
              )}

              {/* CTA */}
              <a
                href="#quote"
                className={d.featured ? "btn-primary" : "btn-ghost"}
                style={{ marginTop: "auto", justifyContent: "center" }}
              >
                {d.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
