import { Router } from "express";
import {
  getDatosCita
} from "../Controladores/pres.controller.js";

const router = Router();

// GET todos los empleados
router.get("/getDatosCita", getDatosCita);

export default router;