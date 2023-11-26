import CN_exextrabucal from "../../Capa_Negocio/cn_exextrabucal.js";

var objCapaNegocio = new CN_exextrabucal();

//Listar
export const listexextrabucal = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listexextrabucal(DNI);
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR
export const createexextrabucal = async (req, res) => {
  try {
    const { DNI, FACIE, CRANEO, CARA, TERCIO, BILATERAL, PERFIL, TRAYECTORIA, RUIDOS, PALPACION, GANGLIOS, APERTURA } = req.body;
    const result = await objCapaNegocio.createexextrabucal ( DNI, FACIE, CRANEO, CARA, TERCIO, BILATERAL, PERFIL, TRAYECTORIA, RUIDOS, PALPACION, GANGLIOS, APERTURA );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ACTUALIZAR
export const updateexextrabucal = async (req, res) => {
  try {
    const { CODIGO } = req.params;
    const { FACIE, CRANEO, CARA, TERCIO, BILATERAL, PERFIL, TRAYECTORIA, RUIDOS, PALPACION, GANGLIOS, APERTURA } = req.body;
    const result = await objCapaNegocio.updateexextrabucal ( CODIGO, FACIE, CRANEO, CARA, TERCIO, BILATERAL, PERFIL, TRAYECTORIA, RUIDOS, PALPACION, GANGLIOS, APERTURA );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ELIMINAR
export const deleteexextrabucal = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deleteexextrabucal(id);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};