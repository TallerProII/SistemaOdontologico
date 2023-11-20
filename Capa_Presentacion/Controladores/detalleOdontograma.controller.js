import CN_detalleOdontograma from "../../Capa_Negocio/cn_detalleOdontograma.js";

var objCapaNegocio = new CN_detalleOdontograma();

//Listar DETALLE ODONTOLOGICO
export const listDetodont = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listDetodont(DNI);  // Aquí asumo que listDetodont está definido en objCapaDato
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP\n" + error });
  }
};
// CREAR DETALLE ODONTOLOGICO
export const createDetodont = async (req, res) => {
  try {
    const { DNI, tratamiento, cuadrante, diente, sector, estado, notas } = req.body;
    const result = await objCapaNegocio.createDetodont( DNI, tratamiento, cuadrante, diente, sector, estado, notas);
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP\n"+error+"" });
  }
};

//ACTUALIZAR DETALLE ODONTOLOGICO
export const updateDetodont = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};

//ELIMINAR DETALLE ODONTOLOGICO

export const deleteDetodont = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};


