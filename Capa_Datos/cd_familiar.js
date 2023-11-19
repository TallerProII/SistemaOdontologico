import { pool } from "./Conexion DB/conection-db.js";
class CD_familiar {

    //LISTAR
    async listFamiliar (DNI) {
        var message = "";
        var rows;
        try {
            // codigo asincorno, consulta sql listar empleados
            [[rows]] = await pool.query("call listar_familiar (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD - "+error;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createFamiliar(DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono) {
        var message = "";
        var result = { affectedRows: 0 }; // Inicializa result con un valor predeterminado
    
        try {
        // Implementa la consulta SQL para crear un nuevo familiar en la base de datos
        [result] = await pool.query(
            "CALL crear_familiar (?, ?, ?, ?, ?, ?,?,?)",
            [DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono]
        );
        } catch (error) {
        message = "Algo salió mal en CD - " + error;
        }
    
        return { message: message, affectedRows: result.affectedRows };
    }
  

}

export default CD_familiar;

