let title = document.getElementById('title');

console.log(title);
title.textContent = 'Este texto esta escrito desde javascript'

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

/* parrafos[ 1].textContent = "Parrafos escritos desde javascript" */

/* for(let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = 'parrafo ' + i + 'escritos desde javascript';
}
 */

let email = document.getElementById('email');
let password = document.getElementById('password');

function getInformation() {
    console.log(email.value);
    console.log(password.value);
}