import { GraphQLFieldConfig } from 'graphql/type/index.js';
import GraphqlContext from '../../GraphqlContext.js';
import ListOfNotNull from '../../ListOfNotNull.js';
import PostType from '../../posts/types/PostType.js';

const profilesQuery: GraphQLFieldConfig<unknown, GraphqlContext> = {
  type: ListOfNotNull(PostType),
  resolve: async (source, args, context) => {
    return context.prisma.profile.findMany();
  },
};

export default profilesQuery;
