import CN_biologica from "../../Capa_Negocio/cn_biologica.js";

var objCapaNegocio = new CN_biologica();

//Listar
export const listbiologica = async (req, res) => {
  try {
    const { DNI } = req.params;
    const respuesta = await objCapaNegocio.listbiologica(DNI);  // Aquí asumo que listbiologica está definido en objCapaDato
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};
// CREAR
export const createbiologica = async (req, res) => {
  try {
    const { DNI, APETITO, DEPOSICION, SED, ORINA, SUENO } = req.body;
    const result = await objCapaNegocio.createbiologica ( DNI, APETITO, DEPOSICION, SED, ORINA, SUENO );
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};

//ACTUALIZAR
export const updatebiologica = async (req, res) => {
  try {
    const { CODIGO } = req.params;  //const id = req.params.id;
    const { APETITO, DEPOSICION, SED, ORINA, SUENO } = req.body;

    const result = await objCapaNegocio.updatebiologica ( CODIGO, APETITO, DEPOSICION, SED, ORINA, SUENO );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};

//ELIMINAR

export const deletebiologica = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objCapaNegocio.deletebiologica(id);

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - " + error });
  }
};


