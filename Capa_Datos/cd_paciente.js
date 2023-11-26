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
        var result = { affectedRows: 0 };
    
        try {
            [[[result]]] = await pool.query(
                "CALL crear_paciente (?, ?, ?, ?, ?, ?,?,?, ?, ?, ?, ?, ?,?,?,?)",
                [NOMBRES, APELLIDOS, DNI, SEXO, RELIGION,RAZA,FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA]
            );
            result = { affectedRows: 1, row: result }
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: "+ error.message;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows, row: result.row };
        }   
    // EDITAR
    async updatePaciente(id,NOMBRES, APELLIDOS, DNI, SEXO, RELIGION,RAZA,FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA) {
        var message = "";
        var result = { affectedRows: 0 };    
        try {
        [result] = await pool.query(
            "CALL editar_paciente (?,?, ?, ?, ?, ?, ?,?,?, ?, ?, ?, ?, ?,?,?,?)",
            [id, NOMBRES, APELLIDOS, DNI, SEXO, RELIGION,RAZA,FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA]
        );
            result = { affectedRows: 1, row: result }
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: "+ error.message;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows, row: result.row };
    }
}

export default CD_Paciente;