import React from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import Amplify, { Auth } from "aws-amplify";
import awsExports from "./aws-exports";
import { ApolloProvider } from "@apollo/react-hooks";
import { BlogListContainer } from "./Blog";
import { withAuthenticator } from "@aws-amplify/ui-react";
Amplify.configure(awsExports);

const App = () => {
  const clientRef = React.useRef<ApolloClient<any>>();
  const [clientInitialised, setClientInitialised] = React.useState(false);
  React.useEffect(() => {
    Auth.currentSession().then(s => {
      clientRef.current = new ApolloClient({
        uri: awsExports.aws_appsync_graphqlEndpoint,
        headers: {
          Authorization: s.getAccessToken().getJwtToken()
        }
      });
      setClientInitialised(true);
    });
  }, []);
  if(clientInitialised) {
    return (
      <ApolloProvider client={clientRef.current!}>
        <div className="App">
          <header className="App-header">
            Whatevs application - whatever
          </header>
          <main>
            <BlogListContainer />
          </main>
        </div>
      </ApolloProvider>
    );
  }
  return null;
}

export default withAuthenticator(App);
