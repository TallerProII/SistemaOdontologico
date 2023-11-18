import express from "express";
import morgan from "morgan";

import employeesRoutes from "../Rutas/employees.routes.js";
import citasRoutes from "../Rutas/citas.routes.js";
import presRoutes from "../Rutas/pres.routes.js"
import historiaClinica from "../Rutas/historiaClinica.routes.js";
import detalleOdontograma from "../Rutas/detalleOdontograma.routes.js";
import familiar from "../Rutas/familiar.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", employeesRoutes);
app.use("/citas", citasRoutes );
app.use("/pres", presRoutes );
app.use("/historiaClinica", historiaClinica );
app.use("/detalleodontograma", detalleOdontograma );
app.use("/familiar", familiar );

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
