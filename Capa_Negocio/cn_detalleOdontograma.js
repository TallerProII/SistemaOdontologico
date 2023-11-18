import CD_detalleOdontograma from "../Capa_Datos/cd_detalleOdontograma.js";

var objCapaDato = new CD_detalleOdontograma();

class CN_detalleOdontograma {

    //LISTAR
    async listDetodont(DNI) {
        return await objCapaDato.listDetodont(DNI);
    }

    // CREAR CITA
    async createDetodont( DNI, tratamiento, cuadrante, diente, sector, estado, notas) {
        // Validaciones
        var message = "";

        if (typeof DNI !== "string" || typeof tratamiento  !== "number" || typeof cuadrante !== "number" 
        || typeof diente !== "number" || typeof sector !== "string" || typeof estado !== "string" || typeof notas !== "string") {
            if (typeof DNI !== "string") {
                message = "Error en el tipo de dato ingresado, el DNI del paciente debe ser un texto";
            } else if (typeof tratamiento !== "number") {
                message = "Error en el tipo de dato ingresado, el tratamiento debe ser un número";
            } else if (typeof cuadrante !== "number") {
                message = "Error en el tipo de dato ingresado, el cuadrante debe ser un número";
            } else if (typeof diente !== "number") {
                message = "Error en el tipo de dato ingresado, el diente debe ser un número";
            } else if (typeof sector !== "string") {
                message = "Error en el tipo de dato ingresado, el sector debe ser un texto";
            } else if (typeof estado !== "string") {
                message = "Error en el tipo de dato ingresado, el estado debe ser un texto";
            } else if (typeof notas !== "string") {
                message = "Error en el tipo de dato ingresado, el notas debe ser un texto";
            }
        } else {
            DNI, tratamiento, cuadrante, diente, sector, estado, notas
            if (!DNI || DNI.trim().length === 0) {
                Mensaje = "Debe seleccionar algun paciente";
            } else if (!tratamiento || tratamiento === 0) {
                Mensaje = "El campo tratamiento no puede quedar vacío";
            } else if (!cuadrante || cuadrante === 0) {
                Mensaje = "El campo cuadrante no puede quedar vacío";
            } else if (!diente || diente == 0) {
                Mensaje = "El campo diente no puede quedar vacío";
            } else if (!sector || sector.trim().length == 0) {
                Mensaje = "El campo sector no puede quedar vacío";
            } else if (!estado || estado.trim().length == 0) {
                Mensaje = "El campo estado no puede quedar vacío";
            } else if (!notas || notas.trim().length == 0) {
                Mensaje = "El campo notas no puede quedar vacío";
            }
        }

        if (!message) {
            return await objCapaDato.createDetodont( DNI, tratamiento, cuadrante, diente, sector, estado, notas);
        }
        return { message: message, id: 0 };
    }

}

export default CN_detalleOdontograma;