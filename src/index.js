import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";
import {filmMocks} from "./mocks/films";
import {reviewMocks} from "./mocks/reviews";

const title = `The Grand Budapest Hotel`;
const genre = `Drama`;
const date = 2014;

const promo = {title, genre, date};

ReactDOM.render(<App promo={promo} films={filmMocks} reviews={reviewMocks}/>, document.querySelector(`#root`));
