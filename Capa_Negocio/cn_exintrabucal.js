import CD_exintrabucal from "../Capa_Datos/cd_exintrabucal.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_exintrabucal();

class CN_exintrabucal {
  validarString = validaciones.validarString;
  //LISTAR
  async listexintrabucal(DNI) {
    return await objCapaDato.listexintrabucal(DNI);
  }
  //CREAR
  async createexintrabucal(DNI, LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA) {
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarString(LABIOS, "LABIOS"),
      this.validarString(PALADAR, "PALADAR"),
      this.validarString(CARRILLO, "CARRILLO"),
      this.validarString(PISO, "PISO"),
      this.validarString(LENGUA, "LENGUA"),
      this.validarString(OROFARINGE, "OROFARINGE"),
      this.validarString(FRENILLO, "FRENILLO"),
      this.validarString(SALIVA, "SALIVA"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    if (!DNI || (String(DNI.trim().length) === 8 && !isNaN(DNI.trim()))) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }
    return await objCapaDato.createexintrabucal(DNI, LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA);
  }
  //CREAR
  async updateexintrabucal(CODIGO, LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA) {
    const mensajesErrores = [
        this.validarString(LABIOS, "LABIOS"),
        this.validarString(PALADAR, "PALADAR"),
        this.validarString(CARRILLO, "CARRILLO"),
        this.validarString(PISO, "PISO"),
        this.validarString(LENGUA, "LENGUA"),
        this.validarString(OROFARINGE, "OROFARINGE"),
        this.validarString(FRENILLO, "FRENILLO"),
        this.validarString(SALIVA, "SALIVA")
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    return await objCapaDato.updateexintrabucal( CODIGO, LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA);
  }
  //ELIMINAR
  async deleteexintrabucal(id) {
      return await objCapaDato.deleteexintrabucal(id);
  }
}
export default CN_exintrabucal;