import MemberTypeIdEnum from '../../member-types/types/MemberTypeIdEnum.js';
import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLInt,
} from 'graphql/type/index.js';

export interface IChangeProfile {
  isMale?: boolean;
  yearOfBirth?: number;
  memberTypeId?: string;
}

const ChangeProfileType = new GraphQLInputObjectType({
  name: 'ChangeProfile',
  fields: {
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLInt },
    memberTypeId: { type: MemberTypeIdEnum },
  },
});

export default ChangeProfileType;
