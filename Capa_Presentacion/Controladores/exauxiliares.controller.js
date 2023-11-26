import CN_exauxiliares from "../../Capa_Negocio/cn_exauxiliares.js";

var objCapaNegocio = new CN_exauxiliares();

//Listar
export const listexauxiliares = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listexauxiliares(DNI);
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR
export const createexauxiliares = async (req, res) => {
  try {
    const { DNI, TIPO, DESC } = req.body;
    const result = await objCapaNegocio.createexauxiliares ( DNI, TIPO, DESC );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ACTUALIZAR
export const updateexauxiliares = async (req, res) => {
  try {
    const { CODIGO } = req.params;
    const { TIPO, DESC } = req.body;
    const result = await objCapaNegocio.updateexauxiliares ( CODIGO, TIPO, DESC );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ELIMINAR
export const deleteexauxiliares = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deleteexauxiliares(id);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};