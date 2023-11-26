import { Router } from "express";
import {
  createdetenfermedad,
  listdetenfermedad,
  updatedetenfermedad,
  deletedetenfermedad
} from "../Controladores/detenfermedad.controller.js";

const router = Router();


// Crear
router.post("/createdetenfermedad", createdetenfermedad);
//Actualizar
router.patch("/updatedetenfermedad/:CODIGO", updatedetenfermedad);
//Listar
router.get("/listdetenfermedad/:DNI", listdetenfermedad);
// DELETE
router.delete("/deletedetenfermedad/:id", deletedetenfermedad);



export default router;
