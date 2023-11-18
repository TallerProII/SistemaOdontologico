import { Router } from "express";
import {
  createFamiliar,
  listFamiliar,
  updateFamiliar,
  deleteFamiliar
} from "../Controladores/familiar.controller.js";

const router = Router();


// Crear una cita
router.post("/createFamiliar", createFamiliar);
//Actualizar cita
router.patch("/updateFamiliar/:id", updateFamiliar);
//Listar cita
router.get("/listFamiliar/:DNI", listFamiliar);
// DELETE un empleado
router.delete("/deleteFamiliar/:id", deleteFamiliar);



export default router;
