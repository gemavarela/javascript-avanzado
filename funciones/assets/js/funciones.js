/* function
Es un bloque de código reutilizable.
Puede tener o no parámetros de entrada.
Puede devolver o no un valor */
function sumar(num1, num2) {

    console.log('Hola desde la funcionción ', num1);
    return num1 + num2;
}

function restar(num1, num2) {

    console.log('Hola desde la funcionción ', num1);

    return num1 - num2;
}

let numero1 = parseInt(prompt('Numero1'));
let numero2 = parseInt(prompt('Numero2'));
let resultSuma = sumar(numero1, numero2);
let resultResta = restar(numero1, numero2);

document.write(`+Estoy escribiendo en el document, la suma es: ${numero1} y ${numero2} es ${resultSuma} <br> `);

// document.writeln("*la suma de " + numero1 + " y " + numero2 + " es " + resultSuma);

document.write(`+Estoy escribiendo en el document, la resta es: ${numero1} y ${numero2} es ${resultResta} <br> `);