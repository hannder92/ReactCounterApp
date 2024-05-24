import {getHeroeByID} from "./08-import-export";

export const getHeroeByIDAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeByID(id)
            if (p1 === undefined) {
                reject('No se pudo encontrar el heroe');
            }
            resolve(p1);
        }, 1000);
    });
}

getHeroeByIDAsync(10)
    .then(heroe => console.log('Heroe', heroe))
    .catch(console.warn)