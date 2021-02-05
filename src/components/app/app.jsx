import React from "react";
import {Main} from "../main/main";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {SignIn} from "../sign-in/sign-in";
import {MyList} from "../my-list/my-list";
import {Film} from "../film/film";
import {AddReview} from "../add-review/add-review";
import {NotFound} from "../404/404";
import {Player} from "../player/player";

const App = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main promo={props.promo}/>
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
        <AddReview/>
      </Route>
      <Route exact path="/player/:id">
        <Player/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  }).isRequired,
};

export {App};
