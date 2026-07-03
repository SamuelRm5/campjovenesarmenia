import SectionWrapper from "./SectionWrapper";

export default function Reglamento({ data }) {
  return (
    <SectionWrapper
      id="reglamento"
      eyebrow={data.eyebrow}
      heading={data.heading}
      headingMarginBottom={10}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {data.items.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
              background: "rgba(20,14,12,.85)",
              border: "1px solid rgba(245,237,224,.08)",
              borderRadius: 14,
              padding: "16px 18px",
            }}
          >
            <span
              style={{
                flex: "none",
                display: "inline-flex",
                width: 24,
                height: 24,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "rgba(251,191,36,.14)",
                color: "#fbbf24",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              ✓
            </span>
            <span
              style={{
                fontSize: 15,
                lineHeight: 1.55,
                color: "rgba(245,237,224,.82)",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
