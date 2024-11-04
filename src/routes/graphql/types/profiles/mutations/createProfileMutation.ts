import CreateProfileType from '../types/CreateProfileType.js';
import ProfileType from '../types/ProfileType.js';
import GraphqlContext from '../../GraphqlContext.js';
import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';

export interface CreateProfileMutationArgs {
  dto: {
    isMale: boolean;
    yearOfBirth: number;
    userId: string;
    memberTypeId: string;
  };
}

const createProfileMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  CreateProfileMutationArgs
> = {
  type: ProfileType,
  args: {
    dto: { type: new GraphQLNonNull(CreateProfileType) },
  },
  resolve: async (source, { dto }, { prisma }) => {
    return prisma.profile.create({
      data: dto,
    });
  },
};

export default createProfileMutation;
