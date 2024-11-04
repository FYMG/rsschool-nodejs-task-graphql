import { GraphQLInputObjectType } from 'graphql/type/index.js';
import { GraphQLString } from 'graphql';

const ChangePostType = new GraphQLInputObjectType({
  name: 'ChangePost',
  fields: {
    title: { type: GraphQLString },
    content: { type: GraphQLString },
  },
});

export default ChangePostType;
