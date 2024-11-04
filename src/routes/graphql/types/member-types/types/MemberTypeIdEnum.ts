import { GraphQLEnumType } from 'graphql/type/index.js';
import { MemberTypeId } from '../../../schemas.js';

const MemberTypeIdEnum = new GraphQLEnumType({
  name: 'MemberTypeId',
  values: Object.entries(MemberTypeId).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: { value },
    }),
    {},
  ),
});

export default MemberTypeIdEnum;
