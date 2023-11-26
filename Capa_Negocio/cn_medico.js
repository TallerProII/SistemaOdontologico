import CD_medico from "../Capa_Datos/cd_medico.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_medico();

class CN_medico {
  validarNumero = validaciones.validarNumero;
  validarString = validaciones.validarString;
  validarFechaFutura = validaciones.validarFechaFutura;
  //LISTAR
  async listmedico() {
    var resultado = await objCapaDato.listmedico();
      return resultado;
  }
  //CREAR
  async createmedico( USUARIO, NOMBRE, APELLIDO, DNI, DIREC, TELEF, CORREO, SEXO, FECHA, ESPECIALIDAD, CIVIL, CUENTA, CONTRA, ESTADO) {
    const mensajesErrores = [
      this.validarNumero(USUARIO, "USUARIO"),
      this.validarString(NOMBRE, "NOMBRE"),
      this.validarString(APELLIDO, "APELLIDO"),
      this.validarString(String(DNI), "DNI"),
      this.validarString(DIREC, "DIREC"),
      this.validarString(TELEF, "TELEF"),
      this.validarString(CORREO, "CORREO"),
      this.validarString(SEXO, "SEXO"),
      this.validarFechaFutura(FECHA, "FECHA"),
      this.validarString(ESPECIALIDAD, "ESPECIALIDAD"),
      this.validarString(CIVIL, "CIVIL"),
      this.validarString(CUENTA, "CUENTA"),
      this.validarString(CONTRA, "CONTRA"),
      this.validarString(ESTADO, "ESTADO"),
    ];

    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    if (!DNI || (String(DNI.trim().length) === 8 && !isNaN(DNI.trim()))) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }

    return await objCapaDato.createmedico( USUARIO, NOMBRE, APELLIDO, DNI, DIREC, TELEF, CORREO, SEXO, FECHA, ESPECIALIDAD, CIVIL, CUENTA, CONTRA, ESTADO);
  }
  //CREAR
  async updatemedico(CODIGO, USUARIO, NOMBRE, APELLIDO, DNI, DIREC, TELEF, CORREO, SEXO, FECHA, ESPECIALIDAD, CIVIL, CUENTA, CONTRA, ESTADO) {
    const mensajesErrores = [
      this.validarNumero(USUARIO, "USUARIO"),
      this.validarString(NOMBRE, "NOMBRE"),
      this.validarString(APELLIDO, "APELLIDO"),
      this.validarString(String(DNI), "DNI"),
      this.validarString(DIREC, "DIREC"),
      this.validarString(TELEF, "TELEF"),
      this.validarString(CORREO, "CORREO"),
      this.validarString(SEXO, "SEXO"),
      this.validarString(FECHA, "FECHA"),
      this.validarString(ESPECIALIDAD, "ESPECIALIDAD"),
      this.validarString(CIVIL, "CIVIL"),
      this.validarString(CUENTA, "CUENTA"),
      this.validarString(CONTRA, "CONTRA"),
      this.validarString(ESTADO, "ESTADO"),
    ];

    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    return await objCapaDato.updatemedico( CODIGO, USUARIO, NOMBRE, APELLIDO, DNI, DIREC, TELEF, CORREO, SEXO, FECHA, ESPECIALIDAD, CIVIL, CUENTA, CONTRA, ESTADO);
  }
  //ELIMINAR
  async deletemedico(id) {
      //filtos - reglas de negocio

      return await objCapaDato.deletemedico(id);
  }
}

export default CN_medico;
