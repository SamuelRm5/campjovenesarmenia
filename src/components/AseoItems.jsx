import SectionWrapper from "./SectionWrapper";

export default function AseoItems({ data }) {
  return (
    <SectionWrapper id="aseo" eyebrow={data.eyebrow} heading={data.heading}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: 12,
        }}
      >
        {data.items.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
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
                width: 26,
                height: 26,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "rgba(74,222,128,.14)",
                color: "#4ade80",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              ✓
            </span>
            <span
              style={{ fontSize: 15, fontWeight: 600, color: "#fdf6ec" }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
