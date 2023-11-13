import CD_HistoriaClinica from "../Capa_Datos/cd_historiaClinica.js";

var objCapaDato = new CD_HistoriaClinica();

class CN_HistoriaClinica {
  // CREAR
  async createHistoriaClinica(idPaciente, fecha, descripcion, diagnostico, tratamiento) {
    // Validaciones
    var message = "";

    if (
      typeof idPaciente !== "number" ||
      typeof fecha !== "string" ||
      typeof descripcion !== "string" ||
      typeof diagnostico !== "string" ||
      typeof tratamiento !== "string"
    ) {
      message = "Error en el tipo de dato ingresado";
    } else {
      if (!idPaciente || !fecha || !descripcion || !diagnostico || !tratamiento) {
        message = "Todos los campos son obligatorios";
      }
    }

    if (!message) {
      return await objCapaDato.createHistoriaClinica(idPaciente, fecha, descripcion, diagnostico, tratamiento);
    }

    return { message: message, id: 0 };
  }

  // ACTUALIZAR
  async updateHistoriaClinica(id, idPaciente, fecha, descripcion, diagnostico, tratamiento) {
    // Filtros y reglas de negocio
    var message = "";

    if (
      typeof idPaciente !== "number" ||
      typeof fecha !== "string" ||
      typeof descripcion !== "string" ||
      typeof diagnostico !== "string" ||
      typeof tratamiento !== "string"
    ) {
      message = "Error en el tipo de dato ingresado";
    } else {
      if (!idPaciente || !fecha || !descripcion || !diagnostico || !tratamiento) {
        message = "Todos los campos son obligatorios";
      }
    }

    if (!message) {
      return await objCapaDato.updateHistoriaClinica(id, idPaciente, fecha, descripcion, diagnostico, tratamiento);
    }

    return { message: message, id: 0 };
  }

  // ELIMINAR
  async deleteHistoriaClinica(id) {
    return await objCapaDato.deleteHistoriaClinica(id);
  }

  // LISTAR
  async listHistoriaClinica() {
    return await objCapaDato.listHistoriaClinica();
  }
}

export default CN_HistoriaClinica;
