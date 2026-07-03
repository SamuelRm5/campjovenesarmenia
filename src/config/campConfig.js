// Configuración global del campamento
// Modifica estos valores para actualizar toda la aplicación

export const CAMP_CONFIG = {
  // Fechas importantes (con offset -05:00 explícito para que el countdown
  // no dependa de la zona horaria del navegador)
  dates: {
    campStart: "2026-10-09T00:00:00-05:00",
    campEnd: "2026-10-12T18:00:00-05:00",
    priceDeadline: "2026-09-15T23:59:59-05:00",
    urgencyWindowStart: "2026-07-01T00:00:00-05:00",
  },

  // Información del campamento
  camp: {
    theme: 'Un corazón en llamas para Dios',
    campDurationDays: "9 - 12",
    campDurationMonth: "Octubre 2026",
    priceBefore: 250000, // Precio hasta la fecha límite
    priceAfter: 270000, // Precio después de la fecha límite
    currency: "COP",
    minAge: 13,
    maxAge: 30,
    location:
      "Finca Hotel Andaquies, Vía Armenia - Montenegro, Salida 2 #km 4, Armenia, Quindío",
    locationUrl: "https://maps.app.goo.gl/HCAHyFpyFh3nbrQ59",
    duration: "4 días / 3 noches",
    formUrl:"https://docs.google.com/forms/d/e/1FAIpQLSf2n9e6RNwbHJW6bqeJ1I8XQtyCm8It5D1BlccT06jIbA79ZQ/viewform?usp=publish-editor"
  },

  // Precampamento opcional
  precampamento: {
    lugar: "Parque del Café",
    fecha: "8 de octubre",
    costoAdicional: 100000,
    total: 350000,
  },

  contacts: {
    rol: "Coordinador General",
    nombre: "Simón Flórez",
    telefono: "301 582 7525",
  },

  // Métodos de pago
  payment: {
    nequi: { numero: "300 240 7641", titular: "Laura Rodríguez" },
    bancolombia: {
      cuenta: "505-392278-55",
      titular: "Stive Simón Flórez Ayala",
      tipo: "Ahorros",
    },
    whatsapp: "3015827525",
  },

  // Estados de la aplicación
  status: {
    // Cambiar a true para mostrar "Sin cupos" en todos los botones
    soldOut: false,
    // Cambiar a true para desactivar completamente las inscripciones
    registrationClosed: false,
  },

  // Textos dinámicos
  messages: {
    soldOut: "Sin Cupos Disponibles",
    registrationClosed: "Inscripciones Cerradas",
    registerNow: "Inscríbete ahora",
  },
};

// Funciones de utilidad para verificar estados
export const isCampActive = () => {
  const now = new Date();
  const deadline = new Date(CAMP_CONFIG.dates.campStart);
  return (
    now < deadline &&
    !CAMP_CONFIG.status.soldOut &&
    !CAMP_CONFIG.status.registrationClosed
  );
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: CAMP_CONFIG.camp.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Countdown hasta el inicio del campamento
export const getCountdown = (now = Date.now()) => {
  const inicio = new Date(CAMP_CONFIG.dates.campStart).getTime();
  const d = Math.max(0, inicio - now);
  const pad = (n) => String(n).padStart(2, "0");
  return {
    dd: Math.floor(d / 86400000),
    hh: pad(Math.floor(d / 3600000) % 24),
    mm: pad(Math.floor(d / 60000) % 60),
    ss: pad(Math.floor(d / 1000) % 60),
  };
};

export const isPriceIncreased = (now = Date.now()) => {
  return now > new Date(CAMP_CONFIG.dates.priceDeadline).getTime();
};

// Porcentaje de avance de la barra de urgencia de precio (2 - 100)
export const urgencyPercent = (now = Date.now()) => {
  if (isPriceIncreased(now)) return 100;
  const deadline = new Date(CAMP_CONFIG.dates.priceDeadline).getTime();
  const winStart = new Date(CAMP_CONFIG.dates.urgencyWindowStart).getTime();
  const pct = (1 - (deadline - now) / (deadline - winStart)) * 100;
  return Math.max(2, Math.min(100, pct)).toFixed(1);
};

export const urgencyLabels = (now = Date.now()) => {
  const deadline = new Date(CAMP_CONFIG.dates.priceDeadline).getTime();
  if (isPriceIncreased(now)) {
    return {
      titulo: `El precio ya subió a ${formatPrice(CAMP_CONFIG.camp.priceAfter)}`,
      sub: "Aún estás a tiempo de venir",
    };
  }
  const diasPrecio = Math.max(0, Math.ceil((deadline - now) / 86400000));
  return {
    titulo: "El precio sube el 15 de septiembre",
    sub: `Quedan ${diasPrecio} días con precio de ${formatPrice(CAMP_CONFIG.camp.priceBefore)}`,
  };
};

// Links de WhatsApp con mensajes predefinidos
const waBase = () => `https://wa.me/57${CAMP_CONFIG.payment.whatsapp.replace(/\D/g, "")}?text=`;

export const waLinks = {
  inscribir: () =>
    waBase() +
    encodeURIComponent(
      `¡Hola! Quiero inscribirme al campamento "${CAMP_CONFIG.camp.theme}" (9-12 de octubre).`
    ),
  comprobante: () =>
    waBase() +
    encodeURIComponent(
      `¡Hola! Envío el comprobante de pago de mi inscripción al campamento "${CAMP_CONFIG.camp.theme}".`
    ),
  contacto: () =>
    waBase() +
    encodeURIComponent(
      `¡Hola! Tengo una pregunta sobre el campamento "${CAMP_CONFIG.camp.theme}".`
    ),
};
