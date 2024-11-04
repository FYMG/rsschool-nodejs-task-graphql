import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import { UUIDType } from '../../uuid.js';
import UserType from '../types/UserType.js';
import GraphqlContext from '../../GraphqlContext.js';

export interface UserQueryArgs {
  id: string;
}

const userQuery: GraphQLFieldConfig<unknown, GraphqlContext, UserQueryArgs> = {
  type: UserType,
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: async (source, { id }, context) => {
    return context.prisma.user.findUnique({ where: { id } });
  },
};

export default userQuery;
