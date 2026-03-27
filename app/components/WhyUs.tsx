const stats = [
  {
    value: "LOCAL",
    unit: "",
    label: "Houston-Based",
    desc: "We're right here — serving Houston, Cypress, Hockley, Waller, Hempstead & Brenham. No middlemen.",
  },
  {
    value: "FAST",
    unit: "",
    label: "Quick Turnaround",
    desc: "We know you needed it yesterday. We move quick without cutting corners on quality.",
  },
  {
    value: "BUILT",
    unit: "",
    label: "Right the First Time",
    desc: "Custom design included. We take your vision and make it print-ready — no back-and-forth hassle.",
  },
];

export default function WhyUs() {
  return (
    <section
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
          Why 290 GraFiX
        </p>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(36px, 5vw, 68px)",
            lineHeight: 1,
            color: "#fff",
          }}
        >
          LOCAL.{" "}
          <span style={{ color: "var(--orange)" }}>FAST.</span>
          <br />
          BUILT RIGHT.
        </h2>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "0",
          borderTop: "1px solid var(--border)",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.value}
            style={{
              padding: "2.5rem 0",
              paddingRight: "2rem",
              borderBottom: "1px solid var(--border)",
              borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <div
              className="font-display"
              style={{
                fontSize: "clamp(42px, 5vw, 64px)",
                lineHeight: 1,
                color: "var(--orange)",
                marginBottom: "0.25rem",
              }}
            >
              {s.value}
              <span style={{ fontSize: "0.5em", color: "#555" }}>{s.unit}</span>
            </div>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "0.875rem",
              }}
            >
              {s.label}
            </p>
            <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.65 }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Area note */}
      <div
        style={{
          marginTop: "3rem",
          padding: "1.5rem",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F07818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <p style={{ fontSize: "0.82rem", color: "#666" }}>
          <span style={{ color: "#fff", fontWeight: 600 }}>Serving:</span>{" "}
          Houston · Cypress · Hockley · Waller · Hempstead · Brenham
        </p>
      </div>
    </section>
  );
}
