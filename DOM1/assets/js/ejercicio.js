let title = document.getElementById('title');


function cambiarName(){
    let name = prompt('Cual es tu nombre?');
    
    title.textContent = `Hola ${name} `;

}

