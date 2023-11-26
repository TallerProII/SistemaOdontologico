import CD_oclusion from "../Capa_Datos/cd_oclusion.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_oclusion();

class CN_oclusion {
  validarString = validaciones.validarString;
  //LISTAR
  async listoclusion(DNI) {
    return await objCapaDato.listoclusion(DNI);
  }
  //CREAR
  async createoclusion(DNI, MOLARDER, MOLARIZQ, CANINADER, CANINAIZQ, OVERBITE, OVERJET, RELCENTRICA, GCANDER, GCANIZQ, GANT, SAGITAL, VERTICAL, HORIZONTAL, POSTURAL, OCLUSIAL, ESPACLIBRE) {
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarString(MOLARDER, "MOLARDER"),
      this.validarString(MOLARIZQ, "MOLARIZQ"),
      this.validarString(CANINADER, "CANINADER"),
      this.validarString(CANINAIZQ, "CANINAIZQ"),
      this.validarString(OVERBITE, "OVERBITE"),
      this.validarString(OVERJET, "OVERJET"),
      this.validarString(RELCENTRICA, "RELCENTRICA"),
      this.validarString(GCANDER, "GCANDER"),
      this.validarString(GCANIZQ, "GCANIZQ"),
      this.validarString(GANT, "GANT"),
      this.validarString(SAGITAL, "SAGITAL"),
      this.validarString(VERTICAL, "VERTICAL"),
      this.validarString(HORIZONTAL, "HORIZONTAL"),
      this.validarString(POSTURAL, "POSTURAL"),
      this.validarString(OCLUSIAL, "OCLUSIAL"),
      this.validarString(ESPACLIBRE, "ESPACLIBRE"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    if (!DNI || (String(DNI.trim().length) === 8 && !isNaN(DNI.trim()))) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }
    return await objCapaDato.createoclusion(DNI, MOLARDER, MOLARIZQ, CANINADER, CANINAIZQ, OVERBITE, OVERJET, RELCENTRICA, GCANDER, GCANIZQ, GANT, SAGITAL, VERTICAL, HORIZONTAL, POSTURAL, OCLUSIAL, ESPACLIBRE);
  }
  //CREAR
  async updateoclusion(CODIGO, MOLARDER, MOLARIZQ, CANINADER, CANINAIZQ, OVERBITE, OVERJET, RELCENTRICA, GCANDER, GCANIZQ, GANT, SAGITAL, VERTICAL, HORIZONTAL, POSTURAL, OCLUSIAL, ESPACLIBRE) {
    const mensajesErrores = [
        this.validarString(MOLARDER, "MOLARDER"),
        this.validarString(MOLARIZQ, "MOLARIZQ"),
        this.validarString(CANINADER, "CANINADER"),
        this.validarString(CANINAIZQ, "CANINAIZQ"),
        this.validarString(OVERBITE, "OVERBITE"),
        this.validarString(OVERJET, "OVERJET"),
        this.validarString(RELCENTRICA, "RELCENTRICA"),
        this.validarString(GCANDER, "GCANDER"),
        this.validarString(GCANIZQ, "GCANIZQ"),
        this.validarString(GANT, "GANT"),
        this.validarString(SAGITAL, "SAGITAL"),
        this.validarString(VERTICAL, "VERTICAL"),
        this.validarString(HORIZONTAL, "HORIZONTAL"),
        this.validarString(POSTURAL, "POSTURAL"),
        this.validarString(OCLUSIAL, "OCLUSIAL"),
        this.validarString(ESPACLIBRE, "ESPACLIBRE"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    return await objCapaDato.updateoclusion( CODIGO, MOLARDER, MOLARIZQ, CANINADER, CANINAIZQ, OVERBITE, OVERJET, RELCENTRICA, GCANDER, GCANIZQ, GANT, SAGITAL, VERTICAL, HORIZONTAL, POSTURAL, OCLUSIAL, ESPACLIBRE);
  }
  //ELIMINAR
  async deleteoclusion(id) {
      return await objCapaDato.deleteoclusion(id);
  }
}
export default CN_oclusion;