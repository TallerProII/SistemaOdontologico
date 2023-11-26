import { pool } from "./Conexion DB/conection-db.js";
class CD_general {
    //LISTAR
    async listgeneral(DNI) {
        var message = "";
        var rows;
        try {
            [[rows]] = await pool.query("call listar_general (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async creategeneral( DNI, TIPO, ESTADO, PIEZAS, DESC) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [[[result]]] = await pool.query(
                "CALL crear_general (?,?,?,?,?);",
                [DNI, TIPO, ESTADO, PIEZAS, DESC]
            );
            result = { affectedRows: 1, row: result }
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: "+ error.message;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows, row: result.row };
    }
    // EDITAR
    async updategeneral(CODIGO, TIPO, ESTADO, PIEZAS, DESC) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [result] = await pool.query(
                "CALL editar_general (?,?,?,?,?);",
                [CODIGO, TIPO, ESTADO, PIEZAS, DESC]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deletegeneral(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_general  (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_general;

