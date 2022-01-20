// Clases: Molde para crear objetos

class Animal {
    constructor (nombre, especie) {
       
        this.nombre = nombre;
        this.especie = especie;}

        //Estos son getters y setters
        // solo tienen el propósito de leer o modificar el atributo
        
        get getNombre() {
            return this.nombre
        }

        set setNombre(nombre) {
        this.nombre = nombre;
        }

        get getEspecie() {
            return this.especie
        }

        set setEspecie(especie) {
            this.especie = especie;
        }

        //Estos son métodos
        presentarse () { 
            document.write (`hola soy ${this.especie} y me llamo ${this.nombre}`);
        }
        cambiarNombre (nuevoNombre) {
           this.nombre = nuevoNombre;
           let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie}`
           return document.write (mensaje);
        }

        //Métodos estáticos
        //Animal.presentarse()

         static saludar () {
            return console.log('Hola, soy un método estático')
        }
    }
            
        
        


const Animal1 = new Animal('scooby', 'perro');
console.log(Animal1);

const Animal2 = new Animal('pecas', 'Gato');
console.log(Animal2);

// También se pueden usar métodos == funciones


console.log(Animal1.nombre);


Animal1.nombre = "oddie"

console.log(Animal1.nombre);

document.write(Animal1.cambiarNombre('Scrappy'));

//Getters y Setters
//get= obyener el valor de una variable
//set= fijar o cambiar el valor de un atributo
// se utilizan como si fuean atributos




