import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import GraphqlContext from '../../GraphqlContext.js';
import { GraphQLString } from 'graphql';
import { UUIDType } from '../../uuid.js';

export interface UnsubscribeFromMutationArgs {
  userId: string;
  authorId: string;
}

const unsubscribeFromMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  UnsubscribeFromMutationArgs
> = {
  type: new GraphQLNonNull(GraphQLString),
  args: {
    userId: { type: new GraphQLNonNull(UUIDType) },
    authorId: { type: new GraphQLNonNull(UUIDType) },
  },
  resolve: async (source, { userId, authorId }, context) => {
    await context.prisma.subscribersOnAuthors.delete({
      where: {
        subscriberId_authorId: {
          subscriberId: userId,
          authorId: authorId,
        },
      },
    });
    return 'Unsubscribed';
  },
};

export default unsubscribeFromMutation;
