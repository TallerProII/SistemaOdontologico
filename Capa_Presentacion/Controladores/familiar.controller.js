import CN_familiar from "../../Capa_Negocio/cn_familiar.js";

var objCapaNegocio = new CN_familiar();

//Listar FAMILIAR
export const listFamiliar = async (req, res) => {
  try {
    const { DNI }= req.params;
    const respuesta = await objCapaNegocio.listFamiliar(DNI);
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+error });
  }
};
// CREAR FAMILIAR
export const createFamiliar = async (req, res) => {
  try {
    const {  DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono } = req.body;
    const result = await objCapaNegocio.createFamiliar (  DNI, nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+error+"" });
  }
};

//ACTUALIZAR FAMILIAR
export const updateFamiliar = async (req, res) => {
  try {
    const { id } = req.params;  //const id = req.params.id;
    const {   nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono } = req.body;

    const result = await objCapaNegocio.updateFamiliar (  id,  nombres, apellidos, DNIF, parentezco, ocupacion, correo, telefono );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+error });
  }
};

//ELIMINAR FAMILIAR

export const deleteFamiliar = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};


