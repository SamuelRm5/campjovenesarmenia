import React from "react";
import SectionWrapper from "./SectionWrapper";
import { Icon } from "@iconify/react";

export default function VerseSection({ verse }) {
  return (
    <SectionWrapper className="bg-gradient-to-b from-gray-950 to-gray-900 py-16">
      {/* Versículo bíblico destacado */}
      <div className="max-w-4xl mx-auto">
        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-600/10 via-emerald-700/10 to-emerald-800/10 border border-emerald-500/20 backdrop-blur-sm">
          {/* Icono decorativo */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="p-3 rounded-full bg-emerald-600/20 border border-emerald-500/30">
              <Icon icon="mdi:bible" className="text-emerald-400 text-2xl" />
            </div>
          </div>

          {/* Contenido del versículo */}
          <div className="text-center pt-4">
            <p className="text-emerald-300 text-sm font-semibold mb-3 tracking-wide uppercase">
              {verse.verse}
            </p>
            <blockquote className="text-white text-lg sm:text-xl leading-relaxed font-light italic">
              {verse.text}
            </blockquote>
          </div>

          <p className="text-emerald-300 text-sm font-semibold mb-3 tracking-wide uppercase absolute italic flex gap-2 items-center justify-center">
            <Icon icon="mdi:seed" className="text-emerald-400 text-md" />
            {verse.title}
          </p>

          {/* Decoración adicional */}
          <div className="absolute top-6 left-6 w-2 h-2 bg-emerald-400/40 rounded-full" />
          <div className="absolute bottom-6 right-6 w-2 h-2 bg-emerald-400/40 rounded-full" />
        </div>
      </div>
    </SectionWrapper>
  );
}
