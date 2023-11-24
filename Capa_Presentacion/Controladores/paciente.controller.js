import CN_PACIENTE from "../../Capa_Negocio/cn_paciente.js";

var objCapaNegocio = new CN_PACIENTE();

//Listar
export const listPaciente = async (req, res) => {
  try {
    const respuesta = await objCapaNegocio.listPaciente();
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+error });
  }
};
// CREAR
export const createPaciente = async (req, res) => {
  try {
    const {  NOMBRES, APELLIDOS, DNI, SEXO, RELIGION,RAZA,FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA } = req.body;
    const result = await objCapaNegocio.createPaciente(  NOMBRES, APELLIDOS, DNI, SEXO, RELIGION,RAZA,FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA);
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+error+"" });
  }
};

//ACTUALIZAR
export const updatePaciente = async (req, res) => {
  try {
    const { id } = req.params;  //const id = req.params.id;
    const {  NOMBRES, APELLIDOS, DNI, SEXO, RELIGION,RAZA,FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA } = req.body;

    const result = await objCapaNegocio.updatePaciente( id, NOMBRES, APELLIDOS, DNI, SEXO, RELIGION,RAZA,FECHA, LUGAR, RESIDENCIA, GRADO, OCUPACION, CIVIL, CORREO, TELEFONO, ESTADO, ECTOSCOPIA);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: result.message });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - "+error });
  }
};

//ELIMINAR

export const deletePaciente = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};


