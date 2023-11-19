import { Router } from "express";
import {
  createDetodont,
  listDetodont,
  updateDetodont,
  deleteDetodont
} from "../Controladores/detalleOdontograma.controller.js";

const router = Router();


// Crear detalle odontograma
router.post("/createDetodont", createDetodont);
//Actualizar detalle odontograma
router.patch("/updateDetodont/:id", updateDetodont);
//Listar detalle odontograma
router.get("/listDetodont/:DNI", listDetodont);
// DELETE detalle odontograma
router.delete("/deleteDetodont/:id", deleteDetodont);



export default router;
