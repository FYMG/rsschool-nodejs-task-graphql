import { GraphQLFieldConfig } from 'graphql/type/index.js';
import GraphqlContext from '../../GraphqlContext.js';
import ListOfNotNull from '../../ListOfNotNull.js';
import PostType from '../types/PostType.js';

const memberTypesQuery: GraphQLFieldConfig<unknown, GraphqlContext> = {
  type: ListOfNotNull(PostType),
  resolve: async (source, args, context) => await context.prisma.post.findMany(),
};

export default memberTypesQuery;
