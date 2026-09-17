import { config } from "dotenv";
import options from "../utils.js"
// CARGAR ARCHIVO ESPECÍFICO SEGÚN ARGUMENTOS POR CLI

config({ path: options.env + ".env" });

export default {
    port: process.env.PORT,
    env: process.env.NODE_ENV || "development"
};