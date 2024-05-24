import {getHeroeByIDAsync} from "../../src/base-pruebas/09-promesas.js";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdSync debe retornar un heroe', (done) => {

        const id = 1;
        getHeroeByIDAsync(id)
            .then(hero => {
                expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'});
                done();
            })
    });

    test('getHeroeByIdSync debe obtener un error si id no existe', (done) => {

        const id = 100;
        getHeroeByIDAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch(error => {
                expect(error).toEqual('No se pudo encontrar el heroe')
                done();
            })
    });
});