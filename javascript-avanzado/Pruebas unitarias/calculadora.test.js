
const { sumar, restar, multiplicar, dividir} = require('./calculadora');

describe('pruebas en el compnente calculadora', () => {

    test('prueba en la funcion sumar', () => {
        expect(sumar(3, 5)).toBe(8);

    });

    test('prueba en la funcion restar', () => {
        expect(restar(5, 3)).toBe(2);

    });

    test('prueba en la función multiplicar', () =>{
        expect(multiplicar(5, 3)).toBe(15);
    });

    test('prueba en la funcion dividir', () =>{
        expect(dividir(10, 2)).toBe(5);
    })

});







    





