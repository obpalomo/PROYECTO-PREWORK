/* BUCLES */

/* 1. FOR */

var arrayCoches = ['ferrari', 'audi', 'seat', 'dacia', 'ford', 'chevrolet', 'toyota', 'kia'];
var arrayCorregido = new Array();


/* let gato = {nombre: 'honey', edad: 1};
let gato2 = {edad: 1, nombre: 'honey'}; */


// console.log('test',arrayCoches[0][0]);

/* for (let i = 0; i < arrayCoches.length; i++) {
    console.log(arrayCoches[i]);
} */


/* 1B. FOREACH */

/* arrayCoches.forEach(element => {
    arrayCorregido.push(element.toUpperCase());
}); */

//console.log(arrayCorregido);




/* 2. OTROS BUCLES: while, do while,  */

let day = 21;
/* while (day < 30 && day > 20) {
    console.log('es final de mes');
    day++;
} */

let colaDeGente = 10;
/* do {
    console.log('hola');
    colaDeGente--;
} while(colaDeGente > 0); */

let meses = ['marzo', 'abril', 'mayo'];
/* switch(meses) {
    case 'marzo':
        console.log('llevar chaquetilla');
        break;
    case 'abril':
        console.log('llevar sudadera');
        break;
    case 'mayo':
        console.log('llevar gorra');
        break;
    default:
        console.log('has usado el array que no era');
        break;
} */

/* let mesesObj = {
    marzo: 'llevar chaquetilla',
    abril: 'llevar sudadera',
}
 */

/* 3A. FOR OF */

/* 3B. FOR IN */


// EJERCICIOS:
// a: hacer el método .includes con un bucle, testarlo con:

var arrayCoches2 = ['ferrari', 'audi', 'seat', 'dacia', 'bmw', 'chevrolet', 'toyota', 'kia'];

let isBmw;
for (let i = 0; i < arrayCoches2.length; i++) {
    if(arrayCoches2[i] == 'bmw') {
        isBmw = true;
        break;
    } 
    if (i == arrayCoches2.length -1 && !isBmw) {
        isBmw = false;
    }
} 
console.log('for bmw', isBmw);


if (arrayCoches2.includes('ferrari')) {
    console.log('ferrari');
} else if (arrayCoches2.includes('audi')) {
    console.log('audi');
} else if (arrayCoches2.includes('alfa romeo')) {
    console.log('alfa romeo');
} else if (arrayCoches2.includes('bmw')) {
    console.log('bmw');
}


/* let isIncluded = ('ana');
let names = ['juan', 'ramón', 'julio', 'ana', 'beatriz'] */
// b: dado el array ['juan', 'ramón', 'julio', 'ana', 'beatriz'], añadir un nombre nuevo detras de cada uno existente usando bucles.



// c: averigua si el número 2 existe en la siguiente matriz usando solo bucles:
/* let matriz = [
    [1,2,4],
    [2,3,4],
    [5,6,7]
] */
// d: saca por cada consola el sumatorio de cada array dentro de matriz, usa solo bucles.

// e: dados los siguentes objetos tipo coche:
/* let cocheA = {marca: 'seat', matriculacion: 2008, etiqueta: '?'};
let cocheB = {marca: 'alfa romeo', matriculacion: 2000, etiqueta: '?'};
let cocheC = {marca: 'bmw', matriculacion: 2019, etiqueta: '?'}; */
// guarda todos los coches en un array y, mediante bucles, itéralo para asignar a cada coche su etiqueta corresponciente (<2006 -> A, 2006 - 2012 -> B, >2012 -> C)
