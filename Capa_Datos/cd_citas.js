import { pool } from "./Conexion DB/conection-db.js";
class CD_Cita {
    //ACTUALIZAR
    async updateCita(id, name, salary) {
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