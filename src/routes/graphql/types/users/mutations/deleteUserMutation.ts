import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import { GraphQLString } from 'graphql';
import { UUIDType } from '../../uuid.js';
import GraphqlContext from '../../GraphqlContext.js';

export interface DeleteUserMutationArgs {
  id: string;
}

const deleteUserMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  DeleteUserMutationArgs
> = {
  type: new GraphQLNonNull(GraphQLString),
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
  },
  resolve: async (parent, { id }, { prisma }) => {
    await prisma.user.delete({
      where: { id },
    });
    return 'User deleted successfully';
  },
};

export default deleteUserMutation;
