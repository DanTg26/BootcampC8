/* let $titulo = document.getElementById("titulo");
console.log(titulo.textContent);

titulo.textcontent = 'Título escrito desde javascript';
 */

/* querySelector: 
.clase: accede a una clase
# accede a un Id
nada: accede a una etiqueta */

let $titulo = document.querySelector('#titulo');
$titulo.textContent = 'Título escrito desde JS';

let $parrafo = document.querySelector('p');
//console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll('p');
//console.log($parrafos.textContent);

let $parrafoss = document.querySelectorAll('p');
//console.log($parrafoss[1].textContent);

let subtitulo = document.createElement('h3');
subtitulo.textContent = 'Este es un subtitulo escrito desde JS';
//document.body.apend: agrega un elemento dentro de body al final
document.body.append(subtitulo);

let $contenido = document.querySelector('#contenido');
//console.log($contenido.textContent = 'Hola'); // con textContent solo se puede escribir texto
//console.log($contenido.innerHTML); // con innerHTML se pueden escribir etiquetas HTML tambien
//console.log($contenido.outerHTML = 'Hola');

let contenidoParrafo = document.createElement('p');
contenidoParrafo.texContent = 'Conetenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);


