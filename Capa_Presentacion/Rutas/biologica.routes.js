import { Router } from "express";
import {
  createbiologica,
  listbiologica,
  updatebiologica,
  deletebiologica
} from "../Controladores/biologica.controller.js";

const router = Router();


// Crear
router.post("/createbiologica", createbiologica);
//Actualizar
router.patch("/updatebiologica/:CODIGO", updatebiologica);
//Listar
router.get("/listbiologica/:DNI", listbiologica);
// DELETE
router.delete("/deletebiologica/:id", deletebiologica);



export default router;
