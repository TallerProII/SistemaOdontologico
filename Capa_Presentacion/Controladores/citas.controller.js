import CN_Cita from "../../Capa_Negocio/cn_citas.js";

var objCita = new CN_Cita();

// CREAR
export const createCita = async (req, res) => {
  try {
    const { pacienteId, medicoId, tratamiento, fecha, hora } = req.body;
    console.log(typeof pacienteId, typeof medicoId, typeof tratamiento,typeof fecha,typeof hora); 
    const result = await objCita.createCita(pacienteId, medicoId, tratamiento, fecha, hora);
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};

//ACTUALIZAR CITA
export const updateCita = async (req, res) => {
  try {
    const { id } = req.params;  //const id = req.params.id;
    const { medicoId, estado, tratamiento, fecha, hora } = req.body;

    const result = await objCita.updateCita(id, medicoId, estado, tratamiento, fecha, hora);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });

    res.json(result);
    // const [rows] = await pool.query("SELECT * FROM Cita WHERE id = ?", [id]);

    // res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};

//ELIMINAR

export const deleteCita = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCita.deleteCita(id);

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};
//Listar cita
export const listCita = async (req, res) => {
  try {
    const respuesta = await objCita.listCita();
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};

