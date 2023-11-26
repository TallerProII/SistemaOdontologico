import { pool } from "./Conexion DB/conection-db.js";
class CD_detenfermedad {
    //LISTAR
    async listdetenfermedad(DNI) {
        var message = "";
        var rows;
        try {
            [[rows]] = await pool.query("call listar_detenfermedad (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createdetenfermedad( DNI, ENFERMEDAD, DESC) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [[[result]]] = await pool.query(
                "CALL crear_detenfermedad (?,?,?);",
                [DNI, ENFERMEDAD, DESC]
            );
            result = { affectedRows: 1, row: result }
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: "+ error.message;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows, row: result.row };
    }
    // EDITAR
    async updatedetenfermedad(CODIGO, ENFERMEDAD, DESC) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [result] = await pool.query(
                "CALL editar_detenfermedad (?,?,?);",
                [CODIGO, ENFERMEDAD, DESC]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deletedetenfermedad(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_detenfermedad  (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_detenfermedad;

