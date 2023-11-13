import { pool } from "./Conexion DB/conection-db.js";
class CD_Cita {

    //LISTAR
    async listCita() {
        var message = "";
        var rows;
        try {
            // codigo asincorno, consulta sql listar empleados
            [[rows]] = await pool.query("call listar_cita();");
        } catch (error) {
            message = "Algo salió mal en CD";
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createCita( IDHistoria, IDMedico, citMotivo, citFecha, citHora, citEstado) {
        var message = "";
        var result;
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "CALL crear_cita(?, ?, ?, ?, ?, ?)",
                [IDHistoria, IDMedico, citMotivo, citFecha, citHora, citEstado]
            );
        } catch (error) {
            message = "Algo salió mal en CD";
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }


    //ACTUALIZAR
    async updateCita(idCita, medicoId, estado, tratamiento, fecha, hora) {
        var message = "";
        var result;

        try {
            [result] = await pool.query(
            "call editar_cita(?,?,?,?,?,?);",
            [ idCita,medicoId, estado, tratamiento, fecha, hora]);

        } catch (error) {
            message = "Algo salió mal en CD";
            result.affectedRows = 0;
        }

        return { message: message, affectedRows: result.affectedRows};
    }

    //ELIMINAR
    async deleteCita(idCita) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_cita (?);", [idCita]);
        } catch (error) {
            message = "Algo salió mal en CD";
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_Cita;

