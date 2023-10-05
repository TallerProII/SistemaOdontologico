import { Router } from "express";
import {
  createCita,
  updateCita
} from "../Controladores/citas.controller.js";

const router = Router();


// Crear una cita
router.post("/createCita", createCita);
router.patch("/updateCita/:id", updateCita);


export default router;
