import GraphqlContext from '../../GraphqlContext.js';
import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import PostType from '../types/PostType.js';
import { UUIDType } from '../../uuid.js';
import ChangePostType, { IChangePost } from '../types/ChangePostType.js';

export type ChangePostMutationArgs = {
  id: string;
  dto: IChangePost;
};

const changePostMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  ChangePostMutationArgs
> = {
  type: PostType,
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
    dto: { type: ChangePostType },
  },
  resolve: async (source, { id, dto }, { prisma }) => {
    return prisma.post.update({
      where: { id },
      data: dto,
    });
  },
};

export default changePostMutation;
