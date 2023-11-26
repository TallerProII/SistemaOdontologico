import CN_oclusion from "../../Capa_Negocio/cn_oclusion.js";

var objCapaNegocio = new CN_oclusion();

//Listar
export const listoclusion = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listoclusion(DNI); 
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR
export const createoclusion = async (req, res) => {
  try {
    const { DNI, MOLARDER, MOLARIZQ, CANINADER, CANINAIZQ, OVERBITE, OVERJET, RELCENTRICA, GCANDER, GCANIZQ, GANT, SAGITAL, VERTICAL, HORIZONTAL, POSTURAL, OCLUSIAL, ESPACLIBRE } = req.body;
    const result = await objCapaNegocio.createoclusion ( DNI, MOLARDER, MOLARIZQ, CANINADER, CANINAIZQ, OVERBITE, OVERJET, RELCENTRICA, GCANDER, GCANIZQ, GANT, SAGITAL, VERTICAL, HORIZONTAL, POSTURAL, OCLUSIAL, ESPACLIBRE );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ACTUALIZAR
export const updateoclusion = async (req, res) => {
  try {
    const { CODIGO } = req.params;
    const { MOLARDER, MOLARIZQ, CANINADER, CANINAIZQ, OVERBITE, OVERJET, RELCENTRICA, GCANDER, GCANIZQ, GANT, SAGITAL, VERTICAL, HORIZONTAL, POSTURAL, OCLUSIAL, ESPACLIBRE } = req.body;
    const result = await objCapaNegocio.updateoclusion ( CODIGO, MOLARDER, MOLARIZQ, CANINADER, CANINAIZQ, OVERBITE, OVERJET, RELCENTRICA, GCANDER, GCANIZQ, GANT, SAGITAL, VERTICAL, HORIZONTAL, POSTURAL, OCLUSIAL, ESPACLIBRE );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ELIMINAR
export const deleteoclusion = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deleteoclusion(id);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};


