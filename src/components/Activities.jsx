import React from "react";
import SectionWrapper from "./SectionWrapper";
import { Icon } from "@iconify/react";

export default function Activities({ activities }) {
  return (
    <SectionWrapper
      id="actividades"
      className="bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden"
    >
      <div className="text-center mb-14">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-emerald-400">
          {activities.heading}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">{activities.subtitle}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.items.map((act) => (
          <div
            key={act.title}
            className="group relative p-6 rounded-2xl bg-gray-900 border border-gray-700 hover:border-emerald-400/60 transition overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/10 blur-2xl transition" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center text-emerald-300 mb-4 shadow-inner">
                <Icon icon={act.icon} className="text-2xl" />
              </div>
              <h3 className="font-semibold text-lg text-gray-100 tracking-wide mb-2">
                {act.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {act.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
