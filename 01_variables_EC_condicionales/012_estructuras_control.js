/* 1. OPERADORES LÓGICOS (OR, AND, NOT) */

/* or */
let llueve = false;
let fregada = false;

let isSueloMojado = llueve || fregada;

console.log('mojado', isSueloMojado);


/* and */
let soyRico = false;
let quieroUnFerrari = true;

let vasATenerUnFerrari = soyRico && quieroUnFerrari;

console.log('tengo', vasATenerUnFerrari);

/* not */

let tengoDinero = false;

if (tengoDinero) {
    console.log('no ir al cajero');
} else {
    console.log('ir al cajero');
}

/* !true -> false
!false -> true */

/* 2. OPERADORES ARITMÉTICOS (+, -, *, /, %, ++, --) */

let x = 15
let y = 4

// aritmetica
let suma = x + y;
let resta = x - y;
let multi = x * y;
let divi = x / y;
let modulo = x%y;

//let incremento = x--;

/* ++x; */
/* x++; */

let z = ++x;

console.log(z, x);


