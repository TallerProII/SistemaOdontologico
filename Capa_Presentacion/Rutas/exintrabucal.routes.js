import { Router } from "express";
import {
  createexintrabucal,
  listexintrabucal,
  updateexintrabucal,
  deleteexintrabucal
} from "../Controladores/exintrabucal.controller.js";

const router = Router();


// Crear
router.post("/createexintrabucal", createexintrabucal);
//Actualizar
router.patch("/updateexintrabucal/:CODIGO", updateexintrabucal);
//Listar
router.get("/listexintrabucal/:DNI", listexintrabucal);
// DELETE
router.delete("/deleteexintrabucal/:id", deleteexintrabucal);



export default router;
