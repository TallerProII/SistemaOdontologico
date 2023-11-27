// cd_consentimientos.js
import { pool } from "./Conexion DB/conection-db.js";
import fs from "fs";

const filePath = `consentimientos/${IDConsentimiento}_${file.originalname}`;
const folderPath = path.join(__dirname, "../../consentimientos");
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}
fs.writeFileSync(filePath, file.buffer);

class CD_Consentimientos {
  async createConsentimiento(DNI, ConsDesc, ConsDoc, ConsEstado) {
    var message = "";
    var result = { affectedRows: 0 };

    try {
      // Inserta el consentimiento en la base de datos
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

  // Función para subir el archivo ConsDoc
  async uploadConsentimientoFile(IDConsentimiento, file) {
    // Guarda el archivo en el sistema de archivos
    const filePath = `consentimientos/${IDConsentimiento}_${file.originalname}`;
    fs.writeFileSync(filePath, file.buffer);
    
    // Actualiza la referencia del archivo en la base de datos
    await pool.query("UPDATE tblConsentimientos SET ConsDoc = ? WHERE IDConsentimiento = ?", [filePath, IDConsentimiento]);
  }

  // Función para eliminar el archivo ConsDoc
  async deleteConsentimientoFile(IDConsentimiento) {
    // Recupera la ruta del archivo desde la base de datos
    const [result] = await pool.query("SELECT ConsDoc FROM tblConsentimientos WHERE IDConsentimiento = ?", [IDConsentimiento]);
    const filePath = result[0].ConsDoc;

    // Elimina el archivo del sistema de archivos
    fs.unlinkSync(filePath);

    // Actualiza la referencia del archivo en la base de datos (puedes establecerla a null o realizar cualquier otra acción necesaria)
    await pool.query("UPDATE tblConsentimientos SET ConsDoc = NULL WHERE IDConsentimiento = ?", [IDConsentimiento]);
  }
}

export default CD_Consentimientos;
