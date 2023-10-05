import CN_Cita from "../../Capa_Negocio/cn_citas";

var objCita = new CN_Cita();

//ACTUALIZAR CITA
export const updateCita = async (req, res) => {
    try {
      const { id } = req.params;  //const id = req.params.id;
      const { name, salary } = req.body;
  
      const result = await objCita.updateCita(id, name, salary);
      
      if (result.affectedRows === 0)
        return res.status(404).json({ message: result.message });
  
      res.json(result);
      // const [rows] = await pool.query("SELECT * FROM Cita WHERE id = ?", [id]);
  
      // res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Algo salió mal en CP" });
    }
  };

  // CREAR
export const createCita = async (req, res) => {
  try {
      const { pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora } = req.body;
      const result = await objCNCita.createCita(pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora);
      res.status(201).json({ id: result.id });
  } catch (error) {
      return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};