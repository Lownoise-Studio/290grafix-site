"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "sending" | "success";

export default function QuoteForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setState("sending");

    // Build mailto body
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      ``,
      `Message:`,
      form.message,
    ].join("\n");

    const mailto = `mailto:290grafix@gmail.com?subject=Quote Request — ${encodeURIComponent(form.service || "General")}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.open(mailto, "_blank");
      setState("success");
    }, 600);
  };

  if (state === "success") {
    return (
      <section
        id="quote"
        style={{
          background: "#0d0d0d",
          borderTop: "1px solid var(--border)",
          padding: "6rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div
            style={{
              width: 64,
              height: 64,
              background: "rgba(240,120,24,0.1)",
              border: "1px solid var(--orange)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 2rem",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F07818" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h3 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "1rem" }}>
            YOUR EMAIL IS OPENING.
          </h3>
          <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Complete your message in the email client and hit send. We&apos;ll get back to you fast.
            <br /><br />
            Or just call us directly:{" "}
            <a href="tel:8326872741" style={{ color: "var(--orange)", fontWeight: 600 }}>
              832-687-2741
            </a>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="quote"
      style={{
        background: "#0d0d0d",
        borderTop: "1px solid var(--border)",
        padding: "6rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="quote-grid"
      >
        {/* Left col */}
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
            Get Started
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5vw, 72px)",
              lineHeight: 0.95,
              color: "#fff",
              marginBottom: "1.5rem",
            }}
          >
            GET YOUR
            <br />
            <span style={{ color: "var(--orange)" }}>QUOTE</span>
            <br />
            TODAY.
          </h2>
          <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 360 }}>
            Fill out the form and we&apos;ll get back to you with pricing and details. No pressure, no runaround.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: "📞", label: "832-687-2741", href: "tel:8326872741" },
              { icon: "✉️", label: "290grafix@gmail.com", href: "mailto:290grafix@gmail.com" },
            ].map((c) => (
              <a
                key={c.href}
                href={c.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize: "0.875rem",
                  color: "#aaa",
                  textDecoration: "none",
                  transition: "color 0.18s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F07818")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
              >
                <span>{c.icon}</span>
                {c.label}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={submit}
          style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", fontWeight: 600, marginBottom: "0.4rem" }}>
                Name *
              </label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handle}
                placeholder="Your name"
                className="form-field"
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", fontWeight: 600, marginBottom: "0.4rem" }}>
                Phone
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handle}
                placeholder="832-000-0000"
                className="form-field"
              />
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", fontWeight: 600, marginBottom: "0.4rem" }}>
              Email *
            </label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handle}
              placeholder="you@email.com"
              className="form-field"
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", fontWeight: 600, marginBottom: "0.4rem" }}>
              Service Needed
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handle}
              className="form-field"
            >
              <option value="">Select a service…</option>
              <option>Signs & Banners</option>
              <option>Apparel / T-Shirts</option>
              <option>Business Cards</option>
              <option>Magnets</option>
              <option>DTF / Silkscreen Printing</option>
              <option>Car Wraps & Vinyl</option>
              <option>Digital Print</option>
              <option>$129 Special (Magnets + Cards)</option>
              <option>Other / Not Sure</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", fontWeight: 600, marginBottom: "0.4rem" }}>
              Tell Us More
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handle}
              placeholder="Quantities, sizes, colors, deadline… any details help."
              rows={5}
              className="form-field"
              style={{ resize: "vertical", minHeight: 120 }}
            />
          </div>

          <button
            type="submit"
            disabled={state === "sending"}
            className="btn-primary"
            style={{ justifyContent: "center", marginTop: "0.5rem" }}
          >
            {state === "sending" ? "Opening Your Email…" : "Send Quote Request →"}
          </button>

          <p style={{ fontSize: "0.72rem", color: "#444", textAlign: "center", letterSpacing: "0.04em" }}>
            Or call us directly — 832-687-2741
          </p>
        </form>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .quote-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
