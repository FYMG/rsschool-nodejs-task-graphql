import { GraphQLObjectType } from 'graphql/type/index.js';
import memberTypeQuery from './member-types/queries/memberTypeQuery.js';
import memberTypesQuery from './member-types/queries/memberTypesQuery.js';
import postQuery from './posts/queries/postQuery.js';
import postsQuery from './posts/queries/postsQuery.js';
import profilesQuery from './profiles/queries/profilesQuery.js';
import profileQuery from './profiles/queries/profileQuery.js';
import usersQuery from './users/queries/usersQuery.js';
import userQuery from './users/queries/userQuery.js';

const QueryTypes = new GraphQLObjectType({
  name: 'Query',
  fields: {
    memberTypes: memberTypesQuery,
    memberType: memberTypeQuery,
    posts: postsQuery,
    post: postQuery,
    profiles: profilesQuery,
    profile: profileQuery,
    users: usersQuery,
    user: userQuery,
  },
});

export default QueryTypes;
