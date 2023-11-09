import { pool } from "./Conexion DB/conection-db.js";
class CD_Medico {
    //LISTAR
    async listMedico() {
        var message = "";
        var rows;
        try {
            [rows] = await pool.query("SELECT * FROM tblmedicos");
        } catch (error) {
            message = "Algo salió mal en CD";
            rows = [];
        }
        return { message: message, rows: rows };
    }
}

export default CD_Medico;