import { pool } from "./Conexion DB/conection-db.js";

// Sintaxis de una clase en javascript
class CD_Employee {
    //LISTAR
    async getEmployees() {
        var message = "";
        var rows;
        try {
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
            [[[result]]] = await pool.query(
            "INSERT INTO employee (name, salary) VALUES (?, ?)", [name, salary]);        
            result = { affectedRows: 1, row: result }
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: "+ error.message;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows, row: result.row };
    } 
    //ELIMINAR
    async deleteEmployee(id) {
        var message = "";
        var result;
        try {
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
export default CD_Employee;

