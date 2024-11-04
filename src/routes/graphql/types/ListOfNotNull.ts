import { GraphQLList, GraphQLNonNull, GraphQLNullableType } from 'graphql/type/index.js';

const ListOfNotNull = <T extends GraphQLNullableType>(type: T) =>
  new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(type)));

export default ListOfNotNull;
