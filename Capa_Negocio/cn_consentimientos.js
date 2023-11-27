import CD_Consentimientos from "../Capa_Datos/cd_consentimientos.js";
import CD_Utilidades from "../Capa_Negocio/cn_utilidades.js";
import Validaciones from "./cn_validacion.js";

class CN_Consentimientos {
  constructor() {
    this.objCapaDato = new CD_Consentimientos();
    this.objUtilidades = new CD_Utilidades();
  }

  validarNumero = Validaciones.validarNumero;
  validarString = Validaciones.validarString;

  async createConsentimiento(DNI, ConsDesc, ConsDoc, ConsEstado) {
    const errores = [
      this.validarNumero(DNI, "DNI"),
      this.validarString(ConsDesc, "Descripción del consentimiento"),
    ];

    const erroresFiltrados = errores.filter((error) => error !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), affectedRows: 0 };
    }

    let message = "";
    let result = { affectedRows: 0 };

    if (!DNI || !ConsDesc || !ConsDoc || !ConsEstado) {
      message = "Todos los campos son obligatorios";
    }

    if (!message) {
      result = await objCapaDato.createConsentimiento(DNI, ConsDesc, ConsDoc, ConsEstado);
    }

    return { message: message, affectedRows: result.affectedRows };
  }

  async updateConsentimiento(IDConsentimiento, DNI, ConsDesc, ConsDoc, ConsEstado) {
    const errores = [
      this.validarNumero(IDConsentimiento, "ID del consentimiento"),
      this.validarNumero(DNI, "DNI"),
      this.validarString(ConsDesc, "Descripción del consentimiento"),
    ];

    const erroresFiltrados = errores.filter((error) => error !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), affectedRows: 0 };
    }

    let message = "";
    let result = { affectedRows: 0 };

    if (!DNI || !ConsDesc || !ConsDoc || !ConsEstado) {
      message = "Todos los campos son obligatorios";
    }

    if (!message) {
      result = await objCapaDato.updateConsentimiento(IDConsentimiento, DNI, ConsDesc, ConsDoc, ConsEstado);
    }

    return { message: message, affectedRows: result.affectedRows };
  }

  async deleteConsentimiento(IDConsentimiento) {
    const errores = [
      this.validarNumero(IDConsentimiento, "ID del consentimiento"),
    ];

    const erroresFiltrados = errores.filter((error) => error !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), affectedRows: 0 };
    }

    let message = "";
    let result = { affectedRows: 0 };

    if (!message) {
      result = await objCapaDato.deleteConsentimiento(IDConsentimiento);
    }

    return { message: message, affectedRows: result.affectedRows };
  }

  async listConsentimientos() {
    return await objCapaDato.listConsentimientos();
  }

 }

export default CN_Consentimientos;