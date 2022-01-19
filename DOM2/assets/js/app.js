let titulo = document.getElementById('titulo');
// let titulo = document.querySelector('#titulo');
$titulo.textcontent = 'Titulo escrito desde J5';

let $parrafo = document.querySelector('p');
console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll('p');
console.log($parrafos[2].textContent);


let subtitulo = document.createElement('h3');
subtitulo.textContent = 'Este es un subtitulo desde JS';

/* document.body.append(subtitulo);//se pone al final del HTML
document.body.insertAdjacentElement("beforebegin",subtitulo); */
$titulo.insertAdjacentElement("afterend",subtitulo);
$titulo.insertAdjacentElement("afterend",subtitulo);



let $contenido = document.querySelector('#contenido');
/* console.log($contenido.textContent.textContent='<br>'); //NO TOMA EL HTML, textoo
console.log($contenido.innerHTM = '<br>');
console.log($contenido.outerHTML = 'Hola'); */

let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo párrafo';

$contenido.appendChild(contenidoParrafo);
$titulo.remove();





