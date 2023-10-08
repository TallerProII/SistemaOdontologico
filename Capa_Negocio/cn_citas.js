import CD_Cita from "../Capa_Datos/cd_citas.js";

var objCapaDato = new CD_Cita();

class CN_Cita {

    // CREAR
    async createCita(pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora) {
        // Validaciones
        var message = "";

        if (typeof pacienteId !== "number" || typeof medicoId !== "number" || typeof estado !== "string" ||
            typeof tratamiento !== "string" || typeof observaciones !== "string" || typeof fecha !== "string" ||
            typeof hora !== "string") {
            message = "Error en el tipo de dato ingresado";
        } else {
            if (!pacienteId || !medicoId || !estado || !tratamiento || !observaciones || !fecha || !hora) {
                message = "Todos los campos son obligatorios";
            }
        }

        if (!message) {
            return await objCapaDato.createCita(pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora);
        }
        return { message: message, id: 0 };
    }

    //ACTUALIZAR CITA
    async updateCita(id, pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora) {
        //filtos - reglas de negocio
        var message = "";

        if(typeof pacienteId !== "number" || typeof medicoId !== "number" || typeof estado !== "string" ||
            typeof tratamiento !== "string" || typeof observaciones !== "string" || typeof fecha !== "string" ||
            typeof hora !== "string"){
            message = "Error en el tipo de dato ingresado"
        }
        else{
            if (!pacienteId || !medicoId || !estado || !tratamiento || !observaciones || !fecha || !hora) {
                message = "Todos los campos son obligatorios";
            }
        }        
        
        if(!message){
            return await objCapaDato.updateCita(id,pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora);
        }
        return { message: message, id: 0};
    }
    //LISTAR CITA
    async listCita() {
        return await objCapaDato.listCita();
    }

}

export default CN_Cita;