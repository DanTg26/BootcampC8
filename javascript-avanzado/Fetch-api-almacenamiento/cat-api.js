let $btnGato = document.querySelector('#btnGato');

 /* function (resp) {
        return resp.json()
    } */

$btnGato.addEventListener('click', () => {
    console.log('No me presiones')
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json()) .then(data => {
        console.log(data);

        let imagenGato = document.createElement('img');
        imagenGato.src = data[0].url;
        document.body.appendChild(imagenGato);

    })
});

$btnGato.addEventListener('click', () => {
    console.log('No me presiones')
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json()) .then(data => {
        console.log(data);

        let imagenGato = document.createElement('img');
        imagenGato.src = data.message;
        document.body.appendChild(imagenGato);

    })
});