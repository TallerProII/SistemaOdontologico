import CN_resumen from "../../Capa_Negocio/cn_resumen.js";

var objCapaNegocio = new CN_resumen();

//Listar
export const listresumen = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listresumen(DNI); 
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR
export const createresumen = async (req, res) => {
  try {
    const { DNI, TITULO, DETALLE } = req.body;
    const result = await objCapaNegocio.createresumen ( DNI, TITULO, DETALLE );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ACTUALIZAR
export const updateresumen = async (req, res) => {
  try {
    const { CODIGO } = req.params;
    const { TITULO, DETALLE } = req.body;
    const result = await objCapaNegocio.updateresumen ( CODIGO, TITULO, DETALLE );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ELIMINAR
export const deleteresumen = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deleteresumen(id);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};