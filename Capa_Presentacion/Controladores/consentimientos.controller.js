import express from "express";
import fileUpload from "express-fileupload";
import CN_Consentimientos  from "../../Capa_Negocio/cn_consentimientos.js";
import upload from '../App_Start/multer.js';

const objConsentimientos = new CN_Consentimientos();
const app = express();
app.use(fileUpload());

// Listar consentimientos
export const listConsentimientos = async (_req, res) => {
  try {
    const consentimientos = await objConsentimientos.listConsentimientos();
    res.json(consentimientos);
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};

// Crear consentimiento con subida de archivo
export const createConsentimiento = async (req, res) => {
  // Utiliza el middleware de Multer para manejar la subida de archivos
  upload(req, res, async function (err) {
    if (err) {
      return res.status(500).json({ message: "Error al subir el archivo", error: err.message });
    }

    // Accede al archivo subido usando req.file
    const ConsDoc = req.file;

    if (!ConsDoc) {
      return res.status(400).json({ message: "No se ha proporcionado ningún archivo" });
    }

    // Imprime la información del archivo subido
    console.log(ConsDoc);

    // Puedes enviar una respuesta al cliente si es necesario
    res.send('ok');

    // Luego, puedes proceder con el resto de la lógica, como guardar en la base de datos
    const { DNI, ConsDesc, ConsEstado } = req.body;
    const result = await objConsentimientos.createConsentimiento(
      DNI,
      ConsDesc,
      ConsDoc,
      ConsEstado
    );
    res.status(201).json(result);
  });
};




// Actualizar consentimiento
export const updateConsentimiento = async (req, res) => {
  try {
    const { id } = req.params;
    const { dni, ConsDesc, ConsDoc, ConsEstado } = req.body;
    const result = await objConsentimientos.updateConsentimiento(id, dni, ConsDesc, ConsDoc, ConsEstado);

    if (result.affectedRows === 0) return res.status(404).json({ message: result.message });

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};

// Eliminar consentimiento
export const deleteConsentimiento = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objConsentimientos.deleteConsentimiento(id);

    if (result.affectedRows <= 0) return res.status(404).json({ message: result.message });

    res.status(204).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};


// Eliminar archivo de consentimiento
export const deleteConsentimientoFile = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objConsentimientos.deleteConsentimientoFile(id);

    if (result.affectedRows <= 0) return res.status(404).json({ message: result.message });

    res.status(204).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};
