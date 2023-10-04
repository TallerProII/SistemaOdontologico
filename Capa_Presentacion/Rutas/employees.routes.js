import { Router } from "express";
import {
  createEmployee,
  index,
  getEmployees,
  deleteEmployee,  
  updateEmployee
  // getEmployee,
} from "../Controladores/employees.controller.js";

const router = Router();

//Index
router.get("/", index);

// GET todos los empleados
router.get("/getEmployees", getEmployees);

// INSERT un empleado
router.post("/createEmployee", createEmployee);

// DELETE un empleado
router.delete("/deleteEmployees/:id", deleteEmployee);

// UPDATE un empleado
router.patch("/updateEmployee/:id", updateEmployee);

// GET un empleado
// router.get("/employees/:id", getEmployee);


export default router;
