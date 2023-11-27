// Importa las funciones del controlador
import {
  createConsentimiento,
  listConsentimientos,
  updateConsentimiento,
  deleteConsentimiento,
  uploadConsentimientoFile,
  deleteConsentimientoFile
} from "../Controladores/consentimientos.controller.js";

// Importa el enrutador desde express
import { Router } from "express";

// Crea el enrutador
const router = Router();

// Crear o actualizar un consentimiento
router.post("/createConsentimiento", createConsentimiento);
router.patch("/updateConsentimiento/:id", updateConsentimiento);

// Listar consentimientos
router.get("/listConsentimientos", listConsentimientos);

// Eliminar un consentimiento
router.delete("/deleteConsentimiento/:id", deleteConsentimiento);

// Subir archivo de consentimiento
router.post("/uploadConsentimientoFile/:id/files", uploadConsentimientoFile);

// Eliminar archivo de consentimiento
router.delete("/deleteConsentimientoFile/:id/files", deleteConsentimientoFile);

// Exporta el enrutador
export default router;
