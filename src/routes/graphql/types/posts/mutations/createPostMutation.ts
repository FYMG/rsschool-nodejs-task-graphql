import PostType from '../types/PostType.js';
import CreatePostType, { ICreatePost } from '../types/CreatePostInput.js';
import GraphqlContext from '../../GraphqlContext.js';
import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';

export interface CreatePostMutationArgs {
  dto: ICreatePost;
}

const createPostMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  CreatePostMutationArgs
> = {
  type: new GraphQLNonNull(PostType),
  args: {
    dto: { type: new GraphQLNonNull(CreatePostType) },
  },
  resolve: async (source, { dto }, { prisma }) => {
    return prisma.post.create({
      data: dto,
    });
  },
};

export default createPostMutation;
