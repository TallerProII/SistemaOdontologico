import CD_HistoriaClinica from "../Capa_Datos/cd_historiaClinica.js";

const objCapaDato = new CD_HistoriaClinica();

class CN_HistoriaClinica {
  // CREAR
  async createHistoriaClinica(IDPaciente, Fecha, Hora, Ectoscopia) {
    let message = "";
    let result = { affectedRows: 0 };

    if (typeof IDPaciente !== "number") {
      message = "Error en el tipo de dato de IDPaciente, debe ser un número";
    } else if (typeof Fecha !== "string") {
      message = "Error en el tipo de dato de Fecha, debe ser texto";
    } else if (typeof Hora !== "string") {
      message = "Error en el tipo de dato de Hora, debe ser texto";
    } else if (typeof Ectoscopia !== "string") {
      message = "Error en el tipo de dato de Ectoscopia, debe ser texto";
    } else if (!IDPaciente || !Fecha || !Hora || !Ectoscopia) {
      message = "Todos los campos son obligatorios";
    }

    if (!message) {
      result = await objCapaDato.createHistoriaClinica(IDPaciente, Fecha, Hora, Ectoscopia);
    }

    return { message: message, affectedRows: result.affectedRows };
  }

  // ACTUALIZAR
  async updateHistoriaClinica(IDHistoriaClinica, IDPaciente, Fecha, Hora, Ectoscopia) {
    let message = "";
    let result = { affectedRows: 0 };

    if (typeof IDHistoriaClinica !== "number") {
      message = "Error en el tipo de dato de IDHistoriaClinica, debe ser un número";
    } else if (typeof IDPaciente !== "number") {
      message = "Error en el tipo de dato de IDPaciente, debe ser un número";
    } else if (typeof Fecha !== "string") {
      message = "Error en el tipo de dato de Fecha, debe ser texto";
    } else if (typeof Hora !== "string") {
      message = "Error en el tipo de dato de Hora, debe ser texto";
    } else if (typeof Ectoscopia !== "string") {
      message = "Error en el tipo de dato de Ectoscopia, debe ser texto";
    } else if (!IDPaciente || !Fecha || !Hora || !Ectoscopia) {
      message = "Todos los campos son obligatorios";
    }

    if (!message) {
      result = await objCapaDato.updateHistoriaClinica(IDHistoriaClinica, IDPaciente, Fecha, Hora, Ectoscopia);
    }

    return { message: message, affectedRows: result.affectedRows };
  }

  /// ELIMINAR
  async deleteHistoriaClinica(IDHistoriaClinica) {
    let message = "";
    let result = { affectedRows: 0 };

    if (typeof IDHistoriaClinica !== "number") {
      message = "Error en el tipo de dato de IDHistoriaClinica, debe ser un número";
    }

    if (!message) {
      result = await objCapaDato.deleteHistoriaClinica(IDHistoriaClinica);
    }

    return { message: message, affectedRows: result.affectedRows };
  }

  // LISTAR
  async listHistoriaClinica() {
    return await objCapaDato.listHistoriaClinica();
  }
}

export default CN_HistoriaClinica;
