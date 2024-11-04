import { GraphQLObjectType } from 'graphql/type/index.js';
import memberTypeQuery from './member-types/queries/memberTypeQuery.js';
import memberTypesQuery from './member-types/queries/memberTypesQuery.js';

const QueryTypes = new GraphQLObjectType({
  name: 'Query',
  fields: {
    // TODO: Add queries
    memberTypes: memberTypesQuery,
    memberType: memberTypeQuery,
    // posts: undefined,
    // post: undefined,
    // profiles: undefined,
    // profile: undefined,
    // users: undefined,
    // user: undefined,
  },
});

export default QueryTypes;
