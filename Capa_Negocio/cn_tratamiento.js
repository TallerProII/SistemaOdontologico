import CD_Tratamiento from "../Capa_Datos/cd_tratamiento.js";
import Validaciones from "./cn_validacion.js";

var objCapaDato = new CD_Tratamiento();

class CN_Tratamiento {
  constructor() {
    this.objCapaDato = new CD_Tratamiento();
  }

  validarString = Validaciones.validarString;

  // LISTAR
  async listTratamiento() {
    return await objCapaDato.listTratamiento();
  }

  // CREAR
  async createTratamiento(Tratamiento, tartDesc) {
    const errores = [
      this.validarString(Tratamiento, "Nombre del tratamiento"),
      this.validarString(tartDesc, "Descripción del tratamiento"),
    ];

    const erroresFiltrados = errores.filter((error) => error !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), affectedRows: 0 };
    }

    var message = "";
    if (!Tratamiento || Tratamiento.trim().length === 0) {
      Mensaje = "El nombre del tratamiento no puede ser vacío";
    } else if (!tartDesc || tartDesc == 0) {
      Mensaje = "La descripción del tratamiento no puede quedar vacía";
    }

    if (!message) {
      return await objCapaDato.createTratamiento(Tratamiento, tartDesc);
    }
    return { message: message, affectedRows: result.affectedRows = 0 };
  }

  // ACTUALIZAR
  async updateTratamiento(IDTratamiento, Tratamiento, tartDesc) {
    const errores = [
      this.validarString(Tratamiento, "Nombre del tratamiento"),
      this.validarString(tartDesc, "Descripción del tratamiento"),
    ];

    const erroresFiltrados = errores.filter((error) => error !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), affectedRows: 0 };
    }

   
    var message = "";

    if (!Tratamiento || Tratamiento.trim().length === 0) {
      Mensaje = "El nombre del tratamiento no puede ser vacío";
    } else if (!tartDesc || tartDesc == 0) {
      Mensaje = "La descripción del tratamiento no puede quedar vacía";
    }

    if (!message) {
      return await objCapaDato.updateTratamiento(IDTratamiento, Tratamiento, tartDesc);
    }
    return { message: message, affectedRows: result.affectedRows = 0 };
  }

  // ELIMINAR
  async deleteTratamiento(IDTratamiento) {
    //filtros - reglas de negocio
    return await objCapaDato.deleteTratamiento(IDTratamiento);
  }
}

export default CN_Tratamiento;
