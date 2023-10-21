/* 1. SETS */

let conjunto = new Set();

conjunto.add('elemento');

conjunto.has('elemento');

conjunto.forEach(item => {

});


/* MAPS */

let mapa = new Map();

mapa.set('kay1', 'value1');


mapa.get('key1');

for (let [k, v] of mapa) {
    console.log(k, '=', v);
}