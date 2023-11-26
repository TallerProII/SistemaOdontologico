import CD_odontograma from "../Capa_Datos/cd_odontograma.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_odontograma();

class CN_odontograma {
  validarNumero = validaciones.validarNumero;
  validarString = validaciones.validarString;
  //LISTAR
  async listodontograma(DNI) {
    var resultado = await objCapaDato.listodontograma(DNI);
    return await resultado;
  }
  //CREAR
  async createodontograma(DNI, FASE, ESPECIF, OBSERV) {
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarString(FASE, "FASE"),
      this.validarString(ESPECIF, "ESPECIF"),
      this.validarString(OBSERV, "OBSERV"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    if (!DNI || (String(DNI.trim().length) === 8 && !isNaN(DNI.trim()))) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }
    return await objCapaDato.createodontograma(DNI, FASE, ESPECIF, OBSERV);
  }
  //CREAR
  async updateodontograma(CODIGO, FASE, ESPECIF, OBSERV) {
    const mensajesErrores = [
        this.validarString(FASE, "FASE"),
        this.validarString(ESPECIF, "ESPECIF"),
        this.validarString(OBSERV, "OBSERV"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    return await objCapaDato.updateodontograma( CODIGO, FASE, ESPECIF, OBSERV);
  }
  //ELIMINAR
  async deleteodontograma(id) {
      return await objCapaDato.deleteodontograma(id);
  }
}
export default CN_odontograma;