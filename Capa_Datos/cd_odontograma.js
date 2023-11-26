import { pool } from "./Conexion DB/conection-db.js";
class CD_odontograma {
    //LISTAR
    async listodontograma(DNI) {
        var message = "";
        var rows;
        try {
            [[rows]] = await pool.query("call listar_odontograma (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createodontograma( DNI, FASE, ESPECIF, OBSERV) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [[[result]]] = await pool.query(
                "CALL crear_odontograma (?,?,?,?)",
                [DNI, FASE, ESPECIF, OBSERV]
            );
            result = { affectedRows: 1, row: result }
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: "+ error.message;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows, row: result.row };
    }
    // EDITAR
    async updateodontograma(CODIGO, FASE, ESPECIF, OBSERV) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [result] = await pool.query(
                "CALL editar_odontograma (?,?,?,?)",
                [CODIGO, FASE, ESPECIF, OBSERV]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deleteodontograma(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_odontograma  (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_odontograma;

