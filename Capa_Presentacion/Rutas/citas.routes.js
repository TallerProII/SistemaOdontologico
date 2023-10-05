import { Router } from "express";
import {
  createCita
  
} from "../Controladores/citas.controller.js";

const router = Router();


// Crear una cita
router.post("/createCita", createCita);


export default router;
