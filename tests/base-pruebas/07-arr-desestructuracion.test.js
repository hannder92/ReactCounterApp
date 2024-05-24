import {retornaArreglo} from "../../src/base-pruebas/07-arr-desestructuracion.js";
import {string} from "prop-types";

describe('Pruebas en 07-arr-desestructuracion', () => {
    test('debe retornar un string y un numero', () => {
        // const retorno = retornaArreglo()
        // expect(retorno.length).toBe(2);
        // expect(retorno[0]).toEqual('ABC');
        // expect(retorno[1]).toEqual(123);

        const [letters, numbers] = retornaArreglo()
        expect(letters).toBe('ABC')
        expect(numbers).toBe(123)

        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')
        
        expect(letters).toEqual(expect.any(String))
    });
});