import { Router } from "express";
import {
  createmedico,
  listmedico,
  updatemedico,
  deletemedico
} from "../Controladores/medico.controller.js";

const router = Router();


// Crear
router.post("/createmedico", createmedico);
//Actualizar
router.patch("/updatemedico/:CODIGO", updatemedico);
//Listar
router.get("/listmedico/", listmedico);
// DELETE
router.delete("/deletemedico/:id", deletemedico);



export default router;
