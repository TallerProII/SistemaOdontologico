import { Router } from "express";
import {
  createDetodont,
  listDetodont,
  updateDetodont,
  deleteDetodont
} from "../Controladores/detalleOdontograma.controller.js";

const router = Router();


// Crear una cita
router.post("/createDetodont", createDetodont);
//Actualizar cita
router.patch("/updateDetodont/:id", updateDetodont);
//Listar cita
router.get("/listDetodont/:DNI", listDetodont);
// DELETE un empleado
router.delete("/deleteDetodont/:id", deleteDetodont);



export default router;
