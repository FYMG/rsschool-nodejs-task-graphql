import { GraphQLObjectType } from 'graphql/type/index.js';
import createPostMutation from './posts/mutations/createPostMutation.js';
import changePostMutation from './posts/mutations/changePostMutation.js';
import deletePostMutation from './posts/mutations/deletePostMutation.js';

const MutationTypes = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // TODO: Add mutations
    // createUser: undefined,
    // changeUser: undefined,
    // deleteUser: undefined,
    createPost: createPostMutation,
    changePost: changePostMutation,
    deletePost: deletePostMutation,
    // createProfile: undefined,
    // changeProfile: undefined,
    // deleteProfile: undefined,
    // subscribeTo: undefined,
    // unsubscribeFrom: undefined,
  },
});

export default MutationTypes;
