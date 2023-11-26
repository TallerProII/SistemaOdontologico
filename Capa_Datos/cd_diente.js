import { pool } from "./Conexion DB/conection-db.js";
class CD_diente {

    //LISTAR
    async listdiente(DNI) {
        var message = "";
        var rows;
        try {
            [[rows]] = await pool.query("call listar_diente (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async creatediente( DNI, NUMERO, COLOR, FORMA, TAMANO, DIASTEMA, EDENTULA, POSANORMAL, FACDESGASTE, LINMEDIA, OTROS) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [[[result]]] = await pool.query(
                "CALL crear_diente (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [DNI, NUMERO, COLOR, FORMA, TAMANO, DIASTEMA, EDENTULA, POSANORMAL, FACDESGASTE, LINMEDIA, OTROS]
            );
            result = { affectedRows: 1, row: result }
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: "+ error.message;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows, row: result.row };
    }
    // EDITAR
    async updatediente(CODIGO, NUMERO, COLOR, FORMA, TAMANO, DIASTEMA, EDENTULA, POSANORMAL, FACDESGASTE, LINMEDIA, OTROS) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [result] = await pool.query(
                "CALL editar_diente (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [CODIGO, NUMERO, COLOR, FORMA, TAMANO, DIASTEMA, EDENTULA, POSANORMAL, FACDESGASTE, LINMEDIA, OTROS]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deletediente(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_diente  (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_diente;

