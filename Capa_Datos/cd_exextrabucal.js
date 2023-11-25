import { pool } from "./Conexion DB/conection-db.js";
class CD_exextrabucal {

    //LISTAR
    async listexextrabucal(DNI) {
        var message = "";
        var rows;
        try {
            // codigo asincorno, consulta sql listar empleados
            [[rows]] = await pool.query("call listar_exextrabucal (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createexextrabucal( DNI, FACIE, CRANEO, CARA, TERCIO, BILATERAL, PERFIL, TRAYECTORIA, RUIDOS, PALPACION, GANGLIOS, APERTURA) {
        var message = "";
        var result;
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "CALL crear_exextrabucal (?,?,?,?,?,?,?,?,?,?,?,?);",
                [DNI, FACIE, CRANEO, CARA, TERCIO, BILATERAL, PERFIL, TRAYECTORIA, RUIDOS, PALPACION, GANGLIOS, APERTURA]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    // EDITAR
    async updateexextrabucal(CODIGO, FACIE, CRANEO, CARA, TERCIO, BILATERAL, PERFIL, TRAYECTORIA, RUIDOS, PALPACION, GANGLIOS, APERTURA) {
        var message = "";
        var result;
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [result] = await pool.query(
                "CALL editar_exextrabucal (?,?,?,?,?,?,?,?,?,?,?,?);",
                [CODIGO, FACIE, CRANEO, CARA, TERCIO, BILATERAL, PERFIL, TRAYECTORIA, RUIDOS, PALPACION, GANGLIOS, APERTURA]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deleteexextrabucal(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_exextrabucal  (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_exextrabucal;

