import { pool } from "./Conexion DB/conection-db.js";
class CD_dolor {

    //LISTAR
    async listdolor(DNI) {
        var message = "";
        var rows;
        try {
            [[rows]] = await pool.query("call listar_dolor (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createdolor( DNI, MUSCULO, TEMPORAL, MASETERO, PTEINTERNO, PTEEXTERNO, DIGASTRICO, ESTERNOC) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [[[result]]] = await pool.query(
                "CALL crear_dolor (?,?,?,?,?,?,?,?);",
                [DNI, MUSCULO, TEMPORAL, MASETERO, PTEINTERNO, PTEEXTERNO, DIGASTRICO, ESTERNOC]
            );
            result = { affectedRows: 1, row: result }
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: "+ error.message;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows, row: result.row };
    }
    // EDITAR
    async updatedolor(CODIGO, MUSCULO, TEMPORAL, MASETERO, PTEINTERNO, PTEEXTERNO, DIGASTRICO, ESTERNOC) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [result] = await pool.query(
                "CALL editar_dolor (?,?,?,?,?,?,?,?);",
                [CODIGO, MUSCULO, TEMPORAL, MASETERO, PTEINTERNO, PTEEXTERNO, DIGASTRICO, ESTERNOC]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deletedolor(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_dolor  (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_dolor;

