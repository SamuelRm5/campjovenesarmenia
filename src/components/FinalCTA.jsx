import { CAMP_CONFIG, isCampActive, waLinks } from "../config/campConfig";

export default function FinalCTA({ data }) {
  const active = isCampActive();
  const ctaLabel = CAMP_CONFIG.status.soldOut
    ? CAMP_CONFIG.messages.soldOut
    : CAMP_CONFIG.status.registrationClosed
      ? CAMP_CONFIG.messages.registrationClosed
      : data.ctaPrimary;

  return (
    <section
      style={{
        position: "relative",
        padding: "110px 24px 90px",
        textAlign: "center",
        background:
          "radial-gradient(ellipse 130% 80% at 50% 115%, rgba(185,28,28,.5) 0%, rgba(154,52,18,.25) 40%, rgba(10,10,15,0) 75%)",
      }}
    >
      <div
        className="reveal-on-scroll"
        style={{
          maxWidth: 560,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "Anton, sans-serif",
            fontWeight: 400,
            textTransform: "uppercase",
            fontSize: "clamp(36px,9vw,60px)",
            lineHeight: 1,
            background:
              "linear-gradient(180deg,#fde68a 5%,#f97316 55%,#b91c1c 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textWrap: "balance",
          }}
        >
          {data.heading}
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: 16,
            lineHeight: 1.6,
            color: "rgba(245,237,224,.75)",
            maxWidth: 420,
            textWrap: "pretty",
          }}
        >
          {data.body}
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href={active ? CAMP_CONFIG.camp.formUrl : "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={active ? undefined : (e) => e.preventDefault()}
            className="btn-ember-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 54,
              padding: "15px 34px",
              borderRadius: 999,
              background: active
                ? "linear-gradient(120deg,#b91c1c,#f97316 60%,#fbbf24)"
                : "linear-gradient(120deg,#4b4b4b,#6b6b6b)",
              color: "#1a0a05",
              fontWeight: 700,
              fontSize: 17,
              textDecoration: "none",
              boxShadow: "0 6px 30px rgba(249,115,22,.4)",
              cursor: active ? "pointer" : "not-allowed",
            }}
          >
            {ctaLabel}
          </a>
          <a
            href={waLinks.contacto()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ember-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 54,
              padding: "15px 28px",
              borderRadius: 999,
              border: "1px solid rgba(245,237,224,.28)",
              color: "#f5ede0",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              background: "rgba(255,255,255,.03)",
            }}
          >
            {data.ctaSecondary}
          </a>
        </div>
      </div>
      <footer
        style={{
          marginTop: 80,
          fontSize: 12.5,
          color: "rgba(245,237,224,.4)",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <span>{data.footerLine1}</span>
        <span style={{ fontStyle: "italic" }}>{data.footerLine2}</span>
      </footer>
    </section>
  );
}
