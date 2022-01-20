class Carro{
    constructor(marca,color,modelo,velocidad,numeroPuertas){
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.numeroPuertas = numeroPuertas;

    }

    acelerar(){
        this.velocidad += 1
    }

    frenar(){
        this.velocidad = 0
    }

    reversa(){
        this.velocidad -= 1
    }

    get toString(){
        const mensaje = `Modelo: ${this.modelo}, Color: ${this.color}, Marca: ${this.marca}, Velocidad: ${this.velocidad} <br>`
        return mensaje;
    }

}


const miCarro = new Carro('Nissan', 'Negro', 'Sentra' , 0, 4)
console.log(miCarro)
let mensaje = miCarro.toString
document.write(mensaje)

miCarro.acelerar()
miCarro.acelerar()
miCarro.acelerar()
mensaje = miCarro.toString
document.write(mensaje)

miCarro.reversa()
mensaje = miCarro.toString
document.write(mensaje)

miCarro.frenar()
mensaje = miCarro.toString
document.write(mensaje)