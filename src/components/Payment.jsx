import React, { useState, useEffect } from "react";
import SectionWrapper from "./SectionWrapper";
import { Icon } from "@iconify/react";
import { CAMP_CONFIG, formatPrice } from "../config/campConfig";

export default function Payment() {
  const [timeLeft, setTimeLeft] = useState({});
  const [isLatePayment, setIsLatePayment] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(null);

  // Usar configuración global
  const whatsappNumber = CAMP_CONFIG.payment.whatsapp;
  const campPrice = formatPrice();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference =
        +new Date(CAMP_CONFIG.dates.paymentDeadline) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        });
        setIsLatePayment(false);
      } else {
        setIsLatePayment(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Actualizar cada minuto

    return () => clearInterval(timer);
  }, []);

  const paymentMethods = [
    {
      name: "Nequi",
      number: CAMP_CONFIG.payment.nequi,
      icon: "mdi:cellphone",
      color: "from-purple-600 to-purple-700",
      steps: [
        "Abre tu app Nequi",
        "Ve a 'Enviar plata'",
        `Ingresa el número: ${CAMP_CONFIG.payment.nequi}`,
        `Envía el monto: ${formatPrice()}`,
        "Toma captura del comprobante",
      ],
    },
    {
      name: "Bancolombia",
      number: CAMP_CONFIG.payment.bancolombia,
      type: "Cuenta de Ahorros",
      icon: "mdi:bank",
      color: "from-yellow-600 to-yellow-700",
      steps: [
        "Ingresa a tu banca digital",
        "Ve a 'Transferencias'",
        `Cuenta destino: ${CAMP_CONFIG.payment.bancolombia}`,
        "Tipo: Cuenta de Ahorros",
        `Transfiere: ${formatPrice()}`,
        "Comparte el comprobante",
      ],
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedNumber(text);
        // Ocultar el check después de 2 segundos
        setTimeout(() => {
          setCopiedNumber(null);
        }, 2000);
      })
      .catch((err) => {
        console.error("Error al copiar: ", err);
      });
  };

  return (
    <SectionWrapper
      id="pago"
      className="bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />

      <div className="relative">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/20 text-emerald-300 text-sm font-medium mb-4">
            <Icon icon="mdi:credit-card" className="text-lg" />
            Información de Pago
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-12">
            Asegura tu Cupo
          </h2>
          <div className="mb-6">
            <div className="inline-block px-8 py-6 rounded-2xl bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border border-emerald-500/30">
              <div className="flex items-center gap-6">
                {/* Precio */}
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-emerald-300 mb-1">
                    {campPrice}
                  </div>
                  <div className="text-sm text-emerald-200">
                    Pesos Colombianos
                  </div>
                </div>

                {/* Divisor */}
                {!isLatePayment && Object.keys(timeLeft).length > 0 && (
                  <div className="w-px h-16 bg-emerald-500/30"></div>
                )}

                {/* Contador */}
                {!isLatePayment && Object.keys(timeLeft).length > 0 && (
                  <div className="text-center">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        icon="mdi:clock-alert"
                        className="text-emerald-400 text-lg"
                      />
                      <span className="text-emerald-300 text-sm font-semibold">
                        Fecha límite:
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white font-mono">
                          {timeLeft.days || 0}
                        </div>
                        <div className="text-xs text-emerald-300">días</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white font-mono">
                          {timeLeft.hours || 0}
                        </div>
                        <div className="text-xs text-emerald-300">hrs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white font-mono">
                          {timeLeft.minutes || 0}
                        </div>
                        <div className="text-xs text-emerald-300">min</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Alerta de pago tardío */}
          {isLatePayment && (
            <div className="inline-block p-6 rounded-2xl bg-amber-600/10 border border-amber-500/20 mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon icon="mdi:alert" className="text-amber-400 text-xl" />
                <span className="text-amber-300 font-semibold">
                  Fecha Límite Vencida
                </span>
              </div>
              <p className="text-amber-200">
                La fecha límite de pago ha vencido. Contacta por WhatsApp para
                consultar disponibilidad.
              </p>
            </div>
          )}
        </div>

        {/* Métodos de pago */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-800/50 backdrop-blur border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300"
            >
              {/* Encabezado del método */}
              <div
                className={`p-4 rounded-xl bg-gradient-to-r ${method.color} mb-6`}
              >
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <Icon icon={method.icon} className="text-2xl" />
                    <div>
                      <h3 className="font-bold text-lg">{method.name}</h3>
                      {method.type && (
                        <p className="text-sm opacity-90">{method.type}</p>
                      )}
                    </div>
                  </div>
                  <Icon
                    icon="mdi:shield-check"
                    className="text-xl opacity-80"
                  />
                </div>
              </div>

              {/* Número de cuenta/teléfono */}
              <div className="mb-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-900/50 border border-gray-600/50">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">
                      {method.name === "Nequi"
                        ? "Número de teléfono"
                        : "Número de cuenta"}
                    </p>
                    <p className="text-white font-mono text-lg font-semibold">
                      {method.number}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(method.number)}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      copiedNumber === method.number
                        ? "bg-green-600/30 text-green-400 scale-110"
                        : "bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30"
                    }`}
                    title={
                      copiedNumber === method.number
                        ? "¡Copiado!"
                        : "Copiar número"
                    }
                  >
                    <Icon
                      icon={
                        copiedNumber === method.number
                          ? "mdi:check"
                          : "mdi:content-copy"
                      }
                      className="text-lg"
                    />
                  </button>
                </div>
              </div>

              {/* Pasos para pagar */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Icon icon="mdi:list-box" className="text-emerald-400" />
                  Pasos para pagar:
                </h4>
                <ol className="space-y-2">
                  {method.steps.map((step, stepIndex) => (
                    <li
                      key={stepIndex}
                      className="flex gap-3 text-sm text-gray-300"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-xs font-semibold">
                        {stepIndex + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>

        {/* Importante: Envío de comprobante */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-600/10 to-emerald-700/10 border border-emerald-500/20">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-xl bg-emerald-600/20 text-emerald-400">
                  <Icon icon="mdi:whatsapp" className="text-3xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                ¡Importante! Envía tu Comprobante
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Una vez realizado el pago, envía el comprobante por WhatsApp
                para confirmar tu inscripción
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hola, he realizado el pago del campamento. Adjunto el comprobante.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Icon icon="mdi:whatsapp" className="text-xl" />
                Enviar Comprobante al {whatsappNumber}
                <Icon icon="mdi:external-link" className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
