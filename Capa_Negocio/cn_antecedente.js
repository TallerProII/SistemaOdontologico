import CD_antecedente from "../Capa_Datos/cd_antecedente.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_antecedente();

class CN_antecedente {
  validarNumero = validaciones.validarNumero;
  validarString = validaciones.validarString;
  //LISTAR
  async listantecedente(DNI) {
    return await objCapaDato.listantecedente(DNI);
  }
  //CREAR
  async createantecedente(DNI, personal, patologico, alergia, familiar) {
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarString(personal, "personal"),
      this.validarString(patologico, "patologico"),
      this.validarString(alergia, "alergia"),
      this.validarString(familiar, "familiar"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    if (!DNI || (String(DNI.trim().length) === 8 && !isNaN(DNI.trim()))) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }
    return await objCapaDato.createantecedente(DNI, personal, patologico, alergia, familiar);
  }
  //CREAR
  async updateantecedente(CODIGO, personal, patologico, alergia, familiar) {
    const mensajesErrores = [
        this.validarString(personal, "personal"),
        this.validarString(patologico, "patologico"),
        this.validarString(alergia, "alergia"),
        this.validarString(familiar, "familiar"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    return await objCapaDato.updateantecedente( CODIGO, personal, patologico, alergia, familiar);
  }
  //ELIMINAR
  async deleteantecedente(id) {
      return await objCapaDato.deleteantecedente(id);
  }
}
export default CN_antecedente;