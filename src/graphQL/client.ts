import { ApolloClient, InMemoryCache } from "@apollo/client";
import { url } from "./config";

export const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});
