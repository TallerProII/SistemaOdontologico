import CD_Cita from "../Capa_Datos/cd_citas.js";
import CD_Utilidades from "../Capa_Negocio/cn_utilidades.js";

var objCapaDato = new CD_Cita();
var objUtilidades = new CD_Utilidades();

class CN_Cita {

    // CREAR CITA
    async createCita(IDHistoria, IDMedico, citMotivo, citFecha, citHora, citEstado) {
        var message = "";
        var result = { affectedRows: 0 };

        if (typeof IDHistoria !== "number" || typeof IDMedico !== "number" || typeof citMotivo !== "string"
            || typeof citEstado !== "number") {
            if (typeof IDHistoria !== "number") {
                message = "Error en el tipo de dato ingresado, el ID del paciente debe ser un número";
            } else if (typeof IDMedico !== "number") {
                message = "Error en el tipo de dato ingresado, el ID del médico debe ser un número";
            } else if (typeof citMotivo !== "string") {
                message = "Error en el tipo de dato ingresado, el tratamiento debe ser un texto";
            } else if (typeof citFecha !== "string") {
                message = "Error en el tipo de dato ingresado, la fecha debe ser un texto";
            } else if (typeof citHora !== "string") {
                message = "Error en el tipo de dato ingresado, la hora debe ser un texto";
            } else if (typeof citEstado !== "string") {
                message = "Error en el tipo de dato ingresado, el estado debe ser un numero";
            }
        } else {
            if (!IDHistoria || IDHistoria == 0) {
                Mensaje = "Debe seleccionar algun paciente";
            } else if (!IDMedico || IDMedico == 0) {
                Mensaje = "Debe seleccionar algun medico";
            } else if (!citMotivo || citMotivo.trim().length === 0) {
                Mensaje = "El campo motivo no puede quedar vacío";
            } else if (!citFecha || citFecha.trim().length === 0) {
                Mensaje = "El campo motivo no puede quedar vacío";
            } else if (!citHora || citHora.trim().length === 0) {
                Mensaje = "El campo motivo no puede quedar vacío";
            }
            else if (!citEstado || citEstado == 0) {
                Mensaje = "El campo estado no puede quedar vacío";
            }
        }

        if (!message) {
            return await objCapaDato.createCita(IDHistoria, IDMedico, citMotivo, citFecha, citHora, citEstado);
        }
        return { message: message, affectedRows: result.affectedRows = 0 };
    }

    // ACTUALIZAR CITA
    async updateCita(IDCita, IDMedico, citMotivo, citFecha, citHora, citEstado) {
        var message = "";
        var result = { affectedRows: 0 };
        
        if (typeof IDMedico !== "number" || typeof citMotivo !== "string" ||
            typeof citFecha !== "string" || typeof citHora !== "string" || typeof citEstado !== "string") {

            if (typeof IDMedico !== "number") {
                message = "Error en el tipo de dato ingresado, el ID del médico debe ser un número";
            } else if (typeof citMotivo !== "string") {
                message = "Error en el tipo de dato ingresado, el tratamiento debe ser un texto";
            } else if (typeof citFecha !== "string") {
                message = "Error en el tipo de dato ingresado, la fecha debe ser un texto";
            } else if (typeof citHora !== "string") {
                message = "Error en el tipo de dato ingresado, la hora debe ser un texto";
            } else if (typeof citEstado !== "string") {
                message = "Error en el tipo de dato ingresado, el estado debe ser un texto";
            } else {
                if (!medicoId || !estado || !tratamiento || !fecha || !hora) {
                    message = "Todos los campos son obligatorios";
                }
            }
        }
        if (!message) {
            return await objCapaDato.updateCita(IDCita, IDMedico, citMotivo, citFecha, citHora, citEstado);
        }
        return { message: message, affectedRows: result.affectedRows = 0 };
    }
    //ELIMINAR
    async deleteCita(idCita) {
        return await objCapaDato.deleteCita(idCita);
    }
    //LISTAR CITA
    async listCita() {
        var resultado = await objCapaDato.listCita();

        // citEstado Activo Finalizado cancelado
        for (var i = 0; i < resultado["rows"].length; i++) {
            // Verificar si la fecha es una cadena
            var fechaOriginal = resultado["rows"][i]["citFecha"];
            var fechaSinTiempo;

            if (typeof fechaOriginal === "string") {
                fechaSinTiempo = fechaOriginal.split("T")[0];
            } else if (fechaOriginal instanceof Date) {
                // Si ya es un objeto Date, formatear la fecha
                var dia = ("0" + fechaOriginal.getDate()).slice(-2);
                var mes = ("0" + (fechaOriginal.getMonth() + 1)).slice(-2);
                var anio = fechaOriginal.getFullYear();
                fechaSinTiempo = dia + "-" + mes + "-" + anio;
            }

            resultado["rows"][i]["citFecha"] = fechaSinTiempo;
            // resultado["rows"][i]["citEstado"] = objUtilidades.citEstado(resultado["rows"][i]["citEstado"]);
        }
        return resultado;
    }
}

export default CN_Cita;