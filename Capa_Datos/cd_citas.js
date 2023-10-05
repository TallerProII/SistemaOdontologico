import { pool } from "./Conexion DB/conection-db.js";
class CD_Cita {

    // CREAR
    async createCita(pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora) {
        var message = "";
        var result;
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "INSERT INTO tblCita (idPaciente, idMedico, citEst, citTrat, citObs, citRegist, citFecha, citHora) VALUES (?, ?, ?, ?, ?, NOW(), ?, ?)",
                [pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora]
            );
        } catch (error) {
            message = "Algo salió mal en CD";
            result.insertId = 0;
        }
        return { message: message, id: result.insertId };
    }


    //ACTUALIZAR
    async updateCita(id, name, salary) {
        var message = "";
        var result;

        try {
            [result] = await pool.query(
            "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
            [name, salary, id]);

        } catch (error) {
            message = "Algo salió mal en CD";
            result.affectedRows = 0;
        }

        return { message: message, affectedRows: result.affectedRows};
    }


}

export default CD_Cita;
