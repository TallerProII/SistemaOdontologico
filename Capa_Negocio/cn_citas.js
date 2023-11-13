import CD_Cita from "../Capa_Datos/cd_citas.js";

var objCapaDato = new CD_Cita();

class CN_Cita {

    //LISTAR
    async listCita() {
        return await objCapaDato.listCita();
    }

    // CREAR CITA
    async createCita( IDHistoria, IDMedico, citMotivo, citEstado) {
        // Validaciones
        var message = "";

        if (typeof IDHistoria !== "number" || typeof IDMedico !== "number" || typeof citMotivo !== "string" 
            || typeof citEstado !== "number") {
            if (typeof IDHistoria !== "number") {
                message = "Error en el tipo de dato ingresado, el ID del paciente debe ser un número";
            } else if (typeof IDMedico !== "number") {
                message = "Error en el tipo de dato ingresado, el ID del médico debe ser un número";
            } else if (typeof citMotivo !== "string") {
                message = "Error en el tipo de dato ingresado, el tratamiento debe ser un texto";
            } else if (typeof citEstado !== "number") {
                message = "Error en el tipo de dato ingresado, el estado debe ser un numero";
            }
        } else {
            IDHistoria, IDMedico, citMotivo, citEstado
            if (!IDHistoria || IDHistoria.trim().length === 0) {
                Mensaje = "Debe seleccionar algun paciente";
            } else if (!IDMedico || IDMedico.trim().length === 0) {
                Mensaje = "Debe seleccionar algun medico";
            } else if (!citMotivo || citMotivo.trim().length === 0) {
                Mensaje = "El campo motivo no puede quedar vacío";
            } else if (!citEstado || citEstado == 0) {
                Mensaje = "El campo estado no puede quedar vacío";
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
    //ELIMINAR
    async deleteCita(id) {
        //filtos - reglas de negocio

        return await objCapaDato.deleteCita(id);
    }

}

export default CN_Cita;