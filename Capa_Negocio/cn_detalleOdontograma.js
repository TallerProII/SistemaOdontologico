import CD_detalleOdontograma from "../Capa_Datos/cd_detalleOdontograma.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_detalleOdontograma();

class CN_detalleOdontograma {
  validarNumero = validaciones.validarNumero;
  validarString = validaciones.validarString;
  //LISTAR
  async listDetodont(DNI) {
    return await objCapaDato.listDetodont(DNI);
  }
  //CREAR
  async createDetodont(DNI, tratamiento, cuadrante, diente, sector, estado, notas) {
    const mensajesErrores = [
      this.validarString(DNI, "DNI"),
      this.validarNumero(tratamiento, "tratamiento"),
      this.validarNumero(cuadrante, "cuadrante"),
      this.validarNumero(diente, "diente"),
      this.validarString(sector, "sector"),
      this.validarString(estado, "estado"),
      this.validarString(notas, "notas"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    if (!DNI || DNI.trim().length === 0) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }
    return await objCapaDato.createDetodont(DNI, tratamiento, cuadrante, diente, sector, estado, notas);
  }
  //CREAR
  async updateDetodont(id, tratamiento, cuadrante, diente, sector, estado, notas) {
    const mensajesErrores = [
      this.validarNumero(tratamiento, "tratamiento"),
      this.validarNumero(cuadrante, "cuadrante"),
      this.validarNumero(diente, "diente"),
      this.validarString(sector, "sector"),
      this.validarString(estado, "estado"),
      this.validarString(notas, "notas"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    return await objCapaDato.updateDetodont( id, tratamiento, cuadrante, diente, sector, estado, notas);
  }
  //ELIMINAR
  async deleteDetodont(id) {
      return await objCapaDato.deleteDetodont(id);
  }
}
export default CN_detalleOdontograma;