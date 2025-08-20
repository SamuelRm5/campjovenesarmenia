import React, { useMemo } from "react";
import SectionWrapper from "./SectionWrapper";
import { Icon } from "@iconify/react";

// Simple parser to split markdown sections by '## ' headings
function parseMarkdown(md) {
  const sections = [];
  let current = null;
  md.split(/\n+/).forEach((line) => {
    const headingMatch = line.match(/^##\s+(.*)/);
    if (headingMatch) {
      if (current) sections.push(current);
      current = { title: headingMatch[1].trim(), items: [] };
    } else if (line.startsWith("- ")) {
      current?.items.push(line.replace(/^-\s+/, "").trim());
    }
  });
  if (current) sections.push(current);
  return sections;
}

export default function Reglamento({ reglamento }) {
  const sections = useMemo(
    () => parseMarkdown(reglamento.markdown),
    [reglamento.markdown]
  );
  return (
    <SectionWrapper
      id="reglamento"
      className="relative bg-gradient-to-b from-gray-900 to-gray-950"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <span className="p-4 rounded-2xl bg-emerald-600/20 text-emerald-400 shadow-inner">
              <Icon icon="mdi:shield-check" className="text-3xl" />
            </span>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">
                {reglamento.heading}
              </h2>
              <p className="text-sm text-gray-400 max-w-md leading-relaxed">
                {reglamento.subtitle}
              </p>
            </div>
          </div>
          <div className="flex gap-3 text-xs text-gray-400">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700">
              <Icon
                icon="mdi:account-group"
                className="text-emerald-400 text-lg"
              />
              <span>{reglamento.convivenciaLabel}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700">
              <Icon icon="mdi:alert" className="text-emerald-400 text-lg" />
              <span>{reglamento.seguridadLabel}</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((sec) => (
            <div
              key={sec.title}
              className="relative p-6 rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-emerald-600/5 via-emerald-500/5 to-emerald-400/5" />
              <div className="relative">
                <h3 className="font-semibold tracking-wide text-emerald-300 mb-4 flex items-center gap-2 text-sm uppercase">
                  <Icon
                    icon={
                      sec.title.toLowerCase().includes("seguridad")
                        ? "mdi:alert-circle"
                        : "mdi:handshake"
                    }
                    className="text-lg"
                  />
                  {sec.title}
                </h3>
                <ul className="space-y-3">
                  {sec.items.map((it) => (
                    <li
                      key={it}
                      className="flex gap-3 text-sm text-gray-300 leading-relaxed"
                    >
                      <Icon
                        icon="mdi:check"
                        className="text-emerald-400 mt-0.5"
                      />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reglamento.callouts.map((callout, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-gray-900 border border-gray-800 flex gap-4"
            >
              <Icon icon={callout.icon} className="text-emerald-400 text-2xl" />
              <p className="text-xs text-gray-300 leading-relaxed">
                {callout.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
