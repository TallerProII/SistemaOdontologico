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
    // Validaciones
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

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    // Validación adicional
    if (!DNI || (String(DNI.trim().length) === 8 && !isNaN(DNI.trim()))) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.createexintrabucal(DNI, LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA);
  }
  //CREAR
  async updateexintrabucal(CODIGO, LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA) {
    // Validaciones
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

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.updateexintrabucal( CODIGO, LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA);
  }
  //ELIMINAR
  async deleteexintrabucal(id) {
      //filtos - reglas de negocio

      return await objCapaDato.deleteexintrabucal(id);
  }
}

export default CN_exintrabucal;
