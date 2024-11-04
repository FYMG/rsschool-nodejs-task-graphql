import GraphqlContext from '../../GraphqlContext.js';
import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import CreateUserType, { ICreateUser } from '../types/CreateUserType.js';
import UserType from '../types/UserType.js';

export interface CreateUserMutationArgs {
  dto: ICreateUser;
}

const createUserMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  CreateUserMutationArgs
> = {
  type: new GraphQLNonNull(UserType),
  args: {
    dto: { type: new GraphQLNonNull(CreateUserType) },
  },
  resolve: async (parent, { dto }, { prisma }) => {
    return prisma.user.create({
      data: dto,
    });
  },
};

export default createUserMutation;
