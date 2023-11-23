import CN_detalleOdontograma from "../../Capa_Negocio/cn_detalleOdontograma.js";

var objCapaNegocio = new CN_detalleOdontograma();

//Listar DETALLE ODONTOLOGICO
export const listDetodont = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listDetodont(DNI);  // Aquí asumo que listDetodont está definido en objCapaDato
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR DETALLE ODONTOLOGICO
export const createDetodont = async (req, res) => {
  try {
    const { DNI, tratamiento, cuadrante, diente, sector, estado, notas } = req.body;
    const result = await objCapaNegocio.createDetodont ( DNI, tratamiento, cuadrante, diente, sector, estado, notas);
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};

//ACTUALIZAR DETALLE ODONTOLOGICO
export const updateDetodont = async (req, res) => {
  try {
    const { id } = req.params;  //const id = req.params.id;
    const { tratamiento, cuadrante, diente, sector, estado, notas } = req.body;

    const result = await objCapaNegocio.updateDetodont ( id, tratamiento, cuadrante, diente, sector, estado, notas);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};

//ELIMINAR DETALLE ODONTOLOGICO

export const deleteDetodont = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deleteDetodont(id);

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};


