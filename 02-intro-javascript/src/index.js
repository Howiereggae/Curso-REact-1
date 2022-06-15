//Import, Export


//import { heroes } from './data/heroes'

import { heroes } from './data/heroes'

const getHeroById = (id) => heroes.find( ( heroe ) => heroe.id === id );

console.log(getHeroById(2));



const getHeroByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner

console.log( getHeroByOwner('Marvel') )



