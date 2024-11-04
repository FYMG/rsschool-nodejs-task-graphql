import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql/type/index.js';
import { UUIDType } from '../../uuid.js';
import GraphqlContext from '../../GraphqlContext.js';
import MemberType, { IMember } from '../../member-types/types/MemberType.js';
import { GraphQLString } from 'graphql';
import MemberTypeIdEnum from '../../member-types/types/MemberTypeIdEnum.js';

export interface IProfile {
  id: string;
  isMale: boolean;
  yearOfBirth: number;
  memberTypeId: string;
  userId: string;
  memberType: IMember;
}

const ProfileType = new GraphQLObjectType<IProfile, GraphqlContext>({
  name: 'Profile',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    userId: { type: new GraphQLNonNull(GraphQLString) },
    isMale: { type: new GraphQLNonNull(GraphQLBoolean) },
    yearOfBirth: { type: new GraphQLNonNull(GraphQLInt) },
    memberTypeId: { type: new GraphQLNonNull(MemberTypeIdEnum) },
    memberType: {
      type: MemberType,
      resolve: async (profile, _, { prisma }) => {
        const memberType = await prisma.memberType.findUnique({
          where: { id: profile.memberTypeId },
        });

        if (!memberType) return null;

        return memberType;
      },
    },
  }),
});

export default ProfileType;
