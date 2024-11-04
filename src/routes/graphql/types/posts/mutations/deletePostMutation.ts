import GraphqlContext from '../../GraphqlContext.js';
import PostType from '../types/PostType.js';
import { GraphQLFieldConfig, GraphQLID, GraphQLNonNull } from 'graphql/type/index.js';

export interface DeletePostMutationArgs {
  id: string;
}

const deletePostMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  DeletePostMutationArgs
> = {
  type: PostType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: async (source, { id }, context) => {
    return context.prisma.post.delete({ where: { id: id } });
  },
};

export default deletePostMutation;
