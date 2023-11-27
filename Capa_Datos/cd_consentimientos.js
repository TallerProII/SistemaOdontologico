// cd_consentimientos.js
import { pool } from "./Conexion DB/conection-db.js";

class CD_Consentimientos {
  async createConsentimiento(DNI, ConsDesc, ConsDoc, ConsEstado) {
    var message = "";
    var result = { affectedRows: 0 };

    try {
    
      [result] = await pool.query(
        "INSERT INTO tblConsentimientos (DNI, ConsDesc, ConsDoc, ConsEstado) VALUES (?, ?, ?, ?)",
        [DNI, ConsDesc, ConsDoc, ConsEstado]
      );
    } catch (error) {
      message = "Algo salió mal en CD_Consentimientos, Servidor: " + error.message;
      result.affectedRows = 0;
    }

    return { message: message, affectedRows: result.affectedRows };
  }

  async updateConsentimiento(IDConsentimiento, DNI, ConsDesc, ConsDoc, ConsEstado) {
    var message = "";
    var result = { affectedRows: 0 };

    try {
      // Actualiza el consentimiento en la base de datos
      [result] = await pool.query(
        "UPDATE tblConsentimientos SET DNI = ?, ConsDesc = ?, ConsDoc = ?, ConsEstado = ? WHERE IDConsentimiento = ?",
        [DNI, ConsDesc, ConsDoc, ConsEstado, IDConsentimiento]
      );
    } catch (error) {
      message = "Algo salió mal en CD_Consentimientos, Servidor: " + error.message;
      result.affectedRows = 0;
    }

    return { message: message, affectedRows: result.affectedRows };
  }

  async deleteConsentimiento(IDConsentimiento) {
    var message = "";
    var result = { affectedRows: 0 };

    try {
      // Elimina el consentimiento de la base de datos
      [result] = await pool.query("DELETE FROM tblConsentimientos WHERE IDConsentimiento = ?", [IDConsentimiento]);
    } catch (error) {
      message = "Algo salió mal en CD_Consentimientos, Servidor: " + error.message;
      result.affectedRows = 0;
    }

    return { message: message, affectedRows: result.affectedRows };
  }

  async listConsentimientos() {
    var message = "";
    var rows;

    try {
      [rows] = await pool.query("SELECT * FROM tblConsentimientos");
    } catch (error) {
      message = "Algo salió mal en CD_Consentimientos, Servidor: " + error.message;
      rows = [];
    }

    return { message: message, rows: rows };
  }
 }

export default CD_Consentimientos;
