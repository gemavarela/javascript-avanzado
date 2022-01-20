// SÍNCRONO

let varSincrona;
varSincrona = 10 * 3;
console.log(varSincrona);

// ASÍNCRONO
let varAsincrona;

setTimeout(()=>{
    varAsincrona = 10 * 3;
}, 2000);
console.log(varAsincrona);
