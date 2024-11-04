import { GraphQLObjectType } from 'graphql/type/index.js';
import createPostMutation from './posts/mutations/createPostMutation.js';
import changePostMutation from './posts/mutations/changePostMutation.js';
import deletePostMutation from './posts/mutations/deletePostMutation.js';
import createProfileMutation from './profiles/mutations/createProfileMutation.js';
import changeProfileMutation from './profiles/mutations/changeProfileMutation.js';
import deleteProfileMutation from './profiles/mutations/deleteProfileMutation.js';
import createUserMutation from './users/mutations/createUserMutation.js';
import changeUserMutation from './users/mutations/changeUserMutation.js';
import deleteUserMutation from './users/mutations/deleteUserMutation.js';
import subscribeToMutation from './users/mutations/subscribeToMutation.js';
import unsubscribeFromMutation from './users/mutations/unsubscribeFromMutation.js';

const MutationTypes = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: createUserMutation,
    createProfile: createProfileMutation,
    createPost: createPostMutation,
    changePost: changePostMutation,
    changeProfile: changeProfileMutation,
    changeUser: changeUserMutation,
    deleteUser: deleteUserMutation,
    deletePost: deletePostMutation,
    deleteProfile: deleteProfileMutation,
    subscribeTo: subscribeToMutation,
    unsubscribeFrom: unsubscribeFromMutation,
  },
});

export default MutationTypes;
