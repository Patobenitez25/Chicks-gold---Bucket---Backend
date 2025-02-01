# 🔢 Water Jug Solver - Backend

Este es el backend de la aplicación **Water Jug Solver**, que recibe las capacidades de dos jarras y un objetivo y calcula la solución utilizando el algoritmo de búsqueda de soluciones óptimas.

## 🚀 Características

- Expone una API REST con un endpoint `/solve`.
- Recibe los valores de las jarras y el objetivo como JSON y devuelve los pasos necesarios para medir exactamente la cantidad de agua solicitada.
- Manejo de errores en caso de que la solución no sea posible.
- Uso de algoritmo matematico BFS (breadth-first search) para encontrar el camino mas corto hacia la solucion
- Se valida que la solucion exista solo si Z es multiplo del MCD(x,y)

## 📦 Instalación

1. Clonar el repositorio:

   git clone <URL_DEL_REPO_BACKEND>
   cd backend

2. Instalar dependencias:

    Copiar
    Editar
    npm install
3. Iniciar el servidor:
   
    Copiar
    Editar
    npm run dev
    El backend correrá en http://localhost:3001.

🔗 API Endpoints
    POST /solve
    Descripción:
    Recibe los valores de las jarras y el objetivo y devuelve los pasos necesarios para alcanzar la cantidad deseada.

Ejemplo de solicitud:

{
  "X": 5,
  "Y": 3,
  "Z": 4
}
Ejemplo de respuesta exitosa:
{
  "solution": 
  [
    Llenar la jarra X",
    "Verter el contenido de la jarra X en la jarra Y",
    "Vaciar la jarra Y",
    "Verter el contenido de la jarra X en la jarra Y",
    "Llenar la jarra X",
    "Verter el contenido de la jarra X en la jarra Y para obtener 4 galones en X"
  ]
}
Si no hay solución posible:

{
  "error": "No hay una solución posible con los valores ingresados."
}

 Tecnologías utilizadas
  Node.js
  Express
  Algoritmo de resolución del problema de las jarras de agua
  
📝 Patricio Joaquin Benitez
