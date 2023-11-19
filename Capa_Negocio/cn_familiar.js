import CD_familiar from "../Capa_Datos/cd_familiar.js";

var objCapaDato = new CD_familiar();

class CN_familiar {

  validarCampo = (campo, nombreCampo) => {
    if (!campo || campo.trim().length === 0) {
      return `El campo ${nombreCampo} no puede quedar vacío`;
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

  async createFamiliar(DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono) {
    // Validaciones
    const mensajesErrores = [
      this.validarString(DNI, "DNI"),
      this.validarString(nombres, "nombres"),
      this.validarString(apellidos, "apellidos"),
      this.validarString(DNIF, "DNIF"),
      this.validarString(parentezco, "parentezco"),
      this.validarString(ocupacion, "ocupacion"),
      this.validarString(correo, "correo"),
      this.validarString(telefono, "telefono"),
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
    return await objCapaDato.createFamiliar(DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono);
  }
}

export default CN_familiar;
