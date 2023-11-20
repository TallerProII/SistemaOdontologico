class CN_Utilidades {

    citEstado(params) {
        const OPCION = {
            1: "Activo",
            2: "Finalizado",
            3: "cancelado"
       }
       const OP_DEFAULT = "default"
       let result = OPCION[params] || OP_DEFAULT
       return result
    }
}

export default CN_Utilidades;