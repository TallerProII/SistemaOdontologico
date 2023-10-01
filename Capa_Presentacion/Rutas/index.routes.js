import { Router } from "express";
import { index, ping } from "../Controladores/index.rotes.js";

const router = Router();

router.get("/", index);

router.get("/ping", ping);

export default router;
