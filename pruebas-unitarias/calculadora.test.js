/* const { test } = require('picomatch');
const { describe } = require('yargs'); */

const {sumar, restar, multiplicar, dividir} = require('./calculadora');
describe ('Pruebas en el componente calculadora', ()=>{
    test('Prueba la función suma',()=>{
        expect (sumar (3.5)).toBe(8);
    });

    test('Pruebas en la función restar',() =>{
        expect(restar(3,5)).toBe(2);
    });
    test('Pruebas en la función restar',() =>{
       expect(multiplicar(3,5)).toBe(15);
    });
    test('Pruebas en la función restar',() =>{
       expect(dividir(5,5)).toBe(1);
    });
});

