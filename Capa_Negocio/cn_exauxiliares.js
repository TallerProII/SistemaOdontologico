import CD_exauxiliares from "../Capa_Datos/cd_exauxiliares.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_exauxiliares();

class CN_exauxiliares {
  validarNumero = validaciones.validarNumero;
  validarString = validaciones.validarString;
  //LISTAR
  async listexauxiliares(DNI) {
    return await objCapaDato.listexauxiliares(DNI);
  }
  //CREAR
  async createexauxiliares(DNI, TIPO, DESC) {
    // Validaciones
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarString(TIPO, "TIPO"),
      this.validarString(DESC, "DESC"),
    ];

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    // Validación adicional
    if (!DNI || (String(DNI.trim().length) === 8 && !isNaN(DNI.trim()))) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.createexauxiliares(DNI, TIPO, DESC);
  }
  //CREAR
  async updateexauxiliares(CODIGO, TIPO, DESC) {
    // Validaciones
    const mensajesErrores = [
        this.validarString(TIPO, "TIPO"),
        this.validarString(DESC, "DESC"),
    ];

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.updateexauxiliares( CODIGO, TIPO, DESC);
  }
  //ELIMINAR
  async deleteexauxiliares(id) {
      //filtos - reglas de negocio

      return await objCapaDato.deleteexauxiliares(id);
  }
}

export default CN_exauxiliares;
