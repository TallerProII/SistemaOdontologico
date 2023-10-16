import express from "express";
import morgan from "morgan";

import employeesRoutes from "../Rutas/employees.routes.js";
import citasRoutes from "../Rutas/citas.routes.js";
import historiaClinica from "../Rutas/historiaClinica.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", employeesRoutes);
app.use("/citas", citasRoutes );
app.use("/historiaClinica", historiaClinica );

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
