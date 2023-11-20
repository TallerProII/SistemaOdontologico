import { pool } from "./Conexion DB/conection-db.js";

// Sintaxis de una clase en javascript
class CD_Tratamientos {

    //LISTAR
    async listTratamiento() {
        var message = "";
        var rows;
        try {
            // codigo asincorno, consulta sql listar empleados
            [rows] = await pool.query("SELECT * FROM tbltratamientos");
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: " + error.message;
            rows = [];
        }
        return { message: message, rows: rows };
    }

    //CREAR
    async createTratamiento(Tratamiento, tartDesc) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            // codigo asincorno, consulta sql registrar empleados
            [result] = await pool.query(
                "INSERT INTO tbltratamientos (Tratamiento, tartDesc) VALUES (?, ?)", [Tratamiento, tartDesc]);
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: " + error.message;
            result.affectedRows = 0;
        }
        return { message: message, id: result.insertId };
    }

    //ACTUALIZAR
    async updateTratamiento(IDTratamiento, Tratamiento, tartDesc) {
        var message = "";
        var result = { affectedRows: 0 };

        try {
            [result] = await pool.query(
                "UPDATE tbltratamientos SET Tratamiento = IFNULL(?, Tratamiento), tartDesc = IFNULL(?, tartDesc) WHERE IDTratamiento = ?",
                [Tratamiento, tartDesc, IDTratamiento]);

        } catch (error) {
            message = "Algo salió mal en CD, Servidor: " + error.message;
            result.affectedRows = 0;
        }

        return { message: message, affectedRows: result.affectedRows };
    }
    //ELIMINAR
    async deleteTratamiento(IDTratamiento) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            // codigo asincorno, consulta sql registrar empleados
            [result] = await pool.query("DELETE FROM tbltratamientos WHERE IDTratamiento = ?", [IDTratamiento]);
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: " + error.message;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }
}
// Exporta la clase CD_Tratamientos para que pueda ser importada en otros archivos.
export default CD_Tratamientos;

