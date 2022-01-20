class Pokemom{
    constructor(nombre, tipo){
        this.nombre=nombre;
        this.tipo=tipo;

    }
    atacar(){
        return console.log(`${this.nombre} está atacando`)
    }
}

class Pikachu extends Pokemom{
    //puede tener sus propios elementos y métodos
    constructor(nombre,tipo,edad){
        super(nombre,tipo);//constructor padre
        this.edad=edad;
    }
    evolucionar(){
        return console.log(`${this.nombre} está evolucionando`)
    }

}

const Pikachu=new Pikachu("Juan","Eléctrico",3);
console.log(Pikachu);

Pikachu.atacar();

const Pikachu2=new Pikachu("Charmander","Fuego");
console.log(Pikachu);

Pikachu.atacar();