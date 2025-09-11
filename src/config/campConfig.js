// Configuración global del campamento
// Modifica estos valores para actualizar toda la aplicación

export const CAMP_CONFIG = {
  // Fechas importantes
  dates: {
    campStart: "2025-10-10T08:00:00",
    campEnd: "2025-10-13T18:00:00",
    paymentDeadline: "2025-09-28T23:59:59", // Fecha límite de pago
    registrationDeadline: "2025-09-28T23:59:59", // Fecha límite de inscripción (Sin cupos)
  },

  // Información del campamento
  camp: {
    campDurationDays: "10 - 13",
    campDurationMonth: "Octubre 2025",
    price: 190000, // Precio en pesos colombianos
    currency: "COP",
    minAge: 13,
    maxAge: 30,
    location:
      "Finca Hotel Andaquies, Vía Armenia - Montenegro, Salida 2 #km 4, Armenia, Quindío",
    locationUrl: "https://maps.app.goo.gl/HCAHyFpyFh3nbrQ59",
    duration: "4 días / 3 noches",
  },

  contacts: {
    rol: "Coordinador General",
    nombre: "Simón Flórez",
    telefono: "301 582 7525",
  },

  // Métodos de pago
  payment: {
    nequi: "3002407641",
    bancolombia: "50539227855",
    whatsapp: "3002407641",
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
    paymentRequired: "Pago Requerido",
    registerNow: "Inscríbete Ahora",
  },
};

// Funciones de utilidad para verificar estados
export const isCampActive = () => {
  const now = new Date();
  const deadline = new Date(CAMP_CONFIG.dates.registrationDeadline);
  return (
    now < deadline &&
    !CAMP_CONFIG.status.soldOut &&
    !CAMP_CONFIG.status.registrationClosed
  );
};

export const isPaymentActive = () => {
  const now = new Date();
  const deadline = new Date(CAMP_CONFIG.dates.paymentDeadline);
  return now < deadline && isCampActive();
};

export const formatPrice = (price = CAMP_CONFIG.camp.price) => {
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
