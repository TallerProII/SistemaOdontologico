import CD_Cita from "../Capa_Datos/cd_citas.js";

var objCapaDato = new CD_Cita();

class CN_Cita {

     // CREAR CITA
     async createCita(pacienteId, medicoId, tratamiento, fecha, hora) {
        // Validaciones
        var message = "";

        if (typeof pacienteId !== "number" || typeof medicoId !== "number" || typeof tratamiento !== "string" 
            || typeof fecha !== "string" || typeof hora !== "string") {
            if (typeof pacienteId !== "number") {
                message = "Error en el tipo de dato ingresado, el ID del paciente debe ser un número";
            } else if (typeof medicoId !== "number") {
                message = "Error en el tipo de dato ingresado, el ID del médico debe ser un número";
            } else if (typeof tratamiento !== "string") {
                message = "Error en el tipo de dato ingresado, el tratamiento debe ser un texto";
            } else if (typeof fecha !== "string") {
                message = "Error en el tipo de dato ingresado, la fecha debe ser un texto";
            } else if (typeof hora !== "string") {
                message = "Error en el tipo de dato ingresado, la hora debe ser un texto";
            }
        } else {
            if (!pacienteId || !medicoId || !tratamiento || !fecha || !hora) {
                message = "Todos los campos son obligatorios";
            }
        }

        if (!message) {
            return await objCapaDato.createCita(pacienteId, medicoId, tratamiento, fecha, hora);
        }
        return { message: message, id: 0 };
    }

    // ACTUALIZAR CITA
    async updateCita(idCita, medicoId, estado, tratamiento, fecha, hora) {
        // Validaciones
        var message = "";

        if (typeof medicoId !== "number" || typeof estado !== "number" ||
            typeof tratamiento !== "string" || typeof fecha !== "string" ||
            typeof hora !== "string") {
            if (typeof medicoId !== "number") {
                message = "Error en el tipo de dato ingresado, el ID del médico debe ser un número";
            } else if (typeof estado !== "number") {
                message = "Error en el tipo de dato ingresado, el estado debe ser un número";
            } else if (typeof tratamiento !== "string") {
                message = "Error en el tipo de dato ingresado, el tratamiento debe ser un texto";
            } else if (typeof fecha !== "string") {
                message = "Error en el tipo de dato ingresado, la fecha debe ser un texto";
            } else if (typeof hora !== "string") {
                message = "Error en el tipo de dato ingresado, la hora debe ser un texto";
            }
        } else {
            if (!medicoId || !estado || !tratamiento || !fecha || !hora) {
                message = "Todos los campos son obligatorios";
            }
        }

        if (!message) {
            return await objCapaDato.updateCita(idCita, medicoId, estado, tratamiento, fecha, hora);
        }
        return { message: message, id: 0 };
    }

}

export default CN_Cita;