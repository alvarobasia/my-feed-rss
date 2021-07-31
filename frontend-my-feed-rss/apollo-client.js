import { ApolloClient, concat, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';


const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

const authLink = setContext((_, { headers }) => {
  
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFuZSI6ImFsdmFybyIsIm5hbWUiOiJhbHZhcm8iLCJzdWIiOiIxOGMyNDI1My02MjlmLTRlMzUtYjQzOC0wOTQwYzFjZmYwYjciLCJpYXQiOjE2Mjc2NjIyMjcsImV4cCI6MTYyNzY2NDAyN30.PiQj5T5AU9sY-90BoXV4vgbDUNQJDzEksGVQ1r5b21U'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  fetchOptions: {
    mode: 'no-cors'
}
});

export default client;


