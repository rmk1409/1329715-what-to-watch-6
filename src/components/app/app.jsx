import React from "react";
import {ConnectedMain} from "../main/main";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SignIn} from "../sign-in/sign-in";
import {ConnectedMyList} from "../my-list/my-list";
import {ConnectedFilm} from "../film/film";
import {ConnectedAddReview} from "../add-review/add-review";
import {NotFound} from "../404/404";
import {ConnectedPlayer} from "../player/player";
import {promoValidation, reviewsValidation} from "../../validation";

const App = ({promo, reviews}) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <ConnectedMain promo={promo}/>
      </Route>
      <Route exact path="/login">
        <SignIn/>
      </Route>
      <Route exact path="/mylist">
        <ConnectedMyList/>
      </Route>
      <Route exact path="/films/:id">
        <ConnectedFilm reviews={reviews}/>
      </Route>
      <Route exact path="/films/:id/review">
        <ConnectedAddReview/>
      </Route>
      <Route exact path="/player/:id">
        <ConnectedPlayer/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  ...promoValidation,
  ...reviewsValidation,
};

export {App};
