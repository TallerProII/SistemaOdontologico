import CD_odontograma from "../Capa_Datos/cd_odontograma.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_odontograma();

class CN_odontograma {
  validarNumero = validaciones.validarNumero;
  validarString = validaciones.validarString;
  //LISTAR
  async listodontograma(DNI) {
    // Resto del código...
    var resultado = await objCapaDato.listodontograma(DNI);

    // citEstado Activo Finalizado cancelado
    for (var i = 0; i < resultado["rows"].length; i++) {
      // Verificar si la fecha es una cadena
      var fechaOriginal = resultado["rows"][i]["odoFecha"];
      var fechaSinTiempo;

      if (typeof fechaOriginal === "string") {
        fechaSinTiempo = fechaOriginal.split("T")[0];
      } else if (fechaOriginal instanceof Date) {
        // Si ya es un objeto Date, formatear la fecha
        var dia = ("0" + fechaOriginal.getDate()).slice(-2);
        var mes = ("0" + (fechaOriginal.getMonth() + 1)).slice(-2);
        var anio = fechaOriginal.getFullYear();
        fechaSinTiempo = dia + "-" + mes + "-" + anio;
      }

      resultado["rows"][i]["odoFecha"] = fechaSinTiempo;
      
    }

    return await resultado;
  }
  //CREAR
  async createodontograma(DNI, FASE, ESPECIF, OBSERV) {
    // Validaciones
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarString(FASE, "FASE"),
      this.validarString(ESPECIF, "ESPECIF"),
      this.validarString(OBSERV, "OBSERV"),
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
    return await objCapaDato.createodontograma(DNI, FASE, ESPECIF, OBSERV);
  }
  //CREAR
  async updateodontograma(CODIGO, FASE, ESPECIF, OBSERV) {
    // Validaciones
    const mensajesErrores = [
        this.validarString(FASE, "FASE"),
        this.validarString(ESPECIF, "ESPECIF"),
        this.validarString(OBSERV, "OBSERV"),
    ];

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.updateodontograma( CODIGO, FASE, ESPECIF, OBSERV);
  }
  //ELIMINAR
  async deleteodontograma(id) {
      //filtos - reglas de negocio

      return await objCapaDato.deleteodontograma(id);
  }
}

export default CN_odontograma;
