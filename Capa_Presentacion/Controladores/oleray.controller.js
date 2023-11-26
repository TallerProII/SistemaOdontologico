import CN_oleray from "../../Capa_Negocio/cn_oleray.js";

var objCapaNegocio = new CN_oleray();

//Listar
export const listoleray = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listoleray(DNI); 
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR
export const createoleray = async (req, res) => {
  try {
    const { DNI, PORCENTAJE, IHO, ESTADO } = req.body;
    const result = await objCapaNegocio.createoleray ( DNI, PORCENTAJE, IHO, ESTADO );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ACTUALIZAR
export const updateoleray = async (req, res) => {
  try {
    const { CODIGO } = req.params;
    const { PORCENTAJE, IHO, ESTADO } = req.body;
    const result = await objCapaNegocio.updateoleray ( CODIGO, PORCENTAJE, IHO, ESTADO );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ELIMINAR
export const deleteoleray = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deleteoleray(id);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};