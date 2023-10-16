import { Router } from "express";
import {
  createHistoriaClinica,
  updateHistoriaClinica,
  deleteHistoriaClinica,
  listHistoriaClinica,
} from "../Controladores/historiaClinica.controllers.js";

const router = Router();

// Rutas para historias clínicas
router.post("/historiasclinicas", createHistoriaClinica);
router.put("/historiasclinicas/:id", updateHistoriaClinica);
router.delete("/historiasclinicas/:id", deleteHistoriaClinica);
router.get("/historiasclinicas", listHistoriaClinica);

export default router;
