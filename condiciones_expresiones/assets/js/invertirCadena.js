function btn(){
    let word = parseInt(prompt('¿Cual es la palabra que desea invertir'));
    invertirPalabra(word);
    }



function invertirPalabra(cadena){
    
    let arreglo = cadena.split("");
    
    let arregloAlReves = arreglo.reverse();
    let cadenaInvertida = arreglo.join("");//devuelve una cadena

    // return console.log(arregloAlReves);
    return title.textContent = `La palabra invertida es:  ${cadenaInvertida} `;

}


    


