import GraphqlContext from '../../GraphqlContext.js';
import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql/type/index.js';
import PostType from '../types/PostType.js';
import { UUIDType } from '../../uuid.js';
import ChangePostInput, { IChangePost } from '../types/ChangePostInput.js';

export type ChangePostMutationArgs = {
  id: string;
  dto: IChangePost;
};

const changePostMutation: GraphQLFieldConfig<
  unknown,
  GraphqlContext,
  ChangePostMutationArgs
> = {
  type: new GraphQLNonNull(PostType),
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
    dto: { type: new GraphQLNonNull(ChangePostInput) },
  },
  resolve: async (source, { id, dto }, { prisma }) => {
    return await prisma.post.update({
      where: { id },
      data: dto,
    });
  },
};

export default changePostMutation;
