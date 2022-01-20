let $btnGato = document.querySelector('#btnGato');

$btnGato.addEventListener('click', ()=>{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(
        resp => resp.json()).then(data => {
            console.log(data);

            let imagenGatito = document.createElement(
                'card');
                imagenGatito.src=data[0].url;
                document.body.appendChild(imagenGatito);
        })

        

});












$btnGato.addEventListener('click', ()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(
        resp => resp.json()).then(data => {
            console.log(data);

            let imagenGatito = document.createElement(
                'img');
                imagenGatito.src=data.message;
                document.body.appendChild(imagenGatito);
        })

        

});
