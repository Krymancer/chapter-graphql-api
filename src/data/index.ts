import {Pokemons} from './pokemons';

import Pokemon from '../models/pokemon';

import sequelize from '../models';

async function populate() {
  await sequelize.sync({force: true});
  await Promise.all(Pokemons.map((pokemon) => Pokemon.create({
    name: pokemon.name,
    species: pokemon.species,
    image: pokemon.image,
    types: pokemon.types.join(', '),
  })));
}

export default populate;
