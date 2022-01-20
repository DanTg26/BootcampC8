class Animalito {
    constructor (nombre, edad, especie) {
        this.nombre =nombre;
        this.edad = edad;
        this.especie = especie;
        this.enfermo = false;
        this.revisado = false;
        

    }
    saludar() {
        return console.log(`Hola mi nombre es ${this.nombre}`)
    }
}

class Veterinario {
    constructor() {
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    agregarPaciente(paciente) {
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        let mensaje = `Paciente agregado <br>`
        return document.write(mensaje);
    }

    revisarPaciente (paciente) {
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.pacientesRevisados +=1;
            document.write('paciente revisado');
        }
        else{
            document.write('Este paciente ya fue revisado');
        }
    }

    modificarPacientes() {
        this.pacientesRevisados++;
    }

    mostrarLista(){
        for(let i = 0; i < this.listaPacientes.length; i++) {
            document.write(this.listaPacientes[i].nombre);
        }
        document.write(`<br>cantidad de pacientes: ${this.cantidadPacientes}<br>`)
    }
}


const VeterinariaPanchito = new Veterinario();


const Animalito1 = new Animalito('Manchas','5', 'perro' );
const Animalito2 = new Animalito('Galleta',2, 'gato' );
console.log(Animalito1);
console.log(Animalito2);

VeterinariaPanchito.agregarPaciente(Animalito1);
console.log(VeterinariaPanchito.listaPacientes);

VeterinariaPanchito.mostrarLista();
VeterinariaPanchito.revisarPaciente(Animalito1);
VeterinariaPanchito.mostrarLista();

