import CN_detenfermedad from "../../Capa_Negocio/cn_detenfermedad.js";

var objCapaNegocio = new CN_detenfermedad();

//Listar
export const listdetenfermedad = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listdetenfermedad(DNI);
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR
export const createdetenfermedad = async (req, res) => {
  try {
    const { DNI, ENFERMEDAD, DESC} = req.body;
    const result = await objCapaNegocio.createdetenfermedad ( DNI, ENFERMEDAD, DESC);
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ACTUALIZAR
export const updatedetenfermedad = async (req, res) => {
  try {
    const { CODIGO } = req.params;
    const { ENFERMEDAD, DESC} = req.body;
    const result = await objCapaNegocio.updatedetenfermedad ( CODIGO, ENFERMEDAD, DESC);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ELIMINAR
export const deletedetenfermedad = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deletedetenfermedad(id);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};