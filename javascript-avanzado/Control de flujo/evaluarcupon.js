

var getCupon = () => {
    if(isNaN(document.getElementById("precio").value)){
        document.getElementById("respuesta").innerHTML = `Eso no es un numero`;}
        
        else{
        let precio = parseInt(document.getElementById("precio").value);
        let cupon = document.getElementById("cupon");
        switch (cupon.value) {
            case "Bronce":
                total = precio * 0.95;
                document.getElementById("respuesta").innerHTML = `${total}`;
                break;
            case "Plata":
                total = precio * 0.90;
                document.getElementById("respuesta").innerHTML = `${total}`;
                break;
            case "Oro":
                total = precio * 0.80;
                document.getElementById("respuesta").innerHTML = `${total}`;
                break;
            case "Platino":
                total = precio * 0.75;
                document.getElementById("respuesta").innerHTML = `${total}`;
                break;
            default:
                document.getElementById("respuesta").innerHTML = `Tu cupon no existe, no seas tranza`;
                break;
        }
    }
}

                
