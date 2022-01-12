/* Arrow function
Funcion de flecha */

 /* function sumar(numero1, numero2) {
    return numero1 + numero2;
}  */

const sumar = (numero1, numero2) => {
    return numero1 + numero2;
    
}

let numero1 = parseInt(prompt("Numero 1"));
let numero1 = parseInt(prompt("Numero 2"));
let suma = sumar(numero1, numero2);


document.write(`la suma de ${numero1} y ${numero2} es ${suma}`);
 