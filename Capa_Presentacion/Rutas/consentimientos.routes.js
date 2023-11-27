
import { Router } from "express";
import fileUpload from "express-fileupload"; 

const router = Router();

router.use(fileUpload());


import {
  createConsentimiento,
  listConsentimientos,
  updateConsentimiento,
  deleteConsentimiento,
  deleteConsentimientoFile

} from "../Controladores/consentimientos.controller.js";

router.post('/createConsentimiento', createConsentimiento);
router.patch("/updateConsentimiento/:id", updateConsentimiento);
router.get("/listConsentimientos", listConsentimientos);
router.delete("/deleteConsentimiento/:id", deleteConsentimiento);
router.delete("/deleteConsentimientoFile/:id/files", deleteConsentimientoFile);

export default router;
