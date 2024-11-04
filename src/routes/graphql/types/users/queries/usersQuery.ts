import UserType from '../types/UserType.js';
import { GraphQLFieldConfig, GraphQLList } from 'graphql/type/index.js';
import GraphqlContext from '../../GraphqlContext.js';

const usersQuery: GraphQLFieldConfig<unknown, GraphqlContext> = {
  type: new GraphQLList(UserType),
  resolve: async (source, args, context) => {
    return context.prisma.user.findMany();
  },
};

export default usersQuery;
