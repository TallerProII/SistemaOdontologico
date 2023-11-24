import { pool } from "./Conexion DB/conection-db.js";
class CD_biologica {

    //LISTAR
    async listbiologica(DNI) {
        var message = "";
        var rows;
        try {
            // codigo asincorno, consulta sql listar empleados
            [[rows]] = await pool.query("call listar_biologica (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createbiologica( DNI, APETITO, DEPOSICION, SED, ORINA, SUENO) {
        var message = "";
        var result;
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "CALL crear_biologica (?, ?, ?, ?, ?, ?)",
                [DNI, APETITO, DEPOSICION, SED, ORINA, SUENO]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    // EDITAR
    async updatebiologica(CODIGO, APETITO, DEPOSICION, SED, ORINA, SUENO) {
        var message = "";
        var result;
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "CALL editar_biologica (?, ?, ?, ?, ?, ?)",
                [CODIGO, APETITO, DEPOSICION, SED, ORINA, SUENO]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deletebiologica(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_biologica  (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_biologica;

