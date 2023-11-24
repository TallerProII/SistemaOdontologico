import CD_general from "../Capa_Datos/cd_general.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_general();

class CN_general {
  validarString = validaciones.validarString;
  //LISTAR
  async listgeneral(DNI) {
    return await objCapaDato.listgeneral(DNI);
  }
  //CREAR
  async creategeneral(DNI, TIPO, ESTADO, PIEZAS, DESC) {
    // Validaciones
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarString(TIPO, "TIPO"),
      this.validarString(ESTADO, "ESTADO"),
      this.validarString(PIEZAS, "PIEZAS"),
      this.validarString(DESC, "DESC")
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
    return await objCapaDato.creategeneral(DNI, TIPO, ESTADO, PIEZAS, DESC);
  }
  //CREAR
  async updategeneral(CODIGO, TIPO, ESTADO, PIEZAS, DESC) {
    // Validaciones
    const mensajesErrores = [
        this.validarString(TIPO, "TIPO"),
        this.validarString(ESTADO, "ESTADO"),
        this.validarString(PIEZAS, "PIEZAS"),
        this.validarString(DESC, "DESC"),
    ];

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.updategeneral( CODIGO, TIPO, ESTADO, PIEZAS, DESC);
  }
  //ELIMINAR
  async deletegeneral(id) {
      //filtos - reglas de negocio

      return await objCapaDato.deletegeneral(id);
  }
}

export default CN_general;
