import React from "react";
import { Icon } from "@iconify/react";
import { CAMP_CONFIG, isCampActive } from "../config/campConfig";

export default function Hero({ data, onPrimaryClick }) {
  const isActive = isCampActive();
  const buttonText = CAMP_CONFIG.status.soldOut
    ? CAMP_CONFIG.messages.soldOut
    : CAMP_CONFIG.status.registrationClosed
    ? CAMP_CONFIG.messages.registrationClosed
    : CAMP_CONFIG.messages.registerNow;
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Imagen de fondo mejorada */}
        <div className="absolute inset-0 bg-[url('/hero/hero-bg-1.jpg')] bg-cover bg-center bg-no-repeat scale-105 animate-[zoom-out_20s_ease-out_infinite_alternate]" />

        {/* Overlays mejorados para mejor contraste */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-emerald-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Partículas decorativas sutiles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-300 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-emerald-200 rounded-full animate-pulse delay-2000" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center text-white animate-fadeIn relative z-10">
        <div className="mb-6 flex justify-center">
          <img
            src="/dark_logo-og.png"
            alt="Camp La Semilla Logo"
            className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl filter brightness-110"
          />
        </div>

        <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 backdrop-blur border border-emerald-400/20">
          <Icon icon="mdi:seed-outline" className="text-emerald-400 text-lg" />
          <p className="text-xs uppercase tracking-widest text-emerald-300 font-medium">
            {data.date} • {data.location}
          </p>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl mb-4">
          {data.title}
        </h1>

        <p className="text-lg sm:text-xl text-emerald-100/80 max-w-xl font-bold mx-auto leading-relaxed mb-8">
          {data.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={isActive ? "#inscripcion" : "#"}
            onClick={isActive ? onPrimaryClick : (e) => e.preventDefault()}
            className={`group relative overflow-hidden flex justify-center items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg tracking-wide shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 transform hover:scale-105 ${
              isActive
                ? "cursor-pointer bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 active:scale-[0.97] text-white shadow-emerald-600/40 hover:shadow-emerald-400/60 focus:ring-emerald-300/50"
                : "cursor-not-allowed bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 shadow-gray-600/40"
            }`}
          >
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            )}
            <Icon
              icon={isActive ? "mdi:rocket-launch" : "mdi:lock"}
              className="text-xl relative z-10 group-hover:rotate-12 transition-transform"
            />
            <span className="relative z-10">{buttonText}</span>
            {isActive && (
              <Icon
                icon="mdi:arrow-right"
                className="text-lg relative z-10 group-hover:translate-x-1 transition-transform"
              />
            )}
          </a>

          <a
            href="#actividades"
            className="group inline-flex items-center justify-center px-6 py-4 rounded-xl font-medium text-lg bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/15 hover:border-white/25 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Icon
              icon="mdi:compass"
              className="mr-2 text-lg group-hover:rotate-180 transition-transform duration-300"
            />
            {data.ctaSecondary}
          </a>
        </div>
      </div>
    </div>
  );
}
