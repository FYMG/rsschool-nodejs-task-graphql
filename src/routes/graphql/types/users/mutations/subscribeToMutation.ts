import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import GraphqlContext from '../../GraphqlContext.js';
import { GraphQLString } from 'graphql';
import { UUIDType } from '../../uuid.js';

export interface SubscribeToMutationArgs {
  userId: string;
  authorId: string;
}

const subscribeToMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  SubscribeToMutationArgs
> = {
  type: new GraphQLNonNull(GraphQLString),
  args: {
    userId: { type: new GraphQLNonNull(UUIDType) },
    authorId: { type: new GraphQLNonNull(UUIDType) },
  },
  resolve: async (source, { userId, authorId }, context) => {
    await context.prisma.subscribersOnAuthors.create({
      data: {
        subscriberId: userId,
        authorId: authorId,
      },
    });

    return 'Subscribed';
  },
};

export default subscribeToMutation;
