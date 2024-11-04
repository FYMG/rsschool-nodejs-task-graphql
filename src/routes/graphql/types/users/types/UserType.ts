import {
  GraphQLFieldConfig,
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql/type/index.js';
import { UUIDType } from '../../uuid.js';
import { GraphQLString } from 'graphql';
import ProfileType from '../../profiles/types/ProfileType.js';
import GraphqlContext from '../../GraphqlContext.js';
import PostType from '../../posts/types/PostType.js';

export interface IUser {
  id: string;
  userId: string;
  name: string;
  balance: number;
  profile: string;
  posts: string;
  userSubscribedTo: string[];
  subscribedToUser: string[];
}

const UserType: GraphQLObjectType<IUser, GraphqlContext> = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: UUIDType,
    },
    name: {
      type: GraphQLString,
    },
    balance: {
      type: GraphQLFloat,
    },
    profile: {
      type: ProfileType,
      resolve: ({ id }, _, { prisma }) => {
        return prisma.profile.findUnique({ where: { userId: id } });
      },
    } as GraphQLFieldConfig<IUser, GraphqlContext>,
    posts: {
      type: new GraphQLList(PostType),
      resolve: async ({ id }, _, { prisma }) => {
        return prisma.post.findMany({
          where: { authorId: id },
        });
      },
    } as GraphQLFieldConfig<IUser, GraphqlContext>,
    userSubscribedTo: {
      type: new GraphQLList(UserType),
      resolve: async (src, _, { prisma }) => {
        const userSubs = src.userSubscribedTo || [];
        return prisma.user.findMany({ where: { id: { in: userSubs } } });
      },
    } as GraphQLFieldConfig<IUser, GraphqlContext>,
    subscribedToUser: {
      type: new GraphQLList(UserType),
      async resolve(src, _, { prisma }) {
        const subsToUser = src.subscribedToUser || [];
        return prisma.user.findMany({ where: { id: { in: subsToUser } } });
      },
    } as GraphQLFieldConfig<IUser, GraphqlContext>,
  }),
});

export default UserType;
