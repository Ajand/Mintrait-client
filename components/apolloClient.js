import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const GRAPHQL_SERVER = "https://mintrait.com/api";

const httpLink = createHttpLink({
  uri: GRAPHQL_SERVER,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("mintrait-auth");
  // return the headers to the context so httpLink can read them
  if (!token)
    return {
      headers: {
        ...headers,
      },
    };
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
