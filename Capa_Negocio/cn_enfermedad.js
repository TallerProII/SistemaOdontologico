import CD_enfermedad from "../Capa_Datos/cd_enfermedad.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_enfermedad();

class CN_enfermedad {
  validarString = validaciones.validarString;
  //LISTAR
  async listenfermedad() {
    return await objCapaDato.listenfermedad();
  }
  //CREAR
  async createenfermedad(CIE, CODIGO, DESC) {
    const mensajesErrores = [
        this.validarString(CIE, "CIE"),
      this.validarString(CODIGO, "CODIGO"),
      this.validarString(DESC, "DESC"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    return await objCapaDato.createenfermedad( CIE, CODIGO, DESC);
  }
  //CREAR
  async updateenfermedad(CODIGO, CIE, ECODIGO, DESC) {
    const mensajesErrores = [
        this.validarString(CIE, "CIE"),
        this.validarString(CODIGO, "CODIGO"),
        this.validarString(DESC, "DESC"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    return await objCapaDato.updateenfermedad( CODIGO, CIE, ECODIGO, DESC);
  }
  //ELIMINAR
  async deleteenfermedad(id) {
      return await objCapaDato.deleteenfermedad(id);
  }
}
export default CN_enfermedad;