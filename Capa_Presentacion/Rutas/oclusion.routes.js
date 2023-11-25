import { Router } from "express";
import {
  createoclusion,
  listoclusion,
  updateoclusion,
  deleteoclusion
} from "../Controladores/oclusion.controller.js";

const router = Router();


// Crear
router.post("/createoclusion", createoclusion);
//Actualizar
router.patch("/updateoclusion/:CODIGO", updateoclusion);
//Listar
router.get("/listoclusion/:DNI", listoclusion);
// DELETE
router.delete("/deleteoclusion/:id", deleteoclusion);



export default router;
