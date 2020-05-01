import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut, AmplifySignIn } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Fabric } from "@fluentui/react/lib/Fabric";
import { Stack, StackItem } from "@fluentui/react/lib/Stack";
import { initializeIcons } from "@fluentui/react/lib/Icons";

// configure fluent
initializeIcons();

const AppUser = () => {
  return (
    <>
      <AmplifySignOut>Sign Out</AmplifySignOut>
    </>
  );
};

interface IAppHeaderProps {
  hideUser?: boolean;
}

const AppHeader = (props: IAppHeaderProps) => {
  const { hideUser } = props;
  return (
    <Stack className="App-header" horizontal verticalAlign="center" horizontalAlign="space-between" tokens={{ padding: 8 }}>
      <StackItem>
        <h3>Whatevs</h3>
      </StackItem>
      {!hideUser && (
        <StackItem>
          <AppUser />
        </StackItem>
      )}
    </Stack>
  );
};

const AppMain = () => {
  return (
    <main>
      <Route path="/">
        <Home />
      </Route>
    </main>
  );
};

const AppLogin = () => {
  return (
    <div slot="sign-in">
      <Fabric>
        <div className="App">
          <AppHeader hideUser />
          <div style={{ marginTop: 12 }}>
            <AmplifySignIn />
          </div>
        </div>
      </Fabric>
    </div>
  );
};

const App = () => {
  return (
    <>
      <AppLogin />
      <Fabric>
        
          <Router>
            <div className="App">
              <AppHeader />
              <AppMain />
            </div>
          </Router>
        
      </Fabric>
    </>
  );
}

export default withAuthenticator(App);
