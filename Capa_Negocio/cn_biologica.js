import CD_biologica from "../Capa_Datos/cd_biologica.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_biologica();

class CN_biologica {
  validarNumero = validaciones.validarNumero;
  validarString = validaciones.validarString;
  //LISTAR
  async listbiologica(DNI) {
    return await objCapaDato.listbiologica(DNI);
  }
  //CREAR
  async createbiologica(DNI, APETITO, DEPOSICION, SED, ORINA, SUENO) {
    // Validaciones
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarString(APETITO, "APETITO"),
      this.validarString(DEPOSICION, "DEPOSICION"),
      this.validarString(SED, "SED"),
      this.validarString(ORINA, "ORINA"),
      this.validarString(SUENO, "SUENO"),
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
    return await objCapaDato.createbiologica(DNI, APETITO, DEPOSICION, SED, ORINA, SUENO);
  }
  //CREAR
  async updatebiologica(CODIGO, APETITO, DEPOSICION, SED, ORINA, SUENO) {
    // Validaciones
    const mensajesErrores = [
        this.validarString(APETITO, "APETITO"),
        this.validarString(DEPOSICION, "DEPOSICION"),
        this.validarString(SED, "SED"),
        this.validarString(ORINA, "ORINA"),
        this.validarString(SUENO, "SUENO"),
    ];

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.updatebiologica( CODIGO, APETITO, DEPOSICION, SED, ORINA, SUENO);
  }
  //ELIMINAR
  async deletebiologica(id) {
      //filtos - reglas de negocio

      return await objCapaDato.deletebiologica(id);
  }
}

export default CN_biologica;
