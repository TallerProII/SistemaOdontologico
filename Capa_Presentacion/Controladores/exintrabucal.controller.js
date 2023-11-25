import CN_exintrabucal from "../../Capa_Negocio/cn_exintrabucal.js";

var objCapaNegocio = new CN_exintrabucal();

//Listar
export const listexintrabucal = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listexintrabucal(DNI);  // Aquí asumo que listexintrabucal está definido en objCapaDato
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR
export const createexintrabucal = async (req, res) => {
  try {
    const { DNI, LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA } = req.body;
    const result = await objCapaNegocio.createexintrabucal ( DNI, LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};

//ACTUALIZAR
export const updateexintrabucal = async (req, res) => {
  try {
    const { CODIGO } = req.params;  //const id = req.params.id;
    const { LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA } = req.body;

    const result = await objCapaNegocio.updateexintrabucal ( CODIGO, LABIOS, PALADAR, CARRILLO, PISO, LENGUA, OROFARINGE, FRENILLO, SALIVA );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};

//ELIMINAR

export const deleteexintrabucal = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deleteexintrabucal(id);

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};


