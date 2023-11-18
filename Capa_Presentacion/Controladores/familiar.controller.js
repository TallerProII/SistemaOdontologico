import CN_familiar from "../../Capa_Negocio/cn_familiar.js";

var objCapaNegocio = new CN_familiar();

//Listar DETALLE ODONTOLOGICO
export const listFamiliar = async (req, res) => {
  try {
    const { DNI }= req.params;
    const respuesta = await objCapaNegocio.listFamiliar(DNI);
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+error });
  }
};
// CREAR DETALLE ODONTOLOGICO
export const createFamiliar = async (req, res) => {
  try {
    const {  DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono } = req.body;
    const result = await objCapaNegocio.createFamiliar(  DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+error+"" });
  }
};

//ACTUALIZAR DETALLE ODONTOLOGICO
export const updateFamiliar = async (req, res) => {
  try {
    // const { id } = req.params;  //const id = req.params.id;
    // const { medicoId, estado, tratamiento, fecha, hora } = req.body;

    // const result = await objCita.updateCita(id, medicoId, estado, tratamiento, fecha, hora);

    // if (result.affectedRows === 0)
    //   return res.status(404).json({ message: result.message });

    // res.json(result);
    // const [rows] = await pool.query("SELECT * FROM Cita WHERE id = ?", [id]);

    // res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};

//ELIMINAR DETALLE ODONTOLOGICO

export const deleteFamiliar = async (req, res) => {
  try {
    // const { id } = req.params;
    // const result = await objCita.deleteCita(id);

    // if (result.affectedRows <= 0) {
    //   return res.status(404).json({ message: result.message });
    // }
    // res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};


