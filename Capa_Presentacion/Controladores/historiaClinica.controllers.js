import CN_HistoriaClinica from "../../Capa_Negocio/cn_historiaClinica.js";

var objHistoriaClinica = new CN_HistoriaClinica();

// LISTAR HISTORIAS CLÍNICAS
export const listHistoriaClinica = async (req, res) => {
  try {
    const respuesta = await objHistoriaClinica.listHistoriaClinica();
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - ", error: error.message });
  }
};

// CREAR
export const createHistoriaClinica = async (req, res) => {
  try {
    const { IDPaciente, Fecha, Hora, Ectoscopia } = req.body;
    const result = await objHistoriaClinica.createHistoriaClinica(IDPaciente, Fecha, Hora, Ectoscopia);
    res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - ", error: error.message });
  }
};

// ACTUALIZAR HISTORIA CLÍNICA
export const updateHistoriaClinica = async (req, res) => {
  try {
    const { id } = req.params;
    const { IDPaciente, Fecha, Hora, Ectoscopia } = req.body;

    const result = await objHistoriaClinica.updateHistoriaClinica(id, IDPaciente, Fecha, Hora, Ectoscopia);

    if (result.affectedRows === 0) return res.status(404).json({ message: result.message });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - ", error: error.message });
  }
};

// ELIMINAR
export const deleteHistoriaClinica = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await objHistoriaClinica.deleteHistoriaClinica(id);

    if (result.affectedRows <= 0) return res.status(404).json({ message: result.message });

    res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - ", error: error.message });
  }
};
