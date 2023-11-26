import { pool } from "./Conexion DB/conection-db.js";
class CD_exintrabucal {
    //LISTAR
    async listexintrabucal(DNI) {
        var message = "";
        var rows;
        try {
            [[rows]] = await pool.query("call listar_exintrabucal (?);",[DNI]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createexintrabucal( DNI, LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [[[result]]] = await pool.query(
                "CALL crear_exintrabucal (?,?,?,?,?,?,?,?,?)",
                [DNI, LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    // EDITAR
    async updateexintrabucal(CODIGO, LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [result] = await pool.query(
                "CALL editar_exintrabucal (?,?,?,?,?,?,?,?,?)",
                [CODIGO, LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA]
            );
            result = { affectedRows: 1, row: result }
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: "+ error.message;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows, row: result.row };
    }
    //ELIMINAR
    async deleteexintrabucal(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_exintrabucal  (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_exintrabucal;

