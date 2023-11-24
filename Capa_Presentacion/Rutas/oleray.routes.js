import { Router } from "express";
import {
  createoleray,
  listoleray,
  updateoleray,
  deleteoleray
} from "../Controladores/oleray.controller.js";

const router = Router();


// Crear
router.post("/createoleray", createoleray);
//Actualizar
router.patch("/updateoleray/:CODIGO", updateoleray);
//Listar
router.get("/listoleray/:DNI", listoleray);
// DELETE
router.delete("/deleteoleray/:id", deleteoleray);



export default router;
