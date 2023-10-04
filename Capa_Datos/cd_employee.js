import { pool } from "./Conexion DB/conection-db.js";

// Sintaxis de una clase en javascript
class CD_Employee {

    //LISTAR
    async getEmployees() {
        var message = "";
        var rows;
        try {
            // codigo asincorno, consulta sql listar empleados
            [rows] = await pool.query("SELECT * FROM employee");
        } catch (error) {
            message = "Algo salió mal en CD";
            rows = [];
        }
        return { message: message, rows: rows };
    }

    //CREAR
    async createEmployee(name,salary) {
        var message = "";
        var result;
        try {
            // codigo asincorno, consulta sql registrar empleados
            [result] = await pool.query(
            "INSERT INTO employee (name, salary) VALUES (?, ?)", [name, salary]);
        } catch (error) {
            message = "Algo salió mal en CD";
            result.insertId = 0;
        }
        return { message: message, id: result.insertId};
    }    

    //ELIMINAR
    async deleteEmployee(id) {
        var message = "";
        var result;
        try {
            // codigo asincorno, consulta sql registrar empleados
            [result] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);
        } catch (error) {
            message = "Algo salió mal en CD";
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

    //ACTUALIZAR
    async updateEmployee(id, name, salary) {
        var message = "";
        var result;

        try {
            [result] = await pool.query(
            "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
            [name, salary, id]);

        } catch (error) {
            message = "Algo salió mal en CD";
            result.affectedRows = 0;
        }

        return { message: message, affectedRows: result.affectedRows};
    }
}
// Exporta la clase CD_Employee para que pueda ser importada en otros archivos.
export default CD_Employee;

