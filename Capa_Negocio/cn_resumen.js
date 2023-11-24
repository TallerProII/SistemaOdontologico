import CD_resumen from "../Capa_Datos/cd_resumen.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_resumen();

class CN_resumen {
  validarString = validaciones.validarString;
  //LISTAR
  async listresumen(DNI) {
    return await objCapaDato.listresumen(DNI);
  }
  //CREAR
  async createresumen(DNI, TITULO, DETALLE) {
    // Validaciones
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarString(TITULO, "TITULO"),
      this.validarString(DETALLE, "DETALLE"),
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
    return await objCapaDato.createresumen(DNI, TITULO, DETALLE);
  }
  //CREAR
  async updateresumen(CODIGO, TITULO, DETALLE) {
    // Validaciones
    const mensajesErrores = [
        this.validarString(TITULO, "TITULO"),
        this.validarString(DETALLE, "DETALLE"),
    ];

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.updateresumen( CODIGO, TITULO, DETALLE);
  }
  //ELIMINAR
  async deleteresumen(id) {
      //filtos - reglas de negocio

      return await objCapaDato.deleteresumen(id);
  }
}

export default CN_resumen;
