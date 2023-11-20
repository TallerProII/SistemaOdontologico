import CD_HistoriaClinica from "../Capa_Datos/cd_historiaClinica.js";

const objCapaDato = new CD_HistoriaClinica();

class CN_HistoriaClinica {
  // CREAR
  async createHistoriaClinica(IDPaciente, Fecha, Hora, Ectoscopia) {
    let message = "";

    if (typeof IDPaciente !== "number") {
      message = "Error en el tipo de dato de IDPaciente, debe ser un numero";
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
      return await objCapaDato.createHistoriaClinica(IDPaciente, Fecha, Hora, Ectoscopia);
    }

    return { message: message, id: 0 };
  }

  // ACTUALIZAR
  async updateHistoriaClinica(IDHistoriaClinica, IDPaciente, Fecha, Hora, Ectoscopia) {
    let message = "";

    if (typeof IDHistoriaClinica !== "number") {
      message = "Error en el tipo de dato de IDHistoriaClinica, debe ser un numero";
    } else if (typeof IDPaciente !== "number") {
      message = "Error en el tipo de dato de IDPaciente, debe ser texto";
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
      return await objCapaDato.updateHistoriaClinica(IDHistoriaClinica, IDPaciente, Fecha, Hora, Ectoscopia);
    }

    return { message: message, id: 0 };
  }

  // ELIMINAR
  async deleteHistoriaClinica(IDHistoriaClinica) {
    let message = "";

    if (typeof IDHistoriaClinica !== "number") {
      message = "Error en el tipo de dato de IDHistoriaClinica";
    }

    if (!message) {
      return await objCapaDato.deleteHistoriaClinica(IDHistoriaClinica);
    }

    return { message: message, id: 0 };
  }

  // LISTAR
  async listHistoriaClinica() {
    return await objCapaDato.listHistoriaClinica();
  }
}

export default CN_HistoriaClinica;
