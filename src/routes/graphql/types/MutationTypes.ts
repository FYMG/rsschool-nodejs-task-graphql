import { GraphQLObjectType } from 'graphql/type/index.js';
import createPostMutation from './posts/mutations/createPostMutation.js';
import changePostMutation from './posts/mutations/changePostMutation.js';
import deletePostMutation from './posts/mutations/deletePostMutation.js';
import createProfileMutation from './profiles/mutations/createProfileMutation.js';
import changeProfileMutation from './profiles/mutations/changeProfileMutation.js';
import deleteProfileMutation from './profiles/mutations/deleteProfileMutation.js';

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
    createProfile: createProfileMutation,
    changeProfile: changeProfileMutation,
    deleteProfile: deleteProfileMutation,
    // subscribeTo: undefined,
    // unsubscribeFrom: undefined,
  },
});

export default MutationTypes;
