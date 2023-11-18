import { pool } from "./Conexion DB/conection-db.js";
class CD_familiar {

    //LISTAR
    async listFamiliar (DNI) {
        var message = "";
        var rows;
        try {
            // codigo asincorno, consulta sql listar empleados
            [[rows]] = await pool.query("call listar_familiar (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD\n"+error;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createFamiliar ( DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono) {
        var message = "";
        var result;
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "CALL crear_familiar (?, ?, ?, ?, ?, ?,?,?)",
                [DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono]
            );
        } catch (error) {
            message = "Algo salió mal en CD\n"+error;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }

}

export default CD_familiar;

