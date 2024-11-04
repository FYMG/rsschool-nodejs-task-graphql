import GraphqlContext from '../../GraphqlContext.js';
import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import PostType from '../types/PostType.js';
import { UUIDType } from '../../uuid.js';
import ChangePostType from '../types/ChangePostType.js';

export type ChangePostMutationArgs = {
  id: string;
  dto: {
    title: string;
    content: string;
  };
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
      where: { id: id },
      data: dto,
    });
  },
};

export default changePostMutation;
