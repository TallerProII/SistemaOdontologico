import { Router } from "express";
import {
  createTratamiento,
  listTratamiento,
  updateTratamiento,
  deleteTratamiento
} from "../Controladores/tratamiento.controller.js";

const router = Router();

//Listar Tratamiento
router.get("/listTratamiento", listTratamiento);
// Crear una Tratamiento
router.post("/createTratamiento", createTratamiento);
//Actualizar Tratamiento
router.patch("/updateTratamiento/:IDTratamiento", updateTratamiento);
// DELETE un empleado
router.delete("/deleteTratamiento/:IDTratamiento", deleteTratamiento);

export default router;
