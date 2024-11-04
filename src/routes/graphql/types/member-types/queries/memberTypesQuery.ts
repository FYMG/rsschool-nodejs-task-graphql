import { GraphQLFieldConfig } from 'graphql/type/index.js';
import GraphqlContext from '../../GraphqlContext.js';
import ListOfNotNull from '../../ListOfNotNull.js';
import MemberType from '../types/MemberType.js';

const memberTypesQuery: GraphQLFieldConfig<unknown, GraphqlContext> = {
  type: ListOfNotNull(MemberType),
  resolve: async (root, args, context) => await context.prisma.memberType.findMany(),
};

export default memberTypesQuery;
