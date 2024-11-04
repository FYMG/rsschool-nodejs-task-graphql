import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql/type/index.js';
import MemberTypeIdEnum from '../../member-types/types/MemberTypeIdEnum.js';
import { UUIDType } from '../../uuid.js';

export interface ICreateProfile {
  isMale: boolean;
  yearOfBirth: number;
  userId: string;
  memberTypeId: string;
}

const CreateProfileType = new GraphQLInputObjectType({
  name: 'CreateProfile',
  fields: {
    isMale: { type: new GraphQLNonNull(GraphQLBoolean) },
    yearOfBirth: { type: new GraphQLNonNull(GraphQLInt) },
    userId: { type: new GraphQLNonNull(UUIDType) },
    memberTypeId: { type: new GraphQLNonNull(MemberTypeIdEnum) },
  },
});

export default CreateProfileType;
