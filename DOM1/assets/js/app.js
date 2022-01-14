let title = document.getElementById('title');/* Accede al id UN SOLO ELEMENTO*/
title.textContent = 'Este texto esta escrito desde JS';

let parrafos = document.getElementsByTagName('p');/* Accede a N elementos */
console.log(parrafos);

/* parrafos[0].textContent = 'Parrafos escritos desde JS'; *//* Cambia elementos */

/* for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = 'Parrafo  ' + i + ' escritos desde JS';
} */

let email = document.getElementById('email');
let password = document.getElementById('password');

function getInformation(){
    console.log(email.value);
    console.log(password.value);
}