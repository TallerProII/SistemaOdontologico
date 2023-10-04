import CD_Employee from "../Capa_Datos/cd_employee.js";

var objCapaDato = new CD_Employee();

class CN_Employee {

    //sintaxis de un metodo asincrono
    async getEmployees() {
        return await objCapaDato.getEmployees();
    }

    async createEmployee(name,salary) {
        //filtos - reglas de negocio
        var message = "";

        if (!name || name.trim().length === 0) {
            Mensaje = "El nombre del cliente no puede ser vacío";
        } else if (!salary || salary.trim().length === 0) {
            Mensaje = "El apellido del cliente no puede ser vacío";
        } //else if (!Correo || Correo.trim().length === 0) {
        //     Mensaje = "El correo del cliente no puede ser vacío";
        // }

        if(!message){
            return await objCapaDato.createEmployee(name,salary);
        }
        return 0;
    }
    
    async deleteEmployee(id) {
        //filtos - reglas de negocio

        return await objCapaDato.deleteEmployee(id);
    }

    async updateEmployee(id, name, salary) {
        //filtos - reglas de negocio

        if (!name || name.trim().length === 0) {
            Mensaje = "El nombre del cliente no puede ser vacío";
        } else if (!salary || salary.trim().length === 0) {
            Mensaje = "El apellido del cliente no puede ser vacío";
        } //else if (!Correo || Correo.trim().length === 0) {
        //     Mensaje = "El correo del cliente no puede ser vacío";
        // }        
        
        if(!message){
            return await objCapaDato.createEmployee(name,salary);
        }
        return 0;
    }

}

export default CN_Employee;