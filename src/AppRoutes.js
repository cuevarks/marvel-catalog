import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Page from "./containers/Page";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Details from "./components/Details";
import Stories from "./components/Stories";
import Bookmark from "./components/Bookmark";
import RelatedGallery from "./components/RelatedGallery";
import NotFound from "./components/NotFound";

export default function AppRouter() {
  return (
    <Router>
      <Page>
        <Switch>
          <Route exact path="/">
            <Redirect to="/characters" />
          </Route>
          <Route exact path="/characters">
            <Characters />
          </Route>
          <Route exact path="/comics">
            <Comics />
          </Route>
          <Route exact path="/stories">
            <Stories />
          </Route>
          <Route exact path="/bookmarks">
            <Bookmark />
          </Route>
          <Route exact path="/:type/details/:id">
            <Details />
          </Route>
          <Route exact path="/:type/:id/:attribute">
            <RelatedGallery />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Page>
    </Router>
  );
}
