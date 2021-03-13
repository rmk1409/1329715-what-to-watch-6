import React from "react";
import {Main} from "../main/main";
import {Route, Switch} from "react-router-dom";
import {SignIn} from "../sign-in/sign-in";
import {MyList} from "../my-list/my-list";
import {Film} from "../film/film";
import {AddReview} from "../add-review/add-review";
import {NotFound} from "../404/404";
import {Player} from "../player/player";
import {PrivateRoute} from "../private-route/private-route";

const App = () => (
  <Switch>
    <Route exact path="/">
      <Main/>
    </Route>
    <PrivateRoute exact path="/mylist" render={() => <MyList/>}/>
    <Route exact path="/films/:id">
      <Film/>
    </Route>
    <PrivateRoute exact path="/films/:id/review" render={() => <AddReview/>}/>
    <Route exact path="/player/:id">
      <Player/>
    </Route>
    <Route exact path="/login">
      <SignIn/>
    </Route>
    <Route>
      <NotFound/>
    </Route>
  </Switch>
);

export {App};
