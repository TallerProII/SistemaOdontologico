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
            
            return await objCapaDato.createCita(idPaciente,idMedico,estado,tratamiento,observaciones,fecha,hora);
        }
        
        return { message: message, id: 0 };
    }

    //ACTUALIZAR CITA
    async updateCita(id, name, salary) {
        //filtos - reglas de negocio
        var message = "";

        if(typeof name !== "string" || typeof salary !== "number"){
            message = "Error en el tipo de dato ingresado"
        }
        else{
            if (!name || name.trim().length === 0) {
                Mensaje = "El nombre del cliente no puede ser vacío";
            } else if (!salary || salary == 0) {
                Mensaje = "El salario del cliente no puede ser vacío o cero";
            } //else if (!Correo || Correo.trim().length === 0) {
            //     Mensaje = "El correo del cliente no puede ser vacío";
            // }
        }        
        
        if(!message){
            return await objCapaDato.updateCita(id,name,salary);
        }
        return { message: message, id: 0};
    }
}

export default CN_Cita;