import { Router } from "express";
import {
  createDetodont,
  listDetodont,
  updateDetodont,
  deleteDetodont
} from "../Controladores/detalleOdontograma.controller.js";

const router = Router();


// Crear
router.post("/createDetodont", createDetodont);
//Actualizar
router.patch("/updateDetodont/:id", updateDetodont);
//Listar
router.get("/listDetodont/:DNI", listDetodont);
// DELETE
router.delete("/deleteDetodont/:id", deleteDetodont);



export default router;
