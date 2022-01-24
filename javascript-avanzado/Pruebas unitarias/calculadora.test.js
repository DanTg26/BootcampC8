
const { sumar } = require('./calculadora');

describe('pruebas en el compnente calculadora', () => {

    test('prueba en la funcion sumar', () => {
        expect(sumar(3, 5)).toBe(8);

    });

});

const { restar } = require('./calculadora');

describe('pruebas en el compnente calculadora', () => {

    test('prueba en la funcion restar', () => {
        expect(restar(5, 3)).toBe(2);

    });

});

