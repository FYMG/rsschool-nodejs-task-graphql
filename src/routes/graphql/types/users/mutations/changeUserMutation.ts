import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import UserType from '../types/UserType.js';
import { UUIDType } from '../../uuid.js';
import ChangeUserType, { IChangeUser } from '../types/ChangeUserType.js';
import GraphqlContext from '../../GraphqlContext.js';

export interface ChangeUserMutationArgs {
  id: string;
  dto: IChangeUser;
}

const changeUserMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  ChangeUserMutationArgs
> = {
  type: new GraphQLNonNull(UserType),
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
    dto: { type: new GraphQLNonNull(ChangeUserType) },
  },
  resolve: async (parent, { id, dto }, { prisma }) => {
    return prisma.user.update({
      where: { id },
      data: dto,
    });
  },
};

export default changeUserMutation;
