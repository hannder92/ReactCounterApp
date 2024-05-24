import {getImagen} from "../../src/base-pruebas/11-async-await.js";

describe('Probando 11-async-await ', () => {
    test('getImagen debe retornar url de la imagen', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    })
})