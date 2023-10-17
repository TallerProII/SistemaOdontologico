import CD_Cita from "../Capa_Datos/cd_citas.js";

var objCapaDato = new CD_Cita();

class CN_Cita {

    // CREAR
    async createCita(pacienteId, medicoId, tratamiento, fecha, hora) {
        // Validaciones
        var message = "";

        if (typeof pacienteId !== "number" || typeof medicoId !== "number" || typeof tratamiento !== "string" 
            || typeof fecha !== "string" || typeof hora !== "string") {
            message = "Error en el tipo de dato ingresado";
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

    //ACTUALIZAR CITA
    async updateCita(idCita, medicoId, estado, tratamiento, fecha, hora) {
        //filtos - reglas de negocio
        var message = "";

        if(typeof medicoId !== "number" || typeof estado !== "number" ||
            typeof tratamiento !== "string" || typeof fecha !== "string" ||
            typeof hora !== "string"){
            message = "Error en el tipo de dato ingresado"
        }
        else{
            if (!medicoId || !estado || !tratamiento || !fecha || !hora) {
                message = "Todos los campos son obligatorios";
            }
        }        
        
        if(!message){
            return await objCapaDato.updateCita(idCita, medicoId, estado, tratamiento, fecha, hora);
        }
        return { message: message, id: 0};
    }
    //ELIMINAR
    async deleteCita(idCita) {
        return await objCapaDato.deleteCita(idCita);
    }
    //LISTAR CITA
    async listCita() {
        return await objCapaDato.listCita();
    }

}

export default CN_Cita;