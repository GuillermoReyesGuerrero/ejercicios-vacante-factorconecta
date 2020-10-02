// #### Exercise 1 Code a `count()` function in Javascript. This function should return an integer in the 
// following fashion: ```js const count = undefined // replace this with your code; console.log(count()); 
// // outputs 0 console.log(count()); // outputs 1 console.log(count()); // outputs 2 ``` In other words, the 
// function should 'remember' how many times it has been invoked. Global variables are forbidden. Provide a 
// brief explanation of how your solution works. #### 

const count = ( function (){
    var counter = 0;
    return function () {
        return counter++;
    }
})();

console.log(count());
console.log(count());
console.log(count());

// Esta es una función llamada en Javascript como closure, que nos permite tener una función
// que tenga variables privadas.
// Ejemplo la variable counter esta dentro o protegida de la función count y solo puede ser cambiada
// por esta misma.
// A la constante count se le asigna el valor de retorno de una funcion que solo se ejecuta una vez,
// establece el contador en 0 y devuelve una expresion de funcion, en este caso de icremento de la
// varibale. 