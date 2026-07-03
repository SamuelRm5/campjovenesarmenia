import { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import {
  CAMP_CONFIG,
  formatPrice,
  isPriceIncreased,
  urgencyPercent,
  urgencyLabels,
  waLinks,
} from "../config/campConfig";

const stepStyle = {
  display: "flex",
  gap: 10,
  fontSize: 14,
  lineHeight: 1.5,
  color: "rgba(245,237,224,.75)",
};

const stepNumberStyle = {
  flex: "none",
  width: 20,
  height: 20,
  borderRadius: "50%",
  background: "rgba(249,115,22,.18)",
  color: "#fbbf24",
  fontSize: 11,
  fontWeight: 700,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const chipStyle = {
  fontFamily: "ui-monospace,Menlo,monospace",
  fontSize: 12.5,
  color: "#fbbf24",
  background: "rgba(251,191,36,.07)",
  border: "1px dashed rgba(251,191,36,.4)",
  borderRadius: 6,
  padding: "3px 8px",
  width: "fit-content",
};

function StepsCard({ title, tag, chips, steps }) {
  return (
    <div
      style={{
        background: "rgba(20,14,12,.85)",
        border: "1px solid rgba(245,237,224,.1)",
        borderRadius: 18,
        padding: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          marginBottom: 14,
        }}
      >
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#fdf6ec" }}>
          {title}
        </h3>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "#f97316",
            border: "1px solid rgba(249,115,22,.35)",
            borderRadius: 999,
            padding: "4px 10px",
          }}
        >
          {tag}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          marginBottom: 14,
        }}
      >
        {chips.map((chip) => (
          <span key={chip} style={chipStyle}>
            {chip}
          </span>
        ))}
      </div>
      <ol
        style={{
          margin: 0,
          padding: "0 0 0 2px",
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 9,
        }}
      >
        {steps.map((step, i) => (
          <li key={i} style={stepStyle}>
            <span style={stepNumberStyle}>{i + 1}</span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Payment({ data }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const tick = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(tick);
  }, []);

  const despues = isPriceIncreased(now);
  const pct = urgencyPercent(now);
  const labels = urgencyLabels(now);

  return (
    <SectionWrapper id="pago" eyebrow={data.eyebrow} heading={data.heading}>
      {/* Barra de urgencia */}
      <div
        style={{
          background: "rgba(20,12,10,.9)",
          border: "1px solid rgba(249,115,22,.3)",
          borderRadius: 18,
          padding: "20px 22px",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 12,
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 700, color: "#fde68a" }}>
            {labels.titulo}
          </span>
          <span style={{ fontSize: 13, color: "rgba(245,237,224,.6)" }}>
            {labels.sub}
          </span>
        </div>
        <div
          style={{
            position: "relative",
            height: 14,
            borderRadius: 999,
            background: "rgba(245,237,224,.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "0 auto 0 0",
              width: `${pct}%`,
              borderRadius: 999,
              background: "linear-gradient(90deg,#7a1a1a,#f97316 60%,#fbbf24)",
              boxShadow: "0 0 14px rgba(249,115,22,.6)",
              transition: "width 1s linear",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 8,
            fontSize: 12,
            color: "rgba(245,237,224,.5)",
          }}
        >
          <span>{data.urgencyToday}</span>
          <span>{data.urgencyDeadline}</span>
        </div>
      </div>

      {/* Precios */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginBottom: 26,
        }}
      >
        <div
          style={{
            position: "relative",
            background: "rgba(20,14,12,.85)",
            border: !despues
              ? "1px solid rgba(251,191,36,.4)"
              : "1px solid rgba(245,237,224,.12)",
            borderRadius: 18,
            padding: 20,
            textAlign: "center",
          }}
        >
          {!despues && (
            <div
              style={{
                position: "absolute",
                top: -11,
                left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(120deg,#f97316,#fbbf24)",
                color: "#1a0a05",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                borderRadius: 999,
                padding: "4px 12px",
                whiteSpace: "nowrap",
              }}
            >
              {data.currentPriceBadge}
            </div>
          )}
          <div
            style={{
              fontSize: 12,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "rgba(245,237,224,.55)",
              marginBottom: 6,
            }}
          >
            {data.priceBeforeLabel}
          </div>
          <div style={{ fontFamily: "Anton, sans-serif", fontSize: 34, color: "#fde68a" }}>
            {formatPrice(CAMP_CONFIG.camp.priceBefore)}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            background: "rgba(20,14,12,.85)",
            border: despues
              ? "1px solid rgba(251,191,36,.4)"
              : "1px solid rgba(245,237,224,.12)",
            borderRadius: 18,
            padding: 20,
            textAlign: "center",
          }}
        >
          {despues && (
            <div
              style={{
                position: "absolute",
                top: -11,
                left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(120deg,#f97316,#fbbf24)",
                color: "#1a0a05",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                borderRadius: 999,
                padding: "4px 12px",
                whiteSpace: "nowrap",
              }}
            >
              {data.currentPriceBadge}
            </div>
          )}
          <div
            style={{
              fontSize: 12,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "rgba(245,237,224,.55)",
              marginBottom: 6,
            }}
          >
            {data.priceAfterLabel}
          </div>
          <div
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 34,
              color: "rgba(245,237,224,.85)",
            }}
          >
            {formatPrice(CAMP_CONFIG.camp.priceAfter)}
          </div>
        </div>
      </div>

      {/* Métodos de pago */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 14,
        }}
      >
        <StepsCard
          title="Nequi"
          tag={data.nequiTag}
          chips={[CAMP_CONFIG.payment.nequi.numero, CAMP_CONFIG.payment.nequi.titular]}
          steps={data.nequiSteps}
        />
        <StepsCard
          title="Bancolombia"
          tag={CAMP_CONFIG.payment.bancolombia.tipo}
          chips={[
            CAMP_CONFIG.payment.bancolombia.cuenta,
            CAMP_CONFIG.payment.bancolombia.titular,
          ]}
          steps={data.bancolombiaSteps}
        />
      </div>

      <a
        href={waLinks.comprobante()}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ember-whatsapp"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          minHeight: 52,
          marginTop: 16,
          borderRadius: 999,
          background: "#1f9d55",
          color: "#fff",
          fontWeight: 700,
          fontSize: 16,
          textDecoration: "none",
        }}
      >
        {data.comprobanteCta}
      </a>
    </SectionWrapper>
  );
}
