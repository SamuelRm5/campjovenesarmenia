import React from "react";
import SectionWrapper from "./SectionWrapper";
import { Icon } from "@iconify/react";
import { CAMP_CONFIG } from "../config/campConfig";

export default function Info({ info }) {
  return (
    <SectionWrapper
      id="info"
      className="relative bg-gradient-to-b from-gray-950 to-gray-900"
    >
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/20 text-emerald-300 text-sm font-medium mb-4">
          <Icon icon="mdi:information" className="text-lg" />
          Información del Campamento
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          {info.heading}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{info.body}</p>
      </div>

      {/* Información Principal */}
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta de Fecha y Ubicación */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-600/10 to-emerald-700/10 border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400">
                <Icon icon="mdi:calendar-star" className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Fecha y Edad</h3>
            </div>

            {/* Fecha */}
            <div className="text-center mb-6">
              <div className="text-4xl md:text-5xl font-bold text-emerald-300 mb-2 leading-tight">
                {CAMP_CONFIG.camp.campDurationDays}
              </div>
              <div className="text-2xl font-semibold text-white mb-1">
                {CAMP_CONFIG.camp.campDurationMonth}
              </div>
              <div className="text-lg text-emerald-200 font-medium">
                {CAMP_CONFIG.camp.duration}
              </div>
            </div>
            {/* Separador */}
            <div className="border-t border-emerald-500/20 pt-6">
              <div className="flex items-center gap-2 mb-6">
                <Icon
                  icon="mdi:account-multiple"
                  className="text-emerald-400 text-xl"
                />
                <span className="text-emerald-300 font-medium">
                  Edad Requerida
                </span>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-300 mb-1">
                  {CAMP_CONFIG.camp.minAge} - {CAMP_CONFIG.camp.maxAge} años
                </div>
                <div className="text-sm text-gray-300">
                  Requisito estrictamente aplicado
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta de Contacto y Edad */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-600/10 to-emerald-700/10 border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400">
                <Icon icon="mdi:phone" className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Contacto y Ubicación
              </h3>
            </div>

            {/* Contacto Principal */}
            <div className="text-center mb-6">
              <div className="text-sm text-emerald-300 font-medium mb-1">
                {CAMP_CONFIG.contacts.rol}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {CAMP_CONFIG.contacts.nombre}
              </div>
              <div className="text-emerald-200 font-mono text-lg">
                {CAMP_CONFIG.contacts.telefono}
              </div>
            </div>

            {/* Separador */}
            <div className="border-t border-emerald-500/20 pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Icon
                  icon="mdi:map-marker"
                  className="text-emerald-400 text-xl"
                />
                <span className="text-emerald-300 font-medium">Ubicación</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {CAMP_CONFIG.camp.location}
              </p>
              <a
                href={CAMP_CONFIG.camp.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all duration-300 hover:scale-105 text-sm"
              >
                <Icon icon="mdi:google-maps" className="text-base" />
                Ver en Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
