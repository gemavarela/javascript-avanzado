
class Animal{
    constructor(nombre, especie){//constructor es una funcion
        // console.log('Este es un constructor');
        this.nombre=nombre; 
        this.especie=especie;
        /* nombre=nombre1;
        especie=especie1; */
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(name){
        return this.nombre=name;
    }

    get getEspecie(){
        return this.especie;
    }
    set setEspecie(especie){
        return this.nombre=especie;
    }
            /* métodos == funcion */
            presentarse(){
                document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br>`);
            }
            cambiarNombre(nuevoNombre){
                this.nombre=nuevoNombre;
                let mensaje = `mi nuevo nombre es ${this.nombre} y soy un ${this.especie}`;
                return mensaje;
            }
            //Métodos estáticos
            //Pertenece sólo a la clase y no se hereda a los objetos
            static saludar(){
                return console.log('Hola, soy un método estático');
            }


            
}


Animal.saludar();
//herdan los métodos y clases
const Animal1 = new Animal("Scooby","Perro");//creamos un objeto
console.log(Animal1);
//instanciar = hacer una copia, crear object
const Animal2= new Animal("Mishi","Gato");
console.log(Animal2);

const Animal3= new Animal();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre="Scrappy";//NOTACIÓN DE PUNTO para cambiar valor
console.log(Animal1.nombre);
console.log(Animal);
document.write(Animal1.cambiarNombre("Oddie"));//método para cambiar valor


//GET & SET sin paréntesis al llamar
console.log(Animal1.getNombre);
Animal1.setNombre="Manchas";
console.log(Animal1.getNombre);
console.log(Animal1);