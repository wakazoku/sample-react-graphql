import client from "./client";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import { ME } from "./graphql.js";

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Hello GraphQL</h1>
      <Query query={ME}>
        {({ loading, error, data }) => {
          if (loading) return "loading...";
          if (error) return `Error! ${error.message}`;
          return <p>{data.user.name}</p>;
        }}
      </Query>
    </ApolloProvider>
  );
}

export default App;
