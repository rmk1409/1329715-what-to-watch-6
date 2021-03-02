import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";
import {reviewMocks} from "./mocks/reviews";
import {createStore} from "redux";
import {reducer} from "./store/reducer";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

const title = `The Grand Budapest Hotel`;
const genre = `Drama`;
const date = 2014;

const promo = {title, genre, date};

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App promo={promo} reviews={reviewMocks}/>
    </Provider>,
    document.querySelector(`#root`)
);
