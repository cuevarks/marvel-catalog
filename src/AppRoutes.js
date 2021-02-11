import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./containers/Page";
import Characters from "./components/Characters";

export default function AppRouter() {
  return (
    <Router>
      <Page>
        <Switch>
          <Route path="/">
            <Characters />
          </Route>
          <Route path="/stories"></Route>
          <Route path="/comics"></Route>
          <Route path="/bookmarks"></Route>
        </Switch>
      </Page>
    </Router>
  );
}
