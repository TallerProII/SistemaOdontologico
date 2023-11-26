import CN_enfermedad from "../../Capa_Negocio/cn_enfermedad.js";

var objCapaNegocio = new CN_enfermedad();

//Listar
export const listenfermedad = async (req, res) => {
  try {
    const respuesta = await objCapaNegocio.listenfermedad();
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR
export const createenfermedad = async (req, res) => {
  try {
    const { CIE, CODIGO, DESC} = req.body;
    const result = await objCapaNegocio.createenfermedad ( CIE, CODIGO, DESC);
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ACTUALIZAR
export const updateenfermedad = async (req, res) => {
  try {
    const { CODIGO } = req.params;
    const { CIE, ECODIGO, DESC} = req.body;
    const result = await objCapaNegocio.updateenfermedad ( CODIGO, CIE, ECODIGO, DESC);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ELIMINAR
export const deleteenfermedad = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deleteenfermedad(id);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};