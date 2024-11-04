import { GraphQLFloat, GraphQLInputObjectType } from 'graphql/type/index.js';
import { GraphQLString } from 'graphql';

export interface IChangeUser {
  name?: string;
  balance?: number;
}

const changeUserType = new GraphQLInputObjectType({
  name: 'ChangeUserInput',
  fields: {
    name: {
      type: GraphQLString,
    },
    balance: {
      type: GraphQLFloat,
    },
  },
});

export default changeUserType;
