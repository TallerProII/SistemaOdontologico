import CN_Tratamiento from "../../Capa_Negocio/cn_tratamiento.js";

var objTratamiento = new CN_Tratamiento();

//LISTAR
export const listTratamiento = async (req, res) => {
  try {
    const respuesta = await objTratamiento.listTratamiento();
    res.json(respuesta["rows"]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+ error  });
  }
};

//CREAR
export const createTratamiento = async (req, res) => {
  try {
    const { Tratamiento, tartDesc } = req.body;
    const result = await objTratamiento.createTratamiento(Tratamiento, tartDesc);
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+ error  });
  }
};

//ACTUALIZAR
export const updateTratamiento = async (req, res) => {
  try {
    const { IDTratamiento } = req.params;  //const IDTratamiento = req.params.IDTratamiento;
    const { Tratamiento, tartDesc } = req.body;

    const result = await objTratamiento.updateTratamiento(IDTratamiento, Tratamiento, tartDesc);
    
    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+ error  });
  }
};

//ELIMINAR
export const deleteTratamiento = async (req, res) => {
  try {
    const { IDTratamiento } = req.params;
    const result = await objTratamiento.deleteTratamiento(IDTratamiento);

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: result.message });
    }
    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+ error  });
  }
};


