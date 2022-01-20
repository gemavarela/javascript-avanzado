/* Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0. */

class carro{
    constructor(marca,color,modelo,velocidad,numPuertas){
        this.marca=marca;
        this.color=color;
        this.modelo=modelo;
        this.velocidad=velocidad;
        this.numPuertas= numPuertas;

    }

    acelerar(velocidad){
        return this.velocidad=this.velocidad+1;
    }

    frenar(velocidad){
        return this.velocidad=0;

    }
    reversa(velocidad){
        return this.velocidad=this.velocidad-1;

    }

    toString(){
        let mensaje = `marca: ${this.marca}, color: ${this.color} , modelo: ${this.modelo} , va a una velodidad de ${this.velocidad}, ${this.numPuertas} <br>`;
        document.write(mensaje);
        return mensaje;

    }


}

const carro1 = new carro("Volvo", "Negro", "Carisimo",0,4);
console.log(carro1);


carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.toString();
carro1.reversa();
carro1.toString();
carro1.frenar();
carro1.toString();

console.log(carro1.toString);