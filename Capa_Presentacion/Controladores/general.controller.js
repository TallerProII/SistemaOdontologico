import CN_general from "../../Capa_Negocio/cn_general.js";

var objCapaNegocio = new CN_general();

//Listar
export const listgeneral = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listgeneral(DNI); 
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};

// CREAR
export const creategeneral = async (req, res) => {
  try {
    const { DNI, TIPO, ESTADO, PIEZAS, DESC } = req.body;
    const result = await objCapaNegocio.creategeneral ( DNI, TIPO, ESTADO, PIEZAS, DESC );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};

//ACTUALIZAR
export const updategeneral = async (req, res) => {
  try {
    const { CODIGO } = req.params;
    const { TIPO, ESTADO, PIEZAS, DESC } = req.body;

    const result = await objCapaNegocio.updategeneral ( CODIGO, TIPO, ESTADO, PIEZAS, DESC );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};

//ELIMINAR
export const deletegeneral = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deletegeneral(id);

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};


