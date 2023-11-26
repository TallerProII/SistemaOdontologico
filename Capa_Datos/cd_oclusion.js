import { pool } from "./Conexion DB/conection-db.js";
class CD_oclusion {
    //LISTAR
    async listoclusion(DNI) {
        var message = "";
        var rows;
        try {
            [[rows]] = await pool.query("call listar_oclusion (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createoclusion( DNI, MOLARDER, MOLARIZQ, CANINADER, CANINAIZQ, OVERBITE, OVERJET, RELCENTRICA, GCANDER, GCANIZQ, GANT, SAGITAL, VERTICAL, HORIZONTAL, POSTURAL, OCLUSIAL, ESPACLIBRE) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [[[result]]] = await pool.query(
                "CALL crear_oclusion (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
                [DNI, MOLARDER, MOLARIZQ, CANINADER, CANINAIZQ, OVERBITE, OVERJET, RELCENTRICA, GCANDER, GCANIZQ, GANT, SAGITAL, VERTICAL, HORIZONTAL, POSTURAL, OCLUSIAL, ESPACLIBRE]
            );
            result = { affectedRows: 1, row: result }
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: "+ error.message;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows, row: result.row };
    }
    // EDITAR
    async updateoclusion(CODIGO, MOLARDER, MOLARIZQ, CANINADER, CANINAIZQ, OVERBITE, OVERJET, RELCENTRICA, GCANDER, GCANIZQ, GANT, SAGITAL, VERTICAL, HORIZONTAL, POSTURAL, OCLUSIAL, ESPACLIBRE) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [result] = await pool.query(
                "CALL editar_oclusion (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
                [CODIGO, MOLARDER, MOLARIZQ, CANINADER, CANINAIZQ, OVERBITE, OVERJET, RELCENTRICA, GCANDER, GCANIZQ, GANT, SAGITAL, VERTICAL, HORIZONTAL, POSTURAL, OCLUSIAL, ESPACLIBRE]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deleteoclusion(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_oclusion  (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_oclusion;

