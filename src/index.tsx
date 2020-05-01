import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";
import { RootStore } from "./models/RootStore";
import { StoreContext } from "./models/reactUtils";

// configure amplify
Amplify.configure(awsExports);

// configure store - slot in the amplify api
const rootStore = RootStore.create(undefined, {
  gqlHttpClient: {
    request: async (query: string, variables: any) => {
      return API.graphql(graphqlOperation(query, variables));
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={rootStore}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
