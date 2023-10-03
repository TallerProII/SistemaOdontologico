import { pool } from "./Conexion DB/conection-db.js";

// Sintaxis de una clase en javascript
class CD_Employee {

    //sintaxis de un metodo asincrono
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

    async createEmployee(name,salary) {
        var message = "";
        var id;
        try {
            // codigo asincorno, consulta sql registrar empleados
            [id] = await pool.query(
            "INSERT INTO employee (name, salary) VALUES (?, ?)", [name, salary]);
        } catch (error) {
            message = "Algo salió mal en CD";
            id = 0;
        }
        return { message: message, id: id.insertId};
    }
}
// Exporta la clase CD_Employee para que pueda ser importada en otros archivos.
export default CD_Employee;

// export const getEmployees = async (req, res) => {
//   try {
//     const [rows] = await pool.query("SELECT * FROM employee");
//     res.json(rows);
//   } catch (error) {
//     return res.status(500).json({ message: "Something goes wrong" });
