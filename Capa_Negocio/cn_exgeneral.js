import CD_exgeneral from "../Capa_Datos/cd_exgeneral.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_exgeneral();

class CN_exgeneral {
  validarNumero = validaciones.validarNumero;
  validarString = validaciones.validarString;
  //LISTAR
  async listexgeneral(DNI) {
    return await objCapaDato.listexgeneral(DNI);
  }
  //CREAR
  async createexgeneral(DNI, PESO, TALLA, BIOTIPO, PIEL, CABELLO, UNAS, PRESION, PULSO, FRECUENCIA, TEMPERATURA) {
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarNumero(PESO, "PESO"),
      this.validarNumero(TALLA, "TALLA"),
      this.validarString(BIOTIPO, "BIOTIPO"),
      this.validarString(PIEL, "PIEL"),
      this.validarString(CABELLO, "CABELLO"),
      this.validarString(UNAS, "UNAS"),
      this.validarString(PRESION, "PRESION"),
      this.validarString(PULSO, "PULSO"),
      this.validarString(FRECUENCIA, "FRECUENCIA"),
      this.validarString(TEMPERATURA, "TEMPERATURA"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    if (!DNI || (String(DNI.trim().length) === 8 && !isNaN(DNI.trim()))) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }
    return await objCapaDato.createexgeneral(DNI, PESO, TALLA, BIOTIPO, PIEL, CABELLO, UNAS, PRESION, PULSO, FRECUENCIA, TEMPERATURA);
  }
  //CREAR
  async updateexgeneral(CODIGO, PESO, TALLA, BIOTIPO, PIEL, CABELLO, UNAS, PRESION, PULSO, FRECUENCIA, TEMPERATURA) {
    const mensajesErrores = [
        this.validarNumero(PESO, "PESO"),
        this.validarNumero(TALLA, "TALLA"),
        this.validarString(BIOTIPO, "BIOTIPO"),
        this.validarString(PIEL, "PIEL"),
        this.validarString(CABELLO, "CABELLO"),
        this.validarString(UNAS, "UNAS"),
        this.validarString(PRESION, "PRESION"),
        this.validarString(PULSO, "PULSO"),
        this.validarString(FRECUENCIA, "FRECUENCIA"),
        this.validarString(TEMPERATURA, "TEMPERATURA"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    return await objCapaDato.updateexgeneral( CODIGO, PESO, TALLA, BIOTIPO, PIEL, CABELLO, UNAS, PRESION, PULSO, FRECUENCIA, TEMPERATURA);
  }
  //ELIMINAR
  async deleteexgeneral(id) {
      return await objCapaDato.deleteexgeneral(id);
  }
}
export default CN_exgeneral;