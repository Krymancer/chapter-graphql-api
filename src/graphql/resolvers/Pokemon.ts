import Pokemon from '../../models/pokemon';
import {Op} from 'sequelize';

type Args = {
  id: number;
  name: string;
  type: string;
}

type Context
 = {
  services : {
    pokemonService: {
      getAll: () => Promise<Pokemon[]>;
      getById: (id: number) => Promise<Pokemon>;
      getByName: (name: string) => Promise<Pokemon>;
      getByType: (type: string) => Promise<Pokemon[]>;
    }
  }
};

/* eslint-disable max-len */
const pokemonResolvers = {
  Query: {
    Pokemons: async (parent: undefined, args : Args, ctx: Context) => await ctx.services.pokemonService.getAll(),
    Pokemon: async (parent: undefined, args : Args, ctx: Context) => await ctx.services.pokemonService.getById(args.id),
    PokemonByName: async (parent: undefined, args : Args, ctx: Context) => await ctx.services.pokemonService.getByName(args.name),
    PokemonsByType: async (parent: undefined, args : Args, ctx: Context) => await ctx.services.pokemonService.getByType(args.type),
  },
};
/* eslint-enable */

export default pokemonResolvers;
