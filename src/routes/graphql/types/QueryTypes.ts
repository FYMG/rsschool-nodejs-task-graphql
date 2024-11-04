import { GraphQLObjectType } from 'graphql/type/index.js';
import memberTypeQuery from './member-types/queries/memberTypeQuery.js';
import memberTypesQuery from './member-types/queries/memberTypesQuery.js';
import postQuery from './posts/queries/postQuery.js';
import postsQuery from './posts/queries/postsQuery.js';

const QueryTypes = new GraphQLObjectType({
  name: 'Query',
  fields: {
    // TODO: Add queries
    memberTypes: memberTypesQuery,
    memberType: memberTypeQuery,
    posts: postsQuery,
    post: postQuery,
    // profiles: undefined,
    // profile: undefined,
    // users: undefined,
    // user: undefined,
  },
});

export default QueryTypes;
