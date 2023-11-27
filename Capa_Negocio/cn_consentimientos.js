import CD_Consentimientos from "../Capa_Datos/cd_consentimientos.js";
import CD_Utilidades from "../Capa_Negocio/cn_utilidades.js";
import Validaciones from "./cn_validacion.js";
import multer from "multer";
import path from "path";

const objCapaDato = new CD_Consentimientos();

// Configuración de Multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../archivo"), // Cambia la ruta según tu estructura de carpetas
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({ storage: storage });
const uploadMiddleware = multer({ storage: storage });
export const uploadFile = uploadMiddleware.single("archivo");

class CN_Consentimientos {
  constructor() {
    this.objCapaDato = new CD_Consentimientos();
    this.objUtilidades = new CD_Utilidades();
  }

  validarNumero = Validaciones.validarNumero;
  validarString = Validaciones.validarString;

  async createConsentimiento(DNI, ConsDesc, ConsDoc, ConsEstado) {
    const errores = [
      this.validarNumero(DNI, "DNI"),
      this.validarString(ConsDesc, "Descripción del consentimiento"),
    ];

    const erroresFiltrados = errores.filter((error) => error !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), affectedRows: 0 };
    }

    let message = "";
    let result = { affectedRows: 0 };

    if (!DNI || !ConsDesc || !ConsDoc || !ConsEstado) {
      message = "Todos los campos son obligatorios";
    }

    if (!message) {
      result = await objCapaDato.createConsentimiento(DNI, ConsDesc, ConsDoc, ConsEstado);
    }

    return { message: message, affectedRows: result.affectedRows };
  }

  async updateConsentimiento(IDConsentimiento, DNI, ConsDesc, ConsDoc, ConsEstado) {
    const errores = [
      this.validarNumero(IDConsentimiento, "ID del consentimiento"),
      this.validarNumero(DNI, "DNI"),
      this.validarString(ConsDesc, "Descripción del consentimiento"),
    ];

    const erroresFiltrados = errores.filter((error) => error !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), affectedRows: 0 };
    }

    let message = "";
    let result = { affectedRows: 0 };

    if (!DNI || !ConsDesc || !ConsDoc || !ConsEstado) {
      message = "Todos los campos son obligatorios";
    }

    if (!message) {
      result = await objCapaDato.updateConsentimiento(IDConsentimiento, DNI, ConsDesc, ConsDoc, ConsEstado);
    }

    return { message: message, affectedRows: result.affectedRows };
  }

  async deleteConsentimiento(IDConsentimiento) {
    const errores = [
      this.validarNumero(IDConsentimiento, "ID del consentimiento"),
    ];

    const erroresFiltrados = errores.filter((error) => error !== null);

    if (erroresFiltrados.length > 0) {
      return { message: erroresFiltrados.join("\n"), affectedRows: 0 };
    }

    let message = "";
    let result = { affectedRows: 0 };

    if (!message) {
      result = await objCapaDato.deleteConsentimiento(IDConsentimiento);
    }

    return { message: message, affectedRows: result.affectedRows };
  }

  async listConsentimientos() {
    return await objCapaDato.listConsentimientos();
  }

  // Función para subir el archivo ConsDoc
  async uploadConsentimientoFile(IDConsentimiento, file) {
    try {
      // Utiliza la función configurada previamente con multer
      const result = await upload.single('ConsDoc')(file);
  
      // Actualiza la referencia del archivo en la base de datos
      await objCapaDato.uploadConsentimientoFile(IDConsentimiento, file);
  
      return { msg: "Archivo de consentimiento cargado satisfactoriamente", result };
    } catch (error) {
      throw new Error("Error al cargar el archivo de consentimiento en la base de datos");
    }
  }

  // Función para eliminar el archivo ConsDoc
  async deleteConsentimientoFile(IDConsentimiento) {
    try {
      const result = await objCapaDato.deleteConsentimientoFile(IDConsentimiento);
      return { msg: "Archivo de consentimiento eliminado satisfactoriamente", result };
    } catch (error) {
      throw new Error("Error al eliminar el archivo de consentimiento en la base de datos");
    }
  }

}

export default CN_Consentimientos;