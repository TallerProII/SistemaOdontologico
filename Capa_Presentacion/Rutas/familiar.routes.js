import { Router } from "express";
import {
  createFamiliar,
  listFamiliar,
  updateFamiliar,
  deleteFamiliar
} from "../Controladores/familiar.controller.js";

const router = Router();


// Crear familiar
router.post("/createFamiliar", createFamiliar);
//Actualizar familiar
router.patch("/updateFamiliar/:id", updateFamiliar);
//Listar familiar
router.get("/listFamiliar/:DNI", listFamiliar);
// DELETE familiar
router.delete("/deleteFamiliar/:id", deleteFamiliar);



export default router;
