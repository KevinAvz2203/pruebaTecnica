/* Importamos las dependencias */
import express from "express";
import dotenv from "dotenv";

/* Rutas */
import tareasRouter from "./routes/tareas.route.js";

/* Configuracion de las variables de entorno */
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json()); // Permite que express reconozca datos de tipo json

app.use("/tareas", tareasRouter);

/* Inicializamos el servidor */
app.listen(PORT, () => {
  console.log(`Server started in ${PORT}`);
});
