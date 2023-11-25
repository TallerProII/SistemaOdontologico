import { Router } from "express";
import {
  createexgeneral,
  listexgeneral,
  updateexgeneral,
  deleteexgeneral
} from "../Controladores/exgeneral.controller.js";

const router = Router();


// Crear
router.post("/createexgeneral", createexgeneral);
//Actualizar
router.patch("/updateexgeneral/:CODIGO", updateexgeneral);
//Listar
router.get("/listexgeneral/:DNI", listexgeneral);
// DELETE
router.delete("/deleteexgeneral/:id", deleteexgeneral);



export default router;
