import {getActiveUser, getUser} from "../../src/base-pruebas/05-funciones.js";

describe('Funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(user).toEqual(testUser)
    });

    test('getActiveUser debe retornar un objeto', () => {

        const name = 'Johann';

        const user = getActiveUser(name);
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
    });
});