import { pool } from "./Conexion DB/conection-db.js";
class CD_medico {

    //LISTAR
    async listmedico() {
        var message = "";
        var rows;
        try {
            [[rows]] = await pool.query("call listar_medico ();");
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createmedico( USUARIO, NOMBRE, APELLIDO, DNI, DIREC, TELEF, CORREO, SEXO, FECHA, ESPECIALIDAD, CIVIL, CUENTA, CONTRA, ESTADO) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [result] = await pool.query(
                "CALL crear_medico (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                [ USUARIO, NOMBRE, APELLIDO, DNI, DIREC, TELEF, CORREO, SEXO, FECHA, ESPECIALIDAD, CIVIL, CUENTA, CONTRA, ESTADO]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    // EDITAR
    async updatemedico(CODIGO, USUARIO, NOMBRE, APELLIDO, DNI, DIREC, TELEF, CORREO, SEXO, FECHA, ESPECIALIDAD, CIVIL, CUENTA, CONTRA, ESTADO) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [result] = await pool.query(
                "CALL editar_medico (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                [CODIGO, USUARIO, NOMBRE, APELLIDO, DNI, DIREC, TELEF, CORREO, SEXO, FECHA, ESPECIALIDAD, CIVIL, CUENTA, CONTRA, ESTADO]
            );
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.insertId = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deletemedico(id) {
        var message = "";
        var result;
        try {
            [result] = await pool.query("call eliminar_medico  (?);", [id]);
        } catch (error) {
            message = "Algo salió mal en CD - " +error ;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows};
    }

}

export default CD_medico;

