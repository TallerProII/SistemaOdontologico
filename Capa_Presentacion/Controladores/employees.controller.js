// import { pool } from "../App_Start/db.js";
import CN_Employee from "../../Capa_Negocio/cn_employee.js";

export const index = (req, res) => res.json({ message: "welcome to my api" });
var objEmployee = new CN_Employee();

export const getEmployees = async (req, res) => {
  try {
    const respuesta = await objEmployee.getEmployees();
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};

export const createEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const result = await objEmployee.createEmployee(name,salary);
    res.status(201).json({ id: result.id, name, salary });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};

// export const deleteEmployee = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);

//     if (rows.affectedRows <= 0) {
//       return res.status(404).json({ message: "Employee not found" });
//     }

//     res.sendStatus(204);
//   } catch (error) {
//     return res.status(500).json({ message: "Something goes wrong" });
//   }
// };

// export const getEmployees = async (req, res) => {
//   try {
//     const [rows] = await pool.query("SELECT * FROM employee");
//     res.json(rows);
//   } catch (error) {
//     return res.status(500).json({ message: "Something goes wrong" });
//   }
// };

// export const getEmployee = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
//       id,
//     ]);

//     if (rows.length <= 0) {
//       return res.status(404).json({ message: "Employee not found" });
//     }

//     res.json(rows[0]);
//   } catch (error) {
//     return res.status(500).json({ message: "Something goes wrong" });
//   }
// };

// export const deleteEmployee = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);

//     if (rows.affectedRows <= 0) {
//       return res.status(404).json({ message: "Employee not found" });
//     }

//     res.sendStatus(204);
//   } catch (error) {
//     return res.status(500).json({ message: "Something goes wrong" });
//   }
// };

// export const createEmployee = async (req, res) => {
//   try {
//     const { name, salary } = req.body;
//     const [rows] = await pool.query(
//       "INSERT INTO employee (name, salary) VALUES (?, ?)",
//       [name, salary]
//     );
//     res.status(201).json({ id: rows.insertId, name, salary });
//   } catch (error) {
//     return res.status(500).json({ message: "Something goes wrong" });
//   }
// };

// export const updateEmployee = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, salary } = req.body;

//     const [result] = await pool.query(
//       "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
//       [name, salary, id]
//     );

//     if (result.affectedRows === 0)
//       return res.status(404).json({ message: "Employee not found" });

//     const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
//       id,
//     ]);

//     res.json(rows[0]);
//   } catch (error) {
//     return res.status(500).json({ message: "Something goes wrong" });
//   }
// };
