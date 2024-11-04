import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import GraphqlContext from '../../GraphqlContext.js';
import PostType from '../types/PostType.js';
import { UUIDType } from '../../uuid.js';

export interface PostQueryArgs {
  id: string;
}

const postQuery: GraphQLFieldConfig<unknown, GraphqlContext, PostQueryArgs> = {
  type: PostType,
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
  },
  resolve: async (source, { id }, context) => {
    return context.prisma.post.findUnique({ where: { id } });
  },
};

export default postQuery;
