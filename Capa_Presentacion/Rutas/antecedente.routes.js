import { Router } from "express";
import {
  createantecedente,
  listantecedente,
  updateantecedente,
  deleteantecedente
} from "../Controladores/antecedente.controller.js";

const router = Router();


// Crear
router.post("/createantecedente", createantecedente);
//Actualizar
router.patch("/updateantecedente/:CODIGO", updateantecedente);
//Listar
router.get("/listantecedente/:DNI", listantecedente);
// DELETE
router.delete("/deleteantecedente/:id", deleteantecedente);



export default router;
