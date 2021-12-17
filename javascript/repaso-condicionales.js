/*
condicionales
if(condicion){
bloque
}else if(){
}else{
}
*/

/*funciones
Bloque de codigo reutilizable
function nombre(parametros){
    return
}
nombre(argumentos);
*/

function procesadorDeFrutas(manzanas, naranjas) {
    let jugo = 'Jugo de ' + manzanas + ' manzanas y ' 
    + naranjas + ' naranjas';
    return jugo;
}

let jugoDeManzana = procesadorDeFrutas(4, 0);
console.log(jugoDeManzana);

let jugodeNaranja = procesadorDeFrutas(0,5);
console.log(jugodeNaranja);