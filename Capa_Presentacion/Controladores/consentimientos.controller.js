import multer from "multer";
import path from "path";
import CN_Consentimientos from "../../Capa_Negocio/cn_consentimientos.js";

const objConsentimientos = new CN_Consentimientos();

// Configuración de Multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../archivo"), // Cambia la ruta según tu estructura de carpetas
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadMiddleware = multer({ storage: storage });

// Función para subir archivos
export const uploadFile = uploadMiddleware.single("archivo");

// Listar consentimientos
export const listConsentimientos = async (req, res) => {
  try {
    const consentimientos = await objConsentimientos.listConsentimientos();
    res.json(consentimientos);
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};

export const createConsentimiento = async (req, res) => {
  try {
  
    const { DNI, ConsDesc, ConsDoc, ConsEstado } = req.body;

    // Llama a la función uploadFile para manejar la subida de archivos
    uploadFile(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ message: "Error al subir el archivo", error: err.message });
      }

      const result = await objConsentimientos.createConsentimiento(DNI, ConsDesc, req.file.path, ConsEstado);
      res.status(201).json(result);
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};

// Actualizar consentimiento
export const updateConsentimiento = async (req, res) => {
  try {
    const { id } = req.params;
    const { dni, ConsDesc, ConsDoc, ConsEstado } = req.body; // Cambiado de req.params a req.body
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

export const uploadConsentimientoFile = async (req, res) => {
  try {
    const { id } = req.params;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No se ha proporcionado ningún archivo" });
    }

    const result = await objConsentimientos.uploadConsentimientoFile(id, file);
    res.json(result);
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
