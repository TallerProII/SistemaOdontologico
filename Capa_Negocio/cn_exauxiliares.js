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
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarString(TIPO, "TIPO"),
      this.validarString(DESC, "DESC"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    if (!DNI || (String(DNI.trim().length) === 8 && !isNaN(DNI.trim()))) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }
    return await objCapaDato.createexauxiliares(DNI, TIPO, DESC);
  }
  //CREAR
  async updateexauxiliares(CODIGO, TIPO, DESC) {
    const mensajesErrores = [
        this.validarString(TIPO, "TIPO"),
        this.validarString(DESC, "DESC"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    return await objCapaDato.updateexauxiliares( CODIGO, TIPO, DESC);
  }
  //ELIMINAR
  async deleteexauxiliares(id) {
      return await objCapaDato.deleteexauxiliares(id);
  }
}
export default CN_exauxiliares;