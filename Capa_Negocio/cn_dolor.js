import CD_dolor from "../Capa_Datos/cd_dolor.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_dolor();

class CN_dolor {
  validarString = validaciones.validarString;
  //LISTAR
  async listdolor(DNI) {
    return await objCapaDato.listdolor(DNI);
  }
  //CREAR
  async createdolor(DNI, MUSCULO, TEMPORAL, MASETERO, PTEINTERNO, PTEEXTERNO, DIGASTRICO, ESTERNOC) {
    // Validaciones
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarString(MUSCULO, "MUSCULO"),
      this.validarString(TEMPORAL, "TEMPORAL"),
      this.validarString(MASETERO, "MASETERO"),
      this.validarString(PTEINTERNO, "PTEINTERNO"),
      this.validarString(PTEEXTERNO, "PTEEXTERNO"),
      this.validarString(DIGASTRICO, "DIGASTRICO"),
      this.validarString(ESTERNOC, "ESTERNOC"),
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
    return await objCapaDato.createdolor(DNI, MUSCULO, TEMPORAL, MASETERO, PTEINTERNO, PTEEXTERNO, DIGASTRICO, ESTERNOC);
  }
  //CREAR
  async updatedolor(CODIGO, MUSCULO, TEMPORAL, MASETERO, PTEINTERNO, PTEEXTERNO, DIGASTRICO, ESTERNOC) {
    // Validaciones
    const mensajesErrores = [
        this.validarString(MUSCULO, "MUSCULO"),
        this.validarString(TEMPORAL, "TEMPORAL"),
        this.validarString(MASETERO, "MASETERO"),
        this.validarString(PTEINTERNO, "PTEINTERNO"),
        this.validarString(PTEEXTERNO, "PTEEXTERNO"),
        this.validarString(DIGASTRICO, "DIGASTRICO"),
        this.validarString(ESTERNOC, "ESTERNOC")
    ];

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.updatedolor( CODIGO, MUSCULO, TEMPORAL, MASETERO, PTEINTERNO, PTEEXTERNO, DIGASTRICO, ESTERNOC);
  }
  //ELIMINAR
  async deletedolor(id) {
      //filtos - reglas de negocio

      return await objCapaDato.deletedolor(id);
  }
}

export default CN_dolor;
