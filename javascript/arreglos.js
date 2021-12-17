/*
Collecion de elementos
Tiene metodos o funciones que nos permiten ordenar o
manipular los datos almacenados
*/

//manera1
const arreglo1 = [4, 'hola', true, [1, 2, 6]];
console.log(arreglo1);

//manera2
const arreglo2 = Array.of(1, 'Hola', true);
console.log(arreglo2);

//manera3
const arreglo3 = new Array(3, true, 'adios');
console.log(arreglo3);

let variable1 = 3;
console.log(variable1);
variable1 = 'tres';
console.log(variable1);

const frutas = ['manzana', 'naranjas', 'uvas', 
'sandias',[1,2,3,4,5,['A','B','C']]];

//Los arreglos empieza a contar desde cero
//notacion de corchetes
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][4]);
console.log(frutas[4][5][1]);
console.log(frutas);

frutas[4][5].push('D');
console.log(frutas);

//Metodos
/*
length = longitud 
cantidad de elementos dentro de nuestro arreglo
*/
const letras = ['A', 'B', 'C', 'D'];
console.log(letras.length);

/* push = anade un elemento al final de nuestro
arreglo*/
letras.push('E');
console.log(letras);

/* 
pop= elimina el ultimo elemento del arreglo
*/
letras.pop();
console.log(letras);

/* 
unshift= agrega un elemento pero al inicio del arreglo
*/

letras.unshift(1);
console.log(letras);

/*shift = elimna el primer elemento */
letras.shift();
console.log(letras);