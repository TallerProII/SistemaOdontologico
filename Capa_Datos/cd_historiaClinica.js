import { pool } from "./Conexion DB/conection-db.js";

class CD_HistoriaClinica {
  // CREAR
  async createHistoriaClinica(IDPaciente, Fecha, Hora, Ectoscopia) {
    var message = "";
    var result = { affectedRows: 0 };

    try {
      [[[result]]] = await pool.query(
        "CALL crear_historia_clinica(?, ?, ?, ?)",
        [IDPaciente, Fecha, Hora, Ectoscopia]
      );
      result = { affectedRows: 1, row: result }
    } catch (error) {
        message = "Algo salió mal en CD, Servidor: "+ error.message;
        result.affectedRows = 0;
    }
    return { message: message, affectedRows: result.affectedRows, row: result.row };
  }
  // ACTUALIZAR
  async updateHistoriaClinica(IDHistoriaClinica, IDPaciente, Fecha, Hora, Ectoscopia) {
    var message = "";
    var result = { affectedRows: 0 };

    try {
      [result] = await pool.query(
        "UPDATE tblHistoriaClinica SET IDPaciente = ?, Fecha = ?, Hora = ?, Ectoscopia = ? WHERE IDHistoriaClinica = ?",
        [IDPaciente, Fecha, Hora, Ectoscopia, IDHistoriaClinica]
      );
    } catch (error) {
      message = "Algo salió mal en CD, Servidor: " + error.message;
      result.affectedRows = 0;
    }

    return { message: message, affectedRows: result.affectedRows };
  }
  // ELIMINAR
  async deleteHistoriaClinica(IDHistoriaClinica) {
    var message = "";
    var result = { affectedRows: 0 };

    try {
      [result] = await pool.query("DELETE FROM tblHistoriaClinica WHERE IDHistoriaClinica = ?", [IDHistoriaClinica]);
    } catch (error) {
      message = "Algo salió mal en CD, Servidor: " + error.message;
      result.affectedRows = 0;
    }

    return { message: message, affectedRows: result.affectedRows };
  }
  // LISTAR
  async listHistoriaClinica() {
    var message = "";
    var rows;

    try {
      // Código asincrónico, consulta SQL para listar historias clínicas
      [rows] = await pool.query("SELECT * FROM tblHistoriaClinica");
    } catch (error) {
      message = "Algo salió mal en CD, Servidor: " + error.message;
      rows = [];
    }
    return { message: message, rows: rows };
  }
}

export default CD_HistoriaClinica;
