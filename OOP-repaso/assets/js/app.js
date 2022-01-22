class Animalito {
    constructor(nombre, edad, especie, revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.enfermo = false;
        this.revisado = revisado;//antes fue falso
        this.enfermo=false;
    }

    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        // this.cantidadPacientes ++;
        let mensaje = `Paciente agregado </br>`;
        return document.write(mensaje)
    }



    revisarPaciente(paciente){
        return this.pacientesRevisados++;
    }

    modificarPacientesRevisados(pacientesRevisados){
        this.pacientesRevisados++;
    }

    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.modificarPacientesRevisados();//Llamando a otro método de esta misma clase
            // this.pacientesRevisados++;
            document.write('<br> Paciente ha sido revisado');
        }else{
            document.write('Este paciente ya fue revisado');
        }

    }

    mostrarLista(){
        for(let i = 0; i < this.listaPacientes.length; i++){
            document.write(" " + this.listaPacientes[i].nombre)
        }
        document.write(`</br> cantidad de pacientes: ${this.cantidadPacientes} <br>
        Pacientes revisados: ${this.pacientesRevisados} <br>`)
    }
}

const doctor1 = new Veterinario();

const veterinariaPanchito = new Veterinario ();
//Objetos creados de la clase Animalito
const Animalito1 = new Animalito('Manchas', 5, 'Perro', false); //objeto 1
const Animalito2 = new Animalito('Galleta', 2, 'Gato', true); //objeto 2
console.log(Animalito1);
console.log(Animalito2);

veterinariaPanchito.agregarPaciente(Animalito1);
veterinariaPanchito.agregarPaciente(Animalito2);

console.log(veterinariaPanchito.listaPacientes);

veterinariaPanchito.mostrarLista();
veterinariaPanchito.revisarPaciente(Animalito1);
veterinariaPanchito.mostrarLista();

veterinariaPanchito.revisarPaciente(Animalito2);

// operador de corto circuito
let variable=0;
console.log()

doctor1.agregarPaciente(Animalito1);
doctor1.agregarPaciente(Animalito1);

console.log(doctor1.agregarPaciente);
doctor1.revisarPaciente(Animalito1);
