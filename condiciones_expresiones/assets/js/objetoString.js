let cadena = "Hola";
console.log(cadena);

let cadena2 =new String("Adiós");
console.log(cadena2);

let arreglo1 = new Array();
console.log(arreglo1); 
// includes() busca una cadena en otra y regresa false o true

console.log(cadena2.toLocaleLowerCase().includes("a"));//true
console.log(cadena2.toLocaleLowerCase());
console.log(cadena2.toLocaleUpperCase());

// cohersión | JavaScript convierte en automático un tipo de dato en otro

console.log(cadena.toLocaleLowerCase());

/* Función que recibe una palabra y la regresa invertida */

let palabra ="Hola mundo";
let arreglo = palabra.split("");
console.log(arreglo);

console.log(arreglo.reverse().join(""));

function invertirPalabra(cadena){
    let arreglo = cadena.split("");//cadena vacía, tomará como espacio al dividir
    let arregloAlReves = arreglo.reverse();
    let cadenaInvertida = arreglo.join("");//devuelve una cadena

    // return console.log(arregloAlReves);
    return console.log(cadenaInvertida);

}

invertirPalabra("Generation");

