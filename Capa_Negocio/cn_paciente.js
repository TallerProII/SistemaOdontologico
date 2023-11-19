import CD_Paciente from "../Capa_Datos/cd_paciente.js";

var objCapaDato = new CD_Paciente();

class CN_PACIENTE {
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

  validarFechaNoFutura = (fecha, nombreCampo) => {
    const mensajeCampoVacio = this.validarCampo(fecha, nombreCampo);
    if (mensajeCampoVacio) {
      return mensajeCampoVacio;
    }

    const fechaActual = new Date();
    const fechaIngresada = new Date(fecha);

    if (fechaIngresada > fechaActual) {
      return `La fecha ingresada en ${nombreCampo} no puede ser futura`;
    }

    return null;
  };

  async createPaciente(NOMBRES, APELLIDOS, DNI, SEXO, RELIGION, RAZA, FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA) {
    // Validaciones
    const mensajesErrores = [
      this.validarString(NOMBRES, "NOMBRES"),
      this.validarString(APELLIDOS, "APELLIDOS"),
      this.validarString(DNI, "DNI"),
      this.validarString(SEXO, "SEXO"),
      this.validarString(RELIGION, "RELIGION"),
      this.validarString(RAZA, "RAZA"),
      this.validarFechaNoFutura(FECHA, "FECHA"),
      this.validarString(LUGAR, "LUGAR"),
      this.validarString(RESIDENCIA, "RESIDENCIA"),
      this.validarString(GRADO, "GRADO"),
      this.validarString(OCUPACION, "OCUPACION"),
      this.validarString(CIVIL, "CIVIL"),
      this.validarString(CORREO, "CORREO"),
      this.validarString(TELEFONO, "TELEFONO"),
      this.validarString(ESTADO, "ESTADO"),
      this.validarString(ECTOSCOPIA, "ECTOSCOPIA"),
    ];

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.createPaciente(NOMBRES, APELLIDOS, DNI, SEXO, RELIGION, RAZA, FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA);
  }
}

export default CN_PACIENTE;
