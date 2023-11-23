import { pool } from "./Conexion DB/conection-db.js";
class CD_detalleOdontograma {

    //LISTAR
    async listDetodont(DNI) {
        var message = "";
        var rows;
        try {
            // codigo asincorno, consulta sql listar empleados
            [[rows]] = await pool.query("call listar_detalle_odontograma (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createDetodont( DNI, tratamiento, cuadrante, diente, sector, estado, notas) {
        var message = "";
        var result;
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "CALL crear_detalle_odontograma(?, ?, ?, ?, ?, ?,?)",
                [DNI, tratamiento, cuadrante, diente, sector, estado, notas]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    // EDITAR
    async updateDetodont( id, tratamiento, cuadrante, diente, sector, estado, notas) {
        var message = "";
        var result;
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "CALL editar_detalle_odontograma(?, ?, ?, ?, ?, ?,?)",
                [id, tratamiento, cuadrante, diente, sector, estado, notas]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deleteDetodont(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_detalle_odontograma (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_detalleOdontograma;

