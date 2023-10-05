import CN_Cita from "../../Capa_Negocio/cn_citas.js";

var objCita = new CN_Cita();

//ACTUALIZAR CITA
export const updateCita = async (req, res) => {
  try {
    const { id } = req.params;  //const id = req.params.id;
    const { pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora } = req.body;

    const result = await objCita.updateCita(id, pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora);

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
    console.log(typeof pacienteId, typeof medicoId, typeof estado, typeof tratamiento, typeof observaciones,typeof fecha,typeof hora); 
    const result = await objCita.createCita(pacienteId, medicoId, estado, tratamiento, observaciones, fecha, hora);
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};