export default function SectionWrapper({
  id,
  eyebrow,
  heading,
  headingMarginBottom = 22,
  children,
}) {
  return (
    <section id={id} style={{ padding: "84px 24px 20px" }}>
      <div
        className="reveal-on-scroll"
        style={{ maxWidth: 640, margin: "0 auto" }}
      >
        {eyebrow && (
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "#f97316",
              marginBottom: 12,
            }}
          >
            {eyebrow}
          </div>
        )}
        {heading && (
          <h2
            style={{
              margin: `0 0 ${headingMarginBottom}px`,
              fontFamily: "Anton, sans-serif",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(30px,7vw,44px)",
              lineHeight: 1.04,
              color: "#fdf6ec",
            }}
          >
            {heading}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
