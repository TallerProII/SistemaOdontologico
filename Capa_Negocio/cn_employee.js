import CD_Employee from "../Capa_Datos/cd_employee.js";

var objCapaDato = new CD_Employee();

class CN_Employee {

    //sintaxis de un metodo asincrono
    async getEmployees() {
        return await objCapaDato.getEmployees();
    }

    async createEmployee(name,salary) {
        //filtos - reglas de negocio


        return await objCapaDato.createEmployee(name,salary);
    }

    // export const createEmployee = async (req, res) => {
    //     try {
    //         const { name, salary } = req.body;
    //         const [rows] = await pool.query(
    //         "INSERT INTO employee (name, salary) VALUES (?, ?)",
    //         [name, salary]
    //         );
    //         res.status(201).json({ id: rows.insertId, name, salary });
    //     } catch (error) {
    //         return res.status(500).json({ message: "Something goes wrong" });
    //     }
    // };

}

export default CN_Employee;