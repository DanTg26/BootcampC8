/* flijo es el orden que se ejecutan las declaraciones */

/* let miVariable = 10
console.log(miVariable);

let edad = 15;
let tinesINE = true;

if(edad >= 18 && tinesINE ==  true){
    console.log("puedes entrar")
}
else {
    console.log("no puedes entrar")
}
 */
/* Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5
evaluar hora */

/* let horaUsuario = 16

if(horaUsuario (>= 6) && (<=11) {
    console.log("Buenos dias");
}

/* else if(horaUsuario >= 12 && <=18) {
    console.log("Buenas tardes");
}

else if(horaUsuario >= 19 && <=23) { 
    console.log("Buenas noches");
}


else if(horaUsuario >= 0 && <=5) { 
        console.log("No molestar");
    } */
 

    /* Operador ternario: contiene 3 partes
     (condicion a evaluar) ? se ejecuta si es verdadero: se efectua si es falso
     */
     

     /* l/* et edad1 = 17 */

     /* (edad1 >= 18) 
     ? console.log("Mayor de edad") 
     : console.log("Menor de edad");

     let preguntaEdad = `Tengo ${edad1} años y soy ${(edad1 >= 18) ? ¨Mayor¨ : ¨Menor¨} de edad`;
 */ 
     /* let dia = 4
    

     if(dia === 0) {
         console.log("Domingo");

     }

     else if (dia === 1) {
         console.log("lunes")
     }

     else if (dia === 2 ) {
        console.log("Martes")
    }

    else if (dia === 3) {
        console.log("Miercoles")
    }

    else if (dia === 4) {
        console.log("Jueves")
    }

    else if (dia === 5) {
        console.log("Viernes")
    } */


    let dia = 12


     switch(dia) {
         case 0:
                console.log("Domingo");
             break;
        case 1: 
                console.log("Lunes");
             break;
        case 2:
                console.log("Martes");
            break;
        case 3:
                console.log("Miercore");
            break;
        case 3:
                console.log("Jueves");
            break;
        case 5:
                console.log("Viernes");
            break;
        case 6:
                console.log("Sabado");
            break;
        default:
                console.log("No hay, no existe (patrocinado por silka medic)");
            break;    
             
     }

     let cuponDescuento = "Bronc"
     let descuento;

     switch(cuponDescuento) {
         case "Bronce":
         console.log(5);
         break;

         case "Plata":
         console.log(10);
         break;

         case "Oro":
         console.log(15);
         break;

         case "Oro":
         console.log(15);
         break;

         default:
        console.log("Cupón no válido");

     }
