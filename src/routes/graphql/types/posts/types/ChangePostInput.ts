import { GraphQLInputObjectType } from 'graphql/type/index.js';
import { GraphQLString } from 'graphql';

export interface IChangePost {
  title?: string;
  content?: string;
}

const ChangePostInput = new GraphQLInputObjectType({
  name: 'ChangePostInput',
  fields: {
    title: { type: GraphQLString },
    content: { type: GraphQLString },
  },
});

export default ChangePostInput;
