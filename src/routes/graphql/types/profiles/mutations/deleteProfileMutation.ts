import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import GraphqlContext from '../../GraphqlContext.js';
import { UUIDType } from '../../uuid.js';
import { GraphQLString } from 'graphql/index.js';

export interface DeleteProfileMutationArgs {
  id: string;
}

const deleteProfileMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  DeleteProfileMutationArgs
> = {
  type: new GraphQLNonNull(GraphQLString),
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
  },
  resolve: async (source, { id }, { prisma }) => {
    await prisma.profile.delete({
      where: { id: id },
    });
    return 'Profile deleted successfully';
  },
};

export default deleteProfileMutation;
