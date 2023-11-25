import CN_exgeneral from "../../Capa_Negocio/cn_exgeneral.js";

var objCapaNegocio = new CN_exgeneral();

//Listar 
export const listexgeneral = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listexgeneral(DNI);  // Aquí asumo que listexgeneral está definido en objCapaDato
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};

// CREAR 
export const createexgeneral = async (req, res) => {
  try {
    const { DNI, PESO, TALLA, BIOTIPO, PIEL, CABELLO, UNAS, PRESION, PULSO, FRECUENCIA, TEMPERATURA } = req.body;
    const result = await objCapaNegocio.createexgeneral ( DNI, PESO, TALLA, BIOTIPO, PIEL, CABELLO, UNAS, PRESION, PULSO, FRECUENCIA, TEMPERATURA );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};

//ACTUALIZAR 
export const updateexgeneral = async (req, res) => {
  try {
    const { CODIGO } = req.params;  //const id = req.params.id;
    const { PESO, TALLA, BIOTIPO, PIEL, CABELLO, UNAS, PRESION, PULSO, FRECUENCIA, TEMPERATURA } = req.body;

    const result = await objCapaNegocio.updateexgeneral ( CODIGO, PESO, TALLA, BIOTIPO, PIEL, CABELLO, UNAS, PRESION, PULSO, FRECUENCIA, TEMPERATURA );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};

//ELIMINAR 

export const deleteexgeneral = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deleteexgeneral(id);

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};


