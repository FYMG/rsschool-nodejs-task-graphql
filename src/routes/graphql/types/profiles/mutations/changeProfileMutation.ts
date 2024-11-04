import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import ProfileType from '../types/ProfileType.js';
import ChangeProfileType from '../types/ChangeProfileType.js';
import { UUIDType } from '../../uuid.js';
import GraphqlContext from '../../GraphqlContext.js';

export interface ChangeProfileMutationArgs {
  id: string;
  dto: {
    isMale: boolean;
    yearOfBirth: number;
    memberTypeId: string;
  };
}

const changeProfileMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  ChangeProfileMutationArgs
> = {
  type: new GraphQLNonNull(ProfileType),
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
    dto: { type: new GraphQLNonNull(ChangeProfileType) },
  },
  resolve: async (source, { id, dto }, { prisma }) => {
    return prisma.profile.update({
      where: { id: id },
      data: dto,
    });
  },
};

export default changeProfileMutation;
