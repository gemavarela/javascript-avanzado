let numeros=[1,13,23,532,328,123,6865,812,213,123];

numeros.forEach(function(numero){
    document.write(numero + ', ');

});

//  APUNTAN A LO MISMO 

/* let frutas = ['map', 'uva', 'piña'];
let frutas2 = frutas;

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas2.push('pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>'); */

// MAP (no afecta el orifinal)
/* let frutas = ['map', 'uva', 'piña'];
let frutas2 = frutas.map(function(element){
    return element;
});

document.write('<br/>' + frutas2 + '<br/>');



let numeros2=numeros.map(function(elemento){
    return elemento * 2;
});

document.write('<br/>' + numeros2);
 */

document.write('<br>' + numeros.includes('hola'));

let numeroPares = numeros.filter((elemento)=>{
/* 
    if (elemento % 2 == 0){return true;
    }else{
        return false;
    }
    console.log(elemento % 2 == 0); */

    if(elemento > 10){
        return true;
    }
    

});

document.write('<br>' + numeroPares + '<br>');

let frutas = ['mango', 'uva', 'piña', 'mandarina', 'manazana', 'aguacate'];

let frutasFiltro = frutas.filter((fruta) =>{
    /* if(frutas.includes('na') == true){
        return true;
    } */
    return fruta.toLocaleLowerCase().includes('m');
});

document.write('<br>' + frutasFiltro);

/* SORT ordena conforme el primer elemento en éste caso 1*/

// document.write('<br>' + numeros.sort() )
/* RVERSE  mutación */
// document.write('<br>' + numeros.reverse() + '<br>');

/* FIND */
let frutaEncontrada=frutas.find((elemento) => {
    return elemento.toLocaleLowerCase().includes('ma');
});

document.write('<br>' + frutaEncontrada + '<br>')

