import React from "react";
import {Main} from "../main/main";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SignIn} from "../sign-in/sign-in";
import {MyList} from "../my-list/my-list";
import {Film} from "../film/film";
import {AddReview} from "../add-review/add-review";
import {NotFound} from "../404/404";
import {Player} from "../player/player";
import {filmMocksValidation, promoValidation, reviewMocksValidation} from "../../validation";

const App = (props) => {
  const {promo, filmMocks, reviewMocks} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main promo={promo} filmMocks={filmMocks}/>
      </Route>
      <Route exact path="/login">
        <SignIn/>
      </Route>
      <Route exact path="/mylist">
        <MyList/>
      </Route>
      <Route exact path="/films/:id">
        <Film/>
      </Route>
      <Route exact path="/films/:id/review">
        <AddReview reviewMocks={reviewMocks}/>
      </Route>
      <Route exact path="/player/:id">
        <Player/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  ...promoValidation,
  ...filmMocksValidation,
  ...reviewMocksValidation,
};

export {App};
