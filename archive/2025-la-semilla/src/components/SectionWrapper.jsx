import React from "react";

export default function SectionWrapper({
  id,
  className = "",
  children,
  container = true,
}) {
  return (
    <section id={id} className={`py-20 scroll-mt-24 ${className}`}>
      <div
        className={container ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : ""}
      >
        {children}
      </div>
    </section>
  );
}
