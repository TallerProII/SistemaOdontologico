import { Router } from "express";
import {
  createdolor,
  listdolor,
  updatedolor,
  deletedolor
} from "../Controladores/dolor.controller.js";

const router = Router();


// Crear
router.post("/createdolor", createdolor);
//Actualizar
router.patch("/updatedolor/:CODIGO", updatedolor);
//Listar
router.get("/listdolor/:DNI", listdolor);
// DELETE
router.delete("/deletedolor/:id", deletedolor);



export default router;
