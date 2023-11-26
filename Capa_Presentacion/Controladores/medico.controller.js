import CN_medico from "../../Capa_Negocio/cn_medico.js";

var objCapaNegocio = new CN_medico();

//Listar 
export const listmedico = async (req, res) => {
  try {
    const respuesta = await objCapaNegocio.listmedico();
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR 
export const createmedico = async (req, res) => {
  try {
    const { USUARIO, NOMBRE, APELLIDO, DNI, DIREC, TELEF, CORREO, SEXO, FECHA, ESPECIALIDAD, CIVIL, CUENTA, CONTRA, ESTADO } = req.body;
    const result = await objCapaNegocio.createmedico ( USUARIO, NOMBRE, APELLIDO, DNI, DIREC, TELEF, CORREO, SEXO, FECHA, ESPECIALIDAD, CIVIL, CUENTA, CONTRA, ESTADO );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ACTUALIZAR 
export const updatemedico = async (req, res) => {
  try {
    const { CODIGO } = req.params; 
    const { USUARIO, NOMBRE, APELLIDO, DNI, DIREC, TELEF, CORREO, SEXO, FECHA, ESPECIALIDAD, CIVIL, CUENTA, CONTRA, ESTADO } = req.body;
    const result = await objCapaNegocio.updatemedico ( CODIGO, USUARIO, NOMBRE, APELLIDO, DNI, DIREC, TELEF, CORREO, SEXO, FECHA, ESPECIALIDAD, CIVIL, CUENTA, CONTRA, ESTADO );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
//ELIMINAR 
export const deletemedico = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deletemedico(id);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};