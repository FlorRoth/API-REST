# API REST - NODE JS

## Install the dependencies
    npm i
    
## Run the app
    npm run dev

Below you will find a sequence that you can use to test the API:
## Get book by id
    GET  /get_data/:id
    200 : {
        "ID": 1,
        "field_1": "foo",
        "author": "ELON MUSK",
        "description": "bar",
        "my_numeric_field": 0
        }
    404  "error": "Libro no encontrado"
    500  "error": "Error al buscar el libro por ID"
    
## Create book 
    POST  /input/:field
    {
        "field_1": "foo",
        "author": "elon musk",
        "description": "bar",
        "my_numeric_field": 0
        }
    200: { "id": 1 }
    400  "error": "{field} no es un campo no válido para convertir a mayúscula"
    500  "error": "Error: No se ha podido crear el libro correctamente"
## Update book 
    PUT  /:bookId
    {
        "field_1": "foo",
        "author": "elon musk",
        "description": "bar",
        "my_numeric_field": 3
        }
    200: "success" : "Libro modificado correctamente"
    500  "error": "Error: No se ha podido actualizar el libro correctamente"

## Delete book 
    PUT  /:bookId
    200: "success" : "Libro eliminado correctamente"
    500  "error": "Error: No se ha podido eliminar el libro correctamente"

