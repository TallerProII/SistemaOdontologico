import express from "express";
import morgan from "morgan";

import employeesRoutes from "../Rutas/employees.routes.js";
// import indexRoutes from "../Rutas/index.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", employeesRoutes);
app.use("/api", employeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
