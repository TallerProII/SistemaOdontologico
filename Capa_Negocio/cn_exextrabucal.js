import CD_exextrabucal from "../Capa_Datos/cd_exextrabucal.js";
import validaciones from "../Capa_Negocio/cn_validacion.js";

var objCapaDato = new CD_exextrabucal();

class CN_exextrabucal {
  validarString = validaciones.validarString;
  //LISTAR
  async listexextrabucal(DNI) {
    return await objCapaDato.listexextrabucal(DNI);
  }
  //CREAR
  async createexextrabucal(DNI, FACIE, CRANEO, CARA, TERCIO, BILATERAL, PERFIL, TRAYECTORIA, RUIDOS, PALPACION, GANGLIOS, APERTURA) {
    // Validaciones
    const mensajesErrores = [
      this.validarString(String(DNI), "DNI"),
      this.validarString(FACIE, "FACIE"),
      this.validarString(CRANEO, "CRANEO"),
      this.validarString(CARA, "CARA"),
      this.validarString(TERCIO, "TERCIO"),
      this.validarString(BILATERAL, "BILATERAL"),
      this.validarString(PERFIL, "PERFIL"),
      this.validarString(TRAYECTORIA, "TRAYECTORIA"),
      this.validarString(RUIDOS, "RUIDOS"),
      this.validarString(PALPACION, "PALPACION"),
      this.validarString(GANGLIOS, "GANGLIOS"),
      this.validarString(APERTURA, "APERTURA"),
    ];

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (!DNI || (String(DNI.trim().length) === 8 && !isNaN(DNI.trim()))) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }

    // Validación adicional
    if (!DNI || (String(DNI.trim().length) === 8 && !isNaN(DNI.trim()))) {
      return { message: "Debe seleccionar algún paciente", id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.createexextrabucal(DNI, FACIE, CRANEO, CARA, TERCIO, BILATERAL, PERFIL, TRAYECTORIA, RUIDOS, PALPACION, GANGLIOS, APERTURA);
  }
  //CREAR
  async updateexextrabucal(CODIGO, FACIE, CRANEO, CARA, TERCIO, BILATERAL, PERFIL, TRAYECTORIA, RUIDOS, PALPACION, GANGLIOS, APERTURA) {
    // Validaciones
    const mensajesErrores = [
        this.validarString(FACIE, "FACIE"),
        this.validarString(CRANEO, "CRANEO"),
        this.validarString(CARA, "CARA"),
        this.validarString(TERCIO, "TERCIO"),
        this.validarString(BILATERAL, "BILATERAL"),
        this.validarString(PERFIL, "PERFIL"),
        this.validarString(TRAYECTORIA, "TRAYECTORIA"),
        this.validarString(RUIDOS, "RUIDOS"),
        this.validarString(PALPACION, "PALPACION"),
        this.validarString(GANGLIOS, "GANGLIOS"),
        this.validarString(APERTURA, "APERTURA"),
    ];

    // Filtra los mensajes de error que no son nulos
    const erroresFiltrados = mensajesErrores.filter((mensaje) => mensaje !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), id: 0 };
    }

    // Si todas las validaciones son exitosas, procede a la creación
    return await objCapaDato.updateexextrabucal( CODIGO, FACIE, CRANEO, CARA, TERCIO, BILATERAL, PERFIL, TRAYECTORIA, RUIDOS, PALPACION, GANGLIOS, APERTURA);
  }
  //ELIMINAR
  async deleteexextrabucal(id) {
      //filtos - reglas de negocio

      return await objCapaDato.deleteexextrabucal(id);
  }
}

export default CN_exextrabucal;
