import CN_PACIENTE from "../../Capa_Negocio/cn_paciente.js";

var objCapaNegocio = new CN_PACIENTE();

//Listar PACIENTE
export const listPaciente = async (req, res) => {
  try {
    const respuesta = await objCapaNegocio.listPaciente();
    res.json(respuesta["rows"]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+error });
  }
};
// CREAR PACIENTE
export const createPaciente = async (req, res) => {
  try {
    const {  NOMBRES, APELLIDOS, DNI, SEXO, RELIGION,RAZA,FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA } = req.body;
    const result = await objCapaNegocio.createPaciente(  NOMBRES, APELLIDOS, DNI, SEXO, RELIGION,RAZA,FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA);
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+error+"" });
  }
};

//ACTUALIZAR PACIENTE
export const updatePaciente = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};

//ELIMINAR PACIENTE

export const deletePaciente = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};


