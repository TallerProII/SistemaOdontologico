import { Router } from "express";
import {
  createPaciente,
  listPaciente,
  updatePaciente,
  deletePaciente
} from "../Controladores/paciente.controller.js";

const router = Router();


// Crear paciente
router.post("/createPaciente", createPaciente);
//Actualizar paciente
router.patch("/updatePAciente/:id", updatePaciente);
//Listar paciente
router.get("/listPaciente/", listPaciente);
// DELETE paciente
router.delete("deletePaciente/:id",deletePaciente);



export default router;
