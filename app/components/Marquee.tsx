const services = [
  "Signs",
  "Banners",
  "Apparel",
  "Magnets",
  "Business Cards",
  "DTF Printing",
  "Silkscreen",
  "Digital Print",
];

const items = [...services, ...services]; // doubled for seamless loop

export default function Marquee() {
  return (
    <div
      style={{
        background: "var(--orange)",
        padding: "0.875rem 0",
        overflow: "hidden",
        borderTop: "1px solid rgba(0,0,0,0.2)",
        borderBottom: "1px solid rgba(0,0,0,0.2)",
      }}
      className="marquee-wrapper"
      aria-label="Services"
    >
      <div className="marquee-track">
        {items.map((s, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.25rem",
              paddingRight: "1.25rem",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#000",
              whiteSpace: "nowrap",
            }}
          >
            {s}
            <span style={{ color: "rgba(0,0,0,0.35)", fontSize: "0.6rem" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
