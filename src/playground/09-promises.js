import { getHeroeById } from './playground/08-exports-imports'

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(21);

        if (heroe !== undefined) {
            resolve(heroe);
        }
        reject('No se encontro un heroe con ese id');
    }, 2000);
});

promise.then((heroe) => {
    console.log(heroe)
})
.catch(err => console.log(err));