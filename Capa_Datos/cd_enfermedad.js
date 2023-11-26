import { pool } from "./Conexion DB/conection-db.js";
class CD_enfermedad {
    //LISTAR
    async listenfermedad() {
        var message = "";
        var rows;
        try {
            [[rows]] = await pool.query("call listar_enfermedad ();");
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createenfermedad( CIE, CODIGO, DESC) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [[[result]]] = await pool.query(
                "CALL crear_enfermedad (?,?,?)",
                [CIE, CODIGO, DESC]
            );
            result = { affectedRows: 1, row: result }
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: "+ error.message;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows, row: result.row };
    }
    // EDITAR
    async updateenfermedad(CODIGO, CIE, ECODIGO, DESC) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [result] = await pool.query(
                "CALL editar_enfermedad (?,?,?,?)",
                [CODIGO, CIE, ECODIGO, DESC]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deleteenfermedad(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_enfermedad  (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_enfermedad;

