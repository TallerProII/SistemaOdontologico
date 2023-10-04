import CD_Employee from "../Capa_Datos/cd_employee.js";

var objCapaDato = new CD_Employee();

class CN_Employee {

    //sintaxis de un metodo asincrono
    async getEmployees() {
        return await objCapaDato.getEmployees();
    }

    async createEmployee(name,salary) {
        //filtos - reglas de negocio

        return await objCapaDato.createEmployee(name,salary);
    }
    
    async deleteEmployee(id) {
        //filtos - reglas de negocio

        return await objCapaDato.deleteEmployee(id);
    }

}

export default CN_Employee;