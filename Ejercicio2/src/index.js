// Exercise 2 Sample API in Javascript. Create an HTTP service (you are free to use libraries available in NPM) 
// with a single route `POST /palindrome`. The request to `POST /palindrome` should accept a JSON payload 
// with the following shape: ```js { "phrase": string } ``` Your service should return a boolean value indicating 
// if the phrase is a palindrome or not ([Wikipedia](https://es.wikipedia.org/wiki/Pal%C3%ADndromo)): 
// ```js { "palindrome": boolean } ``` **Note**: The code to determine if the phrase is a palindrome should be 
// written by you (not using a library). ####

// Importamos express que nos ayudara a crear el servidor
const express = require('express');

// Asignamos a una constante la inicializacion de express
const app = express();

// Configuracion del puerto
app.set('port',process.env.PORT || 8000);

// Es un middleware que nos permitara la comunicacion de los datos en formato JSON
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//Importamos nuestras rutas
app.use(require('./routes'));

// Ejecutamos nuestro servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

