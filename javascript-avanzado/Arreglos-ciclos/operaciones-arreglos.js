
let numeros = [1, 2, 13, 23, 532, 328, 123, 6865, 812];

 /* numeros.forEach(function (numero){
document.write(numero + ', ' + );
}); */

// El map crea un arreglo independiente a partir de otro arreglo

/* let numeros2 = numeros.map(function(elemento) {
return elemento;
});

document.write('<br/>' + numeros2 + '<br/>');

let numeros3 = numeros.map(function(elemento) {
    return elemento * 2;
    });
    
    document.write('<br/>' + numeros3 + '<br/>');
     */

    /* Includes */

   /*  document.write('<br/>'+ numeros.includes(328)); */

   /* Filter: filtra los elementos que cumplen con la condicion */

    let numerosPares = numeros.filter((elemento) => {
       /*if (elemento % 2 == 0); {
           return true;
        } else {
            return true;
        }
       
   }); */

   if(elemento > 500 ) {
       return true;}});
   

   document.write ('<br/>' + numerosPares);

   let frutas = ['mango', 'uva', 'pinnia', 'mandarina', 'manzana', 'aguacate' ]

   let frutasfiltro = frutas.filter((fruta) => {
       /* if(fruta.includes('i') == true ) {
           return true; */
           
           return fruta.toLowerCase().includes('m');


       

   });

   /* Sort ordena los elementos  */

   document.write('<br>' + frutasfiltro + '<br>' );

   let otrosNumeros = [9, 2, 3, 5, 1, 4, 8, 6, 7]

   /* document.write('<br>' + otrosNumeros.sort() + '<br>'); */

   /* Reverse invierte el orden de los eleentos de un arreglo */

   document.write('<br>' + numeros.reverse() + '<br>')

   /* Find */

   let frutaEncontrada = frutas.find((elemento) => {
       return elemento.toLowerCase().includes('ma');
   });

   document.write('<br>' + frutaEncontrada + "<br>");




   let numeros2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
   let suma = 0;
   

   document.write('Tu arreglo es:' + numeros2 + '<br>' )


  numeros2.forEach(function(numero) {
         return suma += numero
  });

 
   document.write('<br>' + 'El resultado de la suma de los elementos del arreglo es: ' + suma);

   let promedio = suma / numeros2.length;

   document.write('<br>'+ 'El promedio es: ' + promedio);

   
   
