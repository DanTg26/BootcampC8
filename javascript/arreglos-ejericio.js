/*Tomar los números de un arreglo llamado 'numeros', [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del arreglo 'resultado'
*/

const arreglo = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
console.log (arreglo);

let resultado =[];

arreglo.forEach(function(el){
    
   let multi = el * 2;
   return resultado.push(multi);
})

console.log(resultado);

for (let i = 0; i < resultado.length; i++){
console.log('El original es: '  + arreglo[i]);
console.log('El resultado es: '  + resultado[i]);
}
       