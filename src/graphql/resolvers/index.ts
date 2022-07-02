import {mergeResolvers} from '@graphql-tools/merge';

import pokemonResolvers from './Pokemon';

const resolvers = [pokemonResolvers];

export default mergeResolvers(resolvers);
