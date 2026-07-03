import SectionWrapper from "./SectionWrapper";

export default function Gallery({ data }) {
  return (
    <SectionWrapper
      id="galeria"
      eyebrow={data.eyebrow}
      heading={data.heading}
      headingMarginBottom={10}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
        }}
      >
        {data.items.map((item) => (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            style={{
              gridColumn: item.big ? "1 / -1" : undefined,
              width: "100%",
              height: item.big ? 220 : 150,
              objectFit: "cover",
              borderRadius: 16,
              display: "block",
            }}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
