import CD_oleray from "../Capa_Datos/cd_oleray.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_oleray();

class CN_oleray {
  validarString = validaciones.validarString;
  validarNumero = validaciones.validarNumero;
  //LISTAR
  async listoleray(DNI) {
    return await objCapaDato.listoleray(DNI);
  }
  //CREAR
  async createoleray(DNI, PORCENTAJE, IHO, ESTADO) {
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarNumero(PORCENTAJE, "PORCENTAJE"),
      this.validarString(IHO, "IHO"),
      this.validarString(ESTADO, "ESTADO"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    if (!DNI || (String(DNI.trim().length) === 8 && !isNaN(DNI.trim()))) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }
    return await objCapaDato.createoleray(DNI, PORCENTAJE, IHO, ESTADO);
  }
  //CREAR
  async updateoleray(CODIGO, PORCENTAJE, IHO, ESTADO) {
    const mensajesErrores = [
        this.validarString(IHO, "IHO"),
        this.validarNumero(PORCENTAJE, "PORCENTAJE"),
        this.validarString(ESTADO, "ESTADO"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    return await objCapaDato.updateoleray( CODIGO, PORCENTAJE, IHO, ESTADO);
  }
  //ELIMINAR
  async deleteoleray(id) {
      return await objCapaDato.deleteoleray(id);
  }
}
export default CN_oleray;