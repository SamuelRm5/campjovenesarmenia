import SectionWrapper from "./SectionWrapper";
import { Icon } from "@iconify/react";

export default function About({ aboutJson }) {
  // Contenido de las pestañas
  const tabContent = {
    mision: {
      title: "Nuestra Misión",
      content:
        "Formar jóvenes íntegros a través de experiencias transformadoras que fortalezcan su fe, desarrollen su carácter y los preparen para ser líderes positivos en sus comunidades.",
      icon: "mdi:target",
    },
    vision: {
      title: "Nuestra Visión",
      content:
        "Ser el campamento de referencia para el crecimiento espiritual y personal de jóvenes, creando un ambiente seguro donde puedan descubrir su propósito y potencial.",
      icon: "mdi:eye",
    },
  };

  return (
    <SectionWrapper
      id="sobre"
      className="bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-2xl" />

      <div className="relative">
        {/* Encabezado principal */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/20 text-emerald-300 text-sm font-medium mb-4">
            <Icon icon="mdi:seed-outline" className="text-lg" />
            Sobre Camp La Semilla
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            {aboutJson.heading}
          </h2>
          <p className="text-gray-300 leading-relaxed text-xl max-w-3xl mx-auto">
            {aboutJson.body}
          </p>
        </div>

        {/* Contenido principal en dos columnas */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Columna izquierda: Pestañas interactivas */}
          <div>
            {/* Contenido de la pestaña activa */}
            <div className="bg-gray-800/30 backdrop-blur rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400">
                  <Icon icon={tabContent["mision"].icon} className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {tabContent["mision"].title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {tabContent["mision"].content}
              </p>
            </div>

            {/* Características destacadas */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50">
                <Icon
                  icon="mdi:security"
                  className="text-emerald-400 text-xl"
                />
                <span className="text-gray-300 text-sm">Ambiente seguro</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50">
                <Icon
                  icon="mdi:nature-people"
                  className="text-emerald-400 text-xl"
                />
                <span className="text-gray-300 text-sm">Conexión natural</span>
              </div>
            </div>
          </div>

          {/* Columna derecha: Contenido Markdown mejorado */}
          <div>
            <div className="bg-gray-800/30 backdrop-blur rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400">
                  <Icon icon={tabContent["vision"].icon} className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {tabContent["vision"].title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {tabContent["vision"].content}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50">
                <Icon
                  icon="mdi:hands-pray"
                  className="text-emerald-400 text-xl"
                />
                <span className="text-gray-300 text-sm">
                  Crecimiento espiritual
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50">
                <Icon
                  icon="mdi:account-multiple"
                  className="text-emerald-400 text-xl"
                />
                <span className="text-gray-300 text-sm">Nuevas amistades</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
