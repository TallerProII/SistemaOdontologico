import { pool } from "./Conexion DB/conection-db.js";
class CD_Paciente {
    //LISTAR
    async listPaciente() {
        var message = "";
        var rows;
        try {
            [rows] = await pool.query("SELECT * FROM tblpacientes");
        } catch (error) {
            message = "Algo salió mal en CD";
            rows = [];
        }
        return { message: message, rows: rows };
    }
}

export default CD_Paciente;