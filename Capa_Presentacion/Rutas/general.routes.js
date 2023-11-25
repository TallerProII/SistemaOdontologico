import { Router } from "express";
import {
  creategeneral,
  listgeneral,
  updategeneral,
  deletegeneral
} from "../Controladores/general.controller.js";

const router = Router();


// Crear
router.post("/creategeneral", creategeneral);
//Actualizar
router.patch("/updategeneral/:CODIGO", updategeneral);
//Listar
router.get("/listgeneral/:DNI", listgeneral);
// DELETE
router.delete("/deletegeneral/:id", deletegeneral);



export default router;
