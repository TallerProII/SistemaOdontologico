import express from "express";
import morgan from "morgan";

import employeesRoutes from "../Rutas/employees.routes.js";
import citasRoutes from "../Rutas/citas.routes.js";
import presRoutes from "../Rutas/pres.routes.js"
import historiaClinica from "../Rutas/historiaClinica.routes.js";
import detalleOdontograma from "../Rutas/detalleOdontograma.routes.js";
import familiar from "../Rutas/familiar.routes.js";
import paciente from "../Rutas/paciente.routes.js";
import tratamiento from "../Rutas/tratamiento.routes.js";

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

app.use((req, res, next) => {
  res.status(404).json({ message: "ERROR 404: Not found" });
});

export default app;
