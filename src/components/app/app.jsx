import React from "react";
import {ConnectedMain} from "../main/main";
import {Route, Router, Switch} from "react-router-dom";
import {ConnectedSignIn} from "../sign-in/sign-in";
import {ConnectedMyList} from "../my-list/my-list";
import {ConnectedFilm} from "../film/film";
import {ConnectedAddReview} from "../add-review/add-review";
import {NotFound} from "../404/404";
import {ConnectedPlayer} from "../player/player";
import {promoValidation} from "../../validation";
import {browserHistory} from "../../browser-history";
import {ConnectedPrivateRoute} from "../private-route/private-route";

const App = ({promo}) => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/">
        <ConnectedMain promo={promo}/>
      </Route>
      <ConnectedPrivateRoute exact path="/mylist" render={() => <ConnectedMyList/>}/>
      <Route exact path="/films/:id">
        <ConnectedFilm/>
      </Route>
      <ConnectedPrivateRoute exact path="/films/:id/review" render={() => <ConnectedAddReview/>}/>
      <Route exact path="/player/:id">
        <ConnectedPlayer/>
      </Route>
      <Route exact path="/login">
        <ConnectedSignIn/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  </Router>
);

App.propTypes = {
  ...promoValidation,
};

export {App};
