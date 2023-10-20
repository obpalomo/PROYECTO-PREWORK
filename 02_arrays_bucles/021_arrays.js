/* 1. RECAPITULACIÓN ARRAYS*/

// 1.1 DEFINICIÓN: Un array es una lista ordenada (con índice) de objetos. 
// Javascript "admite" tipos variados, pero es buena practica que un array este compuesto de objetos del mismo tipo.

// 1.2 DECLARAR UN ARRAY: palabra reservada de variable + nombreArray = [nombresDeLosObjetos o vacío];

let myArray = ['hola', 'hello', 'hallo'];
let myArrayVacio = [];
let myArrayVacioBien = new Array();
let myArrayDeMascotas = [
    {
        nombre: 'michifu',
        especie: 'gato',
    },
    {
        nombre: 'morris',
        especie: 'perro',
    }
]
myArrayDeArrays = [
    myArray,
    myArrayVacio,
    myArrayDeMascotas,
    [1, 3, 4, 5]
];
myArrayTipoMatriz = [
    [1, 5, 6],
    [2, 4, 8],
    [3, 6, 7]
];

//EJERCICIO PRACTICO: crea un array de tres dimensiones y longitud 2 en cada dimension, usa tipos numericos, saca por consola la suma de las posiciones 0-1-1 y 1-1-0.


// 1.3 ACCESO A ELEMENTOS POR ÍNDICE.

console.log(myArray[1]);
console.log(myArray[0]['nombre']); 

// 1.4 MODIFICACIÓN DE LOS ELEMENTOS

myArray[0] = 'adiós';

/* 2. MÉTODOS CON ARRAYS */

// 2.1 POP / SHIFT -> elimina el último / primer elemento del array.

// 2.2 PUSH -> añade un elemento al final.

// 2.3 REVERSE -> invierte el orden del array

// 2.4 SORT -> ordena el array (a-z strings, creciente en numericos)

// 2.5 SPLICE
// splice(n) -> elimina n elementos partiendo de 0 
// splice(n, m) -> elimina n elementos partiendo del índice m
// splice(n, m, args) -> elimina n elementos partiendo del indice m y después inserta los definidos en args

// EJERCICIO PRÁCTICO: dado el array ['juan', 'ramón', 'julio', 'ana', 'beatriz'], inserta dos nombres de tu elección entre julio y ana.

// 2.6 UNSHIT -> inserta n elementos al principio del array

// 2.7 CONCAT -> une dos arrays, hay que almacenar el valor en una nueva variable

// 2.8 JOIN -> convierte los valores del array en un string separado por comas o por el parámetro indicado.

// 2.9 TOSTRING 

// 2.10 INDEXOF, LASTINDEXOF

// 2.11 INCLUDES


// HACER LOS EJERCIOS PROPUESTOS

