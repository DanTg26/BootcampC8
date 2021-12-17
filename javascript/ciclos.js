/* ciclos-bucles-loops
while
do while
for
*/

// while
/*
let condicion = 1; - valor inicial es el valor donde quiero  que comience
while(condicion){}  si la condicion es verdadera seguira repitiendo lo que esta dentro del while
se debe realizar una modificacion a nuestro valor incial
*/

// imprimir  todos los numeros 1-10

let condicion = 1; // se define el valor
// si la condicion es falsa nunca se va ejecutar

while (condicion <= 10) { // se realiza la condicion  hasta que sea falso
    console.log(condicion); // imprime en la consola
    //condicion = condicion + 1; 
    // simepre hay realizar la conduicion 
    // para que no se haga un bpche infinito definiendo 
    // el valor para que nos e haga el bucle infinito
    condicion++;

}
//let condicion = 100;

//Equivale a hacer esto:
/*
let numero = 1;
console.log(numero);
numero++; //2 ----numero = numero +1;
console.log(numero);
numero++; //3
console.log(numero);
numero++; //4
console.log(numero);
numero--; //3
console.log(numero);
numero--; //2
console.log(numero);
numero--; //1
console.log(numero);
*/

/* ***************************
do while
*imprimir todos los numeros del 1 al 10
*/

let numero = 1; //Si el numero sale de la condicion 
                //se ejecuta y hasta ahi hace el ciclo

do {
    console.log(numero);
    numero++;
} while (numero <= 10);

/*
for
-Utiliza un contador
*/

for (let control = 1; control <= 10; control++) {
    console.log(control);

}

//Con un arreglo:

const comidas = ['Pozole', 'Tacos', 'Tamales', 'Tortas'];
for(let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);