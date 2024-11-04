import {
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import ProfileType from '../../profiles/types/ProfileType.js';
import GraphqlContext from '../../GraphqlContext.js';
import PostType from '../../posts/types/PostType.js';
import { UUIDType } from '../../uuid.js';

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

const UserType = new GraphQLObjectType<IUser, GraphqlContext>({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    balance: { type: new GraphQLNonNull(GraphQLFloat) },
    profile: {
      type: ProfileType,
      resolve: async ({ id }, _, { prisma }) => {
        const profile = await prisma.profile.findUnique({
          where: { userId: id },
        });
        return profile || null;
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: async ({ id }, _, { prisma }) => {
        if (!id) return [];
        return prisma.post.findMany({
          where: { authorId: id },
        });
      },
    },
    userSubscribedTo: {
      type: new GraphQLList(UserType),
      resolve: async ({ id }, _, { prisma }) => {
        const subscriptions = await prisma.subscribersOnAuthors.findMany({
          where: { subscriberId: id },
          include: { author: true },
        });
        return subscriptions.map(({ author }) => author);
      },
    },
    subscribedToUser: {
      type: new GraphQLList(UserType),
      resolve: async ({ id }, _, { prisma }) => {
        const subscriptions = await prisma.subscribersOnAuthors.findMany({
          where: { authorId: id },
          include: { subscriber: true },
        });
        return subscriptions.map(({ subscriber }) => subscriber);
      },
    },
  }),
});

export default UserType;
