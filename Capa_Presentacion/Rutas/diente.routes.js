import { Router } from "express";
import {
  creatediente,
  listdiente,
  updatediente,
  deletediente
} from "../Controladores/diente.controller.js";

const router = Router();


// Crear
router.post("/creatediente", creatediente);
//Actualizar
router.patch("/updatediente/:CODIGO", updatediente);
//Listar
router.get("/listdiente/:DNI", listdiente);
// DELETE
router.delete("/deletediente/:id", deletediente);



export default router;
