import CD_Cita from "../Capa_Datos/cd_citas.js";
import CD_Utilidades from "../Capa_Negocio/cn_utilidades.js";
import Validaciones from "./cn_validacion.js";

class CN_Cita {
  constructor() {
    this.objCapaDato = new CD_Cita();
    this.objUtilidades = new CD_Utilidades();
  }

  validarCampo = Validaciones.validarCampo;
  validarNumero = Validaciones.validarNumero;
  validarString = Validaciones.validarString;

  // CREAR CITA
  async createCita(IDHistoria, IDMedico, citMotivo, citFecha, citHora, citEstado) {
    const errores = [
      this.validarNumero(IDHistoria, "ID del paciente"),
      this.validarNumero(IDMedico, "ID del médico"),
      this.validarString(citMotivo, "motivo"),
      this.validarString(citFecha, "fecha"),
      this.validarString(citHora, "hora"),
      this.validarNumero(citEstado, "estado"),
    ];

    const erroresFiltrados = errores.filter((error) => error !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), affectedRows: 0 };
    }

    // Resto del código...
    var message = "";
    var result = { affectedRows: 0 };

    if (!IDHistoria || IDHistoria == 0) {
      message = "Debe seleccionar algún paciente";
    } else if (!IDMedico || IDMedico == 0) {
      message = "Debe seleccionar algún médico";
    } else if (!citMotivo || citMotivo.trim().length === 0) {
      message = "El campo motivo no puede quedar vacío";
    } else if (!citFecha || citFecha.trim().length === 0) {
      message = "El campo fecha no puede quedar vacío";
    } else if (!citHora || citHora.trim().length === 0) {
      message = "El campo hora no puede quedar vacío";
    } else if (!citEstado || citEstado == 0) {
      message = "El campo estado no puede quedar vacío";
    }

    if (!message) {
      return await this.objCapaDato.createCita(IDHistoria, IDMedico, citMotivo, citFecha, citHora, citEstado);
    }

    return { message: message, affectedRows: result.affectedRows = 0 };
  }

  // ACTUALIZAR CITA
  async updateCita(IDCita, IDMedico, citMotivo, citFecha, citHora, citEstado) {
    const errores = [
      this.validarNumero(IDMedico, "ID del médico"),
      this.validarString(citMotivo, "motivo"),
      this.validarString(citFecha, "fecha"),
      this.validarString(citHora, "hora"),
      this.validarString(citEstado, "estado"),
    ];

    const erroresFiltrados = errores.filter((error) => error !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), affectedRows: 0 };
    }

    // Resto del código...
    var message = "";
    var result = { affectedRows: 0 };

    if (!medicoId || !estado || !tratamiento || !fecha || !hora) {
      message = "Todos los campos son obligatorios";
    }

    if (!message) {
      return await this.objCapaDato.updateCita(IDCita, IDMedico, citMotivo, citFecha, citHora, citEstado);
    }

    return { message: message, affectedRows: result.affectedRows = 0 };
  }

  // ELIMINAR
  async deleteCita(idCita) {
    return await this.objCapaDato.deleteCita(idCita);
  }

  // LISTAR CITA
  async listCita() {
    // Resto del código...
    var resultado = await this.objCapaDato.listCita();

    // citEstado Activo Finalizado cancelado
    for (var i = 0; i < resultado["rows"].length; i++) {
      // Verificar si la fecha es una cadena
      var fechaOriginal = resultado["rows"][i]["citFecha"];
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

      resultado["rows"][i]["citFecha"] = fechaSinTiempo;
      // resultado["rows"][i]["citEstado"] = this.objUtilidades.citEstado(resultado["rows"][i]["citEstado"]);
    }

    return resultado;
  }
}

export default CN_Cita;
