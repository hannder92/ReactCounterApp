import {getHeroeByID, getHeroesByOwner} from "../../src/base-pruebas/08-import-export.js";

describe('probando 08-import-export', () => {
    test('getHeroeByID deberia devolver un objeto heroe', () => {

        const id = 2
        const hero = getHeroeByID(id);

        expect(hero).toEqual({id: 2, name: 'Spiderman', owner: 'Marvel'})

    });

    test('getHeroeByID deberia devolver un undefined si no existe el id', () => {

        const id = 100
        const hero = getHeroeByID(id);

        expect(hero).toBeFalsy()

    });

    //Tarea
    // Debe retornar un arreglo con los heroes de DC
    // Length 3
    // toEqual al arreglo filtrado
    test('getHeroeByOwner deberia devolver un array con los heroes de DC', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner);
        const expectedHeroes = [
            {id: 1, name: 'Batman', owner: 'DC'},
            {id: 3, name: 'Superman', owner: 'DC'},
            {id: 4, name: 'Flash', owner: 'DC'},
        ]
        expect(heroes).toEqual(expectedHeroes)
        expect(heroes).toHaveLength(3)
        expect(heroes).toEqual(heroes.filter(hero => hero.owner))
    });
    //debe retornar un arreglo con los heroes de Marvel
    // length 2
    test('getHeroeByOwner deberia devolver un array con los heroes de Marvel', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner);
        const expectedHeroes = [
            {id: 2, name: 'Spiderman', owner: 'Marvel'},
            {id: 5, name: 'Wolverine', owner: 'Marvel'},
        ]
        expect(heroes).toEqual(expectedHeroes)
        expect(heroes).toHaveLength(2)
        expect(heroes).toEqual(heroes.filter(hero => hero.owner))
    });
});