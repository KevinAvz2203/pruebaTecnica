import express from "express";

/* Arreglo donde se guardaran las tareas, con pocos datos dummy */
const tareas = [
  {
    id: 1,
    titulo: "Tarea Prueba 1",
    descripcion: "Dec Prueba 1",
  },
  {
    id: 2,
    titulo: "Tarea Prueba 2",
    descripcion: "Dec Prueba 2",
  },
  {
    id: 3,
    titulo: "Tarea Prueba 3",
    descripcion: "Dec Prueba 3",
  },
  {
    id: 4,
    titulo: "Tarea Prueba 4",
    descripcion: "Dec Prueba 4",
  },
];

/* Regresa las tareas existentes */
export const getTareas = (req, res) => {
  if (tareas.length === 0) {
    res.send("No hay tareas todavia");
  } else {
    res.send(tareas);
  }
};

/* Crea una nueva tarea con los datos recibidos del body de la peticion */
export const createTarea = (req, res) => {
  try {
    const tarea = {
      id: tareas.length + 1,
      titulo: req.body.titulo || "",
      descripcion: req.body.descripcion || "",
    };

    /* Lo agregamos al arreglo de tareas existentes */
    tareas.push(tarea);

    res.status(200).json({ success: true, data: tarea });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Ocurrio un error, intenta de nuevo" });
  }
};

/* Regresa la tarea que corresponda al ID dado */
export const getTarea = (req, res) => {
  try {
    const tarea = tareas.find((t) => t.id === parseInt(req.params.id));

    if (!tarea) {
      res.status(404).send("Tarea no encontrada");
    }

    res.send(tarea);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/* Actualiza la tarea que corresponda al ID dado,
  deja el valor previo en caso que algun dato no sea recibido en el request
*/
export async function updateTarea(req, res) {
  try {
    const tarea = tareas.find((t) => t.id === parseInt(req.params.id));

    if (!tarea) {
      res.status(404).send("Tarea no encotrada");
    } else {
      tarea.titulo = req.body.titulo || tarea.titulo;
      tarea.descripcion = req.body.descripcion || tarea.descripcion;

      res.json(tarea);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

/* Elimina la tarea que corresponda al ID dado */
export const deleteTarea = (req, res) => {
  const index = tareas.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    res.status(404).send("Tarea no encontrada");
  } else {
    /* Lo eliminamos del arreglo tareas */
    tareas.splice(index, 1);
    res.status(204).send();
  }
};
