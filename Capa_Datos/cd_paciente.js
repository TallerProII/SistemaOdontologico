import { pool } from "./Conexion DB/conection-db.js";
class CD_Paciente {
    //LISTAR
    async listPaciente() {
        var message = "";
        var rows;
        try {
            [[rows]] = await pool.query("call listar_paciente();");
        } catch (error) {
            message = "Algo salió mal en CD - " + error;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createPaciente(NOMBRES, APELLIDOS, DNI, SEXO, RELIGION,RAZA,FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA) {
        var message = "";
        var result = { affectedRows: 0 }; // Inicializa result con un valor predeterminado
    
        try {
        // Implementa la consulta SQL para crear un nuevo familiar en la base de datos
        [result] = await pool.query(
            "CALL crear_paciente (?, ?, ?, ?, ?, ?,?,?, ?, ?, ?, ?, ?,?,?,?)",
            [NOMBRES, APELLIDOS, DNI, SEXO, RELIGION,RAZA,FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA]
        );
        } catch (error) {
        message = "Algo salió mal en CD - " + error;
        }
    
        return { message: message, affectedRows: result.affectedRows };
    }
}

export default CD_Paciente;