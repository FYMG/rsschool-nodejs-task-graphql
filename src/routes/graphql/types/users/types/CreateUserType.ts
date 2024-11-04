import { GraphQLFloat, GraphQLInputObjectType } from 'graphql/type/index.js';
import { GraphQLString } from 'graphql';

export interface ICreateUser {
  name: string;
  balance: number;
}

const CreateUserType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: {
    name: {
      type: GraphQLString,
    },
    balance: {
      type: GraphQLFloat,
    },
  },
});

export default CreateUserType;
