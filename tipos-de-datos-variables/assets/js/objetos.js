/* let miObjeto={
    //pares de clave valor
    name='Gema'
}
 */
/* let nombre='Gema';
let edad=23;
let direccion='Los Reyes, La Paz';
let numero = 123456789;

console.log(nombre); */

/* let persona={
    nombre='Gema',
    edad=23,
    direccion='Edo. Mex.',
    numero=12345678

};
console.log(persona); */

let persona={
    nombre:{
        apellidoPaterno: 'Jesus',
        apellidoMaterno: 'Leon',
        nombre:'Gema'

    },
    edad: 23,
    direccion:{
        ciudad: 'La Paz',
        estado: 'Edo Mex'
    },
    numero:[
        123456789,
        987654321
    ],
    suma: function(uno, dos){
        return uno+dos
    }
};

console.log(persona);
console.log(persona.suma(3,4));

let otroGato={
    nombre:'michi',
    apellidos:'luna'
};

console.log(persona.nombre);
console.log(otroGato.nombre);

let labial={
    serie:['SC5', 'M19', 'D44'],
    color:['rosa','rojo', 'morado'],
    tono: [16,22,79],
    cantidad: '5g',
    tipo: 'barra',
    marca:'MAC',
    efecto:['mate','brillo'],
    olor:['fresa','uva'],
    duracion: [24, 12,1]
};

console.log(labial);

let jugueteSexual={
    tipo:['succionador','vibrador','bolas chinas'],
    nombre:['mambo','maya','diva','oli'],
    caracteristicas:['progresivo','adaptativo','sumergible', 'hipoalergénico'],
    material:'silicona',
    recarga:[2,3,2.5],
    peso:[103, 200, 300]



};
console.log(jugueteSexual);
