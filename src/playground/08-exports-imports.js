// import { heroes } from './data/heroes';
import { heroes } from '../data/heroes'

const getHeroeById = ( id ) => {
    return heroes.find(h => h.id === id);
};

export {
    getHeroeById
}