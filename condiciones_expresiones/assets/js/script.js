/* OPERADORES ARITMÉTICOS + - / * % () */

let operacion = 3 * 5 + (10-5);
console.log(operacion) ;

let operacion2 = 3 -5 / 2 * 4;
console.log(operacion2);

/* OPERADORES RELACIONALES < > >= <= == === != !== */

console.log(7 < 7);/* No estamos incluyendo el número a comparar */
console.log(7 <= 7);/* Si estamos incluyendo el número a comparar */

console.log(7 == "7");/* compara el valor */
console.log(7 === "7");/* compara valor y tipo de dato */

console.log(7 != "7");
console.log(7 !== "7");/* evitar resultados no deseados */

/* Incremento y decremento 
+= -= *= /=   
*/
let inc=5;
inc += 5;
console.log(inc);//10

/* MUTAR UNA VAR INCREMENTO */

inc -=5;
console.log(inc);//5

inc *=5;
console.log(inc);//25

inc /=5;
console.log(inc);//5

let sumar=0;
console.log(sumar + "linea 39");
sumar++;
console.log(sumar + "linea 41");
sumar++;
console.log(sumar);//2

sumar--;
sumar--;
sumar--;
console.log(sumar);

for (let i = 0; i < 10; i++) {
    /* codigo */
    
}
/* ++variable = preincremento -primero modifica el
valor y ya después hace uso de las variable
variable++ = postincremento - usando la variable y
después hace el incremento */

let num = 5;
console.log(num++);//5
console.log(num);//6

for (let i = 0; i<10; i++){
    // iteración
    // primer iteración se detiene
    console.log("Este es el ciclo padre");
    for (let j = 0; j < 5; j++) {
        // hace sus iteraciones/repeticiones propias
       console.log("Este es el ciclo hijo");
        
    }
}



