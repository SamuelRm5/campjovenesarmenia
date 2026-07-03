import { CAMP_CONFIG, formatPrice } from "../config/campConfig";

export default function Precampamento({ data }) {
  return (
    <section style={{ padding: "84px 24px 20px" }}>
      <div
        className="reveal-on-scroll"
        style={{ maxWidth: 640, margin: "0 auto" }}
      >
        <div
          style={{
            position: "relative",
            border: "1.5px dashed rgba(251,191,36,.45)",
            borderRadius: 22,
            padding: "30px 26px",
            background:
              "linear-gradient(160deg,rgba(251,191,36,.06),rgba(20,12,10,.9))",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -13,
              left: 24,
              background: "#fbbf24",
              color: "#1a0a05",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              borderRadius: 999,
              padding: "5px 14px",
            }}
          >
            {data.badge}
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "#f97316",
              marginBottom: 10,
            }}
          >
            {data.eyebrow}
          </div>
          <h2
            style={{
              margin: "0 0 14px",
              fontFamily: "Anton, sans-serif",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(26px,6vw,38px)",
              lineHeight: 1.05,
              color: "#fdf6ec",
            }}
          >
            {data.heading}
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 15,
              lineHeight: 1.6,
              color: "rgba(245,237,224,.8)",
            }}
          >
            {data.bullets.map((bullet, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 10, alignItems: "baseline" }}
              >
                <span style={{ color: "#fbbf24", fontWeight: 700, flex: "none" }}>
                  →
                </span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 18,
              display: "flex",
              alignItems: "baseline",
              gap: 10,
              background: "rgba(10,10,15,.55)",
              border: "1px solid rgba(251,191,36,.25)",
              borderRadius: 14,
              padding: "14px 18px",
              width: "fit-content",
            }}
          >
            <span style={{ fontSize: 13, color: "rgba(245,237,224,.6)" }}>
              {data.totalLabel}
            </span>
            <span
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: 26,
                color: "#fbbf24",
              }}
            >
              {formatPrice(CAMP_CONFIG.precampamento.total)}
            </span>
          </div>
          <p
            style={{
              margin: "12px 0 0",
              fontSize: 12.5,
              lineHeight: 1.5,
              color: "rgba(245,237,224,.5)",
            }}
          >
            {data.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
