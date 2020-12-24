import client from "./client";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const ME = gql`
  query me {
    user(login: "wakazoku") {
      name
      avatarUrl
    }
  }
`;

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
