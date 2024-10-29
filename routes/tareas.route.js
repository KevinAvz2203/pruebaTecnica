/* Importamos las dependencias */
import express from "express";
import {
  createTarea,
  deleteTarea,
  getTarea,
  getTareas,
  updateTarea,
} from "../controllers/tareas.controller.js";

/* Router */
const router = express.Router();

/* Rutas correspondientes del prefijo /tareas */
router.route("/").get(getTareas).post(createTarea);
router.route("/:id").get(getTarea).put(updateTarea).delete(deleteTarea);

export default router;
