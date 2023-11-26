import CD_diente from "../Capa_Datos/cd_diente.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_diente();

class CN_diente {
  validarNumero = validaciones.validarNumero;
  validarString = validaciones.validarString;
  //LISTAR
  async listdiente(DNI) {
    return await objCapaDato.listdiente(DNI);
  }
  //CREAR
  async creatediente(DNI, NUMERO, COLOR, FORMA, TAMANO, DIASTEMA, EDENTULA, POSANORMAL, FACDESGASTE, LINMEDIA, OTROS) {
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarNumero(NUMERO, "NUMERO"),
      this.validarString(COLOR, "COLOR"),
      this.validarString(FORMA, "FORMA"),
      this.validarString(TAMANO, "TAMANO"),
      this.validarString(DIASTEMA, "DIASTEMA"),
      this.validarString(EDENTULA, "EDENTULA"),
      this.validarString(POSANORMAL, "POSANORMAL"),
      this.validarString(FACDESGASTE, "FACDESGASTE"),
      this.validarString(LINMEDIA, "LINMEDIA"),
      this.validarString(OTROS, "OTROS"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    if (!DNI || (String(DNI.trim().length) === 8 && !isNaN(DNI.trim()))) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }
    return await objCapaDato.creatediente(DNI, NUMERO, COLOR, FORMA, TAMANO, DIASTEMA, EDENTULA, POSANORMAL, FACDESGASTE, LINMEDIA, OTROS);
  }
  //CREAR
  async updatediente(CODIGO, NUMERO, COLOR, FORMA, TAMANO, DIASTEMA, EDENTULA, POSANORMAL, FACDESGASTE, LINMEDIA, OTROS) {
    const mensajesErrores = [
        this.validarNumero(NUMERO, "NUMERO"),
        this.validarString(COLOR, "COLOR"),
        this.validarString(FORMA, "FORMA"),
        this.validarString(TAMANO, "TAMANO"),
        this.validarString(DIASTEMA, "DIASTEMA"),
        this.validarString(EDENTULA, "EDENTULA"),
        this.validarString(POSANORMAL, "POSANORMAL"),
        this.validarString(FACDESGASTE, "FACDESGASTE"),
        this.validarString(LINMEDIA, "LINMEDIA"),
        this.validarString(OTROS, "OTROS"),
    ];
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);
    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }
    return await objCapaDato.updatediente( CODIGO, NUMERO, COLOR, FORMA, TAMANO, DIASTEMA, EDENTULA, POSANORMAL, FACDESGASTE, LINMEDIA, OTROS);
  }
  //ELIMINAR
  async deletediente(id) {
      return await objCapaDato.deletediente(id);
  }
}
export default CN_diente;