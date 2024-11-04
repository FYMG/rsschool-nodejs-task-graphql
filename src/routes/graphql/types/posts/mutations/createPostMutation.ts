import PostType from '../types/PostType.js';
import CreatePostType, { ICreatePost } from '../types/CreatePostType.js';
import GraphqlContext from '../../GraphqlContext.js';
import { GraphQLFieldConfig } from 'graphql/type/index.js';

export interface CreatePostMutationArgs {
  dto: ICreatePost;
}

const createPostMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  CreatePostMutationArgs
> = {
  type: PostType,
  args: {
    dto: { type: CreatePostType },
  },
  resolve: async (source, { dto }, { prisma }) => {
    return prisma.post.create({
      data: dto,
    });
  },
};

export default createPostMutation;
