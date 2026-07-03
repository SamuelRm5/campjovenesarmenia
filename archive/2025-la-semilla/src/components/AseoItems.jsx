import React from "react";
import SectionWrapper from "./SectionWrapper";
import { Icon } from "@iconify/react";

export default function AseoItems({ aseo }) {
  return (
    <SectionWrapper
      id="aseo"
      className="bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden"
    >
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10 text-center text-emerald-400">
        {aseo.heading}
      </h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {aseo.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 p-4 rounded-xl bg-gray-900 border border-gray-700 hover:border-emerald-400/60 transition"
          >
            <Icon
              icon="mdi:check-circle"
              className="text-emerald-400 text-xl mt-0.5"
            />
            <span className="text-gray-300 text-sm leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
