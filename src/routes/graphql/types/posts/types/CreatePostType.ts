import { GraphQLInputObjectType, GraphQLNonNull } from 'graphql/type/index.js';
import { GraphQLString } from 'graphql';
import { UUIDType } from '../../uuid.js';

export interface ICreatePost {
  title: string;
  content: string;
  authorId: string;
}

const createPostType = new GraphQLInputObjectType({
  name: 'CreatePost',
  fields: {
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    authorId: { type: new GraphQLNonNull(UUIDType) },
  },
});

export default createPostType;
