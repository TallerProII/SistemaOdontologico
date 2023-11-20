// cn_validacion.js
const validarCampo = (campo, nombreCampo) => {
  if (!campo || campo.trim().length === 0) {
    return `El campo ${nombreCampo} no puede quedar vacío`;
  }
  return null;
};

const validarNumero = (campo, nombreCampo) => {
  const mensajeCampoVacio = validarCampo(String(campo), nombreCampo);
  if (mensajeCampoVacio) {
    return mensajeCampoVacio;
  }

  if (typeof campo !== "number") {
    return `Error en el tipo de dato ingresado, el ${nombreCampo} debe ser un número`;
  }
  return null;
};

const validarString = (campo, nombreCampo) => {
  const mensajeCampoVacio = validarCampo(campo, nombreCampo);
  if (mensajeCampoVacio) {
    return mensajeCampoVacio;
  }

  if (typeof campo !== "string") {
    return `Error en el tipo de dato ingresado, el ${nombreCampo} debe ser un texto`;
  }
  return null;
};

const validarFechaFutura = (fecha, nombreCampo) => {
  const mensajeCampoVacio = validarCampo(fecha, nombreCampo);
  if (mensajeCampoVacio) {
    return mensajeCampoVacio;
  }

  const fechaActual = new Date();
  const fechaIngresada = new Date(fecha);

  if (fechaIngresada > fechaActual) {
    return `La ${nombreCampo} ingresada en  no puede ser futura`;
  }

  return null;
};

const validarFechaPasada = (fecha, nombreCampo) => {
  const mensajeCampoVacio = validarCampo(fecha, nombreCampo);
  if (mensajeCampoVacio) {
    return mensajeCampoVacio;
  }

  const fechaActual = new Date();
  const fechaIngresada = new Date(fecha);

  if (fechaIngresada < fechaActual) {
    return `La ${nombreCampo} ingresada en  no puede ser pasada`;
  }

  return null;
};

export default {
  validarCampo,
  validarNumero,
  validarString,
  validarFechaFutura,
  validarFechaPasada
};
