import MemberTypeIdEnum from '../../member-types/types/MemberTypeIdEnum.js';
import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLInt,
} from 'graphql/type/index.js';

const ChangeProfileType = new GraphQLInputObjectType({
  name: 'ChangeProfile',
  fields: {
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLInt },
    memberTypeId: { type: MemberTypeIdEnum },
  },
});

export default ChangeProfileType;
