import { Router } from "express";
import {
  createEmployee,
  index,
  getEmployees,
  deleteEmployee
  // getEmployee,
  // updateEmployee,
} from "../Controladores/employees.controller.js";

const router = Router();

//Index
router.get("/", index);

// GET all Employees
router.get("/getEmployees", getEmployees);

// INSERT An Employee
router.post("/createEmployee", createEmployee);

// GET An Employee
// router.get("/employees/:id", getEmployee);

// // DELETE An Employee
router.delete("/deleteEmployees/:id", deleteEmployee);

// router.patch("/employees/:id", updateEmployee);

export default router;
