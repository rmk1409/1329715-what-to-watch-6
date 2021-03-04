import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./store/reducer";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import thunk from "redux-thunk";
import {checkAuth} from "./store/api-actions";
import {redirect} from "./store/redirect";

const title = `The Grand Budapest Hotel`;
const genre = `Drama`;
const date = 2014;

const promo = {title, genre, date};

const api = createAPI();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)), applyMiddleware(redirect)));

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App promo={promo}/>
    </Provider>,
    document.querySelector(`#root`),
);
