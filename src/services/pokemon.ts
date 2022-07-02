import Pokemons from '../models/pokemon';
import {Op} from 'sequelize';

export default {
  getAll: async () => {
    return await Pokemons.findAll();
  },
  getById: async (id: number) => {
    return await Pokemons.findOne({where: {id: id}});
  },
  getByName: async (name: string) => {
    return await Pokemons.findOne({where: {name: name}});
  },
  getByType: async (type: string) => {
    return await Pokemons.findAll({
      where: {
        types: {[Op.like]: `%${type}%`},
      },
    });
  },
};
