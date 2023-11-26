import { pool } from "./Conexion DB/conection-db.js";
class CD_antecedente {

    //LISTAR
    async listantecedente(DNI) {
        var message = "";
        var rows;
        try {
            [[rows]] = await pool.query("call listar_antecedente (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createantecedente( DNI, personal, patologico, alergia, familiar) {
        var message = "";
        var result = { affectedRows: 0 , row: 0 };
        try {
            [[[result]]] = await pool.query(
                "CALL crear_antecedente (?, ?, ?, ?, ?)",
                [DNI, personal, patologico, alergia, familiar]
            );
            result = { affectedRows: 1, row: result }
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows, row: result.row };
    }
    // EDITAR
    async updateantecedente(CODIGO, personal, patologico, alergia, familiar) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [result] = await pool.query(
                "CALL editar_antecedente (?, ?, ?, ?, ?)",
                [CODIGO, personal, patologico, alergia, familiar]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deleteantecedente(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_antecedente  (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_antecedente;

