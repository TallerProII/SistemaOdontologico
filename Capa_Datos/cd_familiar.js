import { pool } from "./Conexion DB/conection-db.js";
class CD_familiar {
    //LISTAR
    async listFamiliar (DNI) {
        var message = "";
        var rows;
        try {
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
        var result = { affectedRows: 0 };    
        try {
        [[[result]]] = await pool.query(
            "CALL crear_familiar (?, ?, ?, ?, ?, ?,?,?)",
            [DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono]
        );
        result = { affectedRows: 1, row: result }
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: "+ error.message;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows, row: result.row };
    }
    // EDITAR
    async updateFamiliar(id,  nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono) {
        var message = "";
        var result = { affectedRows: 0 };    
        try {
        [result] = await pool.query(
            "CALL editar_familiar (?, ?, ?, ?, ?, ?,?,?)",
            [id,  nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono]
        );
        } catch (error) {
        message = "Algo salió mal en CD - " + error;
        }
    
        return { message: message, affectedRows: result.affectedRows };
    }
  
    //ELIMINAR
    async deleteFamiliar(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_familiar (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_familiar;

