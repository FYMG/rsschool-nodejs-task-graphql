import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql/type/index.js';
import MemberTypeIdEnum from './MemberTypeIdEnum.js';

export interface IMember {
  id: string;
  discount: number;
  postsLimitPerMonth: number;
}

export const MemberType = new GraphQLObjectType({
  name: 'memberType',
  fields: {
    id: { type: new GraphQLNonNull(MemberTypeIdEnum) },
    discount: { type: new GraphQLNonNull(GraphQLFloat) },
    postsLimitPerMonth: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

export default MemberType;
