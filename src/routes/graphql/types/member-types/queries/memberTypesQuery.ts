import { GraphQLFieldConfig, GraphQLList, GraphQLNonNull } from 'graphql/type/index.js';
import GraphqlContext from '../../GraphqlContext.js';
import MemberType from '../types/MemberType.js';

const memberTypesQuery: GraphQLFieldConfig<unknown, GraphqlContext> = {
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(MemberType))),
  resolve: async (source, args, { prisma }) => {
    return prisma.memberType.findMany();
  },
};

export default memberTypesQuery;
