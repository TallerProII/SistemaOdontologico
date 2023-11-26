import CNFamiliar from "../../Capa_Negocio/cn_Familiar.js";

var objCapaNegocio = new CNFamiliar();
//Listar
export const listFamiliar = async (req, res) => {
  try {
    const { DNI }= req.params;
    const respuesta = await objCapaNegocio.listFamiliar(DNI);
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+error });
  }
};
// CREAR
export const createFamiliar = async (req, res) => {
  try {
    const {  DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono } = req.body;
    const result = await objCapaNegocio.createFamiliar (  DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+error+"" });
  }
};
//ACTUALIZAR
export const updateFamiliar = async (req, res) => {
  try {
    const { id } = req.params;
    const {   nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono } = req.body;
    const result = await objCapaNegocio.updateFamiliar (  id,  nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+error });
  }
};
//ELIMINAR
export const deleteFamiliar = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deleteFamiliar(id);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};