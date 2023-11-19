import CD_detalleOdontograma from "../Capa_Datos/cd_detalleOdontograma.js";

var objCapaDato = new CD_detalleOdontograma();

class CN_detalleOdontograma {

  validarCampo = (campo, nombreCampo) => {
    if (!campo || campo.trim().length === 0) {
      return `El campo ${nombreCampo} no puede quedar vacío`;
    }
    return null;
  };

  validarNumero = (campo, nombreCampo) => {
    const mensajeCampoVacio = this.validarCampo(campo, nombreCampo);
    if (mensajeCampoVacio) {
      return mensajeCampoVacio;
    }

    if (typeof campo !== "number") {
      return `Error en el tipo de dato ingresado, el ${nombreCampo} debe ser un número`;
    }
    return null;
  };

  validarString = (campo, nombreCampo) => {
    const mensajeCampoVacio = this.validarCampo(campo, nombreCampo);
    if (mensajeCampoVacio) {
      return mensajeCampoVacio;
    }

    if (typeof campo !== "string") {
      return `Error en el tipo de dato ingresado, el ${nombreCampo} debe ser un texto`;
    }
    return null;
  };

  async createDetodont(DNI, tratamiento, cuadrante, diente, sector, estado, notas) {
    // Validaciones
    const mensajesErrores = [
      this.validarString(DNI, "DNI"),
      this.validarNumero(tratamiento, "tratamiento"),
      this.validarNumero(cuadrante, "cuadrante"),
      this.validarNumero(diente, "diente"),
      this.validarString(sector, "sector"),
      this.validarString(estado, "estado"),
      this.validarString(notas, "notas"),
    ];

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    // Validación adicional
    if (!DNI || DNI.trim().length === 0) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.createDetodont(DNI, tratamiento, cuadrante, diente, sector, estado, notas);
  }
}

export default CN_detalleOdontograma;
