import {
  GraphQLBoolean,
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql/type/index.js';
import { UUIDType } from '../../uuid.js';
import GraphqlContext from '../../GraphqlContext.js';
import MemberType from '../../member-types/types/MemberType.js';
import { MemberTypeId } from '../../../../member-types/schemas.js';
import { GraphQLString } from 'graphql';

const ProfileType = new GraphQLObjectType({
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
      type: MemberType,
      resolve: async ({ memberTypeId }, _, { prisma }) => {
        return prisma.memberType.findUnique({
          where: { id: memberTypeId },
        });
      },
    } as GraphQLFieldConfig<{ memberTypeId: MemberTypeId }, GraphqlContext>,
  },
});

export default ProfileType;
