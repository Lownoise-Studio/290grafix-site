"use client";

const serviceLinks = [
  "Signs",
  "Banners",
  "Apparel",
  "Magnets",
  "Business Cards",
  "DTF & Silkscreen",
  "Digital Print",
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid #1a1a1a",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center">
              <img
                src="/290grafix-clean.svg"
                alt="290 Grafix"
                className="w-[200px] h-auto object-contain logo-glow sm:w-[220px]"
              />
            </div>
            <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.7, maxWidth: 280 }}>
              Custom printing & graphics for Houston businesses and brands. Built with pride, printed right.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#444",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    style={{
                      fontSize: "0.82rem",
                      color: "#555",
                      textDecoration: "none",
                      transition: "color 0.18s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F07818")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#444",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="tel:8326872741"
                style={{
                  fontSize: "0.875rem",
                  color: "#555",
                  textDecoration: "none",
                  transition: "color 0.18s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F07818")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                (832) 687-2741
              </a>
              <a
                href="mailto:290grafix@gmail.com"
                style={{
                  fontSize: "0.875rem",
                  color: "#555",
                  textDecoration: "none",
                  transition: "color 0.18s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F07818")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                290grafix@gmail.com
              </a>
              <div style={{ marginTop: "0.5rem" }}>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#333", fontWeight: 700, marginBottom: "0.4rem" }}>
                  Serving
                </p>
                <p style={{ fontSize: "0.78rem", color: "#444", lineHeight: 1.6 }}>
                  Houston · Cypress · Hockley<br />
                  Waller · Hempstead · Brenham
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid #111",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.72rem", color: "#333", letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} 290 GraFiX. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="https://www.facebook.com/290GraFix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{ color: "#444", transition: "color 0.18s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F07818")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/290grafix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ color: "#444", transition: "color 0.18s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F07818")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
