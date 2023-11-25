import { Router } from "express";
import {
  createodontograma,
  listodontograma,
  updateodontograma,
  deleteodontograma
} from "../Controladores/odontograma.controller.js";

const router = Router();


// Crear
router.post("/createodontograma", createodontograma);
//Actualizar
router.patch("/updateodontograma/:CODIGO", updateodontograma);
//Listar
router.get("/listodontograma/:DNI", listodontograma);
// DELETE
router.delete("/deleteodontograma/:id", deleteodontograma);



export default router;
