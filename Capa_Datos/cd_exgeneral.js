import { pool } from "./Conexion DB/conection-db.js";
class CD_exgeneral {

    //LISTAR
    async listexgeneral(DNI) {
        var message = "";
        var rows;
        try {
            // codigo asincorno, consulta sql listar empleados
            [[rows]] = await pool.query("call listar_exgeneral (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createexgeneral( DNI, PESO, TALLA, BIOTIPO, PIEL, CABELLO, UNAS, PRESION, PULSO, FRECUENCIA, TEMPERATURA) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "CALL crear_exgeneral (?,?,?,?,?,?,?,?,?,?,?)",
                [DNI, PESO, TALLA, BIOTIPO, PIEL, CABELLO, UNAS, PRESION, PULSO, FRECUENCIA, TEMPERATURA]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    // EDITAR
    async updateexgeneral(CODIGO, PESO, TALLA, BIOTIPO, PIEL, CABELLO, UNAS, PRESION, PULSO, FRECUENCIA, TEMPERATURA) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "CALL editar_exgeneral (?,?,?,?,?,?,?,?,?,?,?)",
                [CODIGO, PESO, TALLA, BIOTIPO, PIEL, CABELLO, UNAS, PRESION, PULSO, FRECUENCIA, TEMPERATURA]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deleteexgeneral(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_exgeneral  (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_exgeneral;

