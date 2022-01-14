/* Crear un arreglo con 20 numeros.
Mostrar en HTML la suma de dichos números y el promedio */

let numeros=[10,9,8,7,6,5,9,8,7,6,7,8,9,10,9,9, 8, 7, 6, 10];
let suma=0;
let promedio=0;

numeros.forEach(function(numero){
    suma+=numero;
});

promedio=suma/numeros.length;
document.write(`<br> NÚMEROS: ${numeros} <br> SUMA: ${suma} <br> PROMEDIO:  ${promedio} <br>`);