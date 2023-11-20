import { pool } from "./Conexion DB/conection-db.js";

class CD_HistoriaClinica {
  // CREAR
  async createHistoriaClinica(IDPaciente, Fecha, Hora, Ectoscopia) {
    var message = "";
    var result;

    try {
      // Implementa la consulta SQL para crear una nueva historia clínica en la base de datos
      [result] = await pool.query(
        "CALL crear_historia_clinica(?, ?, ?, ?)",
        [IDPaciente, Fecha, Hora, Ectoscopia]
      );
    } catch (error) {
      message = "Algo salió mal en CD";
      result.insertId = 0;
    }

    return { message: message, affectedRows: result.affectedRows };
  }

  // ACTUALIZAR
  async updateHistoriaClinica(IDHistoriaClinica, IDPaciente, Fecha, Hora, Ectoscopia) {
    var message = "";
    var result;

    try {
      [result] = await pool.query(
        "UPDATE tblHistoriaClinica SET IDPaciente = ?, Fecha = ?, Hora = ?, Ectoscopia = ? WHERE IDHistoriaClinica = ?",
        [IDPaciente, Fecha, Hora, Ectoscopia, IDHistoriaClinica]
      );
    } catch (error) {
      message = "Algo salió mal en CD";
      result.affectedRows = 0;
    }

    return { message: message, affectedRows: result.affectedRows };
  }

  // ELIMINAR
  async deleteHistoriaClinica(IDHistoriaClinica) {
    var message = "";
    var result;

    try {
      [result] = await pool.query("DELETE FROM tblHistoriaClinica WHERE IDHistoriaClinica = ?", [IDHistoriaClinica]);
    } catch (error) {
      message = "Algo salió mal en CD";
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
      message = "Algo salió mal en CD";
      rows = [];
    }

    return { message: message, rows: rows };
  }
}

export default CD_HistoriaClinica;
