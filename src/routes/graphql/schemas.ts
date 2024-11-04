import { Type } from '@fastify/type-provider-typebox';
import QueryTypes from './types/QueryTypes.js';
import { GraphQLSchema } from 'graphql/type/index.js';
import MutationTypes from './types/MutationTypes.js';

export const gqlResponseSchema = Type.Partial(
  Type.Object({
    data: Type.Any(),
    errors: Type.Any(),
  }),
);

export const createGqlResponseSchema = {
  body: Type.Object(
    {
      query: Type.String(),
      variables: Type.Optional(Type.Record(Type.String(), Type.Any())),
    },
    {
      additionalProperties: false,
    },
  ),
};

export enum MemberTypeId {
  BASIC = 'BASIC',
  BUSINESS = 'BUSINESS',
}

export const rootSchema = new GraphQLSchema({
  query: QueryTypes,
  mutation: MutationTypes,
});
