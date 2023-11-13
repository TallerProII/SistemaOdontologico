import { config } from "dotenv";
config();

// BD alojado en Azure
export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "server-mysql202302.mysql.database.azure.com";
export const DB_USER = process.env.DB_USER || "GeovanyDelaCruz";
export const DB_PASSWORD = process.env.DB_PASSWORD || "TallerProyect2023";
export const DB_DATABASE = process.env.DB_DATABASE || "dbodont";
export const DB_PORT = process.env.DB_PORT || 3306;
