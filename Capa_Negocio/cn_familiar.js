import CD_familiar from "../Capa_Datos/cd_familiar.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_familiar();

class CN_familiar {
  validarString = validaciones.validarString;
  //LISTAR
  async listFamiliar(DNI) {
    return await objCapaDato.listFamiliar(DNI);
  }
  async createFamiliar(DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono) {
    // Validaciones
    const mensajesErrores = [
      this.validarString(DNI, "DNI"),
      this.validarString(nombres, "nombres"),
      this.validarString(apellidos, "apellidos"),
      this.validarString(DNIF, "DNIF"),
      this.validarString(parentezco, "parentezco"),
      this.validarString(ocupacion, "ocupacion"),
      this.validarString(correo, "correo"),
      this.validarString(telefono, "telefono"),
    ];

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    // Validación adicional
    if (!DNI || DNI.trim().length === 0) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.createFamiliar(DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono);
  }
  async updateFamiliar(id,  nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono) {
    // Validaciones
    const mensajesErrores = [
      this.validarString(nombres, "nombres"),
      this.validarString(apellidos, "apellidos"),
      this.validarString(DNIF, "DNIF"),
      this.validarString(parentezco, "parentezco"),
      this.validarString(ocupacion, "ocupacion"),
      this.validarString(correo, "correo"),
      this.validarString(telefono, "telefono"),
    ];

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.updateFamiliar(id,  nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono);
  }
  //ELIMINAR
  async deleteFamiliar(id) {
      //filtos - reglas de negocio
      return await objCapaDato.deleteFamiliar(id);
  }
}

export default CN_familiar;
