import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import GraphqlContext from '../../GraphqlContext.js';
import ProfileType from '../types/ProfileType.js';
import { UUIDType } from '../../uuid.js';

export interface DeleteProfileMutationArgs {
  id: string;
}

const deleteProfileMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  DeleteProfileMutationArgs
> = {
  type: ProfileType,
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
  },
  resolve: async (source, { id }, context) => {
    return context.prisma.profile.delete({ where: { id: id } });
  },
};

export default deleteProfileMutation;
