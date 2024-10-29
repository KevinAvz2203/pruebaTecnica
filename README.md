# pruebaTecnica

# Este API fue construido utilizando ExpressJS y NodeJS

El sistema permite las funcionalidades sencillas de un CRUD (Create, Read, Update & Delete)

## Como ejecutar el entorno

1. Instalar las dependencias necesarias, ejecutando el comando: npm install
2. Crear un archivo .env en carpeta raiz del proyecto, y dentro de este, la variable de entorno PORT con el puerto deseado para iniciar el entorno
3. Iniciar el servidor con el comando: npm run dev

## Como probar los endpoints del API

1. Con el servidor activado, utilizar alguna herramienta para realizar peticiones de tipo HTTP (Postman, etc..)
2. Realizar peticiones en base a las siguientes reglas:
   - ruta: /tareas
     - GET: Regresa todas las tareas existentes
     - POST: Genera una nueva tarea
   - ruta: /tareas/:id (:id es el indice del elemento que se quiere visualizar)
     - GET: Regresa la tarea correspondiente a ese ID
     - PUT: Actualiza los datos de la tarea de este ID (titulo, descripcion)
     - DELETE: Elimina la tarea con el ID correspondiente

## Ejemplos de pruebas

tareas = []

### Ruta: /tareas

GET: []

POST: {
"titulo":"Nueva Tarea",
"descripcion":"Nueva Desc Aqui"
}

Respuesta POST:
{
"success": true,
"data": {
"id": 2,
"titulo": "Nueva Tarea",
"descripcion": "Nueva Desc Aqui"
}
}

tareas = [
{
id: 1,
titulo: "Nueva Tarea",
descripcion: "dec segunda aqui"
},
{
id: 2,
titulo: "Nueva Tarea",
descripcion: "Nueva Desc Aqui"
}
]

### Ruta: /tareas:id

GET con /tareas/1: {
"id": 1,
"titulo": "Nueva Tarea",
"descripcion": "dec segunda aqui"
}

PUT con /tareas/1: {
"titulo":"Tarea actualizada",
"descripcion":"Dec actualizada aqui"
}

Respuesta PUT: {
"id": 1,
"titulo": "Tarea actualizada",
"descripcion": "Dec actualizada aqui"
}

Antes de DELETE con /tareas/1: [
{
"id": 1,
"titulo": "Tarea actualizada",
"descripcion": "Dec actualizada aqui"
},
{
"id": 2,
"titulo": "Tarea 1",
"descripcion": "Dec 1"
},
{
"id": 3,
"titulo": "Tarea 2",
"descripcion": "Dec 2"
}
]

Antes de DELETE con /tareas/1: [
{
"id": 2,
"titulo": "Tarea 1",
"descripcion": "Dec 1"
},
{
"id": 3,
"titulo": "Tarea 2",
"descripcion": "Dec 2"
}
]
