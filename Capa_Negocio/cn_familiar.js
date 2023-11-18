import CD_familiar from "../Capa_Datos/cd_familiar.js";

var objCapaDato = new CD_familiar();

class CN_familiar {

    //LISTAR
    async listFamiliar(DNI) {
        return await objCapaDato.listFamiliar(DNI);
    }

    // CREAR CITA
    async createFamiliar( DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono) {
        // Validaciones
        var message = "";

        if (typeof DNI !== "string" || typeof nombres  !== "string" || typeof apellidos !== "string" 
        || typeof DNIF !== "string" || typeof parentezco !== "string" || typeof ocupacion !== "string" 
        || typeof correo !== "string" || typeof telefono !== "string") {
            if (typeof DNI !== "string") {
                message = "Error en el tipo de dato ingresado, el DNI del paciente debe ser un texto";
            } else if (typeof nombres !== "string") {
                message = "Error en el tipo de dato ingresado, el nombres debe ser un número";
            } else if (typeof apellidos !== "string") {
                message = "Error en el tipo de dato ingresado, el apellidos debe ser un número";
            } else if (typeof DNIF !== "string") {
                message = "Error en el tipo de dato ingresado, el DNIF debe ser un número";
            } else if (typeof parentezco !== "string") {
                message = "Error en el tipo de dato ingresado, el parentezco debe ser un texto";
            } else if (typeof ocupacion !== "string") {
                message = "Error en el tipo de dato ingresado, el ocupacion debe ser un texto";
            } else if (typeof correo !== "string") {
                message = "Error en el tipo de dato ingresado, el correo debe ser un texto";
            } else if (typeof telefono !== "string") {
                message = "Error en el tipo de dato ingresado, el telefono debe ser un texto";
            }
        } else {
            DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono
            if (!DNI || DNI.trim().length === 0) {
                Mensaje = "Debe seleccionar algun paciente";
            } else if (!nombres || nombres.trim().length === 0) {
                Mensaje = "El campo nombres no puede quedar vacío";
            } else if (!apellidos || apellidos.trim().length === 0) {
                Mensaje = "El campo apellidos no puede quedar vacío";
            } else if (!DNIF || DNIF.trim().length == 0) {
                Mensaje = "El campo DNIF no puede quedar vacío";
            } else if (!parentezco || parentezco.trim().length == 0) {
                Mensaje = "El campo parentezco no puede quedar vacío";
            } else if (!ocupacion || ocupacion.trim().length == 0) {
                Mensaje = "El campo ocupacion no puede quedar vacío";
            } else if (!correo || correo.trim().length == 0) {
                Mensaje = "El campo correo no puede quedar vacío";
            } else if (!telefono || telefono.trim().length == 0) {
                Mensaje = "El campo telefono no puede quedar vacío";
            }
        }

        if (!message) {
            return await objCapaDato.createFamiliar( DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono);
        }
        return { message: message, id: 0 };
    }

}

export default CN_familiar;