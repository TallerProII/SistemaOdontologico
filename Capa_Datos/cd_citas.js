import { pool } from "./Conexion DB/conection-db.js";
class CD_Cita {

    // CREAR
    async createCita(pacienteId, medicoId, tratamiento, fecha, hora) {
        var message = "";
        var result;
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "CALL crear_cita(?, ?, ?, ?, ?)",
                [pacienteId, medicoId, tratamiento, fecha, hora]
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
            "UPDATE tblCitas  SET idMedico = ?, citEstad = ?, citDesc = ?, citFech = ?, citHora = ? WHERE idCita = ?",
            [ medicoId, estado, tratamiento, fecha, hora, idCita]);

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
            [result] = await pool.query("DELETE FROM tblCitas WHERE idCita = ?", [idCita]);
        } catch (error) {
            message = "Algo salió mal en CD";
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

    //LISTAR
    async listCita() {
        var message = "";
        var rows;
        try {
            // codigo asincorno, consulta sql listar empleados
            [rows] = await pool.query("SELECT * FROM tblCitas");
        } catch (error) {
            message = "Algo salió mal en CD";
            rows = [];
        }
        return { message: message, rows: rows };
    }

}

export default CD_Cita;

