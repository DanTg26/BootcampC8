class pokemon {
    constructor (nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    atacar () {
        return console.log(`${this.nombre} está atacando`)
    }

}

class Vendedor extends pokemon {
    constructor (nombre, tipo, edad) {
        super (nombre, tipo);
        this. edad = edad;
    }

    comercializar() {
        return console.log (`${this.nombre} está comercializando`)
    }

}

const Rodmo = new Vendedor ('Carlos Robertson', 'Comercializador', 45);
console.log(Rodmo);

Rodmo.atacar();
Rodmo.comercializar();

const esposaRodmo = new Vendedor ('Laura Moreno', 'Comercializadora', 38)
console.log(esposaRodmo);

esposaRodmo.atacar();
esposaRodmo.comercializar();
