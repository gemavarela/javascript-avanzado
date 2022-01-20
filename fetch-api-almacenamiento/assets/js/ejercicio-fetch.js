let $btnCard = document.querySelector('#btnCard');

$btnCard.addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(
        resp => resp.json()).then(data => {
            data.forEach(elemento=> {
                let imagen = elemento.thumbnailUrl;
                let titulo=elemento.title;
                console.log(imagen,titulo)

                const texto=`<div class="col mb-4">
                <div class="card">
                <img src="${imagen}" class="card-img-top" alt="elemento">
                <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                </div>
                </div>
                </div>              
                `
                
            let caja = document.createElement('div');
            caja.innerHTML=texto;
            $btnCard.appendChild(caja); });
            // console.log(data);
                
        })       

});