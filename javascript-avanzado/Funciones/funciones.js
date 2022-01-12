/* Una funció es un bloque de código reutilizabel, puede tener o no parametros de entrada y puede devolver o no un valor */

function sumar (numero1, numero2) {
    return numero1 + numero2;
}
let numero1 = parseInt(prompt('Numero 1'));
let numero2 = parseInt(prompt('Numero 2'));
let suma = sumar(numero1, numero2);

document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`);
/* document.write('la suma de ' + numero1 'y ' + numero2 'es ' + suma); */
