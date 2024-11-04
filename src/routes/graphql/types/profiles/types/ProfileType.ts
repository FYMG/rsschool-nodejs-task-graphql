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
  fields: {
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
    isMale: {
      type: GraphQLBoolean,
    },
    yearOfBirth: {
      type: GraphQLInt,
    },
    memberTypeId: {
      type: GraphQLString,
    },
    userId: {
      type: new GraphQLNonNull(UUIDType),
    },
    memberType: {
      type: new GraphQLNonNull(MemberType),
      resolve: async ({ memberTypeId }, args, { prisma }) => {
        return prisma.memberType.findMany({
          where: { id: memberTypeId },
        });
      },
    },
  },
});

export default ProfileType;
