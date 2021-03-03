import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";
import {reviewMocks} from "./mocks/reviews";
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./store/reducer";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import thunk from "redux-thunk";

const title = `The Grand Budapest Hotel`;
const genre = `Drama`;
const date = 2014;

const promo = {title, genre, date};

const api = createAPI();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

ReactDOM.render(
    <Provider store={store}>
      <App promo={promo} reviews={reviewMocks}/>
    </Provider>,
    document.querySelector(`#root`)
);
