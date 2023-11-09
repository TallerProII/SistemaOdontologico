import CD_Paciente from "../Capa_Datos/cd_paciente.js";
import CD_Medico from "../Capa_Datos/cd_medico.js";
import CD_Cita from "../Capa_Datos/cd_citas.js";

var objCDato_Cita = new CD_Cita();
var objCDato_Paciente = new CD_Paciente();
var objCDato_Medico = new CD_Medico();

var persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    direccion: {
      calle: "Calle Principal",
      ciudad: "Ciudad Ejemplo",
      codigoPostal: "12345"
    },
    intereses: ["programación", "lectura", "deportes"]
};
var cita = {
    oPaciente: objCDato_Paciente,
    oMedico: objCDato_Medico,
    oCita: objCDato_Cita
}


class CN_ {

    //LISTAR
    async getDatosCita() {
        
        cita.oPaciente = await objCDato_Paciente.listPaciente();
        cita.oMedico = await objCDato_Medico.listMedico();
        cita.oCita = await objCDato_Cita.listCita();
        return cita;
    }
}

export default CN_;