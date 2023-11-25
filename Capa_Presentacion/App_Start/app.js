import express from "express";
import morgan from "morgan";
import cors from "cors";

import employeesRoutes from "../Rutas/employees.routes.js";
import citasRoutes from "../Rutas/citas.routes.js";
import presRoutes from "../Rutas/pres.routes.js"
import historiaClinica from "../Rutas/historiaClinica.routes.js";
import detalleOdontograma from "../Rutas/detalleOdontograma.routes.js";
import familiar from "../Rutas/familiar.routes.js";
import paciente from "../Rutas/paciente.routes.js";
import tratamiento from "../Rutas/tratamiento.routes.js";
import antecedente from "../Rutas/antecedente.routes.js";
import biologica from "../Rutas/biologica.routes.js";
import diente from "../Rutas/diente.routes.js";
import exauxiliares from "../Rutas/exauxiliares.routes.js";
import dolor from "../Rutas/dolor.routes.js";
import exextrabucal from "../Rutas/exextrabucal.routes.js";
import exintrabucal from "../Rutas/exintrabucal.routes.js";
import general from "../Rutas/general.routes.js";
import oclusion from "../Rutas/oclusion.routes.js";
import oleray from "../Rutas/oleray.routes.js";
import resumen from "../Rutas/resumen.routes.js";

const app = express();

const corsOptions = {
  origin: '*', // o '*' para permitir desde cualquier origen
  methods: 'GET,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  
};

// Middlewares
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", employeesRoutes);
app.use("/citas", citasRoutes );
app.use("/pres", presRoutes );
app.use("/historiaClinica", historiaClinica );
app.use("/detalleodontograma", detalleOdontograma );
app.use("/familiar", familiar );
app.use("/paciente", paciente );
app.use("/tratamiento", tratamiento );
app.use("/antecedente", antecedente );
app.use("/biologica", biologica );
app.use("/diente", diente );
app.use("/exauxiliares", exauxiliares );
app.use("/dolor", dolor );
app.use("/exextrabucal", exextrabucal );
app.use("/exintrabucal", exintrabucal );
app.use("/general", general );
app.use("/oclusion", oclusion );
app.use("/oleray", oleray );
app.use("/resumen", resumen );

app.use((req, res, next) => {
  res.status(404).json({ message: "ERROR 404: Not found" });
});

export default app;
