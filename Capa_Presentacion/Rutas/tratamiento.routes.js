import { Router } from "express";
import {
  createTratamiento,
  listTratamiento,
  updateTratamiento,
  deleteTratamiento
} from "../Controladores/tratamiento.controller.js";

const router = Router();

//Listar
router.get("/listTratamiento", listTratamiento);
// Crear
router.post("/createTratamiento", createTratamiento);
//Actualizar
router.patch("/updateTratamiento/:IDTratamiento", updateTratamiento);
// DELETE
router.delete("/deleteTratamiento/:IDTratamiento", deleteTratamiento);

export default router;
