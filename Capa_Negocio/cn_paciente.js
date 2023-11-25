import CD_Paciente from "../Capa_Datos/cd_paciente.js";
import Validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_Paciente();

class CN_PACIENTE {
  validarString = Validaciones.validarString;
  validarFechaFutura = Validaciones.validarFechaFutura;
  //LISTAR
  async listPaciente() {
    return await objCapaDato.listPaciente();
  }
  //CREAR
  async createPaciente(NOMBRES, APELLIDOS, DNI, SEXO, RELIGION, RAZA, FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA) {
    // Validaciones
    const mensajesErrores = [
      this.validarString(NOMBRES, "NOMBRES"),
      this.validarString(APELLIDOS, "APELLIDOS"),
      this.validarString(DNI, "DNI"),
      this.validarString(SEXO, "SEXO"),
      this.validarString(RELIGION, "RELIGION"),
      this.validarString(RAZA, "RAZA"),
      this.validarFechaFutura(FECHA, "FECHA"),
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

  //EDITAR
  async updatePaciente(id,NOMBRES, APELLIDOS, DNI, SEXO, RELIGION, RAZA, FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA) {
    // Validaciones
    const mensajesErrores = [
      this.validarString(NOMBRES, "NOMBRES"),
      this.validarString(APELLIDOS, "APELLIDOS"),
      this.validarString(DNI, "DNI"),
      this.validarString(SEXO, "SEXO"),
      this.validarString(RELIGION, "RELIGION"),
      this.validarString(RAZA, "RAZA"),
      this.validarFechaFutura(FECHA, "FECHA"),
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
    return await objCapaDato.updatePaciente(id, NOMBRES, APELLIDOS, DNI, SEXO, RELIGION, RAZA, FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA);
  }
}

export default CN_PACIENTE;
