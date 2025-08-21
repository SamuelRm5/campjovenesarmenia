import React, { useState, useEffect } from "react";
import SectionWrapper from "./SectionWrapper";
import { Icon } from "@iconify/react";
import { CAMP_CONFIG, isCampActive } from "../config/campConfig";

// Función para calcular el tiempo restante
function calculateTimeLeft(targetDate) {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

export default function FinalCTA({ data }) {
  // Usar configuración global
  const campDate = CAMP_CONFIG.dates.campStart;
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(campDate));
  const [isUrgent, setIsUrgent] = useState(false);
  const isActive = isCampActive();
  const buttonText = CAMP_CONFIG.status.soldOut
    ? CAMP_CONFIG.messages.soldOut
    : CAMP_CONFIG.status.registrationClosed
    ? CAMP_CONFIG.messages.registrationClosed
    : CAMP_CONFIG.messages.registerNow;

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft(campDate);
      setTimeLeft(newTimeLeft);

      // Activar modo urgente si quedan menos de 30 días
      if (newTimeLeft.days && newTimeLeft.days < 30) {
        setIsUrgent(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits = [
    { label: "Días", value: timeLeft.days || 0 },
    { label: "Horas", value: timeLeft.hours || 0 },
    { label: "Minutos", value: timeLeft.minutes || 0 },
    { label: "Segundos", value: timeLeft.seconds || 0 },
  ];

  return (
    <SectionWrapper
      id="inscripcion"
      className="bg-gradient-to-br from-emerald-600 via-emerald-600 to-emerald-700 text-white relative overflow-hidden"
    >
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,theme(colors.emerald.400)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-300/10 rounded-full animate-bounce" />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-emerald-500/10 rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center animate-fadeIn">
        {/* Título principal */}
        <div className="mb-8">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
            {data.heading}
          </h2>
          <p className="text-emerald-50/90 text-xl leading-relaxed max-w-2xl mx-auto">
            {data.body}
          </p>
        </div>

        {/* Contador regresivo */}
        <div className="mb-10">
          <h3 className="text-emerald-200 text-lg font-semibold mb-6 flex items-center justify-center gap-2">
            <Icon
              icon="mdi:clock-time-eight"
              className="text-2xl animate-spin"
            />
            {isUrgent
              ? "¡Últimos días para inscribirse!"
              : "Tiempo restante para el campamento"}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className={`relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                  isUrgent
                    ? "bg-red-500/20 border-red-400/30 animate-pulse"
                    : "bg-white/10 border-white/20 hover:bg-white/15"
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold font-mono">
                  {unit.value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-emerald-200 uppercase tracking-wide mt-1">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={isActive ? "https://forms.gle/FuVvsahdXdPSAfoy6" : "#"}
            target="_blank"
            onClick={isActive ? undefined : (e) => e.preventDefault()}
            className={`group relative overflow-hidden inline-flex items-center gap-3 px-12 py-5 rounded-2xl font-bold text-lg tracking-wide shadow-2xl transition-all duration-300 ${
              isActive
                ? "bg-white text-emerald-700 hover:shadow-3xl hover:scale-[1.05] active:scale-95 cursor-pointer"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-white group-hover:from-emerald-100 group-hover:to-emerald-50 transition-colors" />
            )}
            <Icon
              icon={isActive ? "mdi:rocket-launch" : "mdi:lock"}
              className={`text-2xl relative z-10 ${
                isActive ? "group-hover:rotate-12" : ""
              } transition-transform`}
            />
            <span className="relative z-10">{buttonText}</span>
            {isActive && (
              <Icon
                icon="mdi:arrow-right"
                className="text-xl relative z-10 group-hover:translate-x-1 transition-transform"
              />
            )}
          </a>

          <a
            href="#info"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium bg-emerald-800/30 hover:bg-emerald-800/50 backdrop-blur text-white border border-emerald-400/30 transition-all duration-300 hover:border-emerald-300"
          >
            <Icon icon="mdi:information" className="text-lg" />
            Más información
          </a>
        </div>

        {/* Elementos decorativos */}
        <div className="mt-12 flex justify-center items-center gap-8 text-emerald-200/60">
          <div className="flex items-center gap-2">
            <Icon icon="mdi:shield-check" className="text-2xl" />
            <span className="text-sm">Seguro y confiable</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:heart" className="text-2xl animate-pulse" />
            <span className="text-sm">Experiencia transformadora</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:star" className="text-2xl" />
            <span className="text-sm">Cupos limitados</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
