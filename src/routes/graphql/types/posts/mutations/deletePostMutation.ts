import GraphqlContext from '../../GraphqlContext.js';
import { GraphQLFieldConfig, GraphQLID, GraphQLNonNull } from 'graphql/type/index.js';
import { GraphQLString } from 'graphql/index.js';

export interface DeletePostMutationArgs {
  id: string;
}

const deletePostMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  DeletePostMutationArgs
> = {
  type: new GraphQLNonNull(GraphQLString),
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: async (source, { id }, { prisma }) => {
    await prisma.post.delete({ where: { id } });
    return 'Post deleted';
  },
};

export default deletePostMutation;
