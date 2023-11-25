import { Router } from "express";
import {
  createexauxiliares,
  listexauxiliares,
  updateexauxiliares,
  deleteexauxiliares
} from "../Controladores/exauxiliares.controller.js";

const router = Router();


// Crear
router.post("/createexauxiliares", createexauxiliares);
//Actualizar
router.patch("/updateexauxiliares/:CODIGO", updateexauxiliares);
//Listar
router.get("/listexauxiliares/:DNI", listexauxiliares);
// DELETE
router.delete("/deleteexauxiliares/:id", deleteexauxiliares);



export default router;
