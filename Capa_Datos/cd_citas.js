import { pool } from "./Conexion DB/conection-db.js";
class CD_Cita {

    // CREAR
    async createCita(pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora) {
        var message = "";
        var result;
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "CALL crear_cita(?, ?, ?, ?, ?, ?, ?)",
                [pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora]
            );
        } catch (error) {
            message = "Algo salió mal en CD";
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }


    //ACTUALIZAR
    async updateCita(id, pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora) {
        var message = "";
        var result;

        try {
            [result] = await pool.query(
            "UPDATE tblCita  SET idPaciente = ?, idMedico = ?, citEst = ?, citTrat = ?, citObs = ?, citFecha = ?, citHora = ? WHERE idCita = ?",
            [pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora, id]);

        } catch (error) {
            message = "Algo salió mal en CD";
            result.affectedRows = 0;
        }

        return { message: message, affectedRows: result.affectedRows};
    }

    //ELIMINAR
    async deleteCita(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("DELETE FROM tblCita WHERE idCita = ?", [id]);
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
            [rows] = await pool.query("SELECT * FROM tblCita");
        } catch (error) {
            message = "Algo salió mal en CD";
            rows = [];
        }
        return { message: message, rows: rows };
    }

}

export default CD_Cita;

