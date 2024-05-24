import {retornaPersona} from "../../src/base-pruebas/06-desestructuracion.js";

describe('Test Desestructuracion', () => {
    test('Desestrucciones', () => {
        const clave = 'Capitan';
        const edad = 45;

        const person = {
            clave: 'Capitan',
            nombre: 'Tony',
            edad: 45,
        }

        const testPerson = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const result = retornaPersona(person);
        expect(result).toStrictEqual(testPerson);
    });
});