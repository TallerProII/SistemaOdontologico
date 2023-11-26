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
  validarFechaPasada = Validaciones.validarFechaPasada;
  // CREAR
  async createCita(IDHistoria, IDMedico, citMotivo, citFecha, citHora, citEstado) {
    var message = "";
    var result = { affectedRows: 0 };
    const errores = [
      this.validarNumero(IDHistoria, "ID del paciente"),
      this.validarNumero(IDMedico, "ID del médico"),
      this.validarString(citMotivo, "motivo"),
      this.validarFechaPasada(citFecha, "fecha"),
      this.validarString(citHora, "hora"),
      this.validarNumero(citEstado, "estado"),
    ];

    const erroresFiltrados = errores.filter((error) => error !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), affectedRows: 0 };
    }

    if (!message) {
      var resultado = await this.objCapaDato.createCita(IDHistoria, IDMedico, citMotivo, citFecha, citHora, citEstado);
      return resultado;
    }

    return { message: message, affectedRows: result.affectedRows = 0 };
  }
  // ACTUALIZAR 
  async updateCita(IDCita, IDMedico, citMotivo, citFecha, citHora, citEstado) {
    var message = "";
    var result = { affectedRows: 0 };
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
  // LISTAR 
  async listCita() {
    var resultado = await this.objCapaDato.listCita();
    return resultado;
  }
}
export default CN_Cita;