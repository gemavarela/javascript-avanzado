
function boton() {
    
    let numeroAdivinar = 99;
    let numero = parseInt(document.getElementById('number').value);


    console.log(numero);
    let eval = Math.abs(numeroAdivinar - numero);
    console.log(eval);

    if (eval==0){
        document.write("Felicidades, adivinaste el número secreto");
    }
    else if (eval < 5) {
        document.write("Calienteeeeeeee");
    } else if (eval < 10) {
        document.write("Cañiente");
    } else if (eval < 20) {
        document.write("Tibio");

    } else if (eval < 30) {
        document.write("Frio");

    } else if (eval > 30) {
        document.write("Congelado");

    } else {
        document.write("Error");
    }

}
/* 
Escribir un documento html el cual debe contener un input y un botón.
Escribir un programa en donde se defina un número secreto.
Se debe leer el valor que el usuario escriba en el input y darle pistas al usuario sobre si adivinó o no el número secreto.

Si el número que escribio el usaurio es igual al número secreto se debe mostrar Felicidades, adivinaste el número secreto
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 5, se debe mostrar Calienteeeeeeee
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 10, se debe mostrar Caliente
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 20, se debe mostrar Tibio
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 30, se debe mostrar Frio
Si la diferencia entre en número ingresado y el número secreto es mayor a 30, se debe mostrar Congelado
*/
