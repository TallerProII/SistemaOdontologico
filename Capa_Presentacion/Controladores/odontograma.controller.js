import CN_odontograma from "../../Capa_Negocio/cn_odontograma.js";

var objCapaNegocio = new CN_odontograma();

//Listar 
export const listodontograma = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listodontograma(DNI);
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR 
export const createodontograma = async (req, res) => {
  try {
    const { DNI, FASE, ESPECIF, OBSERV } = req.body;
    const result = await objCapaNegocio.createodontograma ( DNI, FASE, ESPECIF, OBSERV );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ACTUALIZAR 
export const updateodontograma = async (req, res) => {
  try {
    const { CODIGO } = req.params;
    const { FASE, ESPECIF, OBSERV } = req.body;
    const result = await objCapaNegocio.updateodontograma ( CODIGO, FASE, ESPECIF, OBSERV );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ELIMINAR 
export const deleteodontograma = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deleteodontograma(id);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};