import { Router } from "express";
import {
  createCita,
  listCita,
  updateCita
} from "../Controladores/citas.controller.js";

const router = Router();


// Crear una cita
router.post("/createCita", createCita);
//Actualizar cita
router.patch("/updateCita/:id", updateCita);
//Listar cita
router.get("/listCita", listCita);



export default router;
