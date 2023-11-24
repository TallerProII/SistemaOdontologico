import CN_ from "../../Capa_Negocio/cn_.js";

var objCD_ = new CN_();

//LISTAR
export const getDatosCita = async (req, res) => {
  try {
    const respuesta = await objCD_.getDatosCita();
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};