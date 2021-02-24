import React from "react";
import {ConnectedMain} from "../main/main";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SignIn} from "../sign-in/sign-in";
import {MyList} from "../my-list/my-list";
import {Film} from "../film/film";
import {AddReview} from "../add-review/add-review";
import {NotFound} from "../404/404";
import {Player} from "../player/player";
import {filmsValidation, promoValidation, reviewsValidation} from "../../validation";

const App = ({promo, films, reviews}) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <ConnectedMain promo={promo} films={films}/>
      </Route>
      <Route exact path="/login">
        <SignIn/>
      </Route>
      <Route exact path="/mylist">
        <MyList films={films}/>
      </Route>
      <Route exact path="/films/:id">
        <Film films={films} reviews={reviews}/>
      </Route>
      <Route exact path="/films/:id/review">
        <AddReview films={films}/>
      </Route>
      <Route exact path="/player/:id">
        <Player films={films}/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  ...promoValidation,
  ...filmsValidation,
  ...reviewsValidation,
};

export {App};
