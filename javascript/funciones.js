/*
Crea una función que calcule el descuento que se le va a hacer a un cliente 
según el valor de su compra.
Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20%.(100 - 199)
y si es una compra de más de 200 se le hará un descuento del 30%. (200 =>)
Utiliza prompt, funciones, condicionales y operadores de comparación.
La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.
(Se guardará en un archivo nuevo llamado ejercicioFunciones.js)
*/
const precio = parseFloat(prompt('Ingresa precio: '));

document.write("<h1>", 'El precio es: ' + precio, "</h1>");

function CalculoDescuento (precio){
if(precio >= 0 && precio < 100) {
    document.write("<h1>", "Tiene 10% de Descuento.", "</h1>");

    let Operacion = (precio / 100) * 10;
    let Descuento = precio - Operacion;

    document.write("<h1>", "El precio con descuento es: " + Descuento, "</h1>");
} else if(precio >= 100 && precio < 200) {
    document.write("<h1>", 'Tiene 20% de Descuento.', "</h1>");

    let Operacion = (precio / 100) * 20;
    let Descuento = precio - Operacion;

    document.write("<h1>", 'El precio con descuento es:' + Descuento, "</h1>");
} else if ( precio >= 200) {
    document.write("<h1>", 'Tiene 30% de Descuento.', "</h1>");

    let Operacion = (precio / 100) * 30;
    let Descuento = precio - Operacion;

    document.write("<h1>", 'El precio con descuento es:' + Descuento, "</h1>");
}else {
    document.write("<h1>", 'No aplica, inserte precio en numeros.', "</h1>");
}
}
CalculoDescuento(precio);