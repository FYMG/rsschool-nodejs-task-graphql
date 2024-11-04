import MemberType from '../types/MemberType.js';
import GraphqlContext from '../../GraphqlContext.js';
import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import MemberTypeIdEnum from '../types/MemberTypeIdEnum.js';

export interface MemberTypeQueryArgs {
  id: string;
}

const memberTypeQuery: GraphQLFieldConfig<unknown, GraphqlContext, MemberTypeQueryArgs> =
  {
    type: MemberType,
    args: {
      id: { type: new GraphQLNonNull(MemberTypeIdEnum) },
    },
    resolve: async (source, { id }, context) => {
      return context.prisma.memberType.findUnique({ where: { id } });
    },
  };

export default memberTypeQuery;
