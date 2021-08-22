import { ApolloClient, concat, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import nookies from 'nookies'
const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });
const authLink = setContext((ctx, { headers }) => {
  const token = nookies.get(undefined, 'my-feed-rss-token')
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token['my-feed-rss-token']}` : "",
    }
  }
});

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  fetchOptions: {
    mode: 'no-cors'
}
});

export default client;


