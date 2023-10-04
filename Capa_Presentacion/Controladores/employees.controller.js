// import { pool } from "../App_Start/db.js";
import CN_Employee from "../../Capa_Negocio/cn_employee.js";

export const index = (req, res) => res.json({ message: "welcome to my api" });
var objEmployee = new CN_Employee();

//LISTAR
export const getEmployees = async (req, res) => {
  try {
    const respuesta = await objEmployee.getEmployees();
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};

//CREAR
export const createEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const result = await objEmployee.createEmployee(name,salary);
    res.status(201).json({ id: result.id, name, salary });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};

//ELIMINAR
export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objEmployee.deleteEmployee(id);

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};

//ACTUALIZAR
export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;  //const id = req.params.id;
    const { name, salary } = req.body;

    const result = await objEmployee.updateEmployee(id, name, salary);
    
    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });

    res.json(result);
    // const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

    // res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};
