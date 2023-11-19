
export default function validarDatos(reglas, params) {
    if (!reglas || !Array.isArray(reglas)) {
      throw new Error('Se esperaba un array de reglas.');
    }
  
    const resultadoValidacion = {
      isValid: true,
      message: "Datos válidos",
    };
  
    reglas.forEach((regla) => {
      const parametro = params[regla.parametro];
      
      if (!regla.validaciones || !Array.isArray(regla.validaciones)) {
        throw new Error(`Se esperaba un array de validaciones para el campo ${regla.parametro}.`);
      }
  
      regla.validaciones.forEach((validacion) => {
        const esValido = validacion.func(parametro);
  
        if (!esValido) {
          resultadoValidacion.isValid = false;
          resultadoValidacion.message = `Error en el campo ${regla.parametro}. ${validacion.mensaje}`;
        }
      });
    });
  
    return resultadoValidacion;
}