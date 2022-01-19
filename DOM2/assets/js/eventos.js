let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje=document.querySelector('#btnMensaje');
let $spanError=document.querySelector('span');


$btnMensaje.addEventListener('click',() => {
    console.log('No me presioneeeeess');
});

/* $mensaje.addEventListener('keydown',mostrarConsole);//SIN PARÉNTESIS PORQUE SINO SE LLAMA Y PIERDE EL OBJETIVO
function mostrarConsole(){
    console.log('escribiste algo, te vigilo');
}
 */


$mensaje.addEventListener('keyup',(e)=>{ //keydown
    console.log(e.target.value);

    if(e.target.value.length < 3 ){
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
        


    }else{
        $spanError.classList.remove('error');
        $spanError.classList.add('hide');
    }

});

