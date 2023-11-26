import { Router } from "express";
import {
  createCita,
  listCita,
  updateCita,
  deleteCita
} from "../Controladores/citas.controller.js";

const router = Router();


// Crear
router.post("/createCita", createCita);
//Actualizar
router.patch("/updateCita/:id", updateCita);
//Listar
router.get("/listCita", listCita);
// DELETE
router.delete("/deleteCita/:id", deleteCita);



export default router;
