import SectionWrapper from "./SectionWrapper";

const paragraphStyle = {
  margin: "0 0 14px",
  lineHeight: 1.7,
  color: "rgba(245,237,224,.78)",
  textWrap: "pretty",
  fontSize: 16.5,
};

function Paragraph({ parts }) {
  return (
    <p style={paragraphStyle}>
      {parts.map((part, i) =>
        part.break ? (
          <br key={i} />
        ) : part.bold ? (
          <strong key={i} style={{ color: "#fde68a" }}>
            {part.text}
          </strong>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </p>
  );
}

export default function About({ data }) {
  return (
    <SectionWrapper
      id="sobre"
      eyebrow={data.eyebrow}
      heading={data.heading}
      headingMarginBottom={18}
    >
      {data.paragraphs.map((parts, i) => (
        <Paragraph key={i} parts={parts} />
      ))}

      <div
        style={{
          position: "relative",
          borderRadius: 18,
          overflow: "hidden",
          margin: "30px 0 0",
        }}
      >
        {/* placeholder: reemplazar por la foto "Camino a Emaús" 2026 cuando llegue el webp */}
        <img
          src="/gallery-2026/walking.webp"
          alt={data.imagenAlt}
          style={{
            display: "block",
            width: "100%",
            height: "clamp(190px,42vw,260px)",
            objectFit: "cover",
            objectPosition: "center 62%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg,rgba(10,10,15,.18) 0%,rgba(10,10,15,0) 35%,rgba(10,10,15,.28) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: 14,
          marginTop: 26,
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(160deg,rgba(185,28,28,.14),rgba(20,12,10,.9))",
            border: "1px solid rgba(249,115,22,.25)",
            borderRadius: 18,
            padding: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                width: 34,
                height: 34,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                background: "rgba(249,115,22,.15)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 13,
                  height: 13,
                  background: "linear-gradient(180deg,#fbbf24,#f97316)",
                  borderRadius: "0 50% 50% 50%",
                  transform: "rotate(45deg)",
                }}
              />
            </span>
            <h3
              style={{
                margin: 0,
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#fde68a",
              }}
            >
              {data.misionTitulo}
            </h3>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.65,
              color: "rgba(245,237,224,.75)",
            }}
          >
            {data.mision}
          </p>
        </div>

        <div
          style={{
            background:
              "linear-gradient(160deg,rgba(251,191,36,.1),rgba(20,12,10,.9))",
            border: "1px solid rgba(251,191,36,.25)",
            borderRadius: 18,
            padding: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                width: 34,
                height: 34,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                background: "rgba(251,191,36,.15)",
                color: "#fbbf24",
                fontSize: 16,
              }}
            >
              ♥
            </span>
            <h3
              style={{
                margin: 0,
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#fde68a",
              }}
            >
              {data.visionTitulo}
            </h3>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.65,
              color: "rgba(245,237,224,.75)",
            }}
          >
            {data.vision}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
