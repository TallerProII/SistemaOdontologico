import CN_antecedente from "../../Capa_Negocio/cn_antecedente.js";

var objCapaNegocio = new CN_antecedente();

//Listar 
export const listantecedente = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listantecedente(DNI); 
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR 
export const createantecedente = async (req, res) => {
  try {
    const { DNI, personal, patologico, alergia, familiar } = req.body;
    const result = await objCapaNegocio.createantecedente ( DNI, personal, patologico, alergia, familiar );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ACTUALIZAR 
export const updateantecedente = async (req, res) => {
  try {
    const { CODIGO } = req.params;  //const id = req.params.id;
    const { personal, patologico, alergia, familiar } = req.body;
    const result = await objCapaNegocio.updateantecedente ( CODIGO, personal, patologico, alergia, familiar );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ELIMINAR 
export const deleteantecedente = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deleteantecedente(id);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};