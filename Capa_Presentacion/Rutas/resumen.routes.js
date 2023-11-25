import { Router } from "express";
import {
  createresumen,
  listresumen,
  updateresumen,
  deleteresumen
} from "../Controladores/resumen.controller.js";

const router = Router();


// Crear
router.post("/createresumen", createresumen);
//Actualizar
router.patch("/updateresumen/:CODIGO", updateresumen);
//Listar
router.get("/listresumen/:DNI", listresumen);
// DELETE
router.delete("/deleteresumen/:id", deleteresumen);



export default router;
