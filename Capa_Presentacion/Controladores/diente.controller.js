import CN_diente from "../../Capa_Negocio/cn_diente.js";

var objCapaNegocio = new CN_diente();

//Listar
export const listdiente = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listdiente(DNI);  // Aquí asumo que listdiente está definido en objCapaDato
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR
export const creatediente = async (req, res) => {
  try {
    const { DNI, NUMERO, COLOR, FORMA, TAMANO, DIASTEMA, EDENTULA, POSANORMAL, FACDESGASTE, LINMEDIA, OTROS } = req.body;
    const result = await objCapaNegocio.creatediente ( DNI, NUMERO, COLOR, FORMA, TAMANO, DIASTEMA, EDENTULA, POSANORMAL, FACDESGASTE, LINMEDIA, OTROS );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};

//ACTUALIZAR
export const updatediente = async (req, res) => {
  try {
    const { CODIGO } = req.params;  //const id = req.params.id;
    const { NUMERO, COLOR, FORMA, TAMANO, DIASTEMA, EDENTULA, POSANORMAL, FACDESGASTE, LINMEDIA, OTROS } = req.body;

    const result = await objCapaNegocio.updatediente ( CODIGO, NUMERO, COLOR, FORMA, TAMANO, DIASTEMA, EDENTULA, POSANORMAL, FACDESGASTE, LINMEDIA, OTROS );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};

//ELIMINAR

export const deletediente = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deletediente(id);

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};


