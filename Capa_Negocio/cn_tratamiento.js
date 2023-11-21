import CD_Tratamiento from "../Capa_Datos/cd_tratamiento.js";

var objCapaDato = new CD_Tratamiento();

class CN_Tratamiento {

    //LISTAR
    async listTratamiento() {
        return await objCapaDato.listTratamiento();
    }

    //CREAR
    async createTratamiento(Tratamiento, tartDesc) {
        var message = "";

        if (typeof Tratamiento !== "string" || typeof tartDesc !== "string") {
            if (typeof Tratamiento !== "string") {
                message = "Error en el tipo de dato ingresado, el nombre del tratamiento debe ser un texto"
            } else if (typeof tartDesc !== "string") {
                message = "Error en el tipo de dato ingresado, La descripcion debe ser un texto"
            }
        }
        else {
            if (!Tratamiento || Tratamiento.trim().length === 0) {
                Mensaje = "El nombre del tratamiento no puede ser vacío";
            } else if (!tartDesc || tartDesc == 0) {
                Mensaje = "La descripcion del tratamiento no puede quedar vacío";
            }
        }

        if (!message) {
            return await objCapaDato.createTratamiento(Tratamiento, tartDesc);
        }
        return { message: message, affectedRows: result.affectedRows = 0 };
    }

    //ACTUALIZAR
    async updateTratamiento(IDTratamiento, Tratamiento, tartDesc) {
        var message = "";

        if (typeof Tratamiento !== "string" || typeof tartDesc !== "string") {
            message = "Error en el tipo de dato ingresado"
        }
        else {
            if (!Tratamiento || Tratamiento.trim().length === 0) {
                Mensaje = "El tratamiento no puede ser vacío";
            } else if (!tartDesc || tartDesc == 0) {
                Mensaje = "La descripcion del tratamiento no puede quedar vacío";
            }
        }

        if (!message) {
            return await objCapaDato.updateTratamiento(IDTratamiento, Tratamiento, tartDesc);
        }
        return { message: message, affectedRows: result.affectedRows = 0 };
    }

    //ELIMINAR
    async deleteTratamiento(IDTratamiento) {
        //filtos - reglas de negocio

        return await objCapaDato.deleteTratamiento(IDTratamiento);
    }

}

export default CN_Tratamiento;