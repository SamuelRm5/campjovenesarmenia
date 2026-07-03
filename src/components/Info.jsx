import SectionWrapper from "./SectionWrapper";
import { CAMP_CONFIG } from "../config/campConfig";

const cardStyle = {
  background: "rgba(20,14,12,.85)",
  border: "1px solid rgba(245,237,224,.1)",
  borderRadius: 18,
  padding: 22,
};

const cardLabelStyle = {
  fontSize: 12,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color: "#fbbf24",
  fontWeight: 700,
  marginBottom: 8,
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

export default function Info({ data }) {
  return (
    <SectionWrapper id="info" eyebrow={data.eyebrow} heading={data.heading}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: 14,
        }}
      >
        <div style={cardStyle}>
          <div style={cardLabelStyle}>{data.fechaLabel}</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#fdf6ec" }}>
            {CAMP_CONFIG.camp.campDurationDays} de octubre
          </div>
          <div
            style={{
              fontSize: 14,
              color: "rgba(245,237,224,.6)",
              marginTop: 4,
            }}
          >
            {CAMP_CONFIG.camp.duration}
          </div>
        </div>

        <div style={cardStyle}>
          <div style={cardLabelStyle}>{data.edadLabel}</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#fdf6ec" }}>
            {CAMP_CONFIG.camp.minAge} años en adelante
          </div>
          <div
            style={{
              fontSize: 14,
              color: "rgba(245,237,224,.6)",
              marginTop: 4,
            }}
          >
            {data.edadDetalle}
          </div>
        </div>

        <div style={cardStyle}>
          <div style={cardLabelStyle}>{data.contactoLabel}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              fontSize: 14,
              lineHeight: 1.5,
            }}
          >
            <span style={chipStyle}>{CAMP_CONFIG.contacts.nombre}</span>
            <span style={chipStyle}>{CAMP_CONFIG.contacts.telefono}</span>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={cardLabelStyle}>{data.ubicacionLabel}</div>
          <span style={{ ...chipStyle, display: "inline-block" }}>
            {CAMP_CONFIG.camp.location}
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
}
