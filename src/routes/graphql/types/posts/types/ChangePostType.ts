import { GraphQLInputObjectType } from 'graphql/type/index.js';
import { GraphQLString } from 'graphql';

export interface IChangePost {
  title?: string;
  content?: string;
}

const ChangePostType = new GraphQLInputObjectType({
  name: 'ChangePost',
  fields: {
    title: { type: GraphQLString },
    content: { type: GraphQLString },
  },
});

export default ChangePostType;
