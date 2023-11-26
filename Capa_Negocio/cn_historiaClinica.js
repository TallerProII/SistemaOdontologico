import CD_HistoriaClinica from "../Capa_Datos/cd_historiaClinica.js";
import Validaciones from "./cn_validacion.js";

const objCapaDato = new CD_HistoriaClinica();

class CN_HistoriaClinica {
  constructor() {
    this.objCapaDato = new CD_HistoriaClinica();
  }
  validarNumero = Validaciones.validarNumero;
  validarString = Validaciones.validarString;
  // CREAR
  async createHistoriaClinica(IDPaciente, Fecha, Hora, Ectoscopia) {
    const errores = [
      this.validarNumero(IDPaciente, "ID del paciente"),
      this.validarString(Fecha, "Fecha"),
      this.validarString(Hora, "Hora"),
      this.validarString(Ectoscopia, "Ectoscopia"),
    ];
    const erroresFiltrados = errores.filter((error) => error !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), affectedRows: 0 };
    }
    let message = "";
    let result = { affectedRows: 0 };
    if (!IDPaciente || !Fecha || !Hora || !Ectoscopia) {
      message = "Todos los campos son obligatorios";
    }
    if (!message) {
      result = await objCapaDato.createHistoriaClinica(IDPaciente, Fecha, Hora, Ectoscopia);
    }
    return { message: message, affectedRows: result.affectedRows };
  }
  // ACTUALIZAR
  async updateHistoriaClinica(IDHistoriaClinica, IDPaciente, Fecha, Hora, Ectoscopia) {
    const errores = [
      this.validarNumero(IDHistoriaClinica, "ID de la historia clínica"),
      this.validarNumero(IDPaciente, "ID del paciente"),
      this.validarString(Fecha, "Fecha"),
      this.validarString(Hora, "Hora"),
      this.validarString(Ectoscopia, "Ectoscopia"),
    ];
    const erroresFiltrados = errores.filter((error) => error !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), affectedRows: 0 };
    }
    let message = "";
    let result = { affectedRows: 0 };
    if (!IDPaciente || !Fecha || !Hora || !Ectoscopia) {
      message = "Todos los campos son obligatorios";
    }
    if (!message) {
      result = await objCapaDato.updateHistoriaClinica(IDHistoriaClinica, IDPaciente, Fecha, Hora, Ectoscopia);
    }
    return { message: message, affectedRows: result.affectedRows };
  }
  /// ELIMINAR
  async deleteHistoriaClinica(IDHistoriaClinica) {
    const errores = [
      this.validarNumero(IDHistoriaClinica, "ID de la historia clínica"),
    ];
    const erroresFiltrados = errores.filter((error) => error !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), affectedRows: 0 };
    }
    let message = "";
    let result = { affectedRows: 0 };
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