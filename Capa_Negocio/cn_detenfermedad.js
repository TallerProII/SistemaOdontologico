import CD_detenfermedad from "../Capa_Datos/cd_detenfermedad.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_detenfermedad();

class CN_detenfermedad {
  validarNumero = validaciones.validarNumero;
  validarString = validaciones.validarString;
  //LISTAR
  async listdetenfermedad(DNI) {
    return await objCapaDato.listdetenfermedad(DNI);
  }
  //CREAR
  async createdetenfermedad(DNI, ENFERMEDAD, DESC) {
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarNumero(ENFERMEDAD, "ENFERMEDAD"),
      this.validarString(DESC, "DESC"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    if (!DNI || (String(DNI.trim().length) === 8 && !isNaN(DNI.trim()))) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }
    return await objCapaDato.createdetenfermedad(DNI, ENFERMEDAD, DESC);
  }
  //CREAR
  async updatedetenfermedad(CODIGO, ENFERMEDAD, DESC) {
    const mensajesErrores = [
        this.validarNumero(ENFERMEDAD, "ENFERMEDAD"),
        this.validarString(DESC, "DESC"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    return await objCapaDato.updatedetenfermedad( CODIGO, ENFERMEDAD, DESC);
  }
  //ELIMINAR
  async deletedetenfermedad(id) {
      return await objCapaDato.deletedetenfermedad(id);
  }
}
export default CN_detenfermedad;