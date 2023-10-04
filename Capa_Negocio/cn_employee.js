import CD_Employee from "../Capa_Datos/cd_employee.js";

var objCapaDato = new CD_Employee();

class CN_Employee {

    //LISTAR
    async getEmployees() {
        return await objCapaDato.getEmployees();
    }

    //CREAR
    async createEmployee(name,salary) {
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
            return await objCapaDato.createEmployee(name,salary);
        }
        return { message: message, id: 0};
    }
    
    //ELIMINAR
    async deleteEmployee(id) {
        //filtos - reglas de negocio

        return await objCapaDato.deleteEmployee(id);
    }

    //ACTUALIZAR
    async updateEmployee(id, name, salary) {
        //filtos - reglas de negocio

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
            return await objCapaDato.createEmployee(id,name,salary);
        }
        return { message: message, id: 0};
    }

}

export default CN_Employee;