import { pool } from "./Conexion DB/conection-db.js";
class CD_exauxiliares {

    //LISTAR
    async listexauxiliares(DNI) {
        var message = "";
        var rows;
        try {
            // codigo asincorno, consulta sql listar empleados
            [[rows]] = await pool.query("call listar_exauxiliares (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createexauxiliares( DNI, TIPO, DESC) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "CALL crear_exauxiliares (?,?,?)",
                [DNI, TIPO, DESC]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    // EDITAR
    async updateexauxiliares(CODIGO, TIPO, DESC) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "CALL editar_exauxiliares (?,?,?)",
                [CODIGO, TIPO, DESC]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deleteexauxiliares(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_exauxiliares  (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_exauxiliares;

