import SectionWrapper from "./SectionWrapper";

const ICON_STYLE = {
  "✝": { background: "rgba(251,191,36,.14)", color: "#fbbf24", fontSize: 15 },
  "≈": { background: "rgba(96,165,250,.14)", color: "#60a5fa", fontSize: 16 },
  "♥": { background: "rgba(251,191,36,.14)", color: "#fbbf24", fontSize: 15 },
  "◆": { background: "rgba(249,115,22,.14)", color: "#f97316", fontSize: 14 },
  "♪": { background: "rgba(251,191,36,.14)", color: "#fbbf24", fontSize: 15 },
};

function ActivityIcon({ symbol }) {
  if (symbol === "flame") {
    return (
      <span
        style={{
          display: "inline-flex",
          width: 32,
          height: 32,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          background: "rgba(249,115,22,.16)",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 12,
            height: 12,
            background: "linear-gradient(180deg,#fbbf24,#f97316)",
            borderRadius: "0 50% 50% 50%",
            transform: "rotate(45deg)",
          }}
        />
      </span>
    );
  }
  const style = ICON_STYLE[symbol];
  return (
    <span
      style={{
        display: "inline-flex",
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        ...style,
      }}
    >
      {symbol}
    </span>
  );
}

export default function Activities({ data }) {
  return (
    <SectionWrapper
      id="actividades"
      eyebrow={data.eyebrow}
      heading={data.heading}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: 12,
        }}
      >
        {data.items.map((item) => (
          <div
            key={item.title}
            style={{
              background: "rgba(20,14,12,.85)",
              border: "1px solid rgba(245,237,224,.08)",
              borderRadius: 16,
              padding: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 8,
              }}
            >
              <ActivityIcon symbol={item.symbol} />
              <h3
                style={{
                  margin: 0,
                  fontSize: 15.5,
                  fontWeight: 700,
                  color: "#fdf6ec",
                }}
              >
                {item.title}
              </h3>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                lineHeight: 1.55,
                color: "rgba(245,237,224,.65)",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
