import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import { UUIDType } from '../../uuid.js';
import GraphqlContext from '../../GraphqlContext.js';
import ProfileType from '../types/ProfileType.js';

export interface ProfileQueryArgs {
  id: string;
}

const profileQuery: GraphQLFieldConfig<unknown, GraphqlContext, ProfileQueryArgs> = {
  type: ProfileType,
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: async (source, { id }, context) => {
    return context.prisma.profile.findUnique({ where: { id } });
  },
};

export default profileQuery;
