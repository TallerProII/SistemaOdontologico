import { Router } from "express";
import {
  createenfermedad,
  listenfermedad,
  updateenfermedad,
  deleteenfermedad
} from "../Controladores/enfermedad.controller.js";

const router = Router();


// Crear
router.post("/createenfermedad", createenfermedad);
//Actualizar
router.patch("/updateenfermedad/:CODIGO", updateenfermedad);
//Listar
router.get("/listenfermedad/", listenfermedad);
// DELETE
router.delete("/deleteenfermedad/:id", deleteenfermedad);



export default router;
