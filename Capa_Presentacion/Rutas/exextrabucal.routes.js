import { Router } from "express";
import {
  createexextrabucal,
  listexextrabucal,
  updateexextrabucal,
  deleteexextrabucal
} from "../Controladores/exextrabucal.controller.js";

const router = Router();


// Crear
router.post("/createexextrabucal", createexextrabucal);
//Actualizar
router.patch("/updateexextrabucal/:CODIGO", updateexextrabucal);
//Listar
router.get("/listexextrabucal/:DNI", listexextrabucal);
// DELETE
router.delete("/deleteexextrabucal/:id", deleteexextrabucal);



export default router;
