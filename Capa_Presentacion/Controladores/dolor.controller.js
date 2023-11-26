import CN_dolor from "../../Capa_Negocio/cn_dolor.js";

var objCapaNegocio = new CN_dolor();

//Listar
export const listdolor = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listdolor(DNI);
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR
export const createdolor = async (req, res) => {
  try {
    const { DNI, MUSCULO, TEMPORAL, MASETERO, PTEINTERNO, PTEEXTERNO, DIGASTRICO, ESTERNOC } = req.body;
    const result = await objCapaNegocio.createdolor ( DNI, MUSCULO, TEMPORAL, MASETERO, PTEINTERNO, PTEEXTERNO, DIGASTRICO, ESTERNOC );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ACTUALIZAR
export const updatedolor = async (req, res) => {
  try {
    const { CODIGO } = req.params;
    const { MUSCULO, TEMPORAL, MASETERO, PTEINTERNO, PTEEXTERNO, DIGASTRICO, ESTERNOC } = req.body;
    const result = await objCapaNegocio.updatedolor ( CODIGO, MUSCULO, TEMPORAL, MASETERO, PTEINTERNO, PTEEXTERNO, DIGASTRICO, ESTERNOC );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ELIMINAR
export const deletedolor = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deletedolor(id);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};