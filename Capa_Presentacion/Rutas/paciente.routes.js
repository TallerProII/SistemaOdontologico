import { Router } from "express";
import {
  createPaciente,
  listPaciente,
  updatePaciente,
  deletePaciente
} from "../Controladores/paciente.controller.js";

const router = Router();


// Crear
router.post("/createPaciente", createPaciente);
//Actualizar
router.patch("/updatePaciente/:id", updatePaciente);
//Listar
router.get("/listPaciente/", listPaciente);
// DELETE
router.delete("deletePaciente/:id",deletePaciente);



export default router;
